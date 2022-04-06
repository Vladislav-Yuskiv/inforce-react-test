import { useEffect, useState } from "react";
import { useSelector , useDispatch } from 'react-redux';
import { getProducts } from './redux/products/product-selector'
import { Routes, Route, Link } from "react-router-dom";
import productActions from './redux/products/product-action'
import ProductList from "./views/ProductList";
import ProductView from "./views/ProductView"

function App() {

  const [ loading , setLoading] = useState(false) ;

  const dispatch = useDispatch();
  const products = useSelector(getProducts)
  useEffect(()=>{
    setLoading(true)
    fetch("http://localhost:3010/products" , {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(res => res.json()).then(result => {
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
