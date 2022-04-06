import { useEffect } from "react"
import { useSelector , useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/product-selector'

export default function ProductView ({productId}) {

    const products = useSelector(getProducts)


  useEffect(()=>{
  const clickedProduct =  products.filter(product => product.id = productId)
  })

    return(
        <>

        <h1>Тут повинна бути логіка редагування кожного продукту</h1>

       
        </>
    )
}