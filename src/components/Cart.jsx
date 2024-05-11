import React from "react";
import CartItem from "./CartItem";
import img from "../assets/apple.jpg";
import { useDispatch, useSelector } from "react-redux";
const Cart = () => {
  const { cartItems,subTotal,tax,shipping,total } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (id) => {
    dispatch({ type: "addToCart", payload: { id } })
    dispatch({ type:"calculatePrice"});
  };
  const decrement = (id) => {
    dispatch({ type: "decrement", payload: id });
  };
  const deleteHandler = (id) => {
    dispatch({type:"deleteFromCart",payload:id})
    dispatch({ type:"calculatePrice"});

  };
  return (
    <div className="cart">
      <main>
        {cartItems.length > 0 ? (
          cartItems.map((i) => (
            <CartItem
              imgsrc={i.imgsrc}
              name={i.name}
              price={i.price}
              qty={i.quantity}
              id={i.id}
              key={i.id}
              decrement={decrement}
              increment={increment}
              deleteHandler={deleteHandler}
            />
          ))
        ) : (
          <h1>No Items Yet</h1>
        )}
      </main>
      <aside>
        <h2>subtotal:${subTotal}</h2>
        <h2>shipping:${shipping}</h2>
        <h2>tax:${tax}</h2>
        <h2>total:${total}</h2>
      </aside>
    </div>
  );
};

export default Cart;
