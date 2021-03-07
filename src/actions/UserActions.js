import { SET_AUTH_STATUS } from '../reducer/user';

const FB = window.FB;

export const changeAuthStatus = (payload) => ({
  type: SET_AUTH_STATUS,
  payload,
});

export const isLoginUser = () => async (dispatch) => {
  try {
    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        dispatch(changeAuthStatus(true));
        return;
      }

      dispatch(changeAuthStatus(false));
    });
  } catch (e) {
    console.log(e);
  }
};

export const login = () => async (dispatch) => {
  try {
    const { authResponse } = await new Promise(window.FB.login);
    console.log(authResponse);
    if (!authResponse) {
      dispatch(changeAuthStatus(false));
      return;
    }

    dispatch(changeAuthStatus(true));
  } catch (e) {
    console.log(e);
  }
};
