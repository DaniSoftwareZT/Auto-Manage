import React, { useState } from "react";

function TechnicianForm() {
  const [name, setName] = useState("");
  const [emplId, setEmplId] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    setSuccess("");
    event.preventDefault();
    const data = {};
    data.name = name;
    data.employee_id = emplId;
    console.log(data);

    const techUrl = "http://localhost:8080/api/technicians/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(techUrl, fetchConfig);
    if (response.ok) {
      setSuccess("Technician successfully added");
      setName("");
      setEmplId("");
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

  return (
    <div className="container">
      <div className="row">
        <div className="text-center offset-2 col-8">
          <div className="p-3 mt-5 create-form">
            <h1 className="pb-4">Add a technician</h1>
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
                  value={emplId}
                  onChange={(event) => setEmplId(event.target.value)}
                  placeholder="Employee ID"
                  required
                  name="emplId"
                  className="form-control"
                />
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

export default TechnicianForm;
