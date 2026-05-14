import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Workshops from "./pages/Workshops.jsx";
import Users from "./pages/Users.jsx";
import Attendance from "./pages/Attendance.jsx";
import Layout from "./components/Layout.jsx";
export default function App() {
  const [isLogged, setIsLogged] = useState(
    Boolean(localStorage.getItem("token")),
  );
  const location = useLocation();

  useEffect(() => {
    setIsLogged(Boolean(localStorage.getItem("token")));
  }, [location.pathname]);

  return (
    <Routes>
      <Route
        path="/login"
        element={isLogged ? <Navigate to="/" replace /> : <Login />}
      />
      <Route
        path="/"
        element={isLogged ? <Layout /> : <Navigate to="/login" replace />}
      >
        <Route index element={<Dashboard />} />
        <Route path="oficinas" element={<Workshops />} />
        <Route path="usuarios" element={<Users />} />
        <Route path="presenca" element={<Attendance />} />
      </Route>
    </Routes>
  );
}
