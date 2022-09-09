import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { fetchProducts } from './features/product/productSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const product = useSelector((state) => state.productReducer)
  useEffect(() => {
    dispatch(fetchProducts())
  }, [])
  return (
    <>
      { product.isLoading === false ?(
        <h1>Loading</h1>

      ):(
          <h1>Redux</h1> 
      )}
    </>
  );
}

export default App;
