import React from 'react'

const Card = props => {
  return (
    <div className="cat-card">
      <img src={props.catUrl} alt='Cat' />
    </div>
  )
}

export default Card;