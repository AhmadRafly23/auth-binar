import React from "react";
import { Navigate, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarUser from "./NavbarUser";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to={"./login"} />;
  }

  console.log(currentUser.roles.includes("ROLE_ADMIN"));
  return (
    <div className="container">
      <NavbarUser />
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.email}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul>
    </div>
  );
};

export default Profile;
