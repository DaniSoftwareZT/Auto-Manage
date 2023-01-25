from django.urls import path
from .api_views import service_list, service_history

urlpatterns = [
    path("service/", service_list, name="service_list"),
    path("service/<int:id>", service_list, name="service_list"),
    path("service/", service_history, name="service_history"),
]
