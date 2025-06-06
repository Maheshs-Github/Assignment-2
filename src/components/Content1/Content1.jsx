import React from "react";
import Styles from "./Content1.module.css";
import { IoIosCall } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { CiShop } from "react-icons/ci";
import { TbBuildingEstate } from "react-icons/tb";
import { MdLocationCity } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { TbMapPinCode } from "react-icons/tb";
import { CiMail } from "react-icons/ci";
import { FaClipboardList } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { IoDocumentAttachSharp } from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { IoIosFingerPrint } from "react-icons/io";
import {
  FaRegMoneyBillAlt,
  FaCreditCard,
  FaMoneyCheckAlt,
  FaHome,
} from "react-icons/fa";

const Content1 = () => {
  return (
    <div className={Styles.C1}>
      <div class="container text-center">
        {/* row 1 */}
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <IoIosCall />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="7709944702"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <CgProfile />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="First Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <CgProfile />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Last Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <CiShop />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Firm Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <button
                type="button"
                class={` btn btn-outline-success ${Styles.MyB1}`}
              >
                <span class="input-group-text" id="basic-addon1">
                  <FaRegMoneyBillAlt className={Styles.MyIcon1} />
                </span>
                Sell
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* row 2 */}
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <IoIosCall />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Phone No."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <CgProfile />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Father Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <TbBuildingEstate />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="State"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text">
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <MdLocationCity />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="City"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <span className="input-group-text">
                <IoMdArrowDropdown />
              </span>
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <button
                type="button"
                class={` btn btn-outline-danger ${Styles.MyB1} ${Styles.B2}`}
              >
                <span class="input-group-text" id="basic-addon1">
                  <FaCreditCard className={Styles.MyIcon2} />
                </span>
                Loan
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* Row 3 */}
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaRegAddressCard />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <TbMapPinCode />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Pin Code"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <CiMail />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Mail ID"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            {/* 1 */}
            <div class={`input-group mb-3 ${Styles.SIcon}`}>
              <span class="input-group-text" id="basic-addon1">
                <ImCheckboxUnchecked />
              </span>
              <input
                type="text"
                class={`form-control ${Styles.SPlaceH}`}
                placeholder="Men"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              {/* 2 */}
              <span
                class={`input-group-text ${Styles.SIcon}`}
                id="basic-addon1"
              >
                <ImCheckboxChecked />
              </span>
              <input
                type="text"
                class={`form-control ${Styles.SPlaceH}`}
                placeholder="Women"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <button
                type="button"
                class={` btn btn-outline-warning ${Styles.MyB1} ${Styles.B3}`}
              >
                <span class="input-group-text" id="basic-addon1">
                  <FaMoneyCheckAlt className={Styles.MyIcon3} />
                </span>
                Udhaar
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* Row 4 */}
        <div class="row">
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaClipboardList />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="GST No."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaAddressCard />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Adhaar Card No."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <span class="input-group-text" id="basic-addon1">
                <FaIdCard />
              </span>
              <input
                type="text"
                class="form-control"
                placeholder="Pan Card No."
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
          </div>
          <div class="col">
            <div class={`input-group mb-3 ${Styles.PIcons}`}>
              <span class="input-group-text" id="basic-addon1">
                <IoIosFingerPrint />
              </span>
              <span class="input-group-text" id="basic-addon1">
                <FaCamera />
              </span>
              <span class="input-group-text" id="basic-addon1">
                <IoDocumentAttachSharp />
              </span>
            </div>
          </div>
          <div class="col">
            <div class="input-group mb-3">
              <button
                type="button"
                class={` btn btn-outline-info ${Styles.MyB1} ${Styles.B4}`}
              >
                <span class="input-group-text" id="basic-addon1">
                  <FaHome className={Styles.MyIcon} />
                </span>
                Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
