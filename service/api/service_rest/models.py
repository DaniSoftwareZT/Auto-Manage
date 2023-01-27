from django.db import models
from django.urls import reverse

class Technician(models.Model):
    name = models.CharField(max_length=150)
    employee_id = models.PositiveSmallIntegerField(unique=True)

    def get_api_url(self):
        return reverse("api_list_technician", kwargs={"pk": self.pk})

class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=150)
    date = models.DateTimeField(max_length=150)
    time = models.CharField(max_length = 150)
    status = models.CharField(max_length = 150, default = "INCOMPLETE")
    reason = models.CharField(max_length=150)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )

    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})


class AutomobileVO(models.Model):
    import_href = models.CharField(max_length= 150, unique = True)
    vin = models.CharField(max_length = 17)

    def get_api_url(self):
        return reverse("api_automobile", kwargs={"vin": self.vin})
