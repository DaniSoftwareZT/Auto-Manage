from django.urls import path
from .views import (
    api_sales_person,
    api_sales_persons,
    api_sales_record,
    api_sales_records,
    api_potential_customer,
    api_potential_customers,
    api_automobileVOs,
)

urlpatterns = [
    path("sales/", api_sales_records, name="api_sales_records"),
    path("sales/<int:pk>/", api_sales_record, name="api_sales_record"),
    path("customers/", api_potential_customers, name="api_customers"),
    path("customers/<int:pk>/", api_potential_customer, name="api_customer"),
    path("employees/", api_sales_persons, name="api_employees"),
    path("employees/<int:pk>/", api_sales_person, name="api_employee"),
    path("automobiles/", api_automobileVOs, name="api_automobiles"),
]
