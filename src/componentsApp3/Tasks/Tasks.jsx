import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

import styles from "./Tasks.module.scss";
import Context from "../Context";
import Loader from '../Loader/Loader'
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Tasks({onAddTask, tasks}) {
    const [inputVal, setInputVal] = useState("");      
    const {onRemove} = useContext(Context);
    const [loading, setLoading] = useState(false);
    

    const onSubmit = (e) => {
        e.preventDefault();
        if(!inputVal.trim()) {
            return
        }  
        setLoading(true)
        axios.post("http://localhost:3001/titles", {
            title: inputVal
        }).then(({data}) => {
            onAddTask(data);
            setLoading(false)
            setInputVal("")
          })
    }

     

    
    return(
        
                <div className={styles.ul}>
                    <form onSubmit={(e) => onSubmit(e)} action="">
                        <input value={inputVal} onChange={(e) => setInputVal(e.target.value)}  className={styles.taskInput} type="text" placeholder="Введите текст"/>
                    </form> 
                    
                    {loading ? (<Loader/>) :
                        (tasks.length ?    
                            (
                                tasks.map(item => (
                                <TransitionGroup>
                                <CSSTransition
                                    key={item.id}
                                    timeout={500}
                                    classNames="item"
                                >
                                <div key={item.id} className={styles.li}>
                                    <span className={styles.liText}>{item.title}</span>
                                    <button onClick={() => onRemove(item.id)} className={styles.btnTask}>X</button>
                                </div>
                                </CSSTransition> 
                                </TransitionGroup>                               
                            ))
                            
                            )
                            : (<div>Задачи не найдены</div>)
                        )
                    }               
                    
                </div>
           
    );
}