import React, { useState, useEffect } from "react";

function AutomobilesList() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:8100/api/automobiles/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setAutos(data.autos);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <h2 className="fw-bold text-center mb-4 mt-5">Automobiles</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>VIN</th>
            <th>Color</th>
            <th>Year</th>
            <th>Model</th>
            <th>Make</th>
          </tr>
        </thead>
        <tbody>
          {autos.map((auto) => {
            return (
              <tr key={auto.id}>
                <td>{auto.vin}</td>
                <td>{auto.color}</td>
                <td>{auto.year}</td>
                <td>{auto.model.name}</td>
                <td>{auto.model.manufacturer.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AutomobilesList;
