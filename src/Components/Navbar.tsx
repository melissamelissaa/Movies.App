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
        <a href="/">
          <FontAwesomeIcon className="navbar-icon bars" icon={faBars} />
        </a>
        <a href="/movies">
          <FontAwesomeIcon className="navbar-icon film" icon={faFilm} />
        </a>
        <a href="/tvSeries">
          <FontAwesomeIcon className="navbar-icon tv" icon={faTv} />
        </a>
        <a href="/bookmarks">
          <FontAwesomeIcon className="navbar-icon bookmark" icon={faBookmark} />
        </a>
      </div>
    </div>
  );
};
