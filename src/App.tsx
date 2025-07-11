import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Table from "./components/Tables/Table";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <Router>
      <div className="flex flex-row items-start h-screen">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<Table />} />
          <Route path="/modal" element={<Modal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
