import React from 'react'

export const Card = props => {
  return (
    <div className="cat-card">
      <img src={props.catUrl} alt={''} />
    </div>
  )
}
