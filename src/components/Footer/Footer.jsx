import React from "react";
import logo from "../../assets/icons/main_logo.svg";
import apple from "../../assets/icons/apple_store_icon.svg";
import google from "../../assets/icons/google_store_icon.svg";
import whatsapp_icon from "../../assets/icons/whatsapp_icon.svg";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footerBlock}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <img src={logo} alt="logo" className={styles.logo} />
          <p>
            Первый отечественный бренд Iskender на рынке сантехники от компании
            ОсОО «Стройдом.кг»
          </p>
          <div className={styles.storeIcon}>
            <img src={apple} alt="apple store" />
            <img src={google} alt="apple store" />
          </div>
        </div>
        <div className={styles.footerRight}>
          <ul className={styles.ulBlock}>
            <li className={styles.liHeader}>Адреса</li>
            <li>
              <p>ЭлитСтрой</p>
              <span>ул. Ден-Сяопина 18/1</span>
            </li>
            <li>
              <p>ЭлитСтрой</p>
              <span>ул. Ден-Сяопина 18/1</span>
            </li>
            <li>
              <p>ЭлитСтрой</p>
              <span>ул. Ден-Сяопина 18/1</span>
            </li>
          </ul>
          <ul className={styles.ulBlockMiddle}>
            <li className={styles.liHeader}>Компания</li>
            <li>
              <p>Каталог</p>
            </li>
            <li>
              {" "}
              <p>Избранное</p>
            </li>
            <li>
              <p>Личный</p>
            </li>
          </ul>
          <ul className={styles.ulBlockRight}>
            <li className={styles.liHeader}>Контакты</li>
            <li className={styles.phoneBlock}>
              <div>
                <p>Email</p>
                <span>iskender.kg@gmail.com</span>
              </div>

              <ul>
                <p>Телефон:</p>
                <li>+996 (500) 000-104</li>
                <li>+996 (500) 000-104</li>
                <li>+996 (500) 000-104</li>
              </ul>
            </li>
            <li>
              <img src={whatsapp_icon} alt="whatsapp icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
