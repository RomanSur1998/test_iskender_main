import React from "react";
import styles from "./BlockTitle.module.css";

const BlockTitle = ({ title, additionaly }) => {
  // Блок с заголовками и ссылкой на полную страницу , по условиям , рендерим ссылку (которую можно будет задать как через Link так и useNavigate)
  return (
    <div className={styles.BlockTitleContainer}>
      <h2 className={styles.title}> {title ? title : "Новости"}</h2>
      {additionaly ? (
        <span className={styles.additionaly}>{additionaly}</span>
      ) : null}
    </div>
  );
};

export default React.memo(BlockTitle);
