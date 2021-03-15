const INIT_STATE = {
  isUserActive: false,
  user: {}
};

//behavior of the actions
const loginReducer = (state=INIT_STATE, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        isUserActive: true
      };
    case 'SIGN_OUT':
      return {
        ...state,
        isUserActive: false
      };
    case 'SET_USER':
      return {
        ...state,
        user: action.payload
      };
    case 'GET_USER':
      return {
        ...state,
        user: state.user
      };
    default:
      return state;
  }
}

export default loginReducer