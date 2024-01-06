import React from "react";
import illustration from "../../assets/pictures/illustration.svg";
import styles from "./NewsCard.module.css";

const NewaCard = () => {
  return (
    <div className={styles.newCardContainer}>
      <div className={styles.textContainer}>
        <div>
          <h3>-50%</h3>
          <span>На кухонную мебель </span>
        </div>
        <button className={styles.newsButton}>Подробнее</button>
      </div>
      <div>
        <img src={illustration} alt="illustration news card" />
      </div>
    </div>
  );
};

export default NewaCard;
