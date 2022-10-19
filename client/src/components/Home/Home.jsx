import React, { useEffect } from "react";
import style from "./Home.module.css";
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import Filters from "../Filters/Filters";
import { useDispatch, useSelector } from "react-redux";
import { fetch_pokemon } from "../../redux/actions/actions";

export default function Home(){
    const pokemon = useSelector(state => state.pokemon)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(pokemon.originalPokemons.length === 0 && !pokemon.loading){
            dispatch(fetch_pokemon())
        }
    },[pokemon.originalPokemons, dispatch, pokemon.loading]);

    return(
        <div>
            {(pokemon.loading && pokemon.originalPokemons.length === 0) && <Loading />}
            {(!pokemon.loading && pokemon.originalPokemons.length > 0) && <Filters />}
            {(!pokemon.loading && pokemon.originalPokemons.length > 0) && <Paginate/>}
        </div>
    )
}