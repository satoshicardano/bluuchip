import React from "react";
import styles from "../styles/navbar.module.scss";
import Button from "./button";
import logo from "../assets/logo.svg";
import close from "../assets/close-button.svg";

interface IProps {
  setMobileNav: (value: boolean) => void;
}
function MobileNav({ setMobileNav }: IProps) {
  return (
    <div className={styles.mobile_nav}>
      <div>
        <img src={logo} alt="" />
        <img
          src={close}
          alt=""
          onClick={() => {
            setMobileNav(false);
          }}
        />
      </div>
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
        <Button text="Join Waitlist" />
      </ul>
    </div>
  );
}

export default MobileNav;
