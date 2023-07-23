import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import MovieCard from "./MovieCard"
import 'C:/Users/jihen/usestate-app/src/App.css';

const MovieList = ({ MovieCards }) => {
  const [filters, setFilter] = useState({
    movies: '',
  });

  const handleFilterChange = (e) => {
    const { value } = e.target;
    setFilter((prevFilters) => ({
      ...prevFilters,
      movies: value,
    }));
  };

  
  const [filteredMovieCards, setfilteredMovieCards] = useState([]);
  useEffect(() => {
    setfilteredMovieCards(
      MovieCards.filter((obj) => {
        const { movies } = filters;
        return (
          obj.title.toLowerCase().includes(movies.toLowerCase()) ||
          obj.rating.toLowerCase().includes(movies.toLowerCase())
        );
      })
    );
  }, [filters, MovieCards]);

  
  return (
    <div className="movie-list-container">
    <div className="row mt-3">
      <div className="col text-center">
      <label className="list-label">List of movies</label>
      </div>
      
      <div className="col-2">
      <input
        type="text"
        placeholder="Filter"
        value={filters.movies}
        onChange={handleFilterChange}
      />
      </div>

      
      
        
      
      
      </div>
      <div className="row mt-3" style={{ marginLeft: '20px' }}>
      {filteredMovieCards.map((obj, key) => (
        <div className="col-2" key={key}>
        <MovieCard obj={obj} />
      </div>
      ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  MovieCards: PropTypes.arrayOf(PropTypes.object),
};

export default MovieList;