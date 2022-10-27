import React from "react";
import { Link, useLocation } from "react-router-dom";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Nav } from "./styles";

const MigaPan = () => {
  const location = useLocation();
  const locationArray = location.pathname.split("/");
  let pages = [];

  const getNameFromUrl = (path) => {
    return path.split("-").join(" ");
  };

  locationArray.forEach((path, i) => {
    if (path === "") {
      pages.push({ id: i, url: "/", name: "home", active: false });
    } else if (i !== locationArray.length - 1) {
      pages.push({
        id: i,
        url: "/" + path,
        name: getNameFromUrl(path),
        active: false,
      });
    } else {
      pages.push({
        id: i,
        url: "/" + path,
        name: getNameFromUrl(path),
        active: true,
      });
    }
  });

  return (
    <Nav
      style={{
        "--bs-breadcrumb-divider": "'>'",
      }}
      aria-label="Miga de pan"
    >
      <ol className="breadcrumb py-2 border-bottom">
        {pages.map((page) => {
          let classes =
            page.url === "/"
              ? "breadcrumb-item"
              : "breadcrumb-item d-flex align-items-center";
          if (page.active) {
            classes += " active";
          }
          return (
            <li className={classes} key={page.id}>
              {page.url === "/" ? (
                <Link to={page.url} className="home fs-5">
                  {page.url === "/" ? (
                    <FontAwesomeIcon icon={solid("house-chimney")} />
                  ) : (
                    ""
                  )}
                </Link>
              ) : !page.active ? (
                <Link to={page.url} className="small">
                  {page.name}
                </Link>
              ) : (
                <span className="small">{page.name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </Nav>
  );
};

export { MigaPan };
