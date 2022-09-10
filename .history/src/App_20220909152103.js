import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchProducts } from './features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProductScreen from './screen/ProductScreen/ProductsScreen';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
