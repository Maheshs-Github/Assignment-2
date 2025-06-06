import React from "react";
import Styles from "./SideBar.module.css";
import {
  FaHome,
  FaChartBar,
  FaBox,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaTags,
  FaUsers,
  FaCogs,
  FaUserCircle,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <div className={Styles.SBase}>
      <div className={Styles.Icons}>
        <ul>
          <li>
            <FaHome />
          </li>
          <li>
            <FaChartBar />
          </li>
          <li>
            {" "}
            <FaBox />
          </li>
          <li>
            <FaFileAlt />
          </li>
          <li>
            {" "}
            <FaMoneyCheckAlt />
          </li>
          <li>
            {" "}
            <FaTags />
          </li>
          <li>
            <FaUsers />
          </li>
          <li>
            <FaCogs />
          </li>
          <li>
            <FaUserCircle />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
