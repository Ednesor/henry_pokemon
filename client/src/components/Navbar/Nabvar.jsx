import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Search from "../Search/Search"

export default function Navbar(){
    return(
        <div>
            <ul>
                <li>
                    <Link to={"/home"}>Home</Link>
                </li>
                <li>
                    <Link to={"/create"}>Crear Pokémon</Link>
                </li>
            </ul>
            <Search />
        </div>
    )
}