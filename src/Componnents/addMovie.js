import React, { useState } from "react";
import PropTypes from 'prop-types';
import 'C:/Users/jihen/usestate-app/src/App.css';
function AddMovie(props) {
  const [objs, setobjs] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
  });

  return (
    <div className="row mt-3">
      <div className="col-10">

      <div className="row mt-3">
      <div className="col-2">
      <label htmlFor="title" style={{ fontWeight: 'bold' }}>Title:</label>
        </div>
      <div className="col-10">
      <input
          className="form-control"
          type="text"
          onChange={(e) => setobjs({ ...objs, title: e.target.value })}
        />
        </div>
        </div>
        
      </div>
      <div className="col-10">

      <div className="row mt-3">
      <div className="col-2">
      <label htmlFor="description" style={{ fontWeight: 'bold' }}>Description:</label>
        </div>
      <div className="col-10">
      <input
          className="form-control"
          type="text"
          onChange={(e) => setobjs({ ...objs, description: e.target.value })}
        />
        </div>
        </div>

      </div>
      <div className="col-10">

      <div className="row mt-3">
      <div className="col-2">
      <label htmlFor="posterURL" style={{ fontWeight: 'bold' }}>PosterURL:</label>
        </div>
      <div className="col-10">
      <input
          className="form-control"
          type="text"
          onChange={(e) => setobjs({ ...objs, posterURL: e.target.value })}
        />
        </div>
        </div>

        
      </div>
      <div className="col-10">

      <div className="row mt-3">
      <div className="col-2">
      <label htmlFor="rating" style={{ fontWeight: 'bold' }}>Rating:</label>
        </div>
      <div className="col-10">
      <input
          className="form-control"
          type="text"
          onChange={(e) => setobjs({ ...objs, rating: e.target.value })}
        />
        </div>
        </div>

        <div className="row mt-3">
      <div className="col-2">
      <button className="buttonAdd" onClick={() =>
            props.handleAdd({
              id: Date.now(),
              title: objs.title,
              description: objs.description,
              posterURL: objs.posterURL,
              rating: objs.rating,
            })}>
      <img src="add.png" alt="Add" />
      
    </button>
        </div>
        </div>

      </div>

      
    </div>
  );
}

AddMovie.propTypes = {
  handleAdd: PropTypes.func,
};

export default AddMovie;

