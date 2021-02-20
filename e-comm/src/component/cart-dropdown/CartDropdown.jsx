import "./CartDropdown.scss";
import Button from '../Button/Button';

import React from "react";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        <Button>
            GO TO CHECKOUT
        </Button>
      </div>
    </div>
  );
};

export default CartDropdown;
