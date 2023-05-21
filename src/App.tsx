import React from "react";
import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import options  from "./options";

import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Bookmarks } from "./Components/Bookmarks";
import { Movies } from "./Components/Movies";
import { TvSeries } from "./Components/TvSeries";

function App() {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);

  const [mainInput, setMainInput] = useState("");
  const [moviesInput, setMoviesInput] = useState("");
  const [tvInput, setTvInput] = useState("");
  const [bookmarkInput, setBookmarkInput] = useState("");

  const [inputedMainResult, setInputedMainResult] = useState([])
  const [inputedMoviesResult, setInputedMoviesResult] = useState([])
  const [inputedTvResult, setInputedTvResult] = useState([])
  const [inputedBookmarkResult, setInputedBookmarkResult] = useState([])

  const [bookmarkIsClicked, setBookmarkIsClicked] = useState(false);


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
        console.log(response.results);
        setInputedMainResult(response.results);
      })
      .catch((err) => console.error(err));
  }, [mainInput]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Main result={result} setValue={setMainInput} inputedMainResult={inputedMainResult}/>}
        />
        <Route
          path="/movies"
          element={<Movies result2={result2} setValue={setMoviesInput} />}
        />
        <Route
          path="/tvseries"
          element={<TvSeries result3={result3} setValue={setTvInput} />}
        />
        <Route
          path="/bookmarks"
          element={<Bookmarks setValue={setBookmarkInput} />}
        />
      </Routes>

      {/* <Main result={result} /> */}
    </div>
  );
}

export default App;
