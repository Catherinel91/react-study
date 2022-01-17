import React, { useContext } from "react";
import clsx from 'clsx';
import Context from "../Context";

import styles from "./ListItem.module.scss";

const ListItem = ({list, onChange}) => {
    const {onRemove} = useContext(Context);
    return(
        <div className={styles.listItem}>
            <label className={styles.listItemLabel}>
                <input
                onChange={() => onChange(list.id)} 
                checked={list.completed} 
                className={styles.listItemCheckbox} 
                type="checkbox" />
                <span className={clsx(styles.listItemText, {
                    [styles.listItemChecked] : list.completed
                })}>{list.title}</span>
            </label>
            <button onClick={() => onRemove(list.id)} className={styles.listItemBtnClose}>X</button>            
        </div>
    );
}

export default ListItem;