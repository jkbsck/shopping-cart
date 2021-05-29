import React from "react";
import SingleShow from "../components/SingleShow";
import { useGlobalContext } from "../context";
import { CgShoppingCart } from "react-icons/cg";

const Cart = () => {
  const { cart } = useGlobalContext();

  const totalPrice = () => {
    return (cart.length * 49999).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  };

  if (cart.length < 1) {
    return (
      <div className="cart-empty">
        <span>Cart is empty.</span>
        <span>
          <CgShoppingCart className="empty-icon" />
        </span>
      </div>
    );
  }

  return (
    <section className="cart-wrapper">
      <div className="cart-summary col-9 col-lg-6 offset-1 offset-lg-3">
        <div className="title-wrapper">
          <h2>Cart summary:</h2>
        </div>
        <div className="items-wrapper">
          <h4>Shows in cart:</h4>
          {cart.map((show) => {
            return (
              <div>
                <span>{show.name}</span>
                <span>$49,999.00</span>
              </div>
            );
          })}
        </div>
        <div className="amount-wrapper">
          <span>Amount: </span>
          <span>{cart.length}</span>
        </div>
        <div className="total-wrapper">
          <span>Total: </span>
          <span>{`$${totalPrice()}`}</span>
        </div>
        <div className="actions-wrapper">
          <button className="pay-with-card btn">Pay With Card</button>
          <button className="pay-with-kidney btn">Pay With Kidney</button>
        </div>
      </div>
      <div className="cart-items-wrapper">
        <h3 className="title">Cart Items:</h3>
        <div className="cart-items">
          {cart.map((show) => {
            return <SingleShow key={show.id} {...show} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Cart;
