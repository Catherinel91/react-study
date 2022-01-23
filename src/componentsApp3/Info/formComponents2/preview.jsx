import React ,{useEffect, useState}from "react";

import styles from '../Info.module.scss';

export default function Preview({ file,field,setFieldValue, ...props}) {
   
    const [preview, setPreview] = useState(null);

    useEffect(() => {            
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target.result);
        }

        reader.readAsDataURL(file);
    },[file])
    
    
    return(
        <>         
           <div className={styles.fileWrap}>
                <span  onClick={(e) =>{setPreview(null); setFieldValue()}}>X</span>
                {preview ? <img  className={styles.fileWrapImg} src={preview} alt=""/> : "Loading"}
            </div>            
        </>
    )
}