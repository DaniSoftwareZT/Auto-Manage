import React, { useState, useEffect } from 'react';

export default function HistoryList() {
    const [vin, setVin] = useState('');
    const [appointments, setAppointments] = useState([]);

    const handleChange = event => {
        setVin(event.target.value);
    };

    const fetchAppointments = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok) {
            const allData = await response.json();
            const activeAppointments = allData.appointments.filter(appointment => appointment.status == "INCOMPLETE")
            setAppointments(activeAppointments);
        }
    }

    useEffect(() => { fetchAppointments() }, []);

    const fetchAppointment = async () => {
        const response = await fetch('http://localhost:8080/api/appointments/');
        if (response.ok) {
            const data = await response.json();
            const vinList = [];
            data.appointments.map(appointments => vinList.push(appointments.vin))
            fetchAppointment(vinList)
        }
    }

    useEffect(() => { fetchAppointment() });

    return (
        <>
            <form>
                <label>
                    VIN:
                    <input type="text" value={vin} onChange={handleChange} />
                </label>
            </form>
            <div className="pt-4">
                <h1 className="pb-2">Service Appointments</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>VIN</th>
                            <th>Customer Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Technician</th>
                            <th>Reason</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map(appointment => {
                            return (
                                <tr key={appointment.id}>
                                    <td className="pt-3">{appointment.vin}</td>
                                    <td className="pt-3">{appointment.customer_name}</td>
                                    <td className="pt-3">{new Date(appointment.date).toLocaleDateString()}</td>
                                    <td className="pt-3">{new Date(appointment.date).toLocaleTimeString(navigator.language, { hour: '2-digit', minute: '2-digit' })}</td>
                                    <td className="pt-3">{appointment.technician}</td>
                                    <td className="pt-3">{appointment.reason}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}
