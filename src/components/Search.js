import React from 'react'
import Starrating from './Starrating'

const Search = ({ rating, search, handleSearch, handlerating }) => {
  return (
    <div>
      <h1>Movie App</h1>
      <div>
        <input type='text' value={search} onChange={handleSearch} />
        <p>star rating </p>
        <Starrating rating={rating} handlerating={handlerating} />
      </div>
    </div>
  )
}

export default Search 