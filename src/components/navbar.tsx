import React from "react";
import styles from "../styles/navbar.module.scss";
import Button from "./button";
import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";

interface IProps {
  setMobileNav: (value: boolean) => void;
}

function Navbar({ setMobileNav }: IProps) {
  return (
    <div className={styles.nav_con}>
      <img src={logo} alt="logo" />
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Products</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">Contact</a>
        </li>
      </ul>
      <Button text="Join Waitlist" />
      <img
        className={styles.menu}
        src={hamburger}
        alt=""
        onClick={() => {
          setMobileNav(true);
        }}
      />
    </div>
  );
}

export default Navbar;
