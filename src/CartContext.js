// CartContext.js
import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const initialState = {
  cart: [], // Aquí es donde se almacenan los productos en el carrito
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      // Lógica para agregar un producto al carrito
      // Asegúrate de que action.payload tenga la estructura correcta
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case 'REMOVE_ITEM':
      // Lógica para eliminar un producto del carrito
      // Asegúrate de que action.payload tenga la estructura correcta
      return {
        ...state,
        cart: state.cart.filter(item => item.item.id !== action.payload.itemId),
      };

    case 'CLEAR':
      // Lógica para vaciar el carrito
      return {
        ...state,
        cart: [],
      };

    // Otros casos y lógica aquí

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};
