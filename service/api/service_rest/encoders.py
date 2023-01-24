from .models import Service_Appointment
from common.json import ModelEncoder


class ServiceHistoryEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["customer_name", "date_time", "employee_id", "reason"]

class ServiceAppointmentEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["vin_vehicle", "customer_name", "date_time", "employee_id", "reason"]
