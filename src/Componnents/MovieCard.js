import React from "react";
import PropTypes from 'prop-types'
import  Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

const MovieCard=({
    obj:{id,title,description,posterURL,rating}
})=>{
    return(
        
      <Link to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
          {description}
          </Card.Text>
          <Card.Text>{posterURL}</Card.Text>
          <Card.Text>{rating}</Card.Text>
        </Card.Body>
      </Card>
      </Link>
    )
}
MovieCard.propTypes={
    title:PropTypes.string,
    description:PropTypes.string,
    posterURL :PropTypes.string,
    rating:PropTypes.string,
};
export default MovieCard;