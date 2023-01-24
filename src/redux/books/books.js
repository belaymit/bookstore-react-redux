import apis from '../../booksApis/apis';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.book);
    case GET_ALL_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export const addBooks = (book) => async (dispatch) => {
  apis.addBooks(book);
  dispatch({
    type: ADD_BOOK,
    book,
  });
};

export const removeBook = (book) => async (dispatch) => {
  apis.removeBook(book);
  dispatch({
    type: REMOVE_BOOK,
    book,
  });
};

export const fetchBooks = () => async (dispatch) => {
  const books = await apis.fetchBooks();
  dispatch({
    type: GET_ALL_BOOKS,
    books,
  });
};

export default booksReducer;
