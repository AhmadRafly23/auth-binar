import React from "react";

function FooterUser() {
  return (
    <>
      <div id="footer-section">
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-md-4">
              <p className="w-75">
                Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000
              </p>
              <p>binarcarrental@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-2">
              <p className="font-weight-bold">Our services</p>
              <p className="font-weight-bold">Why Us</p>
              <p className="font-weight-bold">Testimonial</p>
              <p className="font-weight-bold">FAQ</p>
            </div>
            <div className="col-md-3">
              <p>Connect with us</p>
              <div>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/HDLm5Gk/icon-facebook.png"
                    alt="icon-facebook"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/bsJjK8F/icon-instagram.png"
                    alt="icon-instagram"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/jLjDcp2/icon-mail.png"
                    alt="icon-mail"
                    border="0"
                  />
                </a>
                <a href="https://imgbb.com/">
                  <img
                    src="https://i.ibb.co/t2B4XC6/icon-twitch.png"
                    alt="icon-twitch"
                    border="0"
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
            <div className="col-md-3">
              <p>Copyright Binar 2022</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterUser;
