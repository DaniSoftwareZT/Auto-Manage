from common.json import ModelEncoder
from .models import SalesPerson, PotentialCustomer, AutomobileVO, SalesRecord


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = ["name", "employee_id"]


class PotentialCustomerEncoder(ModelEncoder):
    model = PotentialCustomer
    properties = ["id", "name", "address", "phone_number"]


class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin"]


class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = ["id", "sales_person", "customer", "automobile", "price"]

    encoders = {
        "sales_person": SalesPersonEncoder(),
        "customer": PotentialCustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }
