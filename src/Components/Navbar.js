import React from "react";
import { useState } from "react";
import {
  NavContainer,
  NavUl,
  NavList,
  NavButton,
  NavLogoContainer,
  HamburgerContainer,
  Hamburger,
} from "../Stylings/NavStylings";
import NavLogo from "../Svg/NavLogo";
import HamburgerLogo from "../Images.js/icon-hamburger.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleHamburgerClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <NavContainer>
        <NavLogoContainer className="navHead">
          <NavLogo />
        </NavLogoContainer>
        <NavUl className={`navUList ${isNavOpen ? "open" : ""}`}>
          <NavList>HOW WE WORK</NavList>
          <NavList>BLOG</NavList>
          <NavList>ACCOUNT</NavList>
          <NavButton>VIEW PLANS</NavButton>
        </NavUl>

        <HamburgerContainer>
          <Hamburger onClick={handleHamburgerClick}>
            <img src={HamburgerLogo} alt="hamburger"></img>
          </Hamburger>
        </HamburgerContainer>
      </NavContainer>
    </div>
  );
};

export default Navbar;
