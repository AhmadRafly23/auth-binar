import "../stylesheets/PageAdmin.css";
import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/auth";
import { clearMessage } from "../actions/message";
import { history } from "../helpers/history";
import EventBus from "../common/EventBus";
import { AiOutlineRight } from "react-icons/ai";

function PageAdmin() {
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
    <>
      <div className="content">
        <div className="d-flex cek" style={{ maxWidth: "300px" }}>
          <div className="col-nav">
            <div className="box-rectangle"></div>
            <div className="nav-item">
              <div className="nav-menu">
                <img src="./image/home_logo.png" alt="home_logo" />
                <p className="nav-text">Dashboard</p>
              </div>
              <div className="nav-menu">
                <img src="./image/truck_logo.png" alt="truck_logo" />
                <p className="nav-text">Cars</p>
              </div>
            </div>
          </div>
          <div className="sidebar">
            <div className="col-box">
              <div className="icon"></div>
            </div>
            <div className="col-item">
              <p className="list-item">Dashboard</p>
            </div>
          </div>
        </div>

        <div className="container-fluid" style={{ marginLeft: "300px" }}>
          <div className="row">
            <div className="navbar-admin top">
              <img
                className="ml-3"
                src="./image/menu_logo.png"
                alt="menu_logo"
                style={{ height: "20px", width: "20px" }}
              />
              <div className="navbar-item d-flex">
                <form>
                  <input
                    className="search"
                    type="text"
                    placeholder="Search"
                    required
                  />
                  <input className="button" type="button" value="Search" />
                </form>
                <div class="dropdown">
                  <div
                    class="dropdown-toggle d-flex align-items-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="./image/avatar.png"
                      width="32"
                      height="32"
                      class="rounded-circle me-2"
                      style={{ objectFit: "cover" }}
                    />
                    <p class="my-0 me-2">Ahmad Rafly</p>
                  </div>
                  <div
                    class="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <a class="dropdown-item" href="/" onClick={logOut}>
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row d-flex flex-column h-100"
            style={{ backgroundColor: "#f4f5f7", marginTop: "70px" }}
          >
            <div
              className="sub-tree d-flex mt-3 mb-3"
              style={{ marginLeft: "1rem" }}
            >
              <a href="#">
                <p className="fw-bold">Dashboard</p>
              </a>
              <AiOutlineRight className="mx-2 mt-1" />
              <a href="#">
                <p className="fw-bold">Dashboard</p>
              </a>
            </div>

            <div>
              <div class="container-fluid">
                <h2>Dashboard</h2>
                <h3>
                  <img src="./image/fi.png" alt="" /> list order
                </h3>
                <table id="datatable" class="table">
                  <thead>
                    <tr>
                      <th class="text-center">No</th>
                      <th>
                        User Email <img src="./image/fi_sort.png" alt="" />
                      </th>
                      <th>
                        Car <img src="./image/fi_sort.png" alt="" />
                      </th>
                      <th>
                        Start Rent <img src="./image/fi_sort.png" alt="" />
                      </th>
                      <th>
                        Finish Rent <img src="./image/fi_sort.png" alt="" />
                      </th>
                      <th>
                        Price <img src="./image/fi_sort.png" alt="" />
                      </th>
                      <th>
                        Satus <img src="./image/fi_sort.png" alt="" />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="text-center">1</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">2</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">3</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">4</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">5</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">6</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">7</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">8</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">9</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                    <tr>
                      <td class="text-center">10</td>
                      <td>User Email</td>
                      <td>Car</td>
                      <td>Start Rent</td>
                      <td>Finish Rent</td>
                      <td>Price</td>
                      <td>Satus</td>
                    </tr>
                  </tbody>
                </table>
                <div class="bottom">
                  <div class="row ml-3">
                    <p class="limit col-lg-1 col-md-2">Limit</p>
                    <p class="tjtp col-lg-2 col-md-2">Jump to page</p>
                  </div>
                  <div class="row ml-3">
                    <div class="drop col-lg-1 col-md-2 col-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>10</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="40">40</option>
                      </select>
                    </div>
                    <div class="jtp col-lg-4 col-md-4 col-12">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                      >
                        <option selected>1</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                      <button type="button" class="btn-admin">
                        Go
                      </button>
                    </div>
                    <div class="paging col-lg-7 col-md-6 col-12 justify-content-end">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination mr-3">
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item active">
                            <a class="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              ...
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">
                              9
                            </a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
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

export default PageAdmin;
