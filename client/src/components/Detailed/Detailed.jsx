import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { detailed_pokemon } from "../../redux/actions/actions";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loading from "../Loading/Loading";
import style from "./Detailed.module.css";

export default function Detailed() {
    const pokemon = useSelector(state => state.pokemon);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(()=> {
        const updateData = () => {
            if (pokemon.onePokemon.id !== parseInt(id) && !pokemon.loading) {
                dispatch(detailed_pokemon(id))
            }
        }
        if(parseInt(pokemon.onePokemon.id) !== parseInt(id) && !pokemon.loading && typeof(pokemon.onePokemon)!=="string"){
            updateData()
        }
    },[dispatch, id, pokemon.loading, pokemon.onePokemon]) 
    
    const showTypes = () => {
        return pokemon.onePokemon.types.map((t, i) => {
            t = t.substring(0, 1).toUpperCase() + t.substring(1, t.length);
            return <p key={i}>{t}</p>
        })
    }
    const showStats = () => {
        return pokemon.onePokemon.stats.map((s, i) => {
            return (
                <div key={i}>
                    <p>{s[0]}</p>
                    <p>{s[1]}</p>
                </div>
            )
        })
    }
    const intToFloat = (data, type) => {
        data = data.toString()
        data = data.slice(0, data.length-1) + "," + data.slice(data.length-1) + " " + type;
        if(data[0] === ",") data = "0"+data
        return data;
    }
    const selectImage = () => {
        let num = Math.round(Math.random()*100);
        if(num === 10 && pokemon.onePokemon.imageShiny){
            return pokemon.onePokemon.imageShiny
        }
        return pokemon.onePokemon.image
    }
    const showData = () => {
        return (
            <div>
                <p>{pokemon.onePokemon.name}</p>
                <img src={selectImage()} alt="" />
                {showTypes()}
                <p>Stats</p>
                {showStats()}
                <p>Height: {intToFloat(pokemon.onePokemon.height, "m")}</p>
                <p>Weight: {intToFloat(pokemon.onePokemon.weight, "kg")}</p>

            </div>
        )
    }

    return (
        <div>
            {(parseInt(pokemon.onePokemon.id) === parseInt(id) && !pokemon.loading && typeof(pokemon.onePokemon)!=="string") && showData()}
            {pokemon.loading && <Loading/>}
            {typeof(pokemon.onePokemon)==="string" && <ErrorPage />}
        </div>

    )
}