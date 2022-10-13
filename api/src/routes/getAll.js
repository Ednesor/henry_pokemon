const { Router } = require('express');
const allInfo = require("../controllers/Pokemon/allInfo.js")

const router = Router();

router.get("/", async (req, res) => {
    try {
        const pokes = await allInfo();

        res.json(pokes)
    } catch (error) {
        console.log("routes/getAll", error)
    }
})

module.exports = router;