import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';
import CartContextProvider, { useCart } from './CartContext';

function App() {
  const { cartList } = useCart();

  return (
    <CartContextProvider>
      <Router>
        <div>
          <NavBar cartCount={cartList.length} />
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="¡Bienvenido a FireShop!" />}
            />
            <Route path="/category/:category" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
