import React from 'react';
import './styles/App.scss';
//import CartShopping from './Components/CartShopping';
import Header from './Components/Header';
import Footer from './Components/Footer';
import PaintProducts from './Components/PaintProducts';


function App() {
  return (
      <div>
          <Header />
          <PaintProducts />
          <Footer />
      </div>
)
}

export default App;
