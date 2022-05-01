import React from "react";
import styles from "../styles/hero.module.scss";
import Navbar from "./navbar";

interface IProps {
  setMobileNav: (value: boolean) => void;
}
function Hero({ setMobileNav }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.inner_con}>
        <Navbar setMobileNav={setMobileNav} />
        <div className={styles.hero_text}>
          <h1>Buy.</h1>
          <h1>Sell.</h1>
          <h1>Accept.</h1>
          <p>
            The easiest way to buy and sell Bitcoin, Ethereum, USDT and other
            Blue Chip Cryptocurrencies{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
