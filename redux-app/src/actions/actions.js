export const GET_RANDOM_KITTY = "GET_RANDOM_KITTY";

export const getRandomKitty = () => dispatch => {
  return fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(cat => dispatch({ type: GET_RANDOM_KITTY, payload: cat[0].url }))
}