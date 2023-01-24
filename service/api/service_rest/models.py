from django.db import models


class Technician(models.Model):
    technician_name = models.CharField(max_length=150)
    employee_number = models.PositiveSmallIntegerField(unique=True)

class Service_Appointment(models.Model):
    VIN_vehicle = models.PositiveSmallIntegerField()
    person_name = models.CharField(max_length=150)
    date_time = models.DateTimeField(max_length=150)
    technician_name = models.CharField(max_length=150)
    reason = models.CharField(max_length=150)
