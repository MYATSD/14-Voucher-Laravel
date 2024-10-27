import React from "react";
import HomePage from "./pages/HomePage";
import AddContactPage from "./pages/AddContactPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegisterPage />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/addContact" element={<AddContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
