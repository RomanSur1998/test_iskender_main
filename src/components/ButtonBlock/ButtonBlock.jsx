import React from "react";
import plus from "../../assets/icons/button_plus.svg";
import minus from "../../assets/icons/button_minus.svg";
import styles from "./ButtonBlock.module.css";

const ButtonBlock = ({ isPromotion }) => {
  return (
    <>
      {isPromotion ? (
        <div className={styles.ButtonBlockContainer}>
          <img src={plus} alt="plus" />
          <span>999</span>
          <img src={minus} alt="minus" />
        </div>
      ) : (
        <div className={styles.ButtonBlockContainer}>
          <img src={minus} alt="minus" />
          <span>999</span>
          <img src={plus} alt="plus" />
        </div>
      )}
    </>
  );
};

export default ButtonBlock;
