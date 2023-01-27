import React, { useState } from "react";

function CreateManufacturer() {
  const [manufacturerName, setManufacturerName] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const data = {
        name: manufacturerName,
      };
      const manufacUrl = "http://localhost:8100/api/manufacturers/";
      const fetchConfig = {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(manufacUrl, fetchConfig);
      if (response.ok) {
        setSuccess("Manufacturer successfully created");
        setManufacturerName("");
      } else {
        const json = await response.json();
        setError(json.error);
      }
    } catch (e) {
      setError(e.message);
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
    <div className="container">
      <div className="row">
        <div className="text-center offset-2 col-9">
          <div className="p-3 mt-5">
            <h1 className="offset-3 col-6 pb-4">Add a new manufacturer</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  value={manufacturerName}
                  onChange={(event) => setManufacturerName(event.target.value)}
                  placeholder="Name"
                  required
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                />
                <label htmlFor="name">Manufacturer name</label>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
      {errorCheck}
      {successCheck}
    </div>
  );
}

export default CreateManufacturer;
