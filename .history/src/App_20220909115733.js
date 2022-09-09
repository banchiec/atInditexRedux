import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { fetchProducts } from './features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const { loadingListProducts }= useSelector((state) => state.product)
  console.log(loadingListProducts);
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      <h1>Loading</h1>
      <h1>Redux</h1> 
    </>
  );
}

export default App;
