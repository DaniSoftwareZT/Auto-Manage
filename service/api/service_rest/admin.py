from django.contrib import admin
from .models import Service_Appointment, Technician


@admin.register(Service_Appointment)
class Service_AppointmentAdmin(admin.ModelAdmin):
    pass

@admin.register(Technician)
class TechnicianAdmin(admin.ModelAdmin):
    pass
