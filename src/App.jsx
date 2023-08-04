import { Home } from './generalPages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './generalPages/Shop';
import { createContext, useState } from 'react';
import { ShoppingCart } from './generalPages/ShoppingCartContext';

export const PurchaseContext = createContext();
export const BillContext = createContext();

function App() {

  const [purchase, setPurchase] = useState([])
  const [bill, setBill] = useState(0)



  return (
    < PurchaseContext.Provider value={{ purchase, setPurchase,setBill, bill}} >
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
