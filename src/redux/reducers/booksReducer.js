import {
  FETCHING_BOOKS_FAILURE,
  FETCHING_BOOKS_SUCCESS,
  FETCHING_BOOKS_REQUEST,
} from '../actions/types';

const initialState = {
  books: {
    isFetching: false,
    error: null,
    items: [],
    timestamp: null,
  },
};
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    //books
    case FETCHING_BOOKS_REQUEST:
      return {...state, books: {...state.books, isFetching: true}};
    case FETCHING_BOOKS_FAILURE:
      return {
        ...state,
        books: {...state.books, isFetching: false, error: action.payload},
      };
    case FETCHING_BOOKS_SUCCESS:
      return {
        ...state,
        books: {
          ...state.books,
          isFetching: false,
          items: action.payload,
          error: null,
        },
      };
    default:
      return state;
  }
};
export default booksReducer;
