import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dogs from "./Dogs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dogs />} />
      <Route path="/:name" element={<Dogs />} />
    </Routes>
  </BrowserRouter>
);
