export const SET_AUTH_STATUS = 'SET_AUTH_STATUS';

const initialState = {
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_STATUS:
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
