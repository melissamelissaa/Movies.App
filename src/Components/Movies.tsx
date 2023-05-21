import { resultObj } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
type moviesProps = {
  result2: resultObj[];
  setValue: Function;
};

export const Movies = (props: moviesProps) => {
  return (
    <div className="movies">
      <div className="movies-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="movies-icon" />
        <input
          type="text"
          placeholder="Search for movies"
          className="movies-input"
        ></input>
      </div>
      <div className="movies-TrendingDiv">
        {props.result2.map((res) => (
          <div className="movies-poster-div" key={Math.random() * 1000}>
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
};
