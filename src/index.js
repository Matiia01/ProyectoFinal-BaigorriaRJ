import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'font-awesome/css/font-awesome.min.css'
import CartContextProvider from './CartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);