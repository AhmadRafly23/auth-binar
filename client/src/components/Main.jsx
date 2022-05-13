import React from "react";
import "../stylesheets/Navbar.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Main() {
  return (
    <>
      <div
        id="hero-section"
        style={{ paddingTop: "1.25rem", marginTop: "4.5rem" }}
      >
        <div className="container-fluid">
          <div className="row align-items-center flex-column-reverse flex-md-row">
            <div className="col-md-6 d-flex justify-content-center py-lg-5 py-xl-0">
              <div className="col-md-8 text-center text-md-left">
                <h1 className="heading-1">
                  Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)
                </h1>
                <p
                  className="w-md-75"
                  style={{
                    fontSize: "14px",
                    lineHeight: "20px",
                    fontWeight: "300",
                    marginBottom: "1.5rem",
                  }}
                >
                  Selamat datang di Binar Car Rental. Kami menyediakan mobil
                  kualitas terbaik dengan harga terjangkau. Selalu siap melayani
                  kebutuhanmu untuk sewa mobil selama 24 jam.
                </p>
                <a
                  className="btn btn-web px-5 py-2 font-weight-bold mb-5 mb-md-5 mb-lg-0"
                  href="#"
                >
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
            <div className="col-md-6 p-0">
              <img className="w-100" src="./image/img_car.png" alt="car" />
            </div>
          </div>
        </div>
      </div>
      <div id="service" style={{ margin: "6rem 0" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <img
                className="img-fluid px-3 px-md-0 mr-md-5 mb-md-3 mb-lg-0"
                src="./image/img_service.png"
                alt="service"
              />
            </div>
            <div className="col-lg-6 d-flex px-0 justify-content-center justify-content-lg-start">
              <div className="w-75 ml-md-5 mt-3 mt-md-0">
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    lineHeight: "36px",
                    marginBottom: "1.5rem",
                  }}
                >
                  Best Car Rental for any kind of trip in (Lokasimu)!
                </h2>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: "300",
                    lineHeight: "20px",
                  }}
                >
                  <p className="mb-4 description">
                    Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan
                    harga lebih murah dibandingkan yang lain, kondisi mobil
                    baru, serta kualitas pelayanan terbaik untuk perjalanan
                    wisata, bisnis, wedding, meeting, dll.
                  </p>
                  <ul className="list-group">
                    <li>
                      <img src="./image/ceklist.png" className="mr-3" />
                      Sewa Mobil Dengan Supir di Bali 12 Jam
                    </li>
                    <li>
                      <img src="./image/ceklist.png" className="mr-3" />
                      Sewa Mobil Lepas Kunci di Bali 24 Jam
                    </li>
                    <li>
                      <img src="./image/ceklist.png" className="mr-3" />
                      Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li>
                      <img src="./image/ceklist.png" className="mr-3" />
                      Gratis Antar - Jemput Mobil di Bandara
                    </li>
                    <li>
                      <img src="./image/ceklist.png" className="mr-3" />
                      Layanan Airport Transfer / Drop In Out
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="why" style={{ marginBottom: "6rem" }}>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <div className="row">
                <div className="col">
                  <h2 className="heading-2">Why Us?</h2>
                  <p className="description">
                    Mengapa harus pilih Binar Car Rental?
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-3 mb-3 mb-md-0">
                  <div className="card shadow h-100 p-3">
                    <div className="card-body">
                      <img
                        className="mb-3"
                        src="./image/icon_complete.png"
                        alt="icon"
                      />
                      <h5 className="card-title font-weight-bold">
                        Mobil Lengkap
                      </h5>
                      <p className="card-text description">
                        Tersedia banyak pilihan mobil, kondisi masih baru,
                        bersih dan terawat
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <div className="card shadow h-100 p-3">
                    <div className="card-body">
                      <img
                        className="mb-3"
                        src="./image/icon_price.png"
                        alt="icon"
                      />
                      <h5 className="card-title font-weight-bold">
                        Harga Murah
                      </h5>
                      <p className="card-text description">
                        Harga murah dan bersaing, bisa bandingkan harga kami
                        dengan rental mobil lain
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <div className="card shadow h-100 p-3">
                    <div className="card-body">
                      <img
                        className="mb-3"
                        src="./image/icon_24hrs.png"
                        alt="icon"
                      />
                      <h5 className="card-title font-weight-bold">
                        Layanan 24 Jam
                      </h5>
                      <p className="card-text description">
                        Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                        juga tersedia di akhir minggu
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-3 mb-md-0">
                  <div className="card shadow h-100 p-3">
                    <div className="card-body">
                      <img
                        className="mb-3"
                        src="./image/icon_professional.png"
                        alt="icon"
                      />
                      <h5 className="card-title font-weight-bold">
                        Sopir Profesional
                      </h5>
                      <p className="card-text description">
                        Sopir yang profesional, berpengalaman, jujur, ramah dan
                        selalu tepat waktu
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="testimonial">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="text-center">
                <h2 className="heading-2 mb-3">Testimonial</h2>
                <p className="description">
                  Berbagai review positif dari para pelanggan kami
                </p>
              </div>
              <OwlCarousel className="owl-theme" loop margin={5} nav>
                <div className="">
                  <div className="row py-5 m-2 custom-user-testi">
                    <div className="col-3 mt-4 pt-2">
                      <img
                        className="w-75"
                        src={require("../images/img_photo-1.png")}
                        alt="Photo"
                      />
                    </div>

                    <div className="col-9">
                      <span></span>

                      <p className="custom-user-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum cum repellat nesciunt provident pariatur quibusdam
                        at voluptatem ad perspiciatis magni enim mollitia,
                        tempore eligendi omnis amet doloremque dolores
                        exercitationem ullam!
                      </p>

                      <p className="font-weight-bold custom-user-font">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="row py-5 m-2 custom-user-testi">
                    <div className="col-3 mt-4 pt-2">
                      <img
                        className="w-75"
                        src={require("../images/img_photo-2.png")}
                        alt="Photo"
                      />
                    </div>

                    <div className="col-9">
                      <span></span>

                      <p className="custom-user-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum cum repellat nesciunt provident pariatur quibusdam
                        at voluptatem ad perspiciatis magni enim mollitia,
                        tempore eligendi omnis amet doloremque dolores
                        exercitationem ullam!
                      </p>

                      <p className="font-weight-bold custom-user-font">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="row py-5 m-2 custom-user-testi">
                    <div className="col-3 mt-4 pt-2">
                      <img
                        className="w-75"
                        src={require("../images/img_photo-1.png")}
                        alt="Photo"
                      />
                    </div>

                    <div className="col-9">
                      <span></span>

                      <p className="custom-user-font">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Illum cum repellat nesciunt provident pariatur quibusdam
                        at voluptatem ad perspiciatis magni enim mollitia,
                        tempore eligendi omnis amet doloremque dolores
                        exercitationem ullam!
                      </p>

                      <p className="font-weight-bold custom-user-font">
                        John Dee 32, Bromo
                      </p>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
              ;
            </div>
          </div>
        </div>
        <div id="cta-banner mx-1 mx-md-0" style={{ margin: "6rem 0" }}>
          <div
            className="container"
            style={{ backgroundColor: "#0d28a6", padding: "4rem" }}
          >
            <div className="row">
              <div className="col d-flex justify-content-center align-items-center flex-column">
                <h1
                  className="heading-1 text-center text-lg-left"
                  style={{ color: "white" }}
                >
                  Sewa Mobil di (Lokasimu) Sekarang
                </h1>
                <p
                  className="description text-center text-light"
                  style={{ maxWidth: "468px", marginBottom: "3rem" }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a className="btn btn-web px-5 py-2 font-weight-bold" href="#">
                  Mulai Sewa Mobil
                </a>
              </div>
            </div>
          </div>
        </div>
        <div id="faq" style={{ marginBottom: "9.5rem" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
              <div className="col-md-6">
                <div className="mb-3">
                  <div className="menudown">
                    <a
                      className="card-link d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#menuone"
                      aria-expanded="false"
                      aria-controls="menuone"
                    >
                      Apa saja syarat yang dibutuhkan?
                      <span className="collapsed">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      <span className="expanded">
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </a>
                    <div id="menuone" className="collapse">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="menudown">
                    <a
                      className="card-link d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#menutwo"
                      aria-expanded="false"
                      aria-controls="menutwo"
                    >
                      Berapa hari minimal sewa mobil lepas kunci?
                      <span className="collapsed">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      <span className="expanded">
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </a>
                    <div id="menutwo" className="collapse">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="menudown">
                    <a
                      className="card-link d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#menuthree"
                      aria-expanded="false"
                      aria-controls="menuthree"
                    >
                      Berapa hari sebelumnya sabaiknya booking sewa mobil?
                      <span className="collapsed">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      <span className="expanded">
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </a>
                    <div id="menuthree" className="collapse">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="menudown">
                    <a
                      className="card-link d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#menufour"
                      aria-expanded="false"
                      aria-controls="menufour"
                    >
                      Apakah Ada biaya antar-jemput?
                      <span className="collapsed">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      <span className="expanded">
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </a>
                    <div id="menufour" className="collapse">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="menudown">
                    <a
                      className="card-link d-flex justify-content-between"
                      data-toggle="collapse"
                      href="#menufive"
                      aria-expanded="false"
                      aria-controls="menufive"
                    >
                      Bagaimana jika terjadi kecelakaan
                      <span className="collapsed">
                        <i className="fa-solid fa-angle-down"></i>
                      </span>
                      <span className="expanded">
                        <i className="fa-solid fa-angle-up"></i>
                      </span>
                    </a>
                    <div id="menufive" className="collapse">
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
