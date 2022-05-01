import React from "react";
import styles from "../styles/footer.module.scss";
import ring from "../assets/ring.svg";
import Button from "./button";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
import smallLogo from "../assets/small-logo.svg";

function Footer() {
  return (
    <div className={styles.footer_con}>
      <div className={styles.footer_inner_con}>
        <div className={styles.waitlist}>
          <div className={styles.waitlist_inner_con}>
            <img src={ring} alt="" />
            <h1>
              Join our <span>waitlist.</span>
            </h1>
            <p>
              Be the first to know and test when we have launched our MVP . Be
              part of the exclusive club.
            </p>
            <div className={styles.input_con}>
              <input type="text" placeholder="Your email" />
              <Button text="Join Waitlist" bgColor="#95F244" />
            </div>
          </div>
        </div>
        <div className={styles.footer_bottom}>
          <div className={styles.social_con}>
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={linkedin} alt="" />
          </div>
          <div className={styles.logo_con}>
            <img src={smallLogo} alt="" />
          </div>
          <ul>
            <li>About</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>
        <h6>Bluuchip © 2022 All Rights Reserved | Privacy Policy</h6>
      </div>
    </div>
  );
}

export default Footer;
