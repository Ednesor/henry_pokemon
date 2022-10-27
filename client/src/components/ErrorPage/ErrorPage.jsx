import React from "react";
import style from "./ErrorPage.module.css";
import {Link} from "react-router-dom";

export default function ErrorPage(){
    return(
        <div className={style.container}>
            <div className={style.mini}>
                <p className={style.title}>Pagina no encontrada</p>
                <Link to={"/home"} className={style.button}>Home</Link>
            </div>
        </div>
    )
}