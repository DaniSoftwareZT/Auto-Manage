import React, { useState } from "react";

function CreateEmployee() {
  const [emplName, setEmplName] = useState("");
  const [emplId, setEmplId] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    setSuccess("");
    event.preventDefault();
    const data = {
      name: emplName,
      employee_id: emplId,
    };

    const custUrl = "http://localhost:8090/api/employees/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(custUrl, fetchConfig).catch(() => {
      setError("Could not fetch employee information");
    });

    if (response.ok) {
      setSuccess("Employee successfully created");
      setEmplName("");
      setEmplId("");
    } else {
      setError("Employee failed to create");
    }
  }

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

  const errorCheck = error ? (
    <div
      className="col-2 text-center m-5 alert alert-danger alert-animation"
      role="alert"
    >
      {error}
    </div>
  ) : null;

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="text-center offset-2 col-8">
            <div className="p-3 mt-5 create-form">
              <h1 className="pb-4">Register a new employee</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    value={emplName}
                    onChange={(event) => setEmplName(event.target.value)}
                    placeholder="Employee name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Employee name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={emplId}
                    onChange={(event) => setEmplId(event.target.value)}
                    placeholder="Employee ID"
                    required
                    type="text"
                    name="id"
                    id="id"
                    className="form-control"
                  />
                  <label htmlFor="name">Employee ID</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {successCheck}
    </>
  );
}

export default CreateEmployee;
