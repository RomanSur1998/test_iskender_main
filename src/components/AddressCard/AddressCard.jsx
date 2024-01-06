import React from "react";
import address_logo from "../../assets/icons/address_logo.svg";
import styles from "./AddressCard.module.css";

const AddressCard = () => {
  return (
    <div className={styles.AddressCardContainer}>
      <div>
        <img src={address_logo} alt="address logo" />
        <div>
          <h3>skender home</h3>
          <span>открыть в карте</span>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;
