import React from "react";
import useSignUpForm from "../../hooks/useSignUpForm";
import "./SignIn.scss";
import FormInput from "../form-input/FormInput";
import Button from "../Button/Button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
  const { form, handleChange, handleSubmit } = useSignUpForm();

  return (
    <div className="sign-in">
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
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button onClick={signInWithGoogle} isGoogle>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
