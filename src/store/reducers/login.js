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

  export default loginReducer;