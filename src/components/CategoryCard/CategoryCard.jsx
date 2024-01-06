import React from "react";
import example from "../../assets/pictures/example.jpg";
import styles from "./CategoryCard.module.css";

const CategoryCard = () => {
  return (
    <div className={styles.CategoryCardContainer}>
      <div className={styles.categoryText}>
        <h3>Ванны</h3>
        <span>3000 товаров</span>
      </div>
      <img src={example} alt="category image" />
    </div>
  );
};

export default React.memo(CategoryCard);
