import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage';
import ShopOffer from './pages/ShopOffer';
import Vehicles from './pages/Vehicles';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/shopOffers" element={<ShopOffer/>} />
        <Route path="/vehicles" element={<Vehicles />} />
      </Routes>
    </div>
  )
}

export default App;
