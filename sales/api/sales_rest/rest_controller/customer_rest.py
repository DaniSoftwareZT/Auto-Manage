from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from sales_rest.models import PotentialCustomer
from sales_rest.encoders import PotentialCustomerEncoder
import json


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
