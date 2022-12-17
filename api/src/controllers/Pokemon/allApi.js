const axios = require("axios")

const allApi = async (url) => {
    try {
        //traigo todos los pokemons
        const apiResults = await axios.get(url, {
            headers: { "Accept-Encoding": "gzip,deflate,compress" } 
        })
        console.log("-----------------apiResults------------------")
        const apiNext = await axios(apiResults.data.next, {
            headers: { "Accept-Encoding": "gzip,deflate,compress" }
        })
        console.log("-----------------apiNext------------------")
        const indexPokes = [...apiResults.data.results, ...apiNext.data.results]
        console.log("-----------------indexPokes------------------")

        //completo la info de todos los pokemons
        let allPokes = [];
        for (const pokemon of indexPokes) {
            const poke = await axios.get(pokemon.url, {
                headers: { "Accept-Encoding": "gzip,deflate,compress" } 
            })
            const { id, height, weight, name } = poke.data;
            const stats = poke.data.stats.map(s => [s.stat.name, s.base_stat])
            const types = poke.data.types.map(t => t.type.name);
            const image = poke.data.sprites.other.home.front_default;
            const imageShiny = poke.data.sprites.other.home.front_shiny;

            allPokes.push({id, height, weight, name, stats, types, image, imageShiny})
        }
        return allPokes
    } catch (error) {
        console.log("controllers/Pokemon/allApi",error);
    }
}

module.exports = allApi;