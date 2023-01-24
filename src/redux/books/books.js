const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const GET_ALL_BOOKS = 'GET_ALL_BOOKS';
const initialState = [
  {
    id: 1, title: 'Born Crime', author: 'Trover Noha', category: 'Fiction',
  },
  {
    id: 2, title: 'After Many a Summer Dies the Swan', author: 'Aldous Huxley', category: 'Geography',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
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

export default booksReducer;
