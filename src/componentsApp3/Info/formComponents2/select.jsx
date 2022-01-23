import React from "react";
import styles from '../Info.module.scss';



export default function SelectComponent({field,options, form: { touched, errors }, ...props}) {
    return(
        <>         
           <label className={styles.labelForm}>
                    <p className={styles.titleFieldForm}>Select</p> 
                    <select className={styles.selectForm} {...field} {...props} >
                        <option defaultValue disabled hidden>                       
                        </option>
                        {options.map(option => <option key={option.id} value={option.value}>{option.value}</option>)}
                    </select>   
                    {touched[field.name] && errors[field.name] && <p className={styles.error}>{errors[field.name]}</p>}               
            </label>
        </>
    )
}