import { USERDATA_UPDATED, USERDATA_RETRIEVED } from '../actionTypesVar';

// Action Dispatchers (thunks)
export const acceptFriendDispatcher = (decision, requesterId, userId) => dispatch => {
    if (decision ==='yes') {
        const newUserData = JSON.parse(localStorage.getItem(userId));
        const newAuthorData = JSON.parse(localStorage.getItem(requesterId));        
        newUserData.friends.unshift(requesterId);
        newAuthorData.friends.unshift(userId);
        let index = newUserData.friendRequestReceived.indexOf(requesterId);
        if (index > -1) {
            newUserData.friendRequestReceived.splice(index, 1);
        }
        index = newUserData.friendRequestSended.indexOf(requesterId);
        if (index > -1) {
            newUserData.friendRequestSended.splice(index, 1);
        }
        index = newAuthorData.friendRequestReceived.indexOf(userId);
        if (index > -1) {
            newUserData.friendRequestReceived.splice(index, 1);
        }
        index = newAuthorData.friendRequestSended.indexOf(userId);
        if (index > -1) {
            newUserData.friendRequestSended.splice(index, 1);
        }
        localStorage.setItem(userId, JSON.stringify(newUserData));
        localStorage.setItem(requesterId, JSON.stringify(newAuthorData));
        dispatch({ type: USERDATA_UPDATED, payload: newUserData});
    } else if (decision === 'no') {
        const newUserData = JSON.parse(localStorage.getItem(userId));
        const index = newUserData.friendRequestReceived.indexOf(requesterId);
        newUserData.friendRequestReceived.splice(index, 1);
        localStorage.setItem(userId, JSON.stringify(newUserData));
        dispatch({ type: USERDATA_UPDATED, payload: newUserData});
    }
}

export const getData = (userid) => dispatch => {
    let data = JSON.parse(localStorage.getItem(userid));
    if (!data) {
      data = {friends: [], friendRequestReceived: [], friendRequestSended: [], articles: []}
      localStorage.setItem(userid, JSON.stringify(data));
    }
      dispatch({ type: USERDATA_RETRIEVED, payload: data });
    }

export  const doFriendRequestDispatcher = (author, user, authorData, userData) => dispatch => {
        const authorId = author.login.uuid;
        const userId = user.login.uuid;
        authorData.friendRequestReceived.unshift(userId);
        userData.friendRequestSended.unshift(authorId);
        localStorage.setItem(authorId, JSON.stringify(authorData));
        localStorage.setItem(userId, JSON.stringify(userData));
        dispatch ({ type: USERDATA_UPDATED, payload: userData});
    }