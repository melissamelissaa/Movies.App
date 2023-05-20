import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Url } from "url";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

export type resultObj = {
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
};

type mainProps = {
  result: resultObj[];
};

export const Main = (props: mainProps) => {
  if (!props.result) return null;
  return (
    <div className="main">
      <div className="main-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="main-icon" />
        <input
          type="text"
          placeholder="Search for movies or TV series"
          className="main-input"
        ></input>
      </div>

      <h1 className="main-trending">Trending</h1>
      <div className="main-TrendingDiv">
        {props.result.map((res) => (
          <div className="main-poster-div"  key={Math.random() * 100000}>
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
};
