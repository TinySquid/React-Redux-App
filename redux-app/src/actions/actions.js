export const GET_RANDOM_KITTY = "GET_RANDOM_KITTY";

export const SET_BREED_ID = "SET_BREED_ID";

export const FETCH_BREEDS_START = "FETCH_BREEDS_START"
export const FETCH_BREEDS_SUCCESS = "FETCH_BREEDS_SUCCESS"
export const FETCH_BREEDS_FAIL = "FETCH_BREEDS_FAIL"

export const FETCH_CAT_BY_BREED_START = 'FETCH_CAT_BY_BREED_START'
export const FETCH_CAT_BY_BREED_SUCCESS = 'FETCH_CAT_BY_BREED_SUCCESS'
export const FETCH_CAT_BY_BREED_FAIL = 'FETCH_CAT_BY_BREED_FAIL'

export const getRandomKitty = () => dispatch => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(cat => dispatch({ type: GET_RANDOM_KITTY, payload: cat[0].url }))
    .catch(error => console.log(error));
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
  dispatch({ type: FETCH_CAT_BY_BREED_START });

  fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`, {
    headers: new Headers({
      'x-api-key': 'b73e3776-de88-4abc-92ae-8b9eaa9b0d5f'
    })
  })
    .then(response => response.json())
    .then(cat => dispatch({ type: FETCH_CAT_BY_BREED_SUCCESS, payload: cat }))
    .catch(error => dispatch({ type: FETCH_CAT_BY_BREED_FAIL, payload: error }));
}

export const setBreedId = breedId => dispatch => {
  dispatch({ type: SET_BREED_ID, payload: breedId });
}