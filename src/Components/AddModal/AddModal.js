import React , {useState} from "react"
import s from './AddModal.module.css'
import Modal from 'react-modal';
import {fetchPostProduct} from '../../service/products-services'

Modal.setAppElement('#root');


export default function AddButton () {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [size, setSize] = useState(200)
    const [count, setCount] = useState(0)
    const [weight, setWeight] = useState( 100)
    const [commentText, setCommentText] = useState( '')


     function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
      }

      const handleChange = (e) => {
        const { name, value } = e.currentTarget;
        switch (name) {
          case 'productName':
            setName(value);  
            break;
          case 'productUrl':
            setImageUrl(value);
            break;
          case 'productCount':
            setCount(value);
                break;
          case 'productWeight':
            setWeight(value);
                 break;
          case 'size':
            setSize(value);
                 break;
         case 'commentText':
            setCommentText(value);
                 break;
          default:
            return;
        }
    
      }

      const submitAddProduct = (e) => {
         
        e.preventDefault()

        const product ={
            imageUrl,
            name,
            count,
            size: {
               width: size ,
               height : size
            },
            weight: weight + 'g',
            comments : [commentText]
            
        }
        fetchPostProduct(product)
        console.log(JSON.stringify(product));

        closeModal()
        reset()
      }

      const reset = () => {
        setName('')
        setImageUrl('')
        setSize(200)
        setCount(0)
        setWeight(100)
        setCommentText('')
      }

    return (
         <>
          <button className={s.addButton} onClick={openModal}>Add</button>

                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={s.Modal}
                    overlayClassName={s.Overlay}
                
                >    
                <h2>Add product</h2>
                <form onSubmit={submitAddProduct} className={s.form}>
                    <label>
                        Name of product
                        <input type="text" name="productName" value={name}  required onChange={handleChange} placeholder="tomato" />
                    </label>

                    <label>
                        URl
                        <input type="text"  name="productUrl" value={imageUrl} onChange={handleChange} placeholder="https://i.ibb.co/w6HsGMN/Potato.webp" />
                    </label>

                    <label htmlFor="size">Size of Photo </label>
                        <select  id="size" name="size" value={size}  onChange={handleChange}>
                        <option value="100"> Small</option>
                        <option value="200" >Medium</option>
                        <option value="300" >Large</option>
                        </select>

                    <label>
                        Count of product
                        <input type="text" required name="productCount" value={count} onChange={handleChange} />
                    </label>
                        
                   
                    <label>
                        Weight of product
                        <input type="text" required name="productWeight" value={weight} onChange={handleChange} />
                    </label>

                    <label>
                      Comments
                        <textarea value={commentText} name = "commentText"  onChange={handleChange} />
                    </label>

                <button type="submit" className={s.submit}>Add Product</button>
                </form>

                <button onClick={closeModal} className={s.cancel}>Cancel</button>
                </Modal> 
             </>
    )
}