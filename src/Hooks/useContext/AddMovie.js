import React, { useState, useContext } from "react";
import { MovieContext } from './MovieContext';

const AddMovie = () => {
  const [movies, setMovie] = useContext(MovieContext);

  const [newName, setName] = useState("");
  const [newPrice, setPrice] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
    //alert(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addMovie = (e) => {
    //e.preventDefault();
    setMovie((prevMovies) => [...prevMovies, { name: newName, price: newPrice, id: 1001 }]);
  };
  
  return (
    <>
    {/* <form onSubmit={addMovie}> */}
      <br></br>
      <input type="text" name="name" onChange={updateName} placeholder="Movie Name" />
      <input type="text" name="price" onChange={updatePrice} placeholder="Movie Price" />
      <button onClick={addMovie}>Add Movie</button>
    {/* </form> */}
    </>
  );
};

export default AddMovie;
