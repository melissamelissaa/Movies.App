import { useEffect, useState } from "react";

import { PosterRender } from "./PosterRender";

import { resultObj } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solid } from "@fortawesome/free-solid-svg-icons";

export type obj = {
  backdrop_path: string;
  title: string;
  name: string;
  overview: string;
  poster_path: string;
  release_date: string;
  media_type: string;
  adult: boolean;
  first_air_date: string;
};

type TvSeriesProps = {
  result3: obj[];
  setValue: Function;
  setPath: Function;
  inputedTvResult: resultObj[];
};
const objec: resultObj[] = [];

export const TvSeries = (props: TvSeriesProps) => {
  const [bookmarkedData, setBookmarkedData] = useState(objec);
  const [changeValue, setChangeValue] = useState(0);

  useEffect(() => {
    const bookmarked = localStorage.getItem("Bookmarks") || "";

    if (bookmarked === "") return;

    const parsed = JSON.parse(bookmarked);

    setBookmarkedData(parsed);
    window.scrollTo({ top: 0, behavior: "smooth" });
    props.setPath(window.location.pathname);
  }, [changeValue]);

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
        <div className="tvSeries-TrendingDiv">
          {props.result3.map((res) => (
            <div className="tvSeries-poster-div" key={Math.random() * 10000}>
              <div
                className="bookmarkDiv"
                onClick={() => {
                  if (localStorage.getItem("Bookmarks")) {
                    const str: string = localStorage.getItem("Bookmarks") || "";
                    let arr = JSON.parse(str);
                    const found = arr.find(
                      (movie: any) => movie.title === res.name
                    );
                    if (!found) {
                      res.title = res.name;
                      arr.push(res);
                    } else {
                      arr = arr.filter(
                        (movie: any) => movie.title !== res.name
                      );
                    }
                    localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  } else {
                    const arr = [res];
                    localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  }
                  setChangeValue(Math.random() * 100000);
                }}
              >
                {bookmarkedData.find(
                  (movie: resultObj) => res.title === movie.title
                ) ? (
                  <FontAwesomeIcon className="movies-bookmark" icon={solid} />
                ) : (
                  <FontAwesomeIcon
                    className="movies-bookmark"
                    icon={faBookmark}
                  />
                )}
              </div>
              <img
                className="tvSeries-poster"
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              />
              <p className="details">
                {res.first_air_date.split("-")[0]} • {res.media_type} • {" "}
                {!res.adult ? "G" : "18+"}
              </p>
              <p className="tvSeries-movieTitle">{res.name}</p>
            </div>
          ))}
        </div>
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
        <PosterRender
          classname="main-TrendingDiv"
          forMap={props.inputedTvResult}
          innerClassName="main-poster-div"
        />
      </div>
    );
  }
};
