import { SET_AUTH_STATUS } from '../reducer/user';

export const changeAuthStatus = (payload) => ({
  type: SET_AUTH_STATUS,
  payload,
});

export const login = () => async (dispatch) => {
  try {
    const { authResponse } = await new Promise(window.FB.login);
    if (!authResponse) {
      dispatch(changeAuthStatus(false));
      return;
    }

    dispatch(changeAuthStatus(true));
  } catch (e) {
    console.log(e);
  }
};
