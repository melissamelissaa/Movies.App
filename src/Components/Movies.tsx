import { useEffect } from "react";

import { PosterRender } from "./PosterRender";

import { resultObj } from "./Main";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

type moviesProps = {
  result2: resultObj[];
  setValue: Function;
  inputedMoviesResult: resultObj[];
  setPath: Function;
  // handleBookmark: (title: string) => MouseEventHandler;
};

export const Movies = (props: moviesProps) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setPath(window.location.pathname);
  }, []);

  if (props.inputedMoviesResult.length === 0) {
    return (
      <div className="movies">
        <div className="movies-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="movies-icon" />
          <input
            type="text"
            placeholder="Search for movies"
            className="movies-input"
            onChange={(e) => props.setValue(e.target.value)}
          ></input>
        </div>
        <h1 className="main-trending">Movies</h1>
        <PosterRender
          classname="movies-TrendingDiv"
          forMap={props.result2}
          innerClassName="movies-poster-div"
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
            placeholder="Search for movies"
            className="main-input"
            onChange={(e) => props.setValue(e.target.value)}
          ></input>
        </div>
        <div className="main-TrendingDiv">
          {props.inputedMoviesResult.map((res) => (
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
