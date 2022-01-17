import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import styles from "./Header.module.scss";

let links = [
    {title: "Title2"},
    {title: "Title3"},
    {title: "Title4"}
]

export default function Header () {
    return(
        <header className={styles.header}>
            <div className="container3">
                <Link className={styles.headerLink} to="/">Title1</Link>
                {links.map((link,id) => (
                    <Link className={styles.headerLink} key={id} to={`/${link.title}`}>{link.title}</Link>
                ))}
            </div>
        </header>
    );
}