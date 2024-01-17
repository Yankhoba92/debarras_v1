import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from "../components/Navbar";
import NavbarBurger from "../components/Navbarburger";
import Errors from "../components/Errors";
import Footer from "../components/Footer";

const meta = {
  title: "Gravas",
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function Gravas() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <>
        <section className="bg-coolGray-900">
          <Navbar />
          <NavbarBurger />
        </section>
       <Errors />
       <Footer/>
      </>
    </React.Fragment>
  );
}
