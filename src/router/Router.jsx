import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNavbar from "../components/MyNavbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import News from "../pages/News";
const Router = () => {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<News />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
