import React, { useContext } from "react";
import { useState } from "react/cjs/react.development";
import clsx from "clsx";
import Context from "../Context";


import styles from "./Modal.module.scss";
import axios from "axios";

export default function Modal({onCloseModal}) {
    const [inputValue, setInputValue] = useState("");
    const {SubmitModal} = useContext(Context);
    
    const onSubmitModal = (e) => {
        e.preventDefault();
        if(!inputValue.trim()) {
            return
        }
        axios.patch("http://localhost:3001/names/1", {
            name: inputValue
        }).then(() => SubmitModal(inputValue))
    }
    
    return(
        <div className={styles.modal}>
            <div className={styles.modalContainer}>
                <p className={styles.modalTitle}>Переименовать</p>
                <form onSubmit={onSubmitModal}>
                    <input className={styles.inputModal} type="text" placeholder="Text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    <button className={styles.modalBtnSubmit} type="submit">переименовать</button>
                    <button onClick={onCloseModal} className={styles.modalBtnCancle}>отмена</button>
                </form>
                
            </div>
        </div>
    );
}