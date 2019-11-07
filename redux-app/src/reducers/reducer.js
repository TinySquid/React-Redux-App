import * as ACTIONS from '../actions/actions';

const initialState = {
  homeKitty: 'https://cdn2.thecatapi.com/images/3qp.gif',
  randomKitty: '',
  currentId: '',
  currentCat: {},
  breeds: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_RANDOM_KITTY:
      return {
        ...state,
        randomKitty: action.payload
      }
    case ACTIONS.GET_BREEDS:
      return {
        ...state,
        breeds: action.payload
      }
    case ACTIONS.SET_BREED_ID:
      return {
        ...state,
        currentId: action.payload
      }
    case ACTIONS.GET_CAT_BY_BREED_ID:
      return {
        ...state,
        currentCat: action.payload
      }
    default:
      return state;
  }
}