from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
from django.db import IntegrityError
import json
from .models import Technician, Appointment
from .encoders import AppointmentEncoder, TechnicianEncoder


@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentEncoder
        )
    else:
        data = json.loads(request.body)

        try:
            technician = Technician.objects.get(employee_id=data["technician"])
            data["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Technician not found"},
                status=404,
            )
        appointment = Appointment.objects.create(**data)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST"])
def api_list_technician(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            data = json.loads(request.body)
            technician = Technician.objects.create(**data)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False
            )
        except IntegrityError:
            return JsonResponse(
                {"message": "Employee number taken"},
                status=400,
            )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentEncoder,
            safe=False
        )
    elif request.method == "PUT":
        data = json.loads(request.body)
        try:
            appointment = Appointment.objects.filter(id=pk).update(**data)
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Appointment not found"},
                status=404,
            )
        return JsonResponse(
            {"message": "Appointment completed"},
            encoder=AppointmentEncoder,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
