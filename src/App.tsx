import "./App.css";
import Sidebar from "./components/Sidebar/sidebar";
import Header from "./components/Header/Header";
import MainContent from "./screens/Maincontent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex flex-row items-start h-screen">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
