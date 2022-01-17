import React from "react";

import cl from "./Search.module.scss";

export default function Search({onChange}) {
    
    return(
        <input onChange={onChange}  placeholder="поиск" className={cl.search}></input>
    );
}