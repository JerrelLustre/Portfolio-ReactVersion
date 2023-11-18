import React from "react";
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";
import { Outlet } from "react-router-dom";





export default function Layout() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-bgBlack">
      <Navigation></Navigation>
        <Outlet/>
      <Footer></Footer>
    </div>
  );
}
