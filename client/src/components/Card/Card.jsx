import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./Card.module.css";

export default function Card({ pokemon }) {

    const selectImage = () => {
        let num = Math.round(Math.random() * 100);
        if (num === 1 && pokemon.imageShiny) return pokemon.imageShiny;
        return pokemon.image
    }
    const showTypes = () => {
        return (
            <div>
                {pokemon.types.map((t, i) => {
                    t = t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
                    return <p key={i}>{t}</p>
                })}
            </div>
        )
    }

    return (
        <div>
            <p>{pokemon.name}</p>
            <img src={selectImage()} alt="" />
            {showTypes()}
            <Link to={`details/${pokemon.id}`}>More details</Link>
            <hr />
        </div>
    )
}