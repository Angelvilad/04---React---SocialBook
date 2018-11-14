import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import loginReducer from './reducers/login';
import authorsReducer from './reducers/authors';
import userDataReducer from './reducers/userData';

const rootReducer = combineReducers({
    login: loginReducer,
    authors: authorsReducer,
    userData: userDataReducer
  })
  
  
  const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  
  export default store;