import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds, setBreedId, getCatByBreedId } from '../../actions/actions';

import Card from '../Card';

const Breeds = () => {
  const catBreeds = useSelector(state => state.breeds);
  const cats = useSelector(state => state.cats);
  const catBreedId = useSelector(state => state.currentId);
  const dispatch = useDispatch();

  useEffect(() => {
    if (catBreeds.length === 0) {
      dispatch(getBreeds());
      dispatch(getCatByBreedId(catBreedId));
    }
  }, [dispatch, catBreeds, catBreedId]);

  const handleChange = e => {
    dispatch(setBreedId(e.target.value));
    dispatch(getCatByBreedId(catBreedId));
  }

  return (
    <>
      <div className="breeds-dropdown">
        <h1>Select a cat breed...</h1>
        <select onChange={handleChange}>
          {catBreeds.map((breed, idx) => (
            <option key={idx} value={breed.id}>{breed.name}</option>
          ))}
        </select>
        <button onClick={() => dispatch(getCatByBreedId(catBreedId))}>Send More Kitties</button>
      </div>
      <div className="card-container">
        {cats.map((cat, idx) => (
          <Card key={idx} catUrl={cat.url} />
        ))}
      </div>
    </>
  )
}

export default Breeds;
