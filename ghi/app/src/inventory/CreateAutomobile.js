import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAutomobile() {
  const [vin, setVin] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [models, setModels] = useState([]);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getModels = async () => {
      const response = await fetch("http://localhost:8100/api/models/").catch(
        () => setError("Could not retrieve models")
      );
      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      } else {
        setError("Invalid response from server");
      }
    };

    getModels();
  }, []);

  async function handleSubmit(event) {
    setSuccess("");
    event.preventDefault();
    const data = {
      vin: vin,
      year: year,
      color: color,
      model_id: model,
    };

    const custUrl = "http://localhost:8100/api/automobiles/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(custUrl, fetchConfig);

    if (response.ok) {
      setSuccess("Automobile successfully created");
      setVin("");
      setYear("");
      setColor("");
      setModel("");
      navigate("/inventory/automobiles/view");
    } else {
      setError("Failed to create new automobile");
    }
  }

  const modelList = models?.map((model) => {
    return (
      <option key={model.id} value={model.id}>
        {model.name}
      </option>
    );
  });

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

  const errorCheck =
    error !== "" ? (
      <div className="container">
        <div className="row justify-content-md-center">
          <div
            className="col-3 text-center m-5 alert alert-danger alert-animation"
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
          <div className="p-3 mt-5">
            <h1 className="offset-3 col-6 pb-4">Add a new automobile</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  value={vin}
                  onChange={(event) => setVin(event.target.value)}
                  placeholder="Name"
                  required
                  minLength="17"
                  maxLength="17"
                  type="text"
                  className="form-control"
                />
                <label htmlFor="name">VIN</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={year}
                  onChange={(event) => setYear(event.target.value)}
                  placeholder="Name"
                  required
                  type="text"
                  className="form-control"
                />
                <label htmlFor="name">Year</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={color}
                  onChange={(event) => setColor(event.target.value)}
                  placeholder="Name"
                  required
                  type="text"
                  className="form-control"
                />
                <label htmlFor="name">Color</label>
              </div>
              <div className="mb-3">
                <select
                  value={model}
                  onChange={(event) => setModel(event.target.value)}
                  required
                  className="form-select"
                >
                  <option value="">Choose a model</option>
                  {modelList}
                </select>
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

export default CreateAutomobile;
