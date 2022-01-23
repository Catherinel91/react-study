import React from "react";
import styles from '../Info.module.scss';

export default function Area({field, form: { touched, errors }, ...props}) {
    return(
        <>         
           <label className={styles.labelForm}>
                    <p className={styles.titleFieldForm}>Text</p> 
                    <textarea 
                        className={styles.formArea}
                        type="text"
                        {...field} {...props} 
                    />    
                    {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}               
            </label>
        </>
    )
}