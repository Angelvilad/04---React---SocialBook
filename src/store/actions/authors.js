import { FETCH_AUTHORS_STARTED, FETCH_AUTHORS_COMPLETED, FETCH_AUTHORS_ERROR } from '../actionTypesVar';

// Action Dispatchers (thunks)
export const fetchAuthors = () => dispatch => {
    dispatch({type: FETCH_AUTHORS_STARTED})
  
    fetch('https://randomuser.me/api?results=10&seed=abc')
          .then(response => {
            if (!response.ok) {
              throw Error (response.statusText);
            }
            return response.json()
          })
          .then(({results}) => {
            dispatch({type: FETCH_AUTHORS_COMPLETED, payload: results})
          })
          .catch((error) => dispatch({type: FETCH_AUTHORS_ERROR, payload: error}))
  }