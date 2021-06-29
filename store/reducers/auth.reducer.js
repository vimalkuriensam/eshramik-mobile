import { AUTH } from "../actions/auth.action";

const authReducerDefaultState = {
  username: "",
  email: "",
  mobile: "",
};

const authReducer = (state = authReducerDefaultState, { type, payload }) => {
  switch (type) {
    case AUTH.SIGNUP:
      return { ...state, ...payload };
    default:
      return state;
  }
};

export default authReducer;
