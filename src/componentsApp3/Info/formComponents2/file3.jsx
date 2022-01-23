import React ,{useRef, useState}from "react";
import clsx from 'clsx';
import styles from '../Info.module.scss';


export default function File3({ field, form: { touched, errors }, ...props}) {

   
    return(
        <>         
           <label className={styles.labelForm}>
                    <p  className={styles.fileBtn}>Загрузить файл</p>
                    <input 
                        
                        className={styles.inputFile}
                        type="file"
                        accept="image/*"
                        {...props}                         
                    />    
                    {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}               
            </label>            
        </>
    )
}