import React from 'react'
import Card from './Card'

const Liste = ({ films }) => {
  return (
    <div className='liste'>

      { films.map((el) => (

        <div key={el.id}>
          <Card movie={el} />
        </div>
          ))
      }

    </div>
      )
}

      export default Liste