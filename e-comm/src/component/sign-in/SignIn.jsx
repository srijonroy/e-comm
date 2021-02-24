import React from "react";
import useSignUpForm from "../../hooks/useSignUpForm";
import FormInput from "../form-input/FormInput";
import { ButtonsBarContainer, SignInContainer } from "./SignIn.styles";
import { useDispatch } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import CustomButton from "../Button/Button";

const SignIn = () => {
  const dispatch = useDispatch();

  const postSignIn = async () => {
    const { email, password } = form;
    dispatch(emailSignInStart({ email, password }));
  };

  const { form, handleChange, handleSubmit } = useSignUpForm(postSignIn);
  return (
    <SignInContainer>
      <h2>I already have an account</h2>
      <span>Sign In with Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={form.email}
          handleChange={handleChange}
          label="email"
          required
        ></FormInput>
        <FormInput
          name="password"
          type="password"
          handleChange={handleChange}
          value={form.password}
          label="password"
          required
        ></FormInput>
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton
            type="button"
            isGoogleSignIn
            onClick={() => dispatch(googleSignInStart())}
          >
            Sign In With Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
