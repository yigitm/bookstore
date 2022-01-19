const ADD_BOOK = 'bookStore/books/ADD_BOOK';

const initialState = [];
let countId = 0;
export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {
    newBook: {
      id: countId,
      title: null,
    },
  },
});

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      const form = document.getElementsByTagName('form')[0];
      return [
        ...state,
        countId++,
        (action.payload.newBook.title = form.firstChild.value),
      ];

    default:
      return state;
  }
};

export default booksReducer;
