import { useEffect } from "react";

import { PosterRender } from "./PosterRender";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export type resultObj = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  name: string;
};

type mainProps = {
  result: resultObj[];
  setValue: Function;
  setPath: Function;
  inputedMainResult: resultObj[];
};

export const Main = (props: mainProps) => {
  useEffect(() => {
    props.setPath(window.location.pathname);
  }, []);

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
        <div className="main-TrendingDiv">
          {props.inputedMainResult.map((res) => (
            <div className="main-poster-div" key={Math.random() * 100000}>
              <div className="bookmarkDiv">
                <FontAwesomeIcon
                  className="movies-bookmark"
                  icon={faBookmark}
                />
              </div>
              <img
                className="main-poster"
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}` || ""}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
};
