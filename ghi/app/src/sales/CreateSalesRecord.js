import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateSalesRecord() {
  const [salesPrice, setSalesPrice] = useState("");
  const [automobile, setAutomobile] = useState("");
  const [customer, setCustomer] = useState("");
  const [employee, setEmployee] = useState("");
  const [automobiles, setAutomobiles] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [employees, setEmployees] = useState([]);

  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getAutomobiles = async () => {
      const url = "http://localhost:8100/api/automobiles/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        const autos = data.autos;
        setAutomobiles(autos.filter((auto) => auto.sold !== true));
      } else {
        setError("Could not fetch automobile information");
      }
    };

    const getCustomers = async () => {
      const url = "http://localhost:8090/api/customers/";

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setCustomers(data.potential_customers);
      } else {
        setError("Could not fetch customer information");
      }
    };

    const getEmployees = async () => {
      const url = "http://localhost:8090/api/employees/";

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setEmployees(data.sales_persons);
      } else {
        setError("Could not fetch employee information");
      }
    };
    getAutomobiles();
    getCustomers();
    getEmployees();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const data = {
      automobile: automobile,
      sales_person: employee,
      customer: customer,
      price: salesPrice,
    };

    const srUrl = "http://localhost:8090/api/sales/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    await fetch(srUrl, fetchConfig);

    const autoUrl = `http://localhost:8100/api/automobiles/${automobile}/`;
    const fetchConfig2 = {
      method: "put",
      body: JSON.stringify({ sold: true }),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response2 = await fetch(autoUrl, fetchConfig2);

    if (response2.ok) {
      navigate("/sales/records/view");
    } else {
      setError("Failed to update automobile sold status");
    }
  }

  const autoList = automobiles?.map((automobile) => {
    return (
      <option key={automobile.vin} value={automobile.vin}>
        {automobile.vin} - {automobile.model.manufacturer.name}{" "}
        {automobile.model.name}
      </option>
    );
  });

  const custList = customers?.map((customer) => {
    return (
      <option key={customer.id} value={customer.id}>
        {customer.name}
      </option>
    );
  });

  const emplList = employees?.map((employee) => {
    return (
      <option key={employee.employee_id} value={employee.employee_id}>
        {employee.name}
      </option>
    );
  });

  const errorCheck =
    error !== "" ? (
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="col-3 m-5 text-center alert alert-danger alert-animation"
            role="alert"
          >
            {error}
          </div>
        </div>
      </div>
    ) : null;

  return (
    <div className="container">
      <div className="row">
        <div className="text-center offset-2 col-8">
          <div className="p-3 mt-5 create-form">
            <h1 className="pb-4">Add a sales record</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <select
                  value={customer}
                  onChange={(event) => setCustomer(event.target.value)}
                  required
                  id="customers"
                  name="customers"
                  className="form-select"
                >
                  <option value="">Select a customer</option>
                  {custList}
                </select>
              </div>
              <div className="mb-3">
                <select
                  value={employee}
                  onChange={(event) => setEmployee(event.target.value)}
                  required
                  id="employees"
                  name="employees"
                  className="form-select"
                >
                  <option value="">Select a employee</option>
                  {emplList}
                </select>
              </div>
              <div className="mb-3">
                <select
                  value={automobile}
                  onChange={(event) => setAutomobile(event.target.value)}
                  required
                  id="automobiles"
                  name="automobiles"
                  className="form-select"
                >
                  <option value="">Select an automobile</option>
                  {autoList}
                </select>
              </div>
              <div className="mb-3">
                <input
                  value={salesPrice}
                  onChange={(event) => setSalesPrice(event.target.value)}
                  placeholder="Price"
                  required
                  type="number"
                  name="sale"
                  className="form-control"
                />
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
      {errorCheck}
    </div>
  );
}

export default CreateSalesRecord;
