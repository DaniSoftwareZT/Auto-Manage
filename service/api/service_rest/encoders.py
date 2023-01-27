from .models import Appointment, Technician
from common.json import ModelEncoder


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_id"]


class TechnicianOEncoder(ModelEncoder):
    model = Technician
    properties = ["name"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["vin", "customer_name", "date", "reason", "finished"]

    encoders = {
        "technician": TechnicianOEncoder()
    }

