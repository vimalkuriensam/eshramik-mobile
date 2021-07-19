import apiService from "../../authInterceptor/authAxios";

export const AUTH = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  SET_TOKEN: "SET_TOKEN",
  SET_LOGOUT: "SET_LOGOUT",
};

export const login = () => async (dispatch) => {
  try {
  } catch (err) {}
};

export const signup =
  ({ name, email, mobile }) =>
  async (dispatch) => {
    try {
      const mobileNum = `+91${mobile}`;
      const response = await apiService().post("/auth/signup", {
        email,
        name,
        mobile: mobileNum,
      });
      if (response.status === 200)
        dispatch({
          type: AUTH.SIGNUP,
          payload: {
            email,
            name,
            mobile: mobileNum,
          },
        });
    } catch (err) {
      throw err;
    }
  };

export const otpVerify =
  ({ otp, mobile }) =>
  async (dispatch) => {
    try {
      console.log(otp, mobile);
      const { status, data } = await apiService().post("/auth/verify", {
        otp,
        mobile: `+91${mobile}`,
        login: false,
      });
      if (status == 200) {
        const { accessToken, refreshToken } = data.data;
        dispatch(
          setToken({
            accessToken,
            refreshToken,
          })
        );
        return true;
      }
    } catch (e) {
      throw e;
    }
  };

export const setToken = ({ accessToken, refreshToken }) => ({
  type: AUTH.SET_TOKEN,
  payload: {
    accessToken,
    refreshToken,
  },
});

export const logout = () => ({
  type: AUTH.SET_LOGOUT,
});
