import { Home } from './generalPages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './generalPages/Shop';
import { createContext, useState } from 'react';

export const PurchaseContext = createContext();
function App() {

  const [purchase, setPurchase] = useState([])
  console.log(purchase);

  return (
    <BrowserRouter>
      <Routes>
        < PurchaseContext.Provider value={{setPurchase}} >
          <Route path="/" element={<Home />} />
        </PurchaseContext.Provider>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
