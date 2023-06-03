import { useEffect } from "react";

import { PosterRender } from "./PosterRender";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export type resultObj = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
  release_date: string;
  media_type: string;
  adult: boolean;
  first_air_date: string;
};

type mainProps = {
  result: resultObj[];
  setValue: Function;
  setPath: Function;
  inputedMainResult: resultObj[];
};

export const Main = (props: mainProps) => {
  useEffect(() => {
    //if user is on bottom of the page and page refreshs it's scrolls to the top
    props.setPath(window.location.pathname);
    window.scrollTo({ top: 0, behavior: "smooth" });
    const bookmarked = localStorage.getItem("Bookmarks") || "";
    if (bookmarked === "") return;
  }, []);

  // if there is no data

  if (!props.result) return null;
  if (props.inputedMainResult.length === 0) {
    return (
      <div className="main">
        <div className="main-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="main-icon" />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="main-input"
            onChange={(e) => props.setValue(e.target.value)}
          ></input>
        </div>

        <h1 className="main-trending">Trending</h1>
        <PosterRender
          classname="main-TrendingDiv"
          forMap={props.result}
          innerClassName="main-poster-div"
        />
      </div>
    );
  } else {
    return (
      <div className="main">
        <div className="main-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="main-icon" />
          <input
            type="text"
            placeholder="Search for movies or TV series"
            className="main-input"
            onChange={(e) => props.setValue(e.target.value)}
          ></input>
        </div>
        <PosterRender
          classname="main-TrendingDiv"
          forMap={props.inputedMainResult}
          innerClassName="main-poster-div"
        />
      </div>
    );
  }
};
