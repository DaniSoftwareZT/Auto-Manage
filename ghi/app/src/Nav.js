import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black ps-2">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img src={require("./images/logo-no-background.png")} alt="CarCar" />
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <div className="dropdown navbar-brand">
              <button
                className="navbar-brand btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SALES
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="sales/customers/create"
                  >
                    Add a customer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="sales/employees/create"
                  >
                    Add an employee
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/records/create">
                    Create a sales record
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="sales/records/view">
                    View sales records
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="dropdown navbar-brand">
              <button
                className="navbar-brand btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                SERVICE
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="services/appointments/view"
                  >
                    View current appointments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="services/appointments/history"
                  >
                    View appointment history
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="services/appointments/create"
                  >
                    Make an appointment
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="services/technicians/create"
                  >
                    Add a technician
                  </NavLink>
                </li>
                <ul className="dropdown-menu"></ul>
                <div className="dropdown navbar-brand"></div>
              </ul>
            </div>
            <div className="dropdown navbar-brand">
              <button
                className="navbar-brand btn dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                INVENTORY
              </button>
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="inventory/manufacturers/view"
                  >
                    View manufacturers
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="inventory/models/view">
                    View vehicle models
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="inventory/automobiles/view"
                  >
                    View automobiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="inventory/manufacturers/create"
                  >
                    Create a manufacturer
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="inventory/models/create"
                  >
                    Create a vehicle model
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdown-item"
                    to="inventory/automobiles/create"
                  >
                    Create an automobile
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
