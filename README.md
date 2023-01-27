# CarCar

Team:

- Daniel Zambrana - Service
- Ryan Paschen - Sales

## Design

<img src="https://i.imgur.com/hoawRdc.png"/>

## Service microservice

Explain your models and integration with the inventory
microservice, here ->

- Created three different models(Technician, Appointment and AutomobileVO):
1.Technician-- Holds the technicians name and his ID in case there is a repeated name.
2.Appointment--Holds every detail of the appointment: VIN, Name, Date, Time, Status and Reason, also calling on the Technician model.
3.AutomobileVO --Model to cache automobile VIN information from inventory microservice.

| HTTP Method | Path Description       |
| ----------- | ---------------------- | ------------------------------- |
| GET         | /api/appointments      | Get a list of appointments      |
| GET         | /api/appointments/{id} | Show a single appointment by ID |
| POST        | /api/appointment       | Create a new appointment        |
| PUT         | /api/appointment{id}   | Complete appointment by it's ID |
| PUT         | /api/appointment{id}   | Cancel appointment by it's ID   |

  HTTP Method         Path         Description
| ----------- | --------------- |--------------|
| GET    | /api/appointments     | Get a list of appointments
| GET    | /api/appointments/{id}| Show a single appointment by ID
| POST   | /api/appointment      | Create a new appointment
| PUT    | /api/appointment{id}  | Complete appointment by it's ID
| PUT    | /api/appointment{id}  | Cancel appointment by it's ID

| HTTP Method    Path               Description
| -------| ----------------|----------------------- |
| GET    | /api/technician     | Get a list of all technicians |
| POST   | /api/technician     | Add a new technician to database
| DELETE | /api/technician/{id}| Delete technician by it's ID

## Sales microservice

- Created multiple models to hold information for **Sales Person**, **Potential Customer** and **Sales Record** entities.

- Also created a model to cache automobile VIN information (_data collected from **inventory** microservice_)

| HTTP Method | Path            | Description                        |
| ----------- | --------------- | ---------------------------------- |
| GET         | /api/sales      | Get a list of all sales records    |
| GET         | /api/sales/{id} | Get a single sale by ID            |
| POST        | /api/sales      | Add a new sales record to database |
| PUT         | /api/sales{id}  | Update an existing sales record    |
| DELETE      | /api/sales/{id} | Delete a sales record by it's ID   |

| HTTP Method | Path                | Description                            |
| ----------- | ------------------- | -------------------------------------- |
| GET         | /api/customers      | Get a list of all registered customers |
| GET         | /api/customers/{id} | Get a customer by ID                   |
| POST        | /api/customers      | Add a new customer to database         |
| PUT         | /api/customers{id}  | Update an customer                     |
| DELETE      | /api/customers/{id} | Delete a customer by it's ID           |

| HTTP Method | Path                | Description                            |
| ----------- | ------------------- | -------------------------------------- |
| GET         | /api/employees      | Get a list of all registered employees |
| GET         | /api/employees/{id} | Get a employee by ID                   |
| POST        | /api/employees      | Add a new employee to database         |
| PUT         | /api/employees/{id} | Update an employee                     |
| DELETE      | /api/employees/{id} | Delete an employee by it's ID          |

| HTTP Method | Path             | Description                              |
| ----------- | ---------------- | ---------------------------------------- |
| GET         | /api/automobiles | Get a list of all cached automobile VINs |

## Sales API Examples

**GET** `/api/employees`

```json
    "sales_persons": [
        {
            "name": "Ryan Paschen",
            "employee_id": 7777
        }
    ]
```

**GET** `/api/customers/`

```json
    "potential_customers": [
        {
            "name": "Elon Musk",
            "address": "1923 Grant Dr",
            "phone_number": "2094854600"
        }
    ]
```

**GET** `/api/sales`

```json
    "sales_records": [
        {
            "automobile": {
                "vin": "1C3CC5FB2AN120174"
            },
            "sales_person": {
                "name": "Ryan Paschen",
                "employee_id": 7777
            },
            "customer": {
                "name": "Elon Musk",
                "address": "1923 Grant Dr",
                "phone_number": "2094854600"
            },
            "price": 12500
        }
    ]
```

**GET** `/api/automobiles`

```json
    "automobileVO": [
        {
            "vin": "1C3CC5FB2AN120174"
        }
    ]
```
