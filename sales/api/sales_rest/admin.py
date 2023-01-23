from django.contrib import admin
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SalesRecord


admin.site.register(SalesPerson)
admin.site.register(PotentialCustomer)
admin.site.register(AutomobileVO)
admin.site.register(SalesRecord)

