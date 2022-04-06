import React , {useState} from "react"
import s from './DeleteModal.module.css'
import Modal from 'react-modal';


Modal.setAppElement('#root');

export default function DeleteButton ({ id }) {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
      }
      function closeModal() {
          setIsOpen(false);
        }

    const deleteProduct = () => {
       
        fetch('http://localhost:3010/products/' + id, {
            method: 'DELETE',
          })

          closeModal()

        }

    return (
        <>
          <button className={s.deleteButton} onClick={openModal}>Delete</button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className={s.Modal}
                    overlayClassName={s.Overlay}
                
                >    

                <h3 className={s.deleteQuation}>You want to remove the product ?</h3>
                <div className={s.buttonsWrapper}>
                    <button className={s.button} onClick={deleteProduct}>Delete</button>
                    <button className={s.button}  onClick={closeModal}>Cancel</button>
                </div>
                </Modal>
        </>
    )
}