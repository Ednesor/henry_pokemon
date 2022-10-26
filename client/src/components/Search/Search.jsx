import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { search_request, set_search_success } from "../../redux/actions/actions";
import style from "./Search.module.css";

export default function Search() {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    const history = useHistory();

    useEffect(() => {
        const redirect = () => {
            dispatch(set_search_success())
            history.push(`/details/${pokemon.onePokemon.id}`)
        }

        if(pokemon.searchSuccess){
            redirect()
        }
    },[pokemon.searchSuccess, dispatch, history, pokemon.onePokemon.id])

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const checkInput = () => {
        return search !== "";
    }
    const handleClick = () => {
        if (checkInput()) {
            console.log("despacho");
            dispatch(search_request(search))
        } else {
            alert("Please enter a name")
        }
    }
    return (
        <div className={style.container}>
            <input type="text" name="" id="" onChange={handleChange} value={search} className={style.searchInput} />
            <button onClick={handleClick} className={style.searchButton}>Search</button>
        </div>
    )
}