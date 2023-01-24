from django.views.decorators.http import require_http_methods
from .models import Technician, Service_Appointment
from django.http import JsonResponse
from .encoders import ServiceListEncoder, ServiceHistoryEncoder
import json

@require_http_methods(["GET", "DELETE"])
def service_list(request):
    if request.method == "GET":
        service_appointment = Service_Appointment.objects.all()
        return JsonResponse(
            {"service_appointment": service_appointment},
            encoder = ServiceListEncoder,

        )
    elif request.method == "DELETE":
        count, _ = service_appointment.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0},
            status=200,
        )

@require_http_methods(["GET", "POST"])
def service_history(request, id):
    if request.method == "GET":
        service_history = Service_Appointment.objects.get(id=id)
        print(service_history)
        return JsonResponse(
            service_history,
            encoder = ServiceHistoryEncoder,
            safe=False
        )
