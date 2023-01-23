from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from sales_rest.models import SalesRecord
from sales_rest.encoders import SalesRecordEncoder
import json


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
