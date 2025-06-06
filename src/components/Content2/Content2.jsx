import React from "react";
import Styles from "./Content2.module.css";
import { CiSquarePlus } from "react-icons/ci";

const Content2 = () => {
  return (
    <div className={Styles.C2}>
      <div className="row">
        <div className={`col-3 ${Styles.CC1}`}>To-do List</div>
        <div className="col-4"></div>
        <div className={`col-2 ${Styles.CC2}`}>Today's</div>
        <div className="col-2">Pending</div>
        <div className="col-1">
          <CiSquarePlus className={Styles.IconC} />
        </div>
      </div>
      <hr></hr>
      <div
        className="row"
        style={{
          fontSize: "15px",
          color: "rgb(102, 100, 100)",
          padding: "5px",
        }}
      >
        <div className="col-2">Firm Name</div>
        <div className="col-2">Task</div>
        <div className="col-2">Staff ID</div>
        <div className="col-2">S Date</div>
        <div className="col-2">E Date</div>
        <div className="col-2">Status</div>
      </div>
      <div
        className="row"
        style={{ padding: "5px", fontweight: "600", marginTop: "13px" }}
      >
        <div className="col-2">OMunim</div>
        <div className="col-2">Add Stock</div>
        <div className="col-2">411</div>
        <div className="col-2">12.2.24</div>
        <div className="col-2">25.2.24</div>
        <div className="col-2">Completed</div>
      </div>
      <hr></hr>
      <div className="row" style={{ padding: "5px", fontweight: "600" }}>
        <div className="col-2">OMunim</div>
        <div className="col-2">Add Stock</div>
        <div className="col-2">411</div>
        <div className="col-2">12.2.24</div>
        <div className="col-2">25.2.24</div>
        <div className="col-2">Completed</div>
      </div>
      <hr></hr>
      <div className="row" style={{ padding: "5px", fontweight: "600" }}>
        <div className="col-2">OMunim</div>
        <div className="col-2">Add Stock</div>
        <div className="col-2">411</div>
        <div className="col-2">12.2.24</div>
        <div className="col-2">25.2.24</div>
        <div className="col-2">Completed</div>
      </div>
    </div>
  );
};

export default Content2;
