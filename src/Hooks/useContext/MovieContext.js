import React, { createContext, useState, useContext } from "react";

//Creating a Store
export const MovieContext = createContext();

export const MovieProvider = (props) => {

  const dummy ='my dummy text';

  const [movies, setMovies] = useState([
    {
      name: "KGF2", price: "120rs", id: "001",
    },
    {
      name: "Vikram",
      price: "120rs",
      id: "002",
    },
    {
      name: "Beast",
      price: "120rs",
      id: "003",
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};

//export default MovieProvider;