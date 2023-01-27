import React, { useState, useEffect } from 'react';

export default function TechnicianForm() {
    const [TechnicianName, setTechnicianName] = useState("");
    const handleTechnicianNameChange = (e) => {
        setTechnicianName(e.target.value);
    };

    const [TechnicianNumber, setTechnicianNumber] = useState("");
    const handleTechnicianNumberChange = (e) => {
        setTechnicianNumber(e.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = {};
        data.name = TechnicianName;
        data.technician_number = TechnicianNumber;

        const url = "http://localhost:8080/api/technicians/";

        const fetchConfig = {
            method: "post",
            bod: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, fetchConfig);

        if (response.ok) {
            setTechnicianName("");
            setTechnicianNumber("");
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Add a new Technician</h1>
                    <form onSubmit={handleSubmit} id="create-technician-form">
                        <div className="form-floating mb-3">
                            <input onChange={handleTechnicianNameChange} value={TechnicianName} placeholder="Change Technician Name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input onChange={handleTechnicianNumberChange} value={TechnicianNumber} placeholder="Change Technician Number" />
                            <label htmlFor="technician_number">Technician Number</label>
                        </div>
                        <button className="btn btn-primary">Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
