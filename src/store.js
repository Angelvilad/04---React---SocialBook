import {createStore} from 'redux';

const initialState = {
    logged: false
  }
  const rootReducer = (state, action) => {
    switch(action.type) {
      case 'LOGGED':
        return {logged: true};
      default:
       return state;
    }
  };
  
  const store = createStore(
    rootReducer,
    initialState
  );

  export default store;