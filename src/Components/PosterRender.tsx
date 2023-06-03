import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as solid } from "@fortawesome/free-solid-svg-icons";

import { resultObj } from "./Main";
import { obj } from "./TvSeries";

import { useEffect, useState } from "react";

type PosterRenderProps = {
  classname: string;
  forMap: resultObj[] | obj[];
  innerClassName: string;
};

const objec: resultObj[] = [];

export const PosterRender = (props: PosterRenderProps) => {
  const [bookmarkedData, setBookmarkedData] = useState(objec);
  const [changeValue, setChangeValue] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const bookmarked = localStorage.getItem("Bookmarks") || "";

    if (bookmarked === "") return;

    const parsed = JSON.parse(bookmarked);

    setBookmarkedData(parsed);
  }, [changeValue]);

  return (
    <div className={props.classname}>
      {props.forMap.map((res) => (
        <div className={props.innerClassName} key={Math.random() * 1000}>
          <div
            className="bookmarkDiv"
            onClick={() => {
              if (localStorage.getItem("Bookmarks")) {
                const str: string = localStorage.getItem("Bookmarks") || "";
                let arr = JSON.parse(str);
                const found = arr.find(
                  (movie: any) => movie.title === res.title
                );
                if (!found) {
                  arr.push(res);
                } else {
                  arr = arr.filter((movie: any) => movie.title !== res.title);
                }
                localStorage.setItem("Bookmarks", JSON.stringify(arr));
              } else {
                const arr = [res];
                localStorage.setItem("Bookmarks", JSON.stringify(arr));
              }
              // Causing re-render
              setChangeValue(Math.random() * 100000);
            }}
          >
            {bookmarkedData.find(
              (movie: resultObj) => res.title === movie.title
            ) ? (
              <FontAwesomeIcon className="movies-bookmark" icon={solid} />
            ) : (
              <FontAwesomeIcon className="movies-bookmark" icon={faBookmark} />
            )}
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
              •{res.media_type ? res.media_type : "movie"} •{" "}
              {!res.adult ? "G" : "18+"}
            </p>
          ) : null}

          {res.title ? (
            <p className="movies-movieTitle">{res.title}</p>
          ) : (
            <p className="movies-movieTitle">{res.name}</p>
          )}
        </div>
      ))}
    </div>
  );
};
