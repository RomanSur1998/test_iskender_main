import React from "react";
import logo from "../../assets/icons/main_logo.svg";
import burger from "../../assets/icons/burger.svg";
import search from "../../assets/icons/search_icon.svg";
import card from "../../assets/icons/card_icon.svg";
import user from "../../assets/icons/user_icon.svg";
import styles from "./Headers.module.css";

const Headers = () => {
  return (
    <div className={styles.block}>
      <div className={styles.headersContainer}>
        <img src={logo} alt="main logo" />
        <div className={styles.leftContainer}>
          <img src={burger} alt="burger" />
          <span>Каталог</span>
        </div>
        <form className={styles.middleContainer}>
          <img src={search} alt="search" />
          <input type="text" placeholder="Поиск" />
        </form>
        <div className={styles.rightContainer}>
          <div>
            <p>Добро пожаловать</p>
            <h3>Вход/Регистрация</h3>
          </div>
          <div className={styles.iconsContainer}>
            <img src={user} alt="user icon" />
            <hr />
            <img src={card} alt="card icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Headers;
