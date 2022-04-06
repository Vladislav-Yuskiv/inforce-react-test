import React  from "react"
import { Link } from "react-router-dom";
import s from './ProductList.module.css'
import AddModal from "../../Components/AddModal";
import DeleteModal from "../../Components/DeleteModal";



export default function ProductList ({products}) {
    
    return(
        <>
        <ul className={s.productList}>
        {products.map(product =>{
            return <li className={s.productItem} key={product.id}>
                            <Link to={{pathname: `products/${product.id}`}}>
                                <img src={product.imageUrl} alt={product.name} height={product.size.height} width={product.size.width}/>
                            </Link>
                            <p className={s.name}>{product.name}</p>
                            <p>Count : {product.count}</p>
                            <p>Weight : {product.weight}</p>
                            <p>Comments:</p>
                            <p>{product.comments.join(',')}</p>
                            <DeleteModal id={product.id}/>
                    
                    </li>
        })}
        </ul>
        
        <AddModal/>
        </>
    )

}