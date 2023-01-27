from django.urls import path
from .api_views import api_list_appointments, api_show_appointment, api_cancel_appointment, api_complete_appointment, api_list_technician

urlpatterns = [
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/", api_list_appointments, name="api_create_appointment"),
    path("appointments/<int:pk>/", api_show_appointment, name="api_show_appointment"),
    path("appointments/<int:pk>/cancel/", api_cancel_appointment, name="api_cancel_appointment"),
    path("appointments/<int:pk>/complete/", api_complete_appointment, name="api_complete_appointment"),
    path("technicians/", api_list_technician, name="api_list_technician"),
    path("technicians/", api_list_technician, name = "api_create_technician"),
    path("technician/<int:pk>/", api_list_technician, name="api_delete_technician"),
]
