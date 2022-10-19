import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { Nav } from "./Nav/Nav";
import { MainHeader, InputGroupHeader, UlMainLinks } from "./styles";

import logo from "@images/logo_compensar.png";

const Header = () => {
  return (
    <MainHeader className="sticky-top">
      <div className="container-fluid">
        <div className="row justify-content-between align-items-center px-md-5 py-2 shadow-sm bg-white">
          <div className="col-auto">
            <a href="#">
              <img src={logo} alt="Logo Principal" />
            </a>
          </div>
          <div className="col-auto">
            <InputGroupHeader className="position-relative">
              <input
                type="text"
                className="form-control form-control-sm rounded-pill"
                placeholder="Buscas algo?"
                aria-label="Buscas algo?"
                aria-describedby="btn-search-icon"
              />
              <button
                type="button"
                id="btn-search-icon"
                className="position-absolute rounded-circle"
              >
                <FontAwesomeIcon icon={solid("magnifying-glass")} />
              </button>
            </InputGroupHeader>
          </div>
          <div className="col-auto">
            <UlMainLinks className="list-unstyled d-flex ps-3 border-start mb-0">
              <li className="mx-2">
                <FontAwesomeIcon icon={solid("calendar-days")} />
              </li>
              <li className="mx-2">
                <FontAwesomeIcon icon={solid("bell")} />
              </li>
              <li className="mx-2">
                <FontAwesomeIcon icon={solid("location-dot")} />
              </li>
              <li className="mx-2">
                <FontAwesomeIcon icon={solid("circle-user")} />
              </li>
            </UlMainLinks>
          </div>
        </div>
        <Nav />
      </div>
    </MainHeader>
  );
};

export { Header };
