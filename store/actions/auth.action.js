export const AUTH = {
  LOGIN: "LOGIN",
};

export const login = () => async (dispatch) => {
  try {
  } catch (err) {}
};

export const signup =
  ({ name, email, mobile }) =>
  async (dispatch) => {
    try {
      const response = await fetch(
        "https://eshramik-api.herokuapp.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: {
            email,
            name,
            mobile,
          },
        }
      );
      const responseData = await response.json();
      console.log(responseData);
    } catch (err) {
      console.log(err);
    }
  };
