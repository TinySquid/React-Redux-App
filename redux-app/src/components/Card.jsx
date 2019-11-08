import React from 'react'

const Card = props => {
  return (
    <div className="card">
      <img src={props.catUrl} alt='Cat' />
    </div>
  )
}

export default Card;