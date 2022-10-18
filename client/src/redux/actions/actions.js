export const FETCH_POKEMON = "FETCH_POKEMON";
export const FETCH_POKEMON_REQUEST = "FETCH_POKEMON_REQUEST";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const FETCH_CREATE_POKEMON = "FETCH_CREATE_POKEMON";
export const DELETE_POKEMON = "DELETE_POKEMON";
export const FETCH_SEARCH_REQUEST = "FETCH_SEARCH_REQUEST";
export const FETCH_SEARCH_SUCCESS = "FETCH_SEARCH_SUCCESS";
export const FETCH_SEARCH_FAILURE = "FETCH_SEARCH_FAILURE";
export const DETAILED_POKEMON = "DETAILED_POKEMON";
export const FILTER_POKEMON = "FILTER_POKEMON";
export const FILTER_RESET = "FILTER_RESET";

export const fetch_pokemon_request = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}
export const fetch_pokemon_success = (pokemons) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemons
    }
}
export const fetch_failure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}
export const fetch_pokemon = () => {
    return (dispatch) => {
        dispatch(fetch_pokemon_request());
        fetch("http://localhost:3001/pokemons")
            .then(response => response.json())
            .then(pokemons => {
                dispatch(fetch_pokemon_success(pokemons))
            })
            .catch(error => {
                dispatch(fetch_failure(error))
            })
    }
}
export const create_pokemon = (pokemon) => {
    return{
        type: CREATE_POKEMON,
        payload: pokemon
    }
}
export const fetch_create_pokemon = (pokemon) => {
    return (dispatch) => {
        dispatch(fetch_pokemon_request());
        fetch(`http://localhost:3001/pokemons`, {
            method: "POST",
            body: JSON.stringify(pokemon),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(response => {
            alert(response);
            dispatch(create_pokemon(pokemon))
        })
        .catch(error => {
            alert("No se pudo crear el pokemon")
            dispatch(fetch_failure(error))
        })
    }
}
export const delete_pokemon = (id) => {
    return(dispatch) => {
        fetch(`http://localhost:3001/pokemons/${id}`,{
            method: "DELETE"
        })
    }
}
export const fetch_search_request = () => {

}
export const fetch_search_success = () => {

}
export const fetch_search_failure = () => {

}
export const detailed_pokemon = () => {

}
export const filter_pokemon = () => {

}
export const filter_reset = () => {

}
