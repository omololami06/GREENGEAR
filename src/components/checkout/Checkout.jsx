import React, { useState } from "react";
import "./checkout.scss";
import { Link } from "react-router-dom";
import CheckoutPage2 from "../checkout2/CheckoutPage2";
import CheckoutPage3 from "../checkout3/CheckoutPage3";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { subtotalState } from "../atoms/subtotal";

const CheckoutPage = () => {
  const [activeSection, setActiveSection] = useState(1); // Default active section

  const subtotal = useRecoilValue(subtotalState);

  //   const location = useLocation();
  //   const { subtotal } = location.state || { subtotal: 0 }; // Default subtotal to 0 if undefined

  console.log("Subtotal on checkout page:", subtotal);

  return (
    <div id="CheckoutPage">
      <div>
        {/* 1. CUSTOMER ADDRESS */}
        <div className={`section ${activeSection === 1 ? "active" : ""}`}>
          <div
            className="section-header"
            onClick={() => setActiveSection(1)}
            role="button"
          >
            <input type="checkbox" checked={activeSection === 1} readOnly />
            <span>1. CUSTOMER ADDRESS</span>
          </div>
          {activeSection === 1 && (
            <form className="form">
              <div className="row">
                <div>
                  <label>Customer ID</label>
                  <input type="text" placeholder="Enter your ID" />
                </div>
                <div>
                  <label>Equipment ID</label>
                  <input type="text" placeholder="Enter Equipment ID" />
                </div>
              </div>
              <div className="row">
                <div>
                  <label>Phone Number</label>
                  <input type="text" placeholder="+234" />
                </div>
                <div>
                  <label>State</label>
                  <select>
                    <option>Select State</option>
                    <option>Lagos</option>
                    <option>Abuja</option>
                    <option>Kano</option>
                  </select>
                </div>
              </div>

              <label>Delivery Address</label>
              <input type="text" placeholder="Enter delivery address" />

              <div className="default">
                <div className="default-address">
                  <div>
                    <input type="checkbox" />
                  </div>
                  <label>Set as default address</label>
                </div>

                <div className="actions">
                  <button type="button" className="cancel">
                    Cancel
                  </button>
                  <button type="submit" className="save">
                    Save
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>

        <CheckoutPage2 />
        <CheckoutPage3 />
      </div>
      <div className="summary">
        <h5>Cart Summary</h5>

        <div className="sub">
          <div>
            <p>Sub-Total</p>
          </div>
          ₦{subtotal.toFixed(2)}
        </div>
        <p>Delivery fees not included yet</p>

        <div>
          <button>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
