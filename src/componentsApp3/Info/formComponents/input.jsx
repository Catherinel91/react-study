import React from "react";
import styles from '../Info.module.scss';

export default function Input({field,text, form: { touched, errors }, ...props}) {
    return(
        <>         
           <label className={styles.labelForm}>
                    <p className={styles.titleFieldForm}>{text}</p> 
                    <input
                    className={styles.inputForm}
                        {...field} {...props} 
                    />    
                    {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}               
            </label>
        </>
    )
}