import React from 'react'

import Card from './Card';

export const CardContainer = props => {
  return (
    <div className="cat-cards">
      {props.cats.map((cat, idx) => (
        <Card key={idx} catInfo={cat} />
      ))}
    </div>
  )
}
