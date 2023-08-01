import { Home } from './generalPages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shop } from './generalPages/Shop';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
