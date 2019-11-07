import * as ACTIONS from '../actions/actions';

const initialState = {
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