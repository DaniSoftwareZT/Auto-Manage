from .models import Service_Appointment, AutomobileVO
from common.json import ModelEncoder


class ServiceHistoryEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["customer_name", "date_time", "employee_id", "reason"]

class ServiceAppointmentEncoder(ModelEncoder):
    model = Service_Appointment
    properties = ["vin_vehicle", "customer_name", "date_time", "employee_id", "reason"]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties=["vin", "import_href"]
