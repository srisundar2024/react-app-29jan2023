import React, { useState, useContext } from "react";
import Movie from './Movie';
import { MovieContext } from './MovieContext';

const MovieList = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      <h3>Movie List</h3>
      {movies.map((movie) => (
        // <Movie name={movie.name} price={movie.price} key={movie.id} />
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
