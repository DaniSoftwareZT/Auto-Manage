import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ManufacturerList() {
  const [manufacturers, setManufacturers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "http://localhost:8100/api/manufacturers/";
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setManufacturers(data.manufacturers);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div>
        <h2 className="fw-bold text-center mb-4 mt-5">Manufacturers</h2>
        <div className="row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {manufacturers.map((manufacturer) => {
                return (
                  <tr key={manufacturer.id}>
                    <td>{manufacturer.name}</td>
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

export default ManufacturerList;
