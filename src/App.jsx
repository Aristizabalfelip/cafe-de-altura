import { Home } from './generalPages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './generalPages/Shop';
import { createContext, useState } from 'react';
import { ShoppingCart } from './generalPages/ShoppingCart';

export const PurchaseContext = createContext();
function App() {

  const [purchase, setPurchase] = useState([])
 

  return (
    < PurchaseContext.Provider value={{ purchase,setPurchase }} >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </PurchaseContext.Provider>
  );
}

export default App;
