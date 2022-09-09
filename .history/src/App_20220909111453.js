import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { fetchProducts } from './features/product/productSlice';

function App() {
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
   <h1>Redux</h1> 
  );
}

export default App;
