from django.db import models


class SalesPerson(models.Model):
    name = models.CharField(max_length=50)
    employee_id = models.PositiveSmallIntegerField(unique=True)


class PotentialCustomer(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=150)
    phone_number = models.CharField(max_length=11)


class AutomobileVO(models.Model):
    vin = models.CharField(max_length=17, unique=True)


class SalesRecord(models.Model):
    automobile = models.ForeignKey(AutomobileVO, related_name="vehicle", on_delete=models.PROTECT)
    sales_person = models.ForeignKey(SalesPerson, related_name="sales_person", on_delete=models.PROTECT)
    customer = models.ForeignKey(PotentialCustomer, related_name="customer", on_delete=models.PROTECT)
    price = models.PositiveSmallIntegerField()
