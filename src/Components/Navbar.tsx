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
        <FontAwesomeIcon className="navbar-icon bars" icon={faBars} />
        <FontAwesomeIcon className="navbar-icon film" icon={faFilm} />
        <FontAwesomeIcon className="navbar-icon tv" icon={faTv} />
        <FontAwesomeIcon className="navbar-icon bookmark" icon={faBookmark} />
      </div>
    </div>
  );
};
