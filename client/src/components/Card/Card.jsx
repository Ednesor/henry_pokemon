import React from "react";
import { Link } from "react-router-dom";
import style from "./Card.module.css";
import imageDefault from "./imageDefault.jpg";

export default function Card({ pokemon }) {

    const selectImage = () => {
        let num = Math.round(Math.random() * 100);
        if (num === 1 && pokemon.imageShiny) return pokemon.imageShiny;
        return pokemon.image
    }
    const showTypes = () => {
        return (
            <div className={style.typeContainer}>
                {pokemon.types.map((t, i) => {
                    t = t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
                    return <p key={i} className={[style.type, t].join(" ")} style={selectTypeClass(t)}>{t}</p>
                })}
            </div>
        )
    }
    function selectTypeClass(type, style){
        let bg = "";
        let color = "";
        switch (type) {
            case "Normal":
                bg = "#A4ACAF";
                color = "black";
                break;
            case "Fighting":
                bg = "#D56723";
                color = "white";
                break;
            case "Flying":
                bg = "linear-gradient(0deg, #BDB9B8 50%, #3DC7EF 50%)";
                color = "black";
                break;
            case "Poison":
                bg = "#B97FC9";
                color = "white";
                break;
            case "Ground":
                bg = "linear-gradient(0deg, #AB9842 50%, #F7DE3F 50%)";
                color = "black";
                break;
            case "Rock":
                bg = "#A38C21";
                color = "white";
                break;
            case "Bug":
                bg = "#729F3F";
                color = "white";
                break;
            case "Ghost":
                bg = "#7B62A3";
                color = "white";
                break;
            case "Steel":
                bg = "#9EB7B8";
                color = "black";
                break;
            case "Fire":
                bg = "#FD7D24";
                color = "white";
                break;
            case "Water":
                bg = "#4592C4";
                color = "white";
                break;
            case "Grass":
                bg = "#729F3F";
                color = "white";
                break;
            case "Electric":
                bg = "#EED535";
                color = "black";
                break;
            case "Psychic":
                bg = "#F265B8";
                color = "white";
                break;
            case "Ice":
                bg = "#51C4E7";
                color = "black";
                break;
            case "Dragon":
                bg = "linear-gradient(0deg, #53A4CF 50%, #F16E57 50%)";
                color = "white";
                break;
            case "Dark":
                bg = "#707070";
                color = "white";
                break;
            case "Fairy":
                bg = "#FDB9E9";
                color = "black";
                break;
            case "Unknown":
                bg = "black";
                color = "white";
                break;
            case "Shadow":
                bg = "gray";
                color = "white";
                break;
            default:
                bg = "white";
                color = "black"
        }
        return {background: bg, color: color}
    }
    return (
        <div className={style.container}>
            <img src={selectImage()} alt="pokemon-Pic" className={style.image} onError={(e => {e.target.onerror = null; e.target.src = imageDefault})} />
            <p className={style.name}>{pokemon.name.substring(0,1).toUpperCase()+pokemon.name.substring(1,pokemon.name.length)}</p>
            {showTypes()}
            <Link to={`details/${pokemon.id}`} className={style.button}>More details</Link>
        </div>
    )
}