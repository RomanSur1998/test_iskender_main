import React from "react";
import product_picture from "../../assets/pictures/product_picture.jpg";
import ButtonBlock from "../ButtonBlock/ButtonBlock";
import like_icon from "../../assets/icons/like_icon.svg";
import styles from "./ProductCard.module.css";

const ProductCard = ({ promotionPrice, isFullSet = true }) => {
  // В зависимости от приходящих данный карточка товара будет рендерить разные данный , под обычные и акционные товары
  return (
    <div className={styles.productCardContainer}>
      <div className={styles.imageContainer}>
        <img src={like_icon} alt="like icon" className={styles.like} />
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
          &bull;&thinsp; Комплект
        </span>
      </div>
      <ButtonBlock isPromotion={promotionPrice ? true : null} />
    </div>
  );
};

export default React.memo(ProductCard);
