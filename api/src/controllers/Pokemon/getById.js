const axios = require("axios");
const {Pokemon, Type} = require("../../db");

const getPoke = async (id) => {
    //Si el id es de la DB
    if(isNaN(id)){
        const poke = await Pokemon.findOne({
            where:{
                id: id,
            },
            include: {
                model: Type,
                attributes: ["name"],
                through:{
                    types: [],
                },
            },
        })
        let {name, weight, height, image, hp, attack, defense, special_attack, special_defense, speed} = poke;
        let stats = [
            ["hp", hp],
            ["attack", attack],
            ["defense", defense],
            ["special_attack", special_attack],
            ["special_defense", special_defense],
            ["speed", speed],
        ];
        let types = poke.types.map(t => t.name)

        output = {
            id, name, weight, height, image, types, stats
        }

        return output;
    }
    //Si el id es de la API
    if(!isNaN(id)){
        const poke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`, {
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        })
        let stats = poke.data.stats.map(s => [s.stat.name, s.base_stat]);
        let types = poke.data.types.map(t => t.type.name);
        output = {
            id: id,
            name: poke.data.name,
            weight: poke.data.weight,
            height: poke.data.height,
            image: poke.data.sprites.other.home.front_default,
            imageShiny: poke.data.sprites.other.home.front_shiny,
            types: types,
            stats: stats
        }
        return output;
    }
}

module.exports = getPoke;