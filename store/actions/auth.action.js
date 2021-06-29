import apiService from "../../authInterceptor/authAxios";

export const AUTH = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
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
      const response = await apiService().post("/auth/verify", {
        otp,
        mobile: `+91${mobile}`,
        login: false,
      });
      console.log(response.status, response.data);
    } catch (e) {
      throw e;
    }
  };
