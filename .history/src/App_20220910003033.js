import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screen/ProductScreen/ProductsScreen';
import Header from './components/Header/Header';
import ProductDetailsScreen from './screen/ProductDetailsScreen/ProductDetailsScreen';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<ProductScreen/>}/>
        <Route path='/product/details/:id' element={<ProductDetailsScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
