import React, { useState, useEffect } from "react";

function ModelList() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:8100/api/models/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setModels(data.models);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <h2 className="fw-bold text-center mb-4 mt-5">Vehicle Models</h2>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Manufacturer</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model) => {
                return (
                  <tr key={model.id}>
                    <td>{model.name}</td>
                    <td>{model.manufacturer.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ModelList;
