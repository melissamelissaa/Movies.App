import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";
import {
  faClapperboard,
  faTv,
  faBookmark,
  faFilm,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type navbarProps = {
  path: string
}
export const Navbar = (props: navbarProps) => {
  return (
    <div className="navbar">
      <FontAwesomeIcon
        className="navbar-icon clapperboard"
        icon={faClapperboard}
      />
      <div className="navbar-sections">
        <Link to="/">
          <FontAwesomeIcon className={`navbar-icon bars ${props.path === "/" ? "active" : ""}` } icon={faBars} />
        </Link>
        <Link to="/movies">
          <FontAwesomeIcon className={`navbar-icon film ${props.path === "/movies" ? "active" : ""}`}icon={faFilm} />
        </Link>
        <Link to="/tvSeries">
          <FontAwesomeIcon className={`navbar-icon tv ${props.path === "/tvSeries" ? "active" : ""}` } icon={faTv} />
        </Link>
        <Link to="/bookmarks">
          <FontAwesomeIcon className={`navbar-icon bookmark ${props.path === "/bookmarks" ? "active" : ""}`} icon={faBookmark} />
        </Link>
      </div>
    </div>
  );
};
