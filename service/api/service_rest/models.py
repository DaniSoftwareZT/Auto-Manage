from django.db import models

class Technician(models.Model):
    name = models.CharField(max_length=150)
    employee_id = models.PositiveSmallIntegerField(unique=True)


class Appointment(models.Model):
    vin = models.CharField(max_length=17)
    customer_name = models.CharField(max_length=150)
    date = models.DateTimeField(max_length=150)
    time = models.CharField(max_length=150)
    reason = models.CharField(max_length=150)

    vip = models.BooleanField(default=False)
    finished = models.BooleanField(default=False)

    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.CASCADE
    )


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17)

