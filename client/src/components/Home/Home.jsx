import React, { useEffect } from "react";
import style from "./Home.module.css";
import Paginate from "../Paginate/Paginate";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { fetch_pokemon } from "../../redux/actions/actions";

export default function Home(){
    const pokemon = useSelector(state => state.pokemon)
    const dispatch = useDispatch();

    useEffect(()=>{
        const reloadInfo = () => {
            dispatch(fetch_pokemon())
        }
        if(pokemon.originalPokemons.length === 0 && !pokemon.loading){
            dispatch(reloadInfo)
        }
    },[pokemon.originalPokemons, dispatch, pokemon.loading]);

    

    return(
        <div>
            {pokemon.loading && <Loading />}
            {!pokemon.loading && <Paginate/>}
        </div>
    )
}