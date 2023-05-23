import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

import { resultObj } from "./Main";
import { obj } from "./TvSeries";

type PosterRenderProps = {
    classname: string;
    forMap: resultObj[] | obj[]
    innerClassName: string;
}


export const PosterRender = (props: PosterRenderProps) => {
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
                      arr = arr.filter(
                        (movie: any) => movie.title !== res.title
                      );
                    }
                    localStorage.setItem("Bookmarks", JSON.stringify(arr));
                  } else {
                    const arr = [res];
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
              {res.title ? <p className="movies-movieTitle">{res.title}</p> : <p className="movies-movieTitle">{res.name}</p>}
            </div>
          ))}
        </div>
    )
}