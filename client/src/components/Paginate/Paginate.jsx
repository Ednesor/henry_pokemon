import React from "react";
import style from "./Paginate.module.css";
import Cards from "../Cards/Cards"
import { useDispatch, useSelector } from "react-redux";
import { set_page } from "../../redux/actions/actions";

export default function Paginate(){
    const pokemon = useSelector(state => state.pokemon)
    const paginado = 12;
    const dispatch = useDispatch();

    const handlePageClick = (e) => {
        console.log(pokemon.page, e.target.innerText)
        dispatch(set_page(e.target.innerText))
    }
    const pageButtons = () => {
        let array = [];
        for (let i = 0; i < Math.ceil(pokemon.pokemons.length/paginado); i++) {
            array.push(<button key={i} onClick={handlePageClick} className={`${style.button} ${parseInt(pokemon.page) === parseInt(i+1) && style.active}`}>{i+1}</button>)
        }
        return array;
    }
    const paginateCards = () => {
        let array = pokemon.pokemons.slice((pokemon.page-1)*paginado, pokemon.page*paginado)
        return <Cards arrayPoke={array}/>
    }

    return(
        <div className={style.container}>
            {pokemon.pokemons.length === 0 && <p>No se encontro ningun Pokemon</p>}
            <div className={style.pagContainer}>
                {pageButtons()}
            </div>
            <div className={style.containerCards}>
                {paginateCards()}
            </div>
        </div>
    )
}