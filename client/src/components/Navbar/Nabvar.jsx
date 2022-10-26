import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Search from "../Search/Search"

export default function Navbar() {
    return (
        <div className={style.container}>
            <ul className={style.ulContainer}>
                <li className={style.liContainer}>
                    <NavLink
                        to={"/home"}
                        className={style.link}
                        activeClassName={style.selected}
                    >Home
                    </NavLink>
                </li>
                <li className={style.liContainer}>
                    <NavLink
                        to={"/create"}
                        className={style.link}
                        activeClassName={style.selected}
                    >Create Pokémon
                    </NavLink>
                </li>
            </ul>
            <Search />
        </div>
    )
}