import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
