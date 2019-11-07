import * as ACTIONS from '../actions/actions';

const initialState = {
  homeKitty: 'https://cdn2.thecatapi.com/images/3qp.gif',
  randomKitty: ''
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_RANDOM_KITTY:
      return {
        ...state,
        randomKitty: action.payload
      }
    default:
      return state;
  }
}