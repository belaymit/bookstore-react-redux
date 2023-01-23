const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';

const booksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state;
    case GET_ALL_BOOKS:
      return action.books;
    default:
      return state;
  }
};

export const addBooks = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

export const getBooks = () => {
  const books = localStorage.getItem('books');
  return {
    type: GET_ALL_BOOKS,
    books,
  };
};
export default booksReducer;
