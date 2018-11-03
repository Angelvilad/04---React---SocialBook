import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const loginReducer = (loginState = false, action) => {
  switch (action.type) {
    case 'LOGGED':
      return action.payload || false;
    case 'LOGOUT':
      return false;
    default:
      return loginState;
  }
}

const getAuthorsReducer = (getAuthorsState = {}, action) => {
  switch (action.type) {
    case 'GET_AUTHORS_STARTED':
      return { loading: true }
    case 'GET_AUTHORS_COMPLETED':
      return { loading: false, authors: action.payload }
    case 'GET_AUTHORS_ERROR':
      return { loading: false, error: action.payload }
    default:
      return getAuthorsState
  }
}

const rootReducer = combineReducers({
  login: loginReducer,
  authors: getAuthorsReducer
})


const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;