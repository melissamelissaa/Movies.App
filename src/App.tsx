import React from "react";
import "./App.css";

import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Bookmarks } from "./Components/Bookmarks";
import { Movies } from "./Components/Movies";
import { TvSeries } from "./Components/TvSeries";

function App() {
  const [result, setResult] = useState([]);
  const [result2, setResult2] = useState([]);
  const [result3, setResult3] = useState([]);

  const [bookmarkIsClicked, setBookmarkIsClicked] = useState(false);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDJhM2NmNThjMWFlZDg5ZDc3OTU3MWRlMGQyMmE5ZCIsInN1YiI6IjY0NjY3OTU1MmJjZjY3MDE1NTgxYTExOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.TFRGu4Omy_TLOsoL-jL0GQkMBknXPTvpxdTslpP_VSQ",
      },
    };

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
        console.log(response.results);
        setResult2(response.results);
      })
      .catch((err) => console.error(err));

    fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setResult3(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main result={result} />} />
        <Route path="/movies" element={<Movies result2={result2} />} />
        <Route path="/tvseries" element={<TvSeries result3={result3} />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
      </Routes>

      {/* <Main result={result} /> */}
    </div>
  );
}

export default App;
