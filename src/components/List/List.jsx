import React from "react";
import ListItem from "../ListItem/ListItem";

import styles from "./List.module.scss";

const List = (props) => {

    return(
        <div className={styles.listWrap}>
            {props.lists.map((list, id) => (
                <ListItem  
                    onChange={props.onChecked}
                    key={id} list={list}/>
            ))}
        </div>
    );
}

export default List;