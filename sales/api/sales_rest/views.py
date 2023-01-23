from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SalesRecord
from .encoders import (
    SalesPersonEncoder,
    PotentialCustomerEncoder,
    AutomobileVOEncoder,
    SalesRecordEncoder,
)


@require_http_methods(["GET", "POST"])
def api_sales_persons(request):
    if request.method == "GET":
        sales_persons = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_persons": sales_persons},
            encoder=SalesPersonEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except Exception:
            response = JsonResponse(
                {"message": "Could not create the sales person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_sales_person(request, pk):
    if request.method == "GET":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            sales_person = SalesPerson.objects.get(id=pk)
            sales_person.delete()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.get(id=pk)
            sales_person.name = content["name"]
            sales_person.save()
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False
            )
        except SalesPerson.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not update the sales person"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_potential_customers(request):
    if request.method == "GET":
        potential_customers = PotentialCustomer.objects.all()
        return JsonResponse(
            {"potential_customers": potential_customers},
            encoder=PotentialCustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            potential_customer = PotentialCustomer.objects.create(**content)
            return JsonResponse(
                potential_customer,
                encoder=PotentialCustomerEncoder,
                safe=False,
            )
        except Exception:
            response = JsonResponse(
                {"message": "Could not create the potential customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["DELETE", "GET", "PUT"])
def api_potential_customer(request, pk):
    if request.method == "GET":
        try:
            potential_customer = PotentialCustomer.objects.get(id=pk)
            return JsonResponse(
                potential_customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    elif request.method == "DELETE":
        try:
            potential_customer = PotentialCustomer.objects.get(id=pk)
            potential_customer.delete()
            return JsonResponse(
                potential_customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response
    else:
        try:
            content = json.loads(request.body)
            potential_customer = PotentialCustomer.objects.get(id=pk)
            potential_customer.name = content["name"]
            potential_customer.save()
            return JsonResponse(
                potential_customer,
                encoder=PotentialCustomerEncoder,
                safe=False
            )
        except PotentialCustomer.DoesNotExist:
            response = JsonResponse(
                {"message": "Could not update the potential customer"}
            )
            response.status_code = 400
            return response


@require_http_methods(["GET", "POST"])
def api_sales_records(request):
    if request.method == "GET":
        sales_records = SalesRecord.objects.all()
        return JsonResponse(
            {"sales_records": sales_records},
            encoder=SalesRecordEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            sales_record = SalesRecord.objects.create(**content)
            return JsonResponse(
                sales_record,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except Exception:
            response = JsonResponse(
                {"message": "Could not create the sales record"}
            )
            response.status_code = 400
            return response


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
            response.status_code = 400
            return response


@require_http_methods(["GET"])
def api_automobileVO(request):
    if request.method == "GET":
        automobileVO = AutomobileVO.objects.all()
        return JsonResponse(
            {"automobileVO": automobileVO},
            encoder=AutomobileVOEncoder,
        )
