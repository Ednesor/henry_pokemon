import React from "react";
import style from "./ErrorPage.module.css";
import {Link} from "react-router-dom";

export default function ErrorPage(){
    return(
        <div>
            <p>Pagina no encontrada</p>
            <Link to={"/home"}>Home</Link>
        </div>
    )
}