const {Pokemon, Type} = require("../../db")

const allDB = async () => {
    try {
        let dbData = await Pokemon.findAll({
            include: {
                model: Type,
                attributes: ["name"],
                through:{
                    types: [],
                },
            },
        });
        let output = [];
        for (const pokemon of dbData) {
            let {name, id, image, hp, attack, defense, special_attack, special_defense, speed, weight, height, createDB} = pokemon;
            let types = pokemon.types.map(t => t.name)
            let stats = [
                ["hp", hp],
                ["attack", attack],
                ["defense", defense],
                ["special-attack", special_attack],
                ["special-defense", special_defense],
                ["speed", speed]
            ]
            output.push({name, id, image, stats, weight, height, types, createDB})
        }
        return output;

    } catch (error) {
        console.log("controllers/Pokemon/allDB",error);
    }
}

module.exports = allDB;