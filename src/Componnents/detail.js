import React from "react";
import { useParams } from 'react-router-dom';

const Detail = ({ movieData }) => {
  const { id } = useParams();

  // Find the movie with the matching ID
  const movie = movieData.find((movie) => movie.id === parseInt(id));

  return (
    <div>
      <h1>Movie Detail</h1>
      {movie ? (
        <div>
          <h2>{movie.title}</h2>
          <p>Description: {movie.description}</p>
          <p>Poster URL: {movie.posterURL}</p>
          <p>Rating: {movie.rating}</p>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default Detail;