import React, { useState, useEffect } from 'react';

export default function AppointmentForm() {
    const [formClass, setFormClass] = useState("");
    const [sucessClass, setSucessClass] = useState(
        "alert alert-sucess d-none"
    );
    const [name, setName] = useState("");
    const [reason, setReason] = useState("");
    const [vin, setVin] = useState("");
    const [date, setDate] = useState("");
    const [tech, setTech] = useState("");

    const [techs, setTechs] = useState([]);
    const fetchData = async () => {
        const url = "http://localhost:8080/api/technicians/";
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setTechs(data.technicians);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleReasonChange = (event) => {
        setReason(event.target.value);
    };
    const handleVinChange = (event) => {
        setVin(event.target.value);
    };
    const handleDateChange = (event) => {
        setDate(event.target.value);
    };
    const handleTechChange = (event) => {
        setTech(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {};
        data.customer_name = name;
        data.date = date;
        data.reason = reason;
        data.vin = vin;
        data.technician_id = tech;

        const aptUrl = "http://localhost:8080/api/appointments";
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(aptUrl, fetchConfig);
        if (response.ok) {
            setFormClass("d-none");
            setSucessClass("alert alert-sucess");
        }
    };

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Make appointment</h1>
                    <form className={formClass} onSubmit={handleSubmit} id="create-appointment">
                        <div className="form=floating mb-3">
                            <input value={name} onChange={handleNameChange} placeholder="change-appointment" />
                            <label htmlFor="name">Customer Name</label>
                        </div>
                        <div className="form mb-3">
                            <label htmlFor="reason" className="form-label">Reason for visit</label>
                            <textarea value={reason} onChange={handleReasonChange} className />
                        </div>
                        <div className="form-floating mb-3">
                            <input value={vin} onChange={handleVinChange} placeholder="Vehicle Identification Number" />
                            <label htmlFor="vin">Vehicle VIN</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input value={date} onChange={handleDateChange} placeholder="mm/dd/yyyy" />
                            <label htmlFor="datetime-local">Date of appointment</label>
                        </div>
                        <div className="mb-3">
                            <select value={tech} onChange={handleTechChange} required>
                                <option value="">Choose technician</option>
                                {techs.map((tech) => {
                                    return (
                                        <option key={tech.id} value={tech.id}>
                                            {" "}
                                            {tech.name}{" "}
                                        </option>
                                    );
                                })}
                            </select>
                        </div>
                        <button className="btn btn-primary">Submit</button>
                    </form>
                    <div className={sucessClass} role="alert">
                        {" "}
                        Appointment has been made. See you soon.{" "}
                    </div>
                </div>
            </div>
        </div>
    );
}
