"use client";
import {
  addItemToCart,
  clearCart,
  getCart,
  removeItemFromCart,
} from "@/utils/cart";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize cart from LocalStorage when the provider mounts
  useEffect(() => {
    setCart(getCart());
  }, []);

  const addItem = (item) => {
    const updatedCart = addItemToCart(item);
    setCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = removeItemFromCart(id);
    setCart(updatedCart);
  };

  const clearCartItems = () => {
    clearCart();
    setCart([]);
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Total items in the cart

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCartItems, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Hook for easier access to cart context
export const useCart = () => useContext(CartContext);
