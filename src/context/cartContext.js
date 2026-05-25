import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (phone) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === phone.id);

      if (exists) {
        return prev.map((item) =>
          item.id === phone.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...phone, quantity: 1 }];
  
    });
  };

  const removeFromCart = (phoneId) => {
    setCart((prev) => prev.filter((item) => item.id !== phoneId));

  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}