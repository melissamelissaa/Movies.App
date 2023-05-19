import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export const Bookmarks = () => {
  return (
    <div className="main">
      <div className="main-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="main-icon" />
        <input
          type="text"
          placeholder="Search for bookmarked shows"
          className="main-input"
        ></input>
      </div>
    </div>
  );
};
