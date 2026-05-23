import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {  // ❌ tenías "CartPovide" sin "r"
  const [cart, setCart] = useState([]);

  const addToCart = (phone) => {
    setCart((prev) => {
      const exists = prev.find((item) => item.id === phone.id);

      if (exists) {
        return prev.map((item) =>
          item.id === phone.id ? { ...item, quantity: item.quantity + 1 } : item
          // ❌ tenías "quality" en vez de "quantity"
        );
      }
      return [...prev, { ...phone, quantity: 1 }];
      // ❌ tenías "quality" en vez de "quantity"
    });
  };

  const removeFromCart = (phoneId) => {
    setCart((prev) => prev.filter((item) => item.id !== phoneId));
    // ❌ tenías "item,id" con coma en vez de "item.id" con punto
  };

  // ❌ el return estaba dentro de removeFromCart, debe estar fuera
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}