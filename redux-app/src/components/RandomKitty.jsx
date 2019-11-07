import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRandomKitty } from '../actions/actions';

const RandomKitty = props => {
  const [shouldRefresh, setshouldRefresh] = useState(false);
  const kittyUrl = useSelector(state => state.randomKitty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomKitty());
  }, [shouldRefresh, dispatch]);

  return (
    <div className="random-cat">
      <h1>Random Cat Pic</h1>
      <img src={kittyUrl} alt="Missing cat" />
      <button onClick={() => setshouldRefresh(!shouldRefresh)}>Another One</button>
    </div>
  )
}

export default RandomKitty;
