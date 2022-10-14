const {Router} = require("express");
const {Pokemon} = require("../db")

const router = Router();

router.delete("/:id", async (req, res) => {
    try {
        let id = req.params.id
        if(!isNaN(id)) res.status(400).json("Debe ser un id de la DB");
        
        const findPoke = await Pokemon.findOne({
            where:{
                id: id
            }
        })
        if(!findPoke) res.status(400).json("Pokemon no encontrado en la DB");

        await findPoke.destroy();

        res.json("Pokemon borrado")

    } catch (error) {
        console.log("routes/deketePokemon", error);
        res.status(400).json("Error al borrar un pokemon")
    }
})

module.exports = router;