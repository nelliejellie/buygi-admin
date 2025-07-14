import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Table from "./components/Tables/Table";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import DashHubLogin from "./components/Auth/Login";

function AppLayout() {
  return (
    <div className="flex flex-row items-start h-screen">
      <Sidebar />
      <div className="flex-1 overflow-y-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<DashHubLogin />} />
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/form" element={<Form />} />
        </Route>
      </Routes>
    </Router>
  );
}


export default App;
