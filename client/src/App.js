import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Register from "./pages/Register";
import Profile from "./components/Profile";
import PageAdmin from "./pages/PageAdmin";
import PageUser from "./pages/PageUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<LandingPage />} />
        <Route path={"/register"} element={<Register />} />
        <Route path={"/login"} element={<Login />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/pageadmin"} element={<PageAdmin />} />
        <Route path={"/pageuser"} element={<PageUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
