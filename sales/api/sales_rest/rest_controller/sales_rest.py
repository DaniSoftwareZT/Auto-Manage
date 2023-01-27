from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from sales_rest.models import SalesRecord, SalesPerson, PotentialCustomer, AutomobileVO
from sales_rest.encoders import SalesRecordEncoder
import json


@require_http_methods(["GET", "POST"])
def api_sales_records(request, employee_id=None):
    if request.method == "GET":
        if employee_id is None:
            sales_records = SalesRecord.objects.all()
        else:
            sales_records = SalesRecord.objects.filter(sales_person=employee_id)
            if not sales_records:
                return JsonResponse(
                    {"message": "This employee has no sales records"},
                    status=404,
                )
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            sales_person = SalesPerson.objects.get(employee_id=content["sales_person"])
            content["sales_person"] = sales_person
            customer = PotentialCustomer.objects.get(id=content["customer"])
            content["customer"] = customer
            automobile = AutomobileVO.objects.get(vin=content["automobile"])
            content["automobile"] = automobile
        except SalesPerson.DoesNotExist:
            return JsonResponse(
                {"message": "Employee does not exist"},
                status=404,
            )
        except PotentialCustomer.DoesNotExist:
            return JsonResponse(
                {"message": "Customer does not exist"},
                status=404,
            )
        except AutomobileVO.DoesNotExist:
            return JsonResponse(
                {"message": "Automobile does not exist"},
                status=404,
            )
        sales_record = SalesRecord.objects.create(**content)
        return JsonResponse(
            sales_record,
            encoder=SalesRecordEncoder,
            safe=False,
        )

@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_record(request, pk):
    if request.method == "GET":
        try:
            sales_record = SalesRecord.objects.get(id=pk)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            sales_record = SalesRecord.objects.get(id=pk)
            sales_record.delete()
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            content = json.loads(request.body)
            sales_record = SalesRecord.objects.get(id=pk)
            sales_record.sales_person = content["sales_person"]
            sales_record.potential_customer = content["potential_customer"]
            sales_record.save()
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False
            )
        except SalesRecord.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not update the sales record"}
            )
            response.status_code = 404
            return response
