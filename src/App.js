import React from "react";
import HomePage from "./pages/Home/HomePage";
import { Route, Routes } from "react-router-dom";
import ArticalDetailPage from "./pages/ArticleDetails/ArticalDetailPage";
import Register from "./pages/register/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";

const App = () => {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/blog/:id" element={<ArticalDetailPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
