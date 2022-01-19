const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const DEL_BOOK = 'bookStore/books/DEL_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const delBook = (payload) => ({
  type: DEL_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DEL_BOOK:
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
