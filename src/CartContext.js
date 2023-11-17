// CartContext.js
import { createContext, useState, useContext } from 'react';

export const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartContextProvider');
  }
  return context;
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const isInCart = (id) => {
    return cartList.some((item) => item.id === id);
  };

  const addItem = (product, quantity) => {
    if (isInCart(product.id)) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = cartList.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCartList(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCartList([...cartList, { ...product, quantity }]);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cartList.filter((item) => item.id !== id);
    setCartList(updatedCart);
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear, isInCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
