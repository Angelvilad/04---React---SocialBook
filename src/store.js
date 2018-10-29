import {createStore, combineReducers} from 'redux';

const initialState = {
    login: false
  };

  const rootReducer = (state, action) => {
    switch(action.type) {
      case 'LOGGED':
        return {login: (action.payload || false)};
      case 'LOGOUT':
        return {login: false};
        default:
       return state;
    }
  };
  
  const store = createStore(
    rootReducer,
    initialState
  );

  export default store;