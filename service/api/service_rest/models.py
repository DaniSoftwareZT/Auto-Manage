from django.db import models
from django.urls import reverse

class Technician(models.Model):
    name = models.CharField(max_length=150)
    employee_id = models.PositiveSmallIntegerField(unique=True)


class Service_Appointment(models.Model):
    vin_vehicle = models.PositiveSmallIntegerField()
    person_name = models.CharField(max_length=150)
    date_time = models.DateTimeField(max_length=150)
    employee_id = models.ForeignKey(Technician, related_name = "employee_id", on_delete=models.PROTECT)
    reason = models.CharField(max_length=150)


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length= 150, unique = True)
    vin = models.CharField(max_length = 17)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})
