import React from "react";
import product_picture from "../../assets/pictures/product_picture.jpg";
import styles from "./ProductCard.module.css";
import ButtonBlock from "../ButtonBlock/ButtonBlock";

const ProductCard = ({ promotionPrice, isFullSet = true }) => {
  return (
    <div className={styles.productCardContainer}>
      <div>
        <img src={product_picture} alt="product image" />
      </div>
      <p className={styles.nameProduct}>
        Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605..
      </p>
      {promotionPrice ? (
        <div className={styles.promotionContainer}>
          <span className={styles.promotionPriceColor}>{promotionPrice} c</span>
          <span className={styles.oldPrice}> 1294 с</span>
        </div>
      ) : (
        <span className={styles.basePrice}>1294 с</span>
      )}
      <div className={styles.stockContainer}>
        <p className={styles.inStock}>В наличии</p>
        <span className={isFullSet ? styles.fullSet : styles.nonSet}>
          {" "}
          &bull;&thinsp; Комплект
        </span>
      </div>
      <ButtonBlock isPromotion={promotionPrice ? true : null} />
    </div>
  );
};

export default ProductCard;
