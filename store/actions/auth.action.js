import apiService from "../../authInterceptor/authAxios";

export const AUTH = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  SET_MOBILE: "SET_MOBILE",
  SET_TOKEN: "SET_TOKEN",
  SET_ACCESS_TOKEN: "SET_ACCESS_TOKEN",
  SET_LOGOUT: "SET_LOGOUT",
};

export const login =
  ({ mobile }) =>
  async (dispatch) => {
    try {
      const { status } = await apiService().post("/auth/login", {
        un: `+91${mobile}`,
      });
      console.log(status);
      if (status == 200) {
        dispatch(setMobile({ mobile }));
        return true;
      }
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
            mobile,
          },
        });
    } catch (err) {
      throw err;
    }
  };

export const otpVerify =
  ({ otp, mobile = undefined, login = false }) =>
  async (dispatch) => {
    try {
      const { status, data } = await apiService().post("/auth/verify", {
        otp,
        mobile: `+91${mobile}`,
        login,
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

export const getAccessToken =
  ({ refreshToken, email }) =>
  async (dispatch) => {
    try {
      const { data, status } = await apiService().post("/auth/getAccessToken", {
        refreshToken,
        un: email,
      });
      console.log(data, status);
      if (status == 200) {
        dispatch(setAccessToken(data));
        return true;
      }
    } catch (e) {
      console.log(e);
    }
  };

export const setAccessToken = ({ accessToken }) => ({
  type: SET_ACCESS_TOKEN,
  payload: {
    accessToken,
  },
});

export const setMobile = ({ mobile }) => ({
  type: AUTH.SET_MOBILE,
  mobile,
});
