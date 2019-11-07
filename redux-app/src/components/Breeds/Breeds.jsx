import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getBreeds, setBreedId, getCatByBreedId } from '../../actions/actions';

const Breeds = () => {
  const catBreeds = useSelector(state => state.breeds);
  const cat = useSelector(state => state.currentCat);
  const catBreedId = useSelector(state => state.currentId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (catBreeds.length === 0) {
      dispatch(getBreeds());
    }
  }, [dispatch, catBreeds]);


  const handleChange = e => {
    dispatch(setBreedId(e.target.value));
  }

  const getCat = () => {
    dispatch(getCatByBreedId(catBreedId));
  }

  return (
    <div className="breeds-dropdown">
      <h1>Select a cat breed...</h1>
      <select onChange={handleChange}>
        {catBreeds.map((breed, idx) => (
          <option key={idx} value={breed.id}>{breed.name}</option>
        ))}
      </select>
      <button onClick={getCat}>Another One</button>
    </div>
  )
}

export default Breeds;
