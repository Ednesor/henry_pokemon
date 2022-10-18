import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";

export default function Landing(){
    return(
        <div>
            <p>Pagina de inicio</p>
            <Link to="/home" >Iniciar</Link>
        </div>
    )
}