import React, { useState } from "react";

const Movie = ({ name, price, id }) => {
  return (
    <div>
      <h3>Id:{id}</h3>
      <h2>Movie Name: {name}</h2>
      <h2>Movie Price: {price}</h2>      
    </div>
  );
};

export default Movie;
