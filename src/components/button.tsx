import React from "react";
import styles from "../styles/button.module.scss";

interface IProps {
  text: string;
  bgColor?: string;
}
function Button({ text, bgColor }: IProps) {
  return (
    <div className={styles.button} style={{ backgroundColor: bgColor }}>
      {text}
    </div>
  );
}

export default Button;
