# CarCar

Team:

- Daniel Zambrana - Service
- Ryan Paschen - Sales

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

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
