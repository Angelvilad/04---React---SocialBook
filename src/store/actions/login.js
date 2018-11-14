import { LOGOUT, LOGGED } from '../actionTypesVar';

// Action Creators 
export const doLogOut = () => ({
    type: LOGOUT
  });

export const doLog = (user) => ({
    type: LOGGED,
    payload: user
  });

