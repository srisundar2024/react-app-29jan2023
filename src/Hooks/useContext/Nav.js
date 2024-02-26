import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext';

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  // const dummy1 = useContext(MovieContext);
  return (
    <nav>
      <h2>Summary:</h2>
      <h3>Total Movies: {movies.length}</h3>
      <h3>First Movies Name: {movies[0].name}</h3>
      {/* {dummy1} */}
    </nav>
  );
};

export default Nav;
