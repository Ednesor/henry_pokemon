import React from "react";
import style from "./Cards.module.css";
import Card from "../Card/Card"

export default function Cards({arrayPoke}){

    const createCards = () => {
        return arrayPoke.map((p, i) => {
            return <Card key={i} pokemon={p}/>
        })
    }

    return(
        <div className={style.container}>
            {createCards()}
        </div>
    )
}