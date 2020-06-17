//////////////////////////////////
// isLoggedIn Actions
//////////////////////////////////

export const changeLogin = (bool) => {
  return {
    type: "SIGN_IN",
    payload: bool,
  };
};