import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../Home/Home";

export const RouteHandle = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
