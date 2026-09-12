import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Properties from './pages/Properties'
import Footer from './components/Footer'

function App() {
  const [searchFilters, setSearchFilters] = useState(null);

  const handleHeroSearch = ({ location, propertyType, priceRange }) => {
    let minPrice = "";
    let maxPrice = "";
    if (priceRange) {
      const [min, max] = priceRange.split('-');
      minPrice = min;
      maxPrice = max;
    }
    setSearchFilters({ location, propertyType, minPrice, maxPrice });
  };

  return (
    <>
      <Navbar/>
      <main>
      <Home onSearch={handleHeroSearch}/>
      <Properties filters={searchFilters}/>
      </main>
      <Footer/>
    </>
  )
}

export default App
