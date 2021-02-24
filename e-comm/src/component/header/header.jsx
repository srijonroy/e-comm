import React from "react";
import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import { auth } from "../../firebase/firebase.utils";
import { useDispatch, useSelector } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";
import { signOutStart } from "../../redux/user/user.actions";

const HeaderComponent = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { hidden } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink as="div" className="option" to="/shop">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink
            as="div"
            className="option"
            onClick={() => dispatch(signOutStart())}
          >
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!hidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

export default HeaderComponent;
