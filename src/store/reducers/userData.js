const userDataReducer = (userDataState = {}, action) => {
    switch (action.type) {
      case 'USERDATA_RETRIEVED':
        return { data: action.payload }
      case 'USERDATA_UPDATED':
        return { data: action.payload }
      case 'LOGOUT':
        return { data: null }
      default:
        return userDataState  
    }
  }

  export default userDataReducer;