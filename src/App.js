import './App.css';
import Header from './components/Header';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Sixth from './components/Sixth';
import Seventh from './components/Seventh';
import Eight from './components/Eight';
import Nine from './components/Nine'
import Footer from './components/Footer';
import Shop from './components/Shop';
import { Routes, Route } from "react-router-dom"
import Shop1 from './components/Shop1';
import Shop2 from './components/Shop2';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/" element={
            <>
              <Header />
              <Second />
              <Third />
              <Fourth />
              <Fifth />
              <Sixth />
              <Seventh />
              <Eight />
              <Nine />
              <Footer />
            </>
          }
        />
        <Route
          path="/shopOffers" element={
            <>
              <Shop></Shop>
              <Shop1></Shop1>
              <Shop2></Shop2>
            </>
          }
        />
      </Routes>
    </div>
  )
}

export default App;
