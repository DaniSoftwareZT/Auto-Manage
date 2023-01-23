from common.json import ModelEncoder
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SalesRecord


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_id"]


class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = ["name", "address", "phone_number"]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["automobile", "sales_person", "customer", "price"]

    encoders = {
        "automobile": AutomobileVOEncoder,
        "sales_person": SalesPersonEncoder,
        "customer": PotentialCustomerEncoder,
    }