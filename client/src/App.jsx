import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Home Page after login

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* Redirect "/" to Login */}
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />{" "}
        {/* Protected Route */}
      </Routes>
    </Router>
  );
};

export default App;
