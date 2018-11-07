import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const loginReducer = (loginState = {}, action) => {
  switch (action.type) {
    case 'LOGGED':
      return { logged: true, user: action.payload };
    case 'LOGOUT':
      return {};
    default:
      return loginState;
  }
}

const AuthorsReducer = (AuthorsState = {}, action) => {
  switch (action.type) {
    case 'FETCH_AUTHORS_STARTED':
      return { loading: true }
    case 'FETCH_AUTHORS_COMPLETED':
      return { loading: false, data: action.payload }
    case 'FETCH_AUTHORS_ERROR':
      return { loading: false, error: action.payload }
    default:
      return AuthorsState
  }
}

const rootReducer = combineReducers({
  login: loginReducer,
  authors: AuthorsReducer
})


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;