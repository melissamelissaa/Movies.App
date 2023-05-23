import { useEffect } from "react";

import { PosterRender } from "./PosterRender";

import { resultObj } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export type obj = {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
};

type TvSeriesProps = {
  result3: obj[];
  setValue: Function;
  setPath: Function;
  inputedTvResult: resultObj[];
};

export const TvSeries = (props: TvSeriesProps) => {
  useEffect(() => {
    props.setPath(window.location.pathname);
  }, []);

  if (props.inputedTvResult.length === 0) {
    return (
      <div className="tvSeries">
        <div className="tvSeries-search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="tvSeries-icon" />
          <input
            type="text"
            placeholder="Search for TV series"
            className="tvSeries-input"
            onChange={(e) => props.setValue(e.target.value)}
          ></input>
        </div>
        <h1 className="main-trending">TV series</h1>
        <PosterRender classname="tvSeries-TrendingDiv" forMap={props.result3} innerClassName="main-poster-div"/>
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
          {props.inputedTvResult.map((res) => (
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
