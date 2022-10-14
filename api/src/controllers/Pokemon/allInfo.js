const allApi = require("./allApi.js");
const allDB = require("./allDB.js");
const { Pokemon, Type } = require("../../db");
const axios = require("axios");

const allPokes = async (name) => {
    try {
        if (name) {
            try {
                const pokeDB = await Pokemon.findOne({
                    where: {
                        name: name
                    },
                    include: {
                        model: Type,
                        attributes: ["name"],
                        through: {
                            types: [],
                        },
                    },
                })
                if (pokeDB) {
                    let { id, weight, height, image, hp, attack, defense, special_attack, special_defense, speed } = pokeDB;
                    let types = pokeDB.types.map(t => t.name)
                    let stats = [
                        ["hp", hp],
                        ["attack", attack],
                        ["defense", defense],
                        ["special_attack", special_attack],
                        ["special_defense", special_defense],
                        ["speed", speed],
                    ];
                    const poke = {
                        name, id, weight, height, image, stats, types
                    }
                    return poke;
                }

                const pokeAPI = await axios(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (pokeAPI) {
                    let stats = pokeAPI.data.stats.map(s => [s.stat.name, s.base_stat]);
                    let types = pokeAPI.data.types.map(t => t.type.name);
                    poke = {
                        id: pokeAPI.data.id,
                        name: name,
                        weight: pokeAPI.data.weight,
                        height: pokeAPI.data.height,
                        image: pokeAPI.data.sprites.other.home.front_default,
                        imageShiny: pokeAPI.data.sprites.other.home.front_shiny,
                        types: types,
                        stats: stats
                    }
                    return poke;
                }
            } catch (error) {
                return `No se encontro ningun pokemon con el nombre: ${name}`
            }
        }

        let apiPokes = await allApi("https://pokeapi.co/api/v2/pokemon");
        let dbPokes = await allDB();
        return [...apiPokes, ...dbPokes]
    } catch (error) {
        console.log("controllers/Pokemon/allInfo", error)
    }
}

module.exports = allPokes;