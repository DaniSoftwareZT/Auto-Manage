from django.db import models


class Technician(models.Model):
    name = models.CharField(max_length=150)
    employee_id = models.PositiveSmallIntegerField(unique=True)

class Service_Appointment(models.Model):
    vin_vehicle = models.PositiveSmallIntegerField()
    person_name = models.CharField(max_length=150)
    date_time = models.DateTimeField(max_length=150)
    employee_id = models.ForeignKey(Technician, related_name = "employee_id", on_delete=models.PROTECT)
    reason = models.CharField(max_length=150)
