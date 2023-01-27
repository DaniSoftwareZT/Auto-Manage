import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function SalesRecordsList() {
  let { currEmployee } = useParams();
  const navigate = useNavigate();

  const [salesRecords, setSalesRecords] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    async function getSalesRecords() {
      const response = await fetch("http://localhost:8090/api/sales/").catch(
        () => setError("Could not fetch sales records")
      );
      if (response.ok) {
        const data = await response.json();
        if (currEmployee > 0) {
          const newData = data.sales_records.filter(
            (salesRecord) =>
              salesRecord.sales_person.employee_id === parseInt(currEmployee)
          );
          setSalesRecords(newData);
        } else {
          setSalesRecords(data.sales_records);
        }
      } else {
        setError("Could not fetch sales records");
      }
    }
    async function getEmployees() {
      const response = await fetch(
        "http://localhost:8090/api/employees/"
      ).catch(() => setError("Could not fetch employees"));
      if (response.ok) {
        const data = await response.json();
        setEmployees(data.sales_persons);
      } else {
        setError("Could not fetch employees");
      }
    }

    getSalesRecords();
    getEmployees();

    if (currEmployee === "true") {
      setSuccess("Sales record created successfully");
    }
  }, [employee]);

  const onChange = (event) => {
    setSuccess("");
    setEmployee(event.target.value);
    return navigate(`/sales/records/view/${event.target.value}`);
  };

  const salesRecordsList = salesRecords?.map((salesRecord) => {
    return (
      <tr key={salesRecord.id}>
        <td>{salesRecord.sales_person.name}</td>
        <td>{salesRecord.sales_person.employee_id}</td>
        <td>{salesRecord.customer.name}</td>
        <td>{salesRecord.automobile.vin}</td>
        <td>${salesRecord.price}</td>
      </tr>
    );
  });

  const employeeList = employees?.map((employee) => {
    return (
      <option key={employee.employee_id} value={employee.employee_id}>
        {employee.name}
      </option>
    );
  });

  const currEmplName =
    currEmployee !== undefined
      ? employees.find(
          (employee) => employee.employee_id === parseInt(currEmployee)
        )
      : null;

  const successCheck =
    success !== "" ? (
      <div
        className="col-2 text-center alert alert-success alert-animation"
        role="alert"
      >
        {success}
      </div>
    ) : null;

  const errorCheck =
    error !== "" ? (
      <div
        className="col-2 text-center alert alert-danger alert-animation"
        role="alert"
      >
        {error}
      </div>
    ) : null;

  const filterCheck =
    currEmployee !== undefined && currEmplName !== undefined ? (
      <h2>List of {currEmplName.name}'s sales</h2>
    ) : (
      <h2>List of all sales</h2>
    );

  const emptyCheck =
    salesRecordsList.length > 0 ? null : (
      <div className="text-center alert alert-secondary m-5">
        No completed sales to display
      </div>
    );

  return (
    <>
      <div className="container">
        <div className="m-3">
          <h1 className="text-center display-3 m-5">Sales Records</h1>
          <form>
            <div className="mb-3">
              <select
                value={employee}
                onChange={onChange}
                required
                id="employee"
                name="employee"
                className="form-select"
              >
                <option value="">Select a sales person</option>
                {employeeList}
              </select>
            </div>
          </form>
        </div>
        <div className="list-view text-center">
          {filterCheck}
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Employee</th>
                <th>Employee ID#</th>
                <th>Customer</th>
                <th>VIN</th>
                <th>Sale Price</th>
              </tr>
            </thead>
            <tbody>{salesRecordsList}</tbody>
          </table>
          {emptyCheck}
        </div>
      </div>
      <div className="mx-5">
        {errorCheck}
        {successCheck}
      </div>
    </>
  );
}

export default SalesRecordsList;
