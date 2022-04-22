import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddCity } from "../AddCity/AddCity";
import { AddCountry } from "../AddCountry/AddCountry";
import { Home } from "../Home/Home";
import { UpdateCity } from "../UpdateCity/UpdateCity";

export const RouteHandle = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add-country" element={<AddCountry />} />
      <Route path="/add-city" element={<AddCity />} />
      <Route path="/editCity/:id" element={<UpdateCity />} />
    </Routes>
  );
};
