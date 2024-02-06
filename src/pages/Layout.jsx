;
import Navigation from "../components/Navigation/Navigation";
import Footer from "../components/Footer/Footer";

import { Outlet, ScrollRestoration } from "react-router-dom";

export default function Layout() {
  
  return (
    <div className=" bg-bgBlack w-screen overflow-clip">
      <ScrollRestoration />
      <Navigation />
      <Outlet />
      <Footer />
      
    </div>
  );
}
