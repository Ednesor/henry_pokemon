const allApi = require("./allApi.js")
const allDB = require("./allDB.js")

const allPokes = async () => {
    try {
        let apiPokes = await allApi("https://pokeapi.co/api/v2/pokemon");
        let dbPokes = await allDB();
        return [...apiPokes, ...dbPokes]
    } catch (error) {
        console.log("controllers/Pokemon/allInfo", error)
    }
}

module.exports = allPokes;