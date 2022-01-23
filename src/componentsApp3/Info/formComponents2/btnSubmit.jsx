import React from "react";
import styles from '../Info.module.scss';

export default function BtnSubmit({ field, form,text, ...props }) {
    return(
        <>
            <button  
                className={styles.btnSubmitForm}              
                {...props}
                >{text}
            </button>
        </>
    )
}