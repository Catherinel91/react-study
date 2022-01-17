import React, { useState }  from "react";

import styles from "./Modal.module.scss";

const Modal = () => {

    const [openModal, setOpenModal] = useState(false);
    return(
        <>
        <button onClick={() => setOpenModal(true)}>Open Modal</button>

        {openModal && 
        <div className={styles.modal}>
            <div className={styles.modalItem}>
                <p>Text Modal</p>
                <button onClick={() => setOpenModal(false)}>CloseModal</button>
            </div>
        </div>}
        </>


    );
}

export default Modal;