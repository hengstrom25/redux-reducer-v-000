export function manageFriends(state, action){
<<<<<<< HEAD
  switch(action.type) {
=======
  switch action.type {
>>>>>>> 516541a93853d974f47062992c7b16c6d859e4bd
    case "ADD_FRIEND":
        return Object.assign({}, state, { friends: [...state.friends, action.friend] })
    case 'REMOVE_FRIEND':
        const friendsArr = [...state.friends]
        return Object.assign({}, state, { friends: friendsArr.filter(friend => friend.id !== action.id )})
    default:
        return state;
    }    
  }

