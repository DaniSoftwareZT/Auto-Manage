from .models import Service_Appointment
from common.json import ModelEncoder

class ServiceListEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["VIN_vehicle", "customer_name", "date_time", "technician_name", "reason"]

class ServiceHistoryEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["customer_name", "date_time", "technician_name", "reason"]
