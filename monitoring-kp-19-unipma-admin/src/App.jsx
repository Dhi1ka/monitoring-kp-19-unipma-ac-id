import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import { Dashboard, Students, Lecturers } from "./views";
import "./assets/dashboard.css";
import "./assets/bootstrap.min.css";
import "./assets/main.css";

const App = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Dashboard />}></Route>
            <Route path="/students" element={<Students />}></Route>
            <Route path="/lecturers" element={<Lecturers />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
