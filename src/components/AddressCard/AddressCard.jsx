import React from "react";
import address_logo from "../../assets/icons/address_logo.svg";
import arrow from "../../assets/icons/arrow-up.svg";
import clock from "../../assets/icons/clock.svg";
import phone_icon from "../../assets/icons/phone_icon.svg";
import location from "../../assets/icons/location.svg";
import styles from "./AddressCard.module.css";

const AddressCard = () => {
  return (
    <div className={styles.AddressCardContainer}>
      <div className={styles.adressHeader}>
        <div className={styles.addressLeft}>
          <img src={address_logo} alt="address logo" />
          <div className={styles.addressText}>
            <h3>Iskender home</h3>
            <span>открыть в карте</span>
          </div>
        </div>
        <img src={arrow} alt="arrow" className={styles.arrow} />
      </div>
      <hr />
      <div className={styles.addressMiddle}>
        <img src={location} alt="" />
        <div className={styles.addressMiddleText}>
          <p>Кыргызстан, г. Бишкек</p>
          <p>л. Турусбекова A167</p>
        </div>
      </div>
      <div className={styles.addressBottom}>
        <div>
          <img src={clock} alt="clock" />
          <span>08:00 - 22:00</span>
        </div>
        <div>
          <img src={phone_icon} alt="phone icon" />
          <span>08:00 - 22:00</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
