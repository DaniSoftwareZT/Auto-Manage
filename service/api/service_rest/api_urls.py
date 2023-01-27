from django.urls import path
from .api_views import (api_list_appointments, api_show_appointment, 
                        api_list_technician)

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("technicians/", api_list_technician, name="api_list_technician"),
]
