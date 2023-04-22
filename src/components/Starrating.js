import React from 'react'

const Starrating = ({rating, handleRating}) => {
    function rtstar(x) {
        let stars = []
        for (let i = 0; i = 5; i++) {
            if (i <= x) {
                stars.push(<span style={{ color: 'gold' }}>★</span>)
            } else stars.push(<span style={{ color: 'black' }}>★</span>)

        }
        return stars
    }
    return (
        <div>
            <h3>{rtstar(rating)}</h3>
        </div>
    )
}
Starrating.defaultProps = {
    handleRating: ()=> {}
  }
  
export default Starrating