import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="About" element={<About />} />
          {/* <Route path="Projects" element={<Projects />} /> */}

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

