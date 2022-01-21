const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const DEL_BOOK = 'bookStore/books/DEL_BOOK';
const GET_BOOK = 'bookStore/books/GET_BOOK';

const initialState = [];
const baseUrl =
  'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/q6TnZOqYafHfqHGMUnQA/books/';

export const addBook = (payload) => async (state) => {
  await postBook(payload);
  state({
    type: ADD_BOOK,
    payload: payload,
  });
};

export const delBook = (payload) => async (state) => {
  await deleteBook(payload);
  state({
    type: DEL_BOOK,
    payload,
  });
};

export const getBooks = async (state) => {
  const response = await fetch(baseUrl);
  const convert = await response.json();
  const data = await convert;
  const books = [];
  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i++) {
    const singleBook = {
      item_id: keys[i],
      title: data[keys[i]][0].title,
      category: 'Fiction',
    };
    books.push(singleBook);
  }
  state({
    type: GET_BOOK,
    payload: books,
  });
};
//{"880029fd-2bff-4450-828b-b7e58e339656":[{"category":"Fiction","title":"The Great Gatsby"}],"f52bdd04-83bf-4b66-beb2-ddd60eeb9251":[{"category":"Fiction","title":"The Great Gatsby"}],"8d8b424b-464f-4706-9051-d54136719cfd":[{"title":"The Great Gatsby","category":"Fiction"}]}
export const postBook = async (payload) => {
  await fetch(baseUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: payload.item_id,
      title: payload.title,
      category: 'Fiction',
    }),
  });
};

export const deleteBook = async (item_id) => {
  await fetch(baseUrl + item_id, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      item_id: item_id,
    }),
  });
};

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
