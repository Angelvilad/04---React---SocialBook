import {createStore, combineReducers} from 'redux';

  const loginReducer = (loginState = false, action) => {
    switch(action.type) {
      case 'LOGGED':
        return action.payload || false;
      case 'LOGOUT':
        return false;
      default:
       return loginState;
    }
  }

  const authorsReducer = (authorsState = [], action) => {
    switch(action.type) {
      case 'READY':
        return action.payload
      default:
        return authorsState;
    }
  }

  const rootReducer = combineReducers({
    login: loginReducer,
    authors: authorsReducer
  })
  
  
  const store = createStore(
    rootReducer
  );

  export default store;