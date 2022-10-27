import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailed_pokemon } from "../../redux/actions/actions";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../Loading/Loading";
import style from "./Detailed.module.css";
import imageDefault from "./defaultImage.jpg";

export default function Detailed() {
    const pokemon = useSelector(state => state.pokemon);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        const updateData = () => {
            if (pokemon.onePokemon.id !== parseInt(id) && !pokemon.loading) {
                dispatch(detailed_pokemon(id))
            }
        }
        if (parseInt(pokemon.onePokemon.id) !== parseInt(id) && !pokemon.loading && typeof (pokemon.onePokemon) !== "string") {
            updateData()
        }
    }, [dispatch, id, pokemon.loading, pokemon.onePokemon])

    const showTypes = () => {
        return pokemon.onePokemon.types.map((t, i) => {
            t = t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
            return <p key={i} style={selectTypeClass(t)} className={style.type}>{t}</p>
        })
    }
    const showStats = () => {
        return pokemon.onePokemon.stats.map((s, i) => {
            return (
                <div key={i} className={style.stat}>
                    <span className={style.statName}>{s[0].substring(0, 1).toUpperCase() + s[0].substring(1, s[0].length)}</span>
                    <div className={style.statNum} ><span style={{ background: `linear-gradient(90deg, #30A7D7 ${parseInt(s[1]) * 100 / 255 + "%"}, white ${parseInt(s[1]) * 100 / 255 + "%"})`, height: "30px", borderRadius: "10px" }}>{s[1]}</span></div>
                </div>
            )
        })
    }
    function selectTypeClass(type, style) {
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
                bg = "#9BCC50";
                color = "black";
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
        return { background: bg, color: color }
    }
    const intToFloat = (data, type) => {
        data = data.toString()
        data = data.slice(0, data.length - 1) + "," + data.slice(data.length - 1) + " " + type;
        if (data[0] === ",") data = "0" + data
        return data;
    }
    const selectImage = () => {
        let num = Math.round(Math.random() * 100);
        if (num === 10 && pokemon.onePokemon.imageShiny) {
            return pokemon.onePokemon.imageShiny
        }
        return pokemon.onePokemon.image
    }
    const showData = () => {
        return (
            <div className={style.dataCont}>
                <div className={style.textContainer}>
                    <p className={style.name}>{pokemon.onePokemon.name.substring(0, 1).toUpperCase() + pokemon.onePokemon.name.substring(1, pokemon.onePokemon.name.length)}</p>
                    <p className={style.id}>N.° {pokemon.onePokemon.id}</p>
                </div>
                <img src={selectImage()} alt="pokemon" className={style.image} onError={(e => {e.target.onerror = null; e.target.src = imageDefault})} />
                <div style={{ width: "50%" }}>
                    <div className={style.typeCont}>
                        {showTypes()}
                        <p className={style.altStat}>Height: {intToFloat(pokemon.onePokemon.height, "m")}</p>
                        <p className={style.altStat}>Weight: {intToFloat(pokemon.onePokemon.weight, "kg")}</p>
                    </div>
                    <div className={style.statsCont}>
                        <p className={style.statsTitle}>Stats</p>
                        {showStats()}
                    </div>
                </div>
                <div className={style.altStatCont}>

                </div>

            </div>
        )
    }

    return (
        <div className={style.container}>
            {(parseInt(pokemon.onePokemon.id) === parseInt(id) && !pokemon.loading && typeof (pokemon.onePokemon) !== "string") && showData()}
            {pokemon.loading && <Loading />}
            {typeof (pokemon.onePokemon) === "string" && <ErrorPage />}
        </div>

    )
}