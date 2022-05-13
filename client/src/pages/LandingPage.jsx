import React from "react";
import Footer from "../components/Footer";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import "../stylesheets/Page.css";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default LandingPage;
