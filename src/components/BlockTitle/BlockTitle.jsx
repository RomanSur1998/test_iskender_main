import React from "react";
import styles from "./BlockTitle.module.css";

const BlockTitle = ({ title, additionaly }) => {
  return (
    <div className={styles.BlockTitleContainer}>
      <h2 className={styles.title}> {title ? title : "Новости"}</h2>
      {additionaly ? (
        <span className={styles.additionaly}>{additionaly}</span>
      ) : null}
    </div>
  );
};

export default BlockTitle;
