import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Url } from "url";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

export type resultObj = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
};

type mainProps = {
  result: resultObj[];
  setValue: Function;
  inputedMainResult: resultObj[];
};

export const Main = (props: mainProps) => {
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
        <div className="main-TrendingDiv">
          {props.result.map((res) => (
            <div className="main-poster-div" key={Math.random() * 100000}>
              <div className="bookmarkDiv"
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
              }}>
                <FontAwesomeIcon
                  className="movies-bookmark"
                  icon={faBookmark}
                />
              </div>
              <img
                className="main-poster"
                src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
              />
              <p className="main-movieTitle">{res.title}</p>
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
