import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

import { resultObj } from "./Main";

type bookmarksProps = {
  setPath: Function;
};
const obj: resultObj[] = [];

export const Bookmarks = (props: bookmarksProps) => {
  const [bookmarkedData, setBookmarkedData] = useState(obj);

  useEffect(() => {
    props.setPath(window.location.pathname);

    window.scrollTo({ top: 0, behavior: "smooth" });

    const bookmarked = localStorage.getItem("Bookmarks") || "";
    if (bookmarked === "") return;
    setBookmarkedData(JSON.parse(bookmarked));
  }, []);

  if (bookmarkedData.length === 0) {
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
        <div className="noBookmark">
          <p className="noBookmark-p">There are no bookmarks yet...</p>
        </div>
      </div>
    );
  }
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
      <h1 className="main-trending">Bookmarked Movies</h1>
      <div className="bookmarked-div">
        {bookmarkedData.map((res) => (
          <div className="movies-poster-div" key={Math.random() * 1000}>
            <div
              className="bookmarkDiv"
              onClick={() => {
                if (localStorage.getItem("Bookmarks")) {
                  const str: string = localStorage.getItem("Bookmarks") || "";
                  let arr = JSON.parse(str);

                  arr = arr.filter((movie: any) => movie.title !== res.title);

                  localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  setBookmarkedData(arr);
                }
              }}
            >
              <FontAwesomeIcon className="movies-bookmark" icon={faBookmark} />
            </div>
            <img
              className="movies-poster"
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            />

            {/* checks if data exists and which property to use */}
            {res ? (
              <p className="details">
                {!res.release_date && !res.first_air_date
                  ? null
                  : res.release_date
                  ? res.release_date.split("-")[0]
                  : res.first_air_date.split("-")[0]}{" "}
                • {res.media_type ? res.media_type : "movie"} • {" "}
                {!res.adult ? "G" : "18+"}
              </p>
            ) : null}

            <p className="movies-movieTitle">{res.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
