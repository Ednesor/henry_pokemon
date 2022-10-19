import React from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card"

export default function Cards({arrayPoke}){

    const createCards = () => {
        return arrayPoke.map(p => {
            return <Card pokemon={p}/>
        })
    }

    return(
        <div>
            {createCards()}
        </div>
    )
}