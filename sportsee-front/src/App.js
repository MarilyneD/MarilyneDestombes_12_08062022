import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import User from "./pages/User";
import Notfound from "./pages/Notfound";
import HorizontalNav from "./components/HorizontalNav";
import VerticalNav from "./components/VerticalNav";

const App = () => {
  return (
    <BrowserRouter>
      <HorizontalNav />
      <VerticalNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
