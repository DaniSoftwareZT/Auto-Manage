import React, { useState } from "react";

function CreateCustomer() {
  const [custName, setCustName] = useState("");
  const [custAddy, setCustAddy] = useState("");
  const [custPhone, setCustPhone] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    setSuccess("");
    event.preventDefault();
    const data = {
      name: custName,
      address: custAddy,
      phone_number: custPhone,
    };

    const custUrl = "http://localhost:8090/api/customers/";
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
      setSuccess("Customer successfully created");
      setCustName("");
      setCustAddy("");
      setCustPhone("");
    } else {
      setError("Customer failed to create");
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
              <h1 className="pb-4">Register a new customer</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-floating mb-3">
                  <input
                    value={custName}
                    onChange={(event) => setCustName(event.target.value)}
                    placeholder="Name"
                    required
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                  />
                  <label htmlFor="name">Name</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={custAddy}
                    onChange={(event) => setCustAddy(event.target.value)}
                    placeholder="Address"
                    required
                    type="text"
                    name="address"
                    id="address"
                    className="form-control"
                  />
                  <label htmlFor="name">Address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    value={custPhone}
                    onChange={(event) => setCustPhone(event.target.value)}
                    placeholder="Phone Number"
                    required
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    className="form-control"
                  />
                  <label htmlFor="name">Phone Number</label>
                </div>
                <button className="btn btn-primary">Create</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {errorCheck}
      {successCheck}
    </>
  );
}

export default CreateCustomer;
