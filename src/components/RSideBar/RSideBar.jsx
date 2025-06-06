import React from "react";
import Styles from "./RSideBar.module.css";
import {
  FaTachometerAlt,
  FaUserFriends,
  FaChartLine,
  FaBoxes,
  FaShoppingCart,
  FaTruckLoading,
  FaBook,
  FaHandHoldingUsd,
  FaMoneyBillWave,
  FaGift,
  FaUserCog,
  FaTools,
} from "react-icons/fa";

const RSideBar = () => {
  return (
    <div className={Styles.SBase}>
      <div className={Styles.Icons}>
        <ul>
          <li>
            <FaTachometerAlt />
          </li>
          <li>
            <FaUserFriends />
          </li>
          <li>
            <FaChartLine />
          </li>
          <li>
            <FaBoxes />
          </li>
          <li>
            <FaShoppingCart />
          </li>
          <li>
            <FaTruckLoading />
          </li>
          <li>
            <FaBook />
          </li>
          <li>
            <FaHandHoldingUsd />
          </li>
          <li>
            <FaMoneyBillWave />
          </li>
          <li>
            <FaGift />
          </li>
          <li>
            <FaUserCog />
          </li>
          <li>
            <FaTools />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RSideBar;
