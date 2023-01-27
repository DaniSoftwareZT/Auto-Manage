import React, { useState, useEffect } from "react";

function AppointmentForm() {
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");
  const [vin, setVin] = useState("");
  const [date, setDate] = useState("");
  const [tech, setTech] = useState("");

  const [techs, setTechs] = useState([]);

  const [success, setSuccess] = useState(false);

  const getTechnicians = async () => {
    const url = "http://localhost:8080/api/technicians/";
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTechs(data.technicians);
    }
  };

  useEffect(() => {
    getTechnicians();
  }, []);

  const handleSubmit = async (event) => {
    setSuccess("");
    event.preventDefault();
    const data = {};
    data.vin = vin;
    data.customer_name = name;
    data.date = date;
    data.reason = reason;
    data.technician = tech;

    console.log(data);

    const aptUrl = "http://localhost:8080/api/appointments/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(aptUrl, fetchConfig);
    if (response.ok) {
      setSuccess("Appointment successfully created");
      setName("");
      setReason("");
      setVin("");
      setDate("");
      setTech("");
    }
  };

  const successCheck = success ? (
    <div className="container">
      <div className="row justify-content-md-center">
        <div
          className="col-3 text-center m-5 alert alert-success alert-animation"
          role="alert"
        >
          {success}
        </div>
      </div>
    </div>
  ) : null;

  const techList = techs?.map((tech) => {
    return (
      <option key={tech.employee_id} value={tech.employee_id}>
        {tech.name}
      </option>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="text-center offset-2 col-8">
          <div className="p-3 mt-5 create-form">
            <h1 className="pb-4">Make an appointment</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Name"
                  required
                  name="name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  value={reason}
                  onChange={(event) => setReason(event.target.value)}
                  placeholder="Reason"
                  required
                  name="reason"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  value={vin}
                  onChange={(event) => setVin(event.target.value)}
                  placeholder="VIN"
                  required
                  minLength="17"
                  maxLength="17"
                  name="vin"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  placeholder="Date"
                  required
                  type="datetime-local"
                  name="date"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <select
                  value={tech}
                  onChange={(event) => setTech(event.target.value)}
                  required
                  name="tech"
                  className="form-select"
                >
                  <option value="">Select a technician</option>
                  {techList}
                </select>
              </div>
              <button className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
      {successCheck}
    </div>
  );
}

export default AppointmentForm;
