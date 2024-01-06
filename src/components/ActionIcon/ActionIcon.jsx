import React from "react";
import action from "../../assets/pictures/action.png";
import styles from "./ActionIcon.module.css";

const ActionIcon = () => {
  return (
    <div className={styles.ActionIconContainer}>
      <img src={action} alt="action " className={styles.image} />
      <span>Скидки</span>
    </div>
  );
};

export default React.memo(ActionIcon);
