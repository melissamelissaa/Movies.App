import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Bookmarks } from "./Components/Bookmarks";
import { Movies } from "./Components/Movies";
import { TvSeries } from "./Components/TvSeries";
import options from "./options";

function App() {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);

  const [mainInput, setMainInput] = useState("");
  const [moviesInput, setMoviesInput] = useState("");
  const [tvInput, setTvInput] = useState("");

  const [inputedMainResult, setInputedMainResult] = useState([]);
  const [inputedMoviesResult, setInputedMoviesResult] = useState([]);
  const [inputedTvResult, setInputedTvResult] = useState([]);

  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResult(response.results);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=2",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResult2(response.results);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setResult3(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/multi?query=${mainInput}&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setInputedMainResult(response.results);
      })
      .catch((err) => console.error(err));
  }, [mainInput]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${moviesInput}&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setInputedMoviesResult(response.results);
      })
      .catch((err) => console.error(err));
  }, [moviesInput]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${tvInput}&language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setInputedTvResult(response.results);
      })
      .catch((err) => console.error(err));
  }, [tvInput]);
  return (
    <div className="App">
      <Navbar path={path} />
      <div className="poster-rendering-div">
        <Routes>
          <Route
            path="/"
            element={
              <Main
                result={result}
                setValue={setMainInput}
                setPath={setPath}
                inputedMainResult={inputedMainResult}
              />
            }
          />
          <Route
            path="/movies"
            element={
              <Movies
                result2={result2}
                setValue={setMoviesInput}
                setPath={setPath}
                inputedMoviesResult={inputedMoviesResult}
              />
            }
          />
          <Route
            path="/tvseries"
            element={
              <TvSeries
                result3={result3}
                setValue={setTvInput}
                setPath={setPath}
                inputedTvResult={inputedTvResult}
              />
            }
          />
          <Route path="/bookmarks" element={<Bookmarks setPath={setPath} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
