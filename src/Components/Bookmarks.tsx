import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type bookmarksProps = {
  setValue: Function;
};
export const Bookmarks = (props: bookmarksProps) => {
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
