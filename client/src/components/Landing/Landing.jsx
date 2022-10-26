import React from "react";
import { Link } from "react-router-dom";
import style from "./Landing.module.css";
import image from "./logo.png"

export default function Landing(){
    return(
        <div className={style.container}>
            <img src={image} alt="logo" className={style.image} />
            <p className={style.title}>Welcome to my PI</p>
            <Link to="/home" className={style.button}><p className={style.text}>START PAGE</p></Link>
        </div>
    )
}