import { useEffect, useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { getProducts } from './redux/products/product-selector'
import { Routes, Route } from "react-router-dom";
import { fetchAllProducts } from '../src/service/products-services';
import productActions from './redux/products/product-action'
import ProductList from "./views/ProductList";
import ProductView from "./views/ProductView"

function App() {

  const [ loading , setLoading] = useState(false) ;

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  
  useEffect(()=>{
    setLoading(true)
    fetchAllProducts().then(result => {
      setLoading(false)
      dispatch(productActions.allProducts(result))
    }).catch(console.log);

  } , [ products])



  return (
    <div className="App">
 
            <Routes>
              <Route path="/" exact element={<ProductList products={products}/>} />
              <Route path="/products/:productId" element={<ProductView />} />
            </Routes>
      
        
    </div>
  );
}

export default App;
