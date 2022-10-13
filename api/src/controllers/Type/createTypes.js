const {Type} = require("../../db");
const axios = require("axios");

const createTypes = async(typesInput) => {
    try {
        const checkTypes = await Type.findAll();
        if(checkTypes.length > 0 && !typesInput){
            return checkTypes
        }
        
        const data = await axios("https://pokeapi.co/api/v2/type");
        const createTypes = await Type.bulkCreate(data.data.results);

        if(typesInput){
            let output = [];
            for (const nameType of typesInput) {
                const type = await Type.findOne({where: {name: nameType}})
                output = [...output, type];
            }
            
            return output;
        }

        return createTypes;
    } catch (error) {
        console.log("controllers/Type/createTypes", error)
    }
}

module.exports = createTypes;