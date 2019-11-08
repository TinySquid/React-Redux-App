import * as ACTIONS from '../actions/actions';

const initialState = {
  homeKitty: 'https://cdn2.thecatapi.com/images/3qp.gif',
  randomKitty: '',
  currentId: '',
  currentCat: {},
  breeds: [],
  error: '',
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_RANDOM_KITTY:
      return {
        ...state,
        randomKitty: action.payload
      }
    case ACTIONS.SET_BREED_ID:
      return {
        ...state,
        currentId: action.payload
      }
    case ACTIONS.FETCH_BREEDS_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ACTIONS.FETCH_BREEDS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        breeds: action.payload,
        error: ''
      }
    case ACTIONS.FETCH_BREEDS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    case ACTIONS.FETCH_CAT_BY_BREED_START:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case ACTIONS.FETCH_CAT_BY_BREED_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentCat: action.payload[0],
        error: ''
      }
    case ACTIONS.FETCH_CAT_BY_BREED_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}