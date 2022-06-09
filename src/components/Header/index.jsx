import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import HeaderContainer from '../../style/style.js';
import Logo from '../../assets/bread.jpg';

export default function Header() {
  return (
    <HeaderContainer className="styles.headerContainer">
      <div>
        <img src={Logo} alt="On one product" />
      </div>

      <div>
          <AiOutlineShoppingCart 
            className="icon-cart"
          />
      </div>
    </HeaderContainer>
  );
}
