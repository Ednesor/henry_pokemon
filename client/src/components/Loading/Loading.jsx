import React from "react";
import style from "./Loading.module.css";
import image from "./image.gif";

export default function Loading(){
    return(
        <div className={style.container}>
            <img src={image} alt="loading" />
        </div>
    )
}