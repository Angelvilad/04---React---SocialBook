import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const loginReducer = (loginState = false, action) => {
  switch (action.type) {
    case 'LOGGED':
      return {logged: true, user: action.payload};
    case 'LOGOUT':
      return false;
    default:
      return loginState;
  }
}

const fetchAuthorsReducer = (fetchAuthorsState = {}, action) => {
  switch (action.type) {
    case 'FETCH_AUTHORS_STARTED':
      return { loading: true }
    case 'FETCH_AUTHORS_COMPLETED':
      return { loading: false, authors: action.payload }
    case 'FETCH_AUTHORS_ERROR':
      return { loading: false, error: action.payload }
    default:
      return fetchAuthorsState
  }
}

const rootReducer = combineReducers({
  login: loginReducer,
  authors: fetchAuthorsReducer
})


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;