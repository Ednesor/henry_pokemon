const { Router } = require('express');
const allInfo = require("../controllers/Pokemon/allInfo.js")

const router = Router();

router.get("/", async (req, res) => {
    try {
        let name = req.query.name;

        const pokes = await allInfo(name.toLowerCase());

        res.json(pokes);

    } catch (error) {
        console.log("routes/getAll", error);
        res.status(400).json("Error al obtener la informacion")
    }
})

module.exports = router;