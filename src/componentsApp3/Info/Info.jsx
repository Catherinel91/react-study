import React, { useContext } from "react";
import { ModalContext } from "../../App3"

import styles from "./Info.module.scss";

export default function Info({onShowModal, text}) {
    return(
        <div className="main">
            <div className={styles.infoWrap}>
                <p className={styles.infoText}>{text}</p>
                <button onClick={() => onShowModal(true)}  className={styles.infoBtn}>EDIT</button>
            </div>
        </div>
    );
}