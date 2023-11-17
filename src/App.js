import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider from './CartContext';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    const existingProductIndex = cart.findIndex((p) => p.id === product.id);

    if (existingProductIndex !== -1) {
      // Si el producto ya está en el carrito, actualiza la cantidad
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      // Si el producto no está en el carrito, agrégalo
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };


  return (
    <CartContextProvider>
      <Router>
        <div>
          <NavBar cartCount={cart.length} />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenido a FireShop!" addToCart={addToCart} />}
            />
            <Route path="/category/:category" element={<ItemListContainer addToCart={addToCart} />} />
            <Route path="/item/:id" element={<ItemDetailContainer addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          </Routes>
        </div>
      </Router>
    </CartContextProvider >
  );
}

export default App;
