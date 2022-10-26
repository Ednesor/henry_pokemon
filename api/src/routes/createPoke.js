const { Router } = require("express");
const { Pokemon, Type } = require("../db");
const getTypes = require("../controllers/Type/createTypes")

const router = Router();
router.post("/", async (req, res) => {
    let { name, image, hp, attack, defense, special_attack, special_defense, speed, types, height, weight } = req.body;

    try {
        if (!name ||
            !hp ||
            !attack ||
            !defense ||
            !special_attack ||
            !special_defense ||
            !speed ||
            !types ||
            !image ||
            !height ||
            !weight
        ) {
            return res.status(400).json("Faltan parametros");
        }

        const findPoke = await Pokemon.findOne({
            where: {
                name: name.toLowerCase(),
            }
        })
        if (findPoke) {
            return res.status(400).json("El nombre ya esta en uso")
        }

        const newPoke = await Pokemon.create({
            name: name.toLowerCase(),
            image,
            hp,
            attack,
            defense,
            special_attack,
            special_defense,
            speed,
            weight,
            height
        })

        const typesObj = await getTypes(types);
        const complete = await newPoke.addType(typesObj);

        
        return res.json(newPoke)

    } catch (error) {
        console.log("routes/createPoke", error);
        res.status(400).json("No se pudo crear el pokemon")
    }
})



module.exports = router;