import React from "react";
import style from "./Paginate.module.css";
import Cards from "../Cards/Cards"
import { useSelector } from "react-redux";

export default function Paginate(){
    const pokemon = useSelector(state => state.pokemon)

    return(
        <div>
            <p>Paginado</p>
            <Cards arrayPoke={pokemon.pokemons}/>
        </div>
    )
}