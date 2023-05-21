import { Link } from "react-router-dom";
import {
  faClapperboard,
  faTv,
  faBookmark,
  faFilm,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Navbar = () => {
  return (
    <div className="navbar">
      <FontAwesomeIcon
        className="navbar-icon clapperboard"
        icon={faClapperboard}
      />
      <div className="navbar-sections">
        <Link to="/">
          <FontAwesomeIcon className="navbar-icon bars" icon={faBars} />
        </Link>
        <Link to="/movies">
          <FontAwesomeIcon className="navbar-icon film" icon={faFilm} />
        </Link>
        <Link to="/tvSeries">
          <FontAwesomeIcon className="navbar-icon tv" icon={faTv} />
        </Link>
        <Link to="/bookmarks">
          <FontAwesomeIcon className="navbar-icon bookmark" icon={faBookmark} />
        </Link>
      </div>
    </div>
  );
};
