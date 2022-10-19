import {
    FETCH_POKEMON,
    FETCH_POKEMON_REQUEST,
    FETCH_POKEMON_SUCCESS,
    CREATE_POKEMON,
    FETCH_FAILURE,
    DELETE_POKEMON,
    FETCH_SEARCH_REQUEST,
    FETCH_SEARCH_SUCCESS,
    FETCH_SEARCH_FAILURE,
    DETAILED_POKEMON_SUCCESS,
    FILTER_POKEMON,
    FILTER_RESET
} from "../actions/actions";

const default_array_pokemon = {
    originalPokemons: [],
    pokemons: [],
    onePokemon: {},
    msg: "",
    loading: false
};

const pokemons = (state = default_array_pokemon, action) => {
    switch(action.type){
        case FETCH_POKEMON_REQUEST: {
            return{
                ...state,
                loading: true
            }
        }
        case FETCH_POKEMON_SUCCESS: {
            return{
                ...state,
                loading: false,
                originalPokemons: action.payload,
                pokemons: action.payload,
            }
        }
        case FETCH_FAILURE: {
            return{
                ...state,
                msg: action.payload,
                loading: false
            }
        }
        case CREATE_POKEMON: {
            return{
                ...state,
                loading: false,
                onePokemon: action.payload
            }
        }
        case DELETE_POKEMON: {
            return{
                ...state,
                originalPokemons: state.originalPokemons.filter(p => p.id !== action.payload),
                pokemons: state.pokemons.filter(p => p.id !== action.payload)
            }
        }
        case FETCH_SEARCH_REQUEST: {
            return{
                ...state,
                loading: true
            }
        }
        case FETCH_SEARCH_SUCCESS: {
            if(typeof(action.payload) === "object"){
                return{
                    ...state,
                    loading: false,
                    onePokemon: action.payload
                }
            }else{
                alert(action.payload)
                return{
                    ...state,
                    loading: false,
                    msg: action.payload
                }
            } 
        }
        case FETCH_SEARCH_FAILURE: {
            return{
                ...state,
                loading: false,
                msg: action.payload
            }
        }
        case DETAILED_POKEMON_SUCCESS: {
            return{
                ...state,
                loading: false,
                onePokemon: action.payload
            }
        }
        case FILTER_POKEMON: {
            return{
                ...state
            }
        }
        case FILTER_RESET: {
            return{
                ...state
            }
        }
        default:{
            return{
                ...state
            }
        }
    }
}

export default pokemons;