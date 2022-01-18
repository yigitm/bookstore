const ADD_BOOK = 'bookStore/books/ADD_BOOK';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload: {
    newBook: {
      id: null,
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
        (action.payload.newBook.id = form.childElementCount + 1),
        (action.payload.newBook.title = form.firstChild.value),
      ];

    default:
      return state;
  }
};

export default booksReducer;
/*
        return a new state object in which the books array will contain a new book object, passed by action.payload.
        Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
        return [ ...state, action.payload];
        */
