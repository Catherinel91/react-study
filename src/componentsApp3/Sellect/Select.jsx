import React from "react";

import cl from "./Select.module.scss";

export default function Select({options, onChange, value, defaultValue}) {
    
    return(
        <select className={cl.select}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        >
            <option value={defaultValue} >Сортировка</option>
            {options.map(opt => <option key={opt.val} value={`${opt.val}`} >{opt.name}</option>)
            }
        </select>
    );
}