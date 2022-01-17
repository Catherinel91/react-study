import React from "react";
import { Observer, useLocalObservable, observer } from "mobx-react";

import styles from "./Info.module.scss";
import { useDispatch } from "react-redux";
import { setCount } from "../../reducers/infoReducer";
import { useSelector } from "react-redux";

 const Info3 = ({initCount}) => {

    const store = useLocalObservable(() => {
        return{
            count: initCount ?? 0,
            dec() {
                this.count--;
            },
            inc() {
                this.count++;
            }
        }        
    })

    const dispatch = useDispatch();

    const count = useSelector(state => state.repos.count)
    console.log(count)

    function onClick() {
        dispatch(setCount(7))
    }
   
    return(
        <>      
         <button className={styles.btnCount} onClick={store.dec}>-</button>
         <Observer >{() =>(
             <span>{store.count}</span>
         )}           
         </Observer>      
         <button className={styles.btnCount} onClick={store.inc}>+</button>  
         <br/>
         <button onClick={() => onClick()}>COUNT</button>   
         <div>{count}</div>  
        </>
    );
}

// const Info3 = observer(({initCount}) => {

//     const store = useLocalObservable(() => {
//         return{
//             count: initCount ?? 0,
//             dec() {
//                 this.count--;
//             },
//             inc() {
//                 this.count++;
//             }
//         }        
//     })
   
//     return(
//         <>      
//          <button className={styles.btnCount} onClick={store.dec}>-</button>
//          <Observer >{() =>(
//              <span>{store.count}</span>
//          )}           
//          </Observer>      
//          <button className={styles.btnCount} onClick={store.inc}>+</button>       
//         </>
//     );
// })

export default  Info3;