import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5 py-3 fixed-top">
      <a className="navbar-brand font-weight-bold" href="#">
        CarRental
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav">
          <a className="nav-link link mr-4" href="#">
            Our Services
          </a>
          <a className="nav-link link mr-4" href="#">
            Why Us
          </a>
          <a className="nav-link link mr-4" href="#">
            Testimonial
          </a>
          <a className="nav-link link mr-4" href="#">
            FAQ
          </a>
          <Link to={"/register"}>Register</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
