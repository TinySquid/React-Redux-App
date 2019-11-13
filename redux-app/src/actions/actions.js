export const SET_BREED_ID = "SET_BREED_ID";

export const FETCH_RANDOM_KITTY_START = "FETCH_RANDOM_KITTY_START";
export const FETCH_RANDOM_KITTY_SUCCESS = "FETCH_RANDOM_KITTY_SUCCESS";
export const FETCH_RANDOM_KITTY_FAIL = "FETCH_RANDOM_KITTY_FAIL";

export const FETCH_BREEDS_START = "FETCH_BREEDS_START"
export const FETCH_BREEDS_SUCCESS = "FETCH_BREEDS_SUCCESS"
export const FETCH_BREEDS_FAIL = "FETCH_BREEDS_FAIL"

export const FETCH_CATS_BY_BREED_START = 'FETCH_CATS_BY_BREED_START'
export const FETCH_CATS_BY_BREED_SUCCESS = 'FETCH_CATS_BY_BREED_SUCCESS'
export const FETCH_CATS_BY_BREED_FAIL = 'FETCH_CATS_BY_BREED_FAIL'

export const getRandomKitty = () => dispatch => {
  dispatch({ type: FETCH_RANDOM_KITTY_START });

  fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(cat => dispatch({ type: FETCH_RANDOM_KITTY_SUCCESS, payload: cat[0].url }))
    .catch(error => dispatch({ type: FETCH_RANDOM_KITTY_FAIL, payload: error }));
}

export const getBreeds = () => dispatch => {
  dispatch({ type: FETCH_BREEDS_START });

  fetch('https://api.thecatapi.com/v1/breeds', {
    headers: new Headers({
      'x-api-key': 'b73e3776-de88-4abc-92ae-8b9eaa9b0d5f'
    })
  })
    .then(response => response.json())
    .then(data => dispatch({ type: FETCH_BREEDS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: FETCH_BREEDS_FAIL, payload: error }));
}

export const getCatByBreedId = breedId => dispatch => {
  dispatch({ type: FETCH_CATS_BY_BREED_START });

  fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=9`, {
    headers: new Headers({
      'x-api-key': 'b73e3776-de88-4abc-92ae-8b9eaa9b0d5f'
    })
  })
    .then(response => response.json())
    .then(cat => dispatch({ type: FETCH_CATS_BY_BREED_SUCCESS, payload: cat }))
    .catch(error => dispatch({ type: FETCH_CATS_BY_BREED_FAIL, payload: error }));
}

export const setBreedId = breedId => dispatch => {
  dispatch({ type: SET_BREED_ID, payload: breedId });
}