import React from "react";
import "../stylesheets/Navbar.css";

function Footer() {
  return (
    <>
      <div id="footer">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div class="col-md-2">
              <p class="font-weight-bold">Our services</p>
              <p class="font-weight-bold">Why Us</p>
              <p class="font-weight-bold">Testimonial</p>
              <p class="font-weight-bold">FAQ</p>
            </div>
            <div class="col-md-3">
              <p>Connect with us</p>
              <div>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/HDLm5Gk/icon-facebook.png"
                    alt="icon-facebook"
                    border="0"
                    className="mr-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/bsJjK8F/icon-instagram.png"
                    alt="icon-instagram"
                    border="0"
                    className="mr-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/jLjDcp2/icon-mail.png"
                    alt="icon-mail"
                    border="0"
                    className="mr-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/t2B4XC6/icon-twitch.png"
                    alt="icon-twitch"
                    border="0"
                    className="mr-2"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/Tmqs9XX/icon-twitter.png"
                    alt="icon-twitter"
                    border="0"
                  />
                </a>
              </div>
            </div>
            <div class="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
