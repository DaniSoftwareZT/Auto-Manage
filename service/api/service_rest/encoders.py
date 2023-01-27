from .models import Appointment, Technician
from common.json import ModelEncoder


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = ["name", "employee_id"]


class AppointmentEncoder(ModelEncoder):
    model = Appointment
    properties = ["vin", "customer_name", "date", "time", "reason", "finished", "technician"]

    encoders = {
        "technician": TechnicianEncoder()
    }

