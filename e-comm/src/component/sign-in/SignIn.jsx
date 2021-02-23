import React from "react";
import useSignUpForm from "../../hooks/useSignUpForm";
import FormInput from "../form-input/FormInput";
import Button from "../Button/Button";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import { SignInContainer } from "./SignIn.styles";
import { ButtonContainer } from "./SignIn.styles";

const SignIn = () => {
  const postSignIn = async () => {
    const { email, password } = form;
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (err) {
      console.log(err);
    }
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
        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button isGoogleSignIn onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonContainer>
      </form>
    </SignInContainer>
  );
};

export default SignIn;
