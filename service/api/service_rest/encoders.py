from .models import Appointment, AutomobileVO, Technician
from common.json import ModelEncoder


class AppointmentDetailEncoder(ModelEncoder):
    model = Appointment
    properties = ["vin", "customer_name", "date", "time", "id", "reason", "status", "technician"]

class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = ["vin", "customer_name", "date", "time", "id", "reason", "status", "technician"]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties=["vin", "import_href"]

class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties =["name", "employee_number", "id"]
