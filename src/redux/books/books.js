const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const DEL_BOOK = 'bookStore/books/DEL_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];
const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q6TnZOqYafHfqHGMUnQA/books';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const delBook = (payload) => ({
  type: DEL_BOOK,
  payload,
});

export const getBooks = async (dispatch) => {
  const response = await fetch(baseUrl);
  const convert = await response.json();
  const data = await convert;
  const books = [];
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const singleBook = {
      id: keys[i],
      title: data[keys[i]][0].title,
      author: 'Author',
    };
    books.push(singleBook);
  }

  dispatch({
    type: GET_BOOK,
    payload: books,
  });
};
//{"880029fd-2bff-4450-828b-b7e58e339656":[{"category":"Fiction","title":"The Great Gatsby"}],"f52bdd04-83bf-4b66-beb2-ddd60eeb9251":[{"category":"Fiction","title":"The Great Gatsby"}],"8d8b424b-464f-4706-9051-d54136719cfd":[{"title":"The Great Gatsby","category":"Fiction"}]}
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case DEL_BOOK:
      return state.filter((item) => item.id !== action.payload);
    case GET_BOOK:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;
