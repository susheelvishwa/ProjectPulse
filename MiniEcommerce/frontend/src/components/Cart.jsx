import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const [cart, setCart] = useState(null);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cart/view");
        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const handleClearCart = () => {
    dispatch(clearCart());
    axios
      .post("http://localhost:5000/api/cart/clear")
      .catch((error) => console.error("Error clearing cart:", error));
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.productId}>
              <h2>{item.name}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price}</p>
            </li>
          ))}
        </ul>
      )}
      <h2>Total: ${cartTotal}</h2>
      <button onClick={handleClearCart}>Clear Cart</button>
    </div>
  );
};

export default Cart;
