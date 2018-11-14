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

  export default AuthorsReducer;