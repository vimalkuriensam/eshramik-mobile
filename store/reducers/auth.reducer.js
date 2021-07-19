import { AUTH } from "../actions/auth.action";

const authReducerDefaultState = {
  username: "",
  email: "",
  mobile: "",
  accessToken: null,
  refreshToken: null,
};

const authReducer = (state = authReducerDefaultState, { type, payload }) => {
  switch (type) {
    case AUTH.SIGNUP:
      return { ...state, ...payload };
    case AUTH.SET_TOKEN:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default authReducer;
