from django.views.decorators.http import require_http_methods
from .models import Technician, Service_Appointment
from django.http import JsonResponse
from .encoders import ServiceHistoryEncoder, ServiceAppointmentEncoder
import json

@require_http_methods(["GET", "DELETE", "POST"])
def service_list(request, id):
    if request.method == "GET":
        service_appointments = Service_Appointment.objects.all()
        return JsonResponse(
            {"service_appointments": service_appointments},
            encoder = ServiceAppointmentEncoder,

        )
    elif request.method == "DELETE":
        count, _ = service_appointment.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0},
            status=200,
        )

    elif request.method == "POST":
        content = json.loads(request.body)
        try:
            Technician.objects.get(employee_id=content["employee_id"])
        except Technician.DoesNotExist:
            return JsonResponse(
                {"error": "Technician does not exist"},
                status=400,
            )
        service_appointment = Service_Appointment.objects.create(**content)
        return JsonResponse(
            service_appointment,
            encoder=ServiceAppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET"])
def service_history(request, id):
    if request.method == "GET":
        service_history = Service_Appointment.objects.get(id=id)
        print(service_history)
        return JsonResponse(
            service_history,
            encoder = ServiceHistoryEncoder,
            safe=False
        )
