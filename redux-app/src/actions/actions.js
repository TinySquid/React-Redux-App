export const GET_RANDOM_KITTY = "GET_RANDOM_KITTY";
export const SET_BREED_ID = "SET_BREED_ID";
export const GET_CAT_BY_BREED_ID = "GET_CAT_BY_BREED_ID";
export const GET_BREEDS = "GET_BREEDS";

export const getRandomKitty = () => dispatch => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(cat => dispatch({ type: GET_RANDOM_KITTY, payload: cat[0].url }))
    .catch(error => console.log(error));
}

export const getBreeds = () => dispatch => {
  return fetch('https://api.thecatapi.com/v1/breeds', {
    headers: new Headers({
      'x-api-key': 'b73e3776-de88-4abc-92ae-8b9eaa9b0d5f'
    })
  })
    .then(response => response.json())
    .then(data => dispatch({ type: GET_BREEDS, payload: data }))
    .catch(error => console.log(error));
}

export const getCatByBreedId = breedId => dispatch => {
  return fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${breedId}`, {
    headers: new Headers({
      'x-api-key': 'b73e3776-de88-4abc-92ae-8b9eaa9b0d5f'
    })
  })
    .then(response => response.json())
    .then(cat => dispatch({ type: GET_CAT_BY_BREED_ID, payload: cat }))
    .catch(error => console.log(error));
}

export const setBreedId = breedId => dispatch => {
  dispatch({ type: SET_BREED_ID, payload: breedId });
  getCatByBreedId(breedId);
}