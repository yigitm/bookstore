const ADD_BOOK = 'bookStore/books/ADD_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default booksReducer;
