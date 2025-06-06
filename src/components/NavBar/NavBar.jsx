import React from "react";
import Styles from "./NavBar.module.css";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${Styles.NavBase}`}
      >
        <div className="container-fluid">
          <a>
            <img
              src="logo.png"
              alt=""
              className={`${Styles.MyImg} img-fluid`}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 ${Styles.NElements}`}
            >
              <li className="nav-item">
                <a
                  className={`nav-link active ${Styles.Active}`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Stock
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Report
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Sell
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Scheme
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Order
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Tag
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Loan
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Cr/Dr
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Expense
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  User List
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  More
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="SearchBox">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              {<CiSearch />}
            />
          </div> */}
          <div className={Styles.BoxElements}>
            <div className={Styles.Box}>
              <div className="Text">
                <input
                  type="search"
                  name="Search"
                  id=""
                  placeholder="Search"
                  className={Styles.Se1}
                />
              </div>
              {/* <div className={Styles.C1}> */}
              <CiSearch size={24} />
              {/* </div> */}
            </div>
            <div className={Styles.Box}>
              <div className={Styles.Text}>OMINIUMSW</div>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              ></a>
            </div>
            <div className={Styles.Box1}>
              <img
                src="/nav-profile.svg"
                alt=""
                className={`${Styles.MyImgPro} img-fluid`}
              />
            </div>
          </div>
        </div>
      </nav>
      {/* <hr /> */}
    </div>
  );
};

export default NavBar;
