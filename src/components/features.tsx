import React, { useState } from "react";
import styles from "../styles/features.module.scss";
import Button from "./button";
import rings from "../assets/rings.svg";

function Features() {
  const [currentFeature, setCurrentFeature] = useState("trade");
  return (
    <div className={styles.feature_con}>
      <div className={styles.feature_inner_con}>
        <div className={styles.wrapper}>
          <h3>buy and sell crypto currencies</h3>
          <h1>
            What we are all <span>about.</span>
          </h1>
          <ul>
            <li
              onClick={() => {
                setCurrentFeature("trade");
              }}
              className={
                currentFeature === "trade" ? styles.activeLink : styles.link
              }
            >
              Trade Instantly
            </li>
            <li
              onClick={() => {
                setCurrentFeature("save");
              }}
              className={
                currentFeature === "save" ? styles.activeLink : styles.link
              }
            >
              BluuSave
            </li>
            <li
              onClick={() => {
                setCurrentFeature("pay");
              }}
              className={
                currentFeature === "pay" ? styles.activeLink : styles.link
              }
            >
              BluuPay
            </li>
          </ul>
          {currentFeature === "trade" ? (
            <div className={styles.features_bottom}>
              <div className={styles.image_con}>
                <img src={rings} alt="" />
              </div>
              <div className={styles.text_con}>
                <p>
                  Deposit your fiat or crypto into your secure wallet on
                  Bluuchip and instantly purchase, sell and swap to other
                  digital assets.
                </p>
                <h6>Withdraw your fiat and crypto and get credit in minutes</h6>
                <Button text="Start Trade" bgColor="#90F3FF" />
              </div>
            </div>
          ) : currentFeature === "save" ? (
            <div className={styles.features_bottom}>
              <div className={styles.image_con}>
                <img src={rings} alt="" />
              </div>
              <div className={styles.text_con}>
                <p>
                  Deposit your fiat or crypto into your secure wallet on
                  Bluuchip and instantly purchase, sell and swap to other
                  digital assets.
                </p>
                <h6>Withdraw your fiat and crypto and get credit in minutes</h6>
                <Button text="Start Saving" bgColor="#90F3FF" />
              </div>
            </div>
          ) : (
            <div className={styles.features_bottom}>
              <div className={styles.image_con}>
                <img src={rings} alt="" />
              </div>
              <div className={styles.text_con}>
                <p>
                  Deposit your fiat or crypto into your secure wallet on
                  Bluuchip and instantly purchase, sell and swap to other
                  digital assets.
                </p>
                <h6>Withdraw your fiat and crypto and get credit in minutes</h6>
                <Button text="Star Payment" bgColor="#90F3FF" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Features;
