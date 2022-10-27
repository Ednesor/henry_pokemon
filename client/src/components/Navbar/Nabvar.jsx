import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import Search from "../Search/Search"
import image from "./reloadImage.png"
import { useDispatch } from "react-redux";
import { fetch_pokemon } from "../../redux/actions/actions";

export default function Navbar() {
    const dispatch = useDispatch();

    const reloadPokes = () => {
        dispatch(fetch_pokemon())
    }
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
            <button data="Reload pokemons" className={style.reload} onClick={reloadPokes}>
                <img src={image} alt="reload" />
            </button>
        </div>
    )
}