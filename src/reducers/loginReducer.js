const INIT_STATE = {
  isUserActive: false,
  user: {name:"ddd"}
};


const loginReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        isUserActive: true
      };
    case 'SIGN_OUT':
      return {
        isUserActive: false
      };
    case 'SET_USER_DATA':
      return {
        //...state.user,
        user: action.payload
      };
    case 'GET_USER_DATA':
      return state.user;
    default:
      return state;
  }
}

export default loginReducer