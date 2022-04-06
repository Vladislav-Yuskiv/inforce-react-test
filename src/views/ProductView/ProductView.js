import { useEffect, useState } from "react"
import { useParams, useRouteMatch} from 'react-router-dom';
import { fetchProductById } from '../../service/products-services'


export default function ProductView ( ) {

    const { productId } = useParams();
    const [clickedProduct , setClickedProduct] = useState({})

  useEffect(()=>{
  
    fetchProductById(productId).then(result => {
    setClickedProduct(result)
    
  })
} , [ productId])

  console.log(clickedProduct);

    return(
        <>

        <h1>Тут повинна бути логіка редагування {clickedProduct.name}</h1>
        <img src={clickedProduct.imageUrl} alt={clickedProduct.name}/>

       <button>Edit product  {clickedProduct.name}</button>
        </>
    )
}