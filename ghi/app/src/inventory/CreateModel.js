import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateModel() {
  const [modelName, setModelName] = useState("");
  const [pictureUrl, setPictureUrl] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [manufacturers, setManufacturers] = useState([]);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getManufacturers = async () => {
      const response = await fetch(
        "http://localhost:8100/api/manufacturers/"
      ).catch(() => setError("Failed to retrieve manufacturers list"));
      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
      } else {
        setError("Invalid response from server");
      }
    };

    getManufacturers();
  }, []);

  async function handleSubmit(event) {
    setSuccess("");
    event.preventDefault();
    const data = {
      name: modelName,
      picture_url: pictureUrl,
      manufacturer_id: manufacturer,
    };
    console.log(data);

    const modelUrl = "http://localhost:8100/api/models/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(modelUrl, fetchConfig);

    if (response.ok) {
      setSuccess("Vehicle model successfully created");
      setModelName("");
      navigate("/inventory/vehicle_models/view");
    } else {
      setError("Failed to create model");
    }
  }

  const manufacturerList = manufacturers?.map((manufacturer) => {
    return (
      <option key={manufacturer.id} value={manufacturer.id}>
        {manufacturer.name}
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
        <div className="text-center offset-2 col-8">
          <div className="p-3 mt-5">
            <h1 className="offset-3 col-6 pb-4">Add a new model</h1>
            <form onSubmit={handleSubmit} id="create-conference-form">
              <div className="form-floating mb-3">
                <input
                  value={modelName}
                  onChange={(event) => setModelName(event.target.value)}
                  placeholder="Model name"
                  required
                  type="text"
                  className="form-control"
                />
                <label htmlFor="name">Model name</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  value={pictureUrl}
                  onChange={(event) => setPictureUrl(event.target.value)}
                  placeholder="URL"
                  required
                  type="url"
                  className="form-control"
                />
                <label htmlFor="name">Picture URL</label>
              </div>
              <div className="mb-3">
                <select
                  value={manufacturer}
                  onChange={(event) => setManufacturer(event.target.value)}
                  required
                  className="form-select"
                >
                  <option value="">Choose a manufacturer</option>
                  {manufacturerList}
                </select>
              </div>
              <button className="btn btn-primary">Create</button>
            </form>
          </div>
        </div>
      </div>
      {successCheck}
      {errorCheck}
    </div>
  );
}

export default CreateModel;
