import React, { useState, useEffect } from "react";

export default function AppointmentList() {
  const [appointments, setAppointments] = useState([]);
  const fetchAppointments = async () => {
    const response = await fetch("http://localhost:8080/api/appointments/");
    if (response.ok) {
      const allData = await response.json();
      const activeAppointments = allData.appointments.filter(
        (appointment) => appointment.status == "INCOMPLETE"
      );
      setAppointments(activeAppointments);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const [automobiles, setAutomobiles] = useState([]);
  const fetchAutomobiles = async () => {
    const response = await fetch("http://localhost:8080/api/automobiles/");
    if (response.ok) {
      const data = await response.json();
      const vinList = [];
      data.autos.map((automobile) => vinList.push(automobile.vin));
      setAutomobiles(vinList);
    }
  };

  useEffect(() => {
    fetchAutomobiles();
  });

  const isVip = (vin) => {
    if (automobiles.includes(vin)) {
      return "Give VIP special.";
    } else {
      return "No VIP";
    }
  };

  const cancelAppointment = async (appointment) => {
    const aptId = String(appointment.id);
    const cancelUrl =
      "http://localhost:8080/api/appointments/" + aptId + "/cancel/";
    const fetchConfig = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(cancelUrl, fetchConfig);
    if (response.ok) {
      fetchAppointments();
    }
  };

  const completeAppointment = async (appointment) => {
    const aptId = String(appointment.id);
    const completeUrl =
      "http://localhost:8080/api/appointments/" + aptId + "/complete/";
    const fetchConfig = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(completeUrl, fetchConfig);
    if (response.ok) {
      fetchAppointments();
    }
  };

  return (
    <div ClassName="pt-4">
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
            <th>VIP</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => {
            return (
              <tr key={appointment.id}>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => cancelAppointment(appointment)}
                  >
                    Cancel
                  </button>
                </td>
                <td className="pt-3">{appointment.vin}</td>
                <td className="pt-3">{appointment.customer_name}</td>
                <td className="pt-3">
                  {new Date(appointment.date).toLocaleDateString()}
                </td>
                <td className="pt-3">
                  {new Date(appointment.date).toLocaleTimeString(
                    navigator.language,
                    { hour: "2-digit", minute: "2-digit" }
                  )}
                </td>
                <td className="pt-3">{appointment.technician}</td>
                <td className="pt-3">{appointment.reason}</td>
                <td className="pt-3">{isVip(appointment.vin)}</td>
                <td>
                  <button
                    type="button"
                    className="btn btn-sucess"
                    onClick={() => completeAppointment(appointment)}
                  >
                    Finished
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
