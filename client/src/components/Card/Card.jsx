import React from "react";
// import { useHistory } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({pokemon}){
    // const history = useHistory()

    return(
        <div>
            <p>{pokemon.name}</p>
            <hr />
        </div>
    )
}