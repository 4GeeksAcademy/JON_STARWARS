import React from "react";
import { Outlet } from "react-router-dom";
import Navbar      from "../components/Navbar";
import Footer      from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import Starfield   from "../components/Starfield";

export default function Layout() {
  return (
    <>
      <Starfield />
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <Footer />
    </>
  );
}
