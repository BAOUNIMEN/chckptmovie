import React from 'react'
import Starrating from './Starrating'
const Card = ({ movie }) => {
  return (
    <div>
      <Starrating rating={movie.rating} />
      <img src={movie.posterURL} alt='movie'></img>
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
    </div>
  )
}

export default Card