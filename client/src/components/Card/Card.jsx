import React from "react";
import style from "./Card.module.css";

export default function Card({pokemon}){
    return(
        <div>
            <p>{pokemon.name}</p>
            <hr />
        </div>
    )
}