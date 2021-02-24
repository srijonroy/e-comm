import { useHistory } from "react-router";
import UserActionTypes from ".";

export const setCurrentUser = (user) => {
  return {
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return { type: UserActionTypes.GOOGLE_SIGN_IN_START };
};

export const signInSuccess = (user) => {
  return { type: UserActionTypes.SIGN_IN_SUCCESS, payload: user };
};

export const signInFailure = (error) => {
  return { type: UserActionTypes.SIGN_IN_FAILURE, payload: error };
};

export const emailSignInStart = (emailAndPassword) => {
  return {
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};
