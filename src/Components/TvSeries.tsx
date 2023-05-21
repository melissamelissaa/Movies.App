import { resultObj } from "./Main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type obj = {
  backdrop_path: string;
  name: string;
  overview: string;
  poster_path: string;
};

type TvSeriesProps = {
  result3: obj[];
 setValue: Function;
};

export const TvSeries = (props: TvSeriesProps) => {
  return (
    <div className="tvSeries">
      <div className="tvSeries-search">
        <FontAwesomeIcon icon={faMagnifyingGlass} className="tvSeries-icon" />
        <input
          type="text"
          placeholder="Search for TV series"
          className="tvSeries-input"
        ></input>
      </div>

      <div className="tvSeries-TrendingDiv">
        {props.result3.map((res) => (
          <div className="tvSeries-poster-div" key={Math.random() * 10000}>
            <img
              className="tvSeries-poster"
              src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            />
            <p className="tvSeries-movieTitle">{res.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
