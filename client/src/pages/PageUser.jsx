import React from "react";
import FooterUser from "../components/FooterUser";
import MainUser from "../components/MainUser";
import NavbarUser from "../components/NavbarUser";
import "../stylesheets/PageUser.css";

function PageUser() {
  return (
    <>
      <NavbarUser />
      <MainUser />
      <FooterUser />
    </>
  );
}

export default PageUser;
