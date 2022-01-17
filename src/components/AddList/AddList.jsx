import React, {useState } from 'react';

import styles from "./AddList.module.scss";

const AddList = ({onAdd, onLoad})=> {
    const [value, setinputVal] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(value.trim()) {
            onAdd(value);
            setinputVal("");
        }
    }
    return(
        <form className={styles.addListWrap} onSubmit={onSubmitForm}>
            <input 
            value={value} 
            onChange={(e) => setinputVal(e.target.value)}  
            type="text" className={styles.addListInput} />
            <button disabled={onLoad} className={styles.addListBtn}>ADD</button>
        </form>
    );
}

export default AddList;