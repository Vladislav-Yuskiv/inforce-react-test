import { useEffect, useState } from "react"
import { useParams, useRouteMatch} from 'react-router-dom';


export default function ProductView ( ) {

    const { productId } = useParams();
    const [clickedProduct , setClickedProduct] = useState({})

  useEffect(()=>{
  
  fetch(`http://localhost:3010/products/${productId}`).then(res => res.json()).then(result => {
    setClickedProduct(result)
    
  })
} , [ productId])

  console.log(clickedProduct);

    return(
        <>

        <h1>Тут повинна бути логіка редагування {clickedProduct.name}</h1>
        <img src={clickedProduct.imageUrl} alt={clickedProduct.name}/>

       
        </>
    )
}