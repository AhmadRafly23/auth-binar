import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";

import { history } from "../helpers/history";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "../common/EventBus";

function NavbarUser() {
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location) => {
      dispatch(clearMessage()); // clear message when changing location
    });
  }, [dispatch]);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [logOut]);

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
          <a href="/" className="nav-link" onClick={logOut}>
            LogOut
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavbarUser;
