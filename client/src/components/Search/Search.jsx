import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { search_request } from "../../redux/actions/actions";
import style from "./Search.module.css";

export default function Search() {

    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemon = useSelector((state) => state.pokemon);
    const history = useHistory();
    
    useEffect(()=>{
        if(pokemon.onePokemon.hasOwnProperty("id")){
            history.push(`/details/${pokemon.onePokemon.id}`);
        }
    },[pokemon.onePokemon, history]);

    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    const checkInput = () => {
        return search !== "";
    }
    const handleClick = () => {
        if (checkInput()) {
            dispatch(search_request(search))
        } else {
            alert("Please enter a name")
        }
    }
    return (
        <div>
            <input type="text" name="" id="" onChange={handleChange} value={search} />
            <button onClick={handleClick}>Search</button>
        </div>
    )
}