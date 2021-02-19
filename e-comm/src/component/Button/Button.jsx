import "./Button.scss";

import React from "react";

const Button = ({ children, isGoogle, ...otherProps }) => {
  return (
    <button
      className={`${isGoogle ? "google-sign-in" : '' } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
