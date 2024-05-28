import React from "react";
import "./index.css";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./utils/hooks/useAuth";
import RouteHelper from "./utils/helpers/routeHelper";

import NavBar from "./components/NavBar/NavBar";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";


function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
            <NavBar />
            <Routes>
              <Route path="/home" element={ <RouteHelper><Home /></RouteHelper>}
              />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
              <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
