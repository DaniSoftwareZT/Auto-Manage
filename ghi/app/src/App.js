import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Nav from "./Nav";
import AppointmentForm from "./service/AppointmentForm";
import TechnicianForm from "./service/TechnicianForm";
import AppointmentList from "./service/AppointmentList";
import HistoryList from "./service/HistoryList";
import CreateEmployee from "./sales/CreateEmployee";
import CreateCustomer from "./sales/CreateCustomer";
import CreateSalesRecord from "./sales/CreateSalesRecord";
import CreateAutomobile from "./inventory/CreateAutomobile";
import CreateModel from "./inventory/CreateModel";
import CreateManufacturer from "./inventory/CreateManufacturer";
import SalesRecordsList from "./sales/SalesRecordsList";
import AutomobilesList from "./inventory/AutomobilesList";
import ManufacturersList from "./inventory/ManufacturersList";
import ModelsList from "./inventory/ModelsList";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<MainPage />} />

        <Route path="sales/">
          <Route path="records/">
            <Route path="create/" element={<CreateSalesRecord />} />
            <Route path="view/" element={<SalesRecordsList />}>
              <Route path=":currEmployee" element={<SalesRecordsList />} />
            </Route>
          </Route>
          <Route path="employees/">
            <Route path="create/" element={<CreateEmployee />} />
          </Route>
          <Route path="customers/">
            <Route path="create/" element={<CreateCustomer />} />
          </Route>
        </Route>

        <Route path="services/">
          <Route path="technicians/">
            <Route path="create" element={<TechnicianForm />} />
          </Route>
          <Route path="appointments/">
            <Route path="create" element={<AppointmentForm />} />
            <Route path="view" element={<AppointmentList />} />
            <Route path="history" element={<HistoryList />} />
          </Route>
        </Route>

        <Route path="inventory/">
          <Route path="automobiles/">
            <Route path="view/" element={<AutomobilesList />} />
            <Route path="create" element={<CreateAutomobile />} />
          </Route>
          <Route path="models/">
            <Route path="view/" element={<ModelsList />} />
            <Route path="create" element={<CreateModel />} />
          </Route>
          <Route path="manufacturers/">
            <Route path="view/" element={<ManufacturersList />} />
            <Route path="create" element={<CreateManufacturer />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
