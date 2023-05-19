import React from "react";
import "./App.css";

import { useState, useEffect } from "react";

import { Navbar } from "./Components/Navbar";
import { Main } from "./Components/Main";
import { Bookmarks } from "./Components/Bookmarks";

function App() {
  const [result, setResult] = useState([]);
  const [movies, setMovies] = useState([]);
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
        console.log(response.results);
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
        setMovies(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Main result={result} />
      {/* <Bookmarks /> */}
    </div>
  );
}

export default App;
