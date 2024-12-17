import React, { useState, item } from "react";
import "./cart.scss";
import light from "../../assets/light.svg";
import Recently from "../recently/Recently";
import { equipments } from "../equipments/equipment.json";
import { cartsData } from "../atom/carts";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";

const Cart = () => {
  let [cart, setCart] = useRecoilState(cartsData);
  // {
  //   ...equipments,
  //   id: equipments.id,
  //   name: equipments.name,
  //   quantity: 1,
  //   price: equipments.price,
  // },

  // const [quantity, setQuantity] = useState([1]) // Initial quantity
  // const pricePerDay = 30000; // Price per day
  // const subTotal = quantity * pricePerDay; // Calculate subtotal

  // const handleIncrease = () => {
  //   setQuantity((prev) => prev + 1);
  // };

  // const handleDecrease = () => {
  //   if (quantity > 1) {
  //     setQuantity((prev) => prev - 1);
  //   }
  // };

  // Function to handle increasing quantity
  // const handleIncrease = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((equipments) =>
  //       equipments.id === id
  //         ? { ...equipments, quantity: equipments.quantity + 1 }
  //         : equipments
  //     )
  //   );
  // };

  // Function to handle decreasing quantity
  // const handleDecrease = (id) => {
  //   setCart((prevItems) =>
  //     prevItems.map((equipments) =>
  //       equipments.id === id && equipments.quantity > 1
  //         ? { ...equipments, quantity: equipments.quantity - 1 }
  //         : equipments
  //     )
  //   );
  // };

  // Function to handle item deletion with confirmation
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      setCart((prevItems) => prevItems.filter((cart) => cart.id !== id));
    }
  };

  // Calculate the subTotal
  // const subTotal = carts.reduce(
  //   (sum, equipments) => sum + equipments.price * equipments.quantity,
  //   0
  // );

  return (
    <div id="Cart">
      <div className="section">
        {cart.map((equipments) => (
          <div className="group" key={equipments.id}>
            <div className="image">
              <div className="delete" onClick={() => handleDelete(cart.id)}>
                <img
                  src="https://res.cloudinary.com/drqaon7o8/image/upload/v1731492290/delete-02_enm4vo.png"
                  alt="delete"
                />
              </div>
              <div className="tractor">
                <img
                  src={equipments.publicId}
                  alt={equipments.name}
                  loading="lazy"
                />
              </div>
              <div className="img">
                <h5>{equipments.name}</h5>
                <h6>₦{equipments.price}/day</h6>

                <div className="quantity">
                  <p>Quantity</p>

                  <div className="increase">
                    <div className="span">
                      <span>
                        <button
                          // onClick={handleDecrease(equipments.id)}
                          className="but1"
                        >
                          -
                        </button>
                      </span>
                      <span>{equipments.quantity}</span>
                      <span>
                        <button
                          // onClick={handleIncrease(equipments.id)}
                          className="but2"
                        >
                          +
                        </button>
                      </span>
                    </div>

                    <div>
                      <p>{equipments.price}</p>
                    </div>
                  </div>
                </div>

                <div className="duration">
                  <p>Duration </p>

                  <div className="light">
                    <div className="cal">
                      <div>
                        <img src={light} alt="calender" />
                      </div>
                      <div>From</div>
                    </div>
                    <div>-</div>
                    <div className="cal">
                      <div>To</div>
                      <div>
                        <img src={light} alt="calender" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="summary">
          <h5>Cart Summary</h5>

          <div className="sub">
            <div>
              <p>Sub-Total</p>
            </div>
            {/* <div>₦{subTotal.toLocaleString()}</div> */}
          </div>
          <p>Delivery fees not included yet</p>

          <Link to={"/Checkout"}>
            <div>
              <button>Checkout</button>
            </div>
          </Link>
        </div>
      </div>
      <Recently />
    </div>
  );
};

export default Cart;
