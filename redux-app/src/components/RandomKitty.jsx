import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getRandomKitty } from '../actions/actions';

const RandomKitty = props => {
  const kittyUrl = useSelector(state => state.randomKitty);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomKitty());
  }, []);

  return (
    <div>
      <img src={kittyUrl} alt="Random kitty that you cant see because the image is broken :(" />
    </div>
  )
}

export default RandomKitty;
