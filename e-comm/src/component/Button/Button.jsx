import { ButtonContainer } from "./button.styles";

import React from "react";

const Button = ({ props, children, click }) => (
  <ButtonContainer {...props} onClick={click}>
    {children}
  </ButtonContainer>
);

export default Button;
