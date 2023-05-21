import { resultObj } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { MouseEventHandler } from "react";
import { Bookmarks } from "./Bookmarks";

type moviesProps = {
  result2: resultObj[];
  setValue: Function;
  inputedMoviesResult: resultObj[];
  // handleBookmark: (title: string) => MouseEventHandler;
};

export const Movies = (props: moviesProps) => {
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
        <div className="movies-TrendingDiv">
          {props.result2.map((res) => (
            <div className="movies-poster-div" key={Math.random() * 1000}>
              <div
                className="bookmarkDiv"
                onClick={() => {
                  if (localStorage.getItem("Bookmarks")) {
                    const str: string = localStorage.getItem("Bookmarks") || "";
                    let arr = JSON.parse(str);
                    const found = arr.find(
                      (movie: string) => movie === res.title
                    );
                    if (!found) {
                      arr.push(res.title);
                    } else {
                      arr = arr.filter((movie: string) => movie !== res.title);
                    }
                    localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  } else {
                    const arr = [res.title];
                    localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  }
                }}
              >
                <FontAwesomeIcon
                  className="movies-bookmark"
                  icon={faBookmark}
                />
              </div>
              <img
                className="movies-poster"
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              />
              <p className="movies-movieTitle">{res.title}</p>
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
