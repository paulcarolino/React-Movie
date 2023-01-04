import "./App.css";
import React from "react";
import SearchMovie from "./component/SearchMovies";

function App() {
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>
      <SearchMovie />
    </div>
  );
}

export default App;
