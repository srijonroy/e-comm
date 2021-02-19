import "./signIn-signUp.scss";

import React from "react";
import SignIn from "../../component/sign-in/SignIn";
import SignUp from "../../component/sign-up/SignUp";

const SignInSignUp = () => {
  return (
    <div className="SignInSignUp">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInSignUp;
