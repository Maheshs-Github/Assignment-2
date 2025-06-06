import React from "react";
import Styles from "./Content3.module.css";

const Content3 = () => {
  return (
    <div className={Styles.C3}>
      <div className="row ">
        <div className={`col-6  ${Styles.CC1}`}>Today's Transactions</div>
        <div className="col-2"></div>
        <div className="col-4">12-02-24 | Monday</div>
      </div>
      <hr />

      <div className="row">
        <div className="col-7">
          <button
            type="button"
            className={`btn btn-outline-info w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.B4}`}
            style={{
              border: "none",
              boxShadow: "rgba(0, 0, 255, 4) 1px 2px 3px",
            }}
          >
            <div>0. Opening Cash</div>
            <div>100</div>
          </button>
        </div>
        <div className="col-5"></div>
      </div>

      {/* 2 */}
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-warning w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.MyB2} `}
            style={{
              border: "none",
              marginTop: "8px",
            }}
          >
            <div>1. Receipt</div>
            <div>20</div>
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-success w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} `}
            style={{
              border: "none",
              boxShadow: "rgba(109, 143, 100, 4) 1px 2px 5px",
              marginTop: "8px",
            }}
          >
            <div>2. Payments</div>
            <div>20</div>
          </button>
        </div>
      </div>

      {/* 3 */}
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-danger w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.MyB2} `}
            style={{
              border: "none",
              marginTop: "8px",
              boxShadow: "rgba(155, 75, 34, 4) 1px 2px 5px",
            }}
          >
            <div>3. Sale</div>
            <div>20</div>
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-primary w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} `}
            style={{
              border: "none",
              boxShadow: "rgba(55, 65, 129, 4) 1px 2px 5px",
              marginTop: "8px",
            }}
          >
            <div>4. Purchases</div>
            <div>20</div>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-info w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.MyB2} `}
            style={{
              border: "none",
              marginTop: "8px",
              boxShadow: "rgba(0, 0, 255, 4) 1px 2px 5px",
            }}
          >
            <div>5. Sale Return</div>
            <div>20</div>
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-danger w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} `}
            style={{
              border: "none",
              boxShadow: "rgba(155, 75, 34, 4) 1px 2px 5px",
              marginTop: "8px",
            }}
          >
            <div>6. Purchase Return</div>
            <div>20</div>
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-warning w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.MyB2} `}
            style={{
              border: "none",
              marginTop: "8px",
              boxShadow: "rgba(155, 75, 34, 4) 1px 2px 5px",
            }}
          >
            <div>7. Order</div>
            <div>20</div>
          </button>
        </div>
        <div className="col-6">
          <button
            type="button"
            className={`btn btn-outline-success w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} `}
            style={{
              border: "none",
              boxShadow: "rgba(109, 143, 100, 4) 1px 2px 5px",
              marginTop: "8px",
            }}
          >
            <div>8. Recieve</div>
            <div>20</div>
          </button>
        </div>
      </div>

      <div className="row">
        <div className="col-5"></div>

        <div className="col-7">
          <button
            type="button"
            className={`btn btn-outline-info w-100 d-flex justify-content-between align-items-center ${Styles.MyB1} ${Styles.B4}`}
            style={{
              border: "none",
              boxShadow: "rgba(0, 0, 255, 4) 1px 2px 3px",
              marginTop: "10px",
            }}
          >
            <div>9.Closing Cash</div>
            <div>100</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content3;
