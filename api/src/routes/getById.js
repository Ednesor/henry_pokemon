const {Router} = require("express");
const getPoke = require("../controllers/Pokemon/getById.js");

const router = Router();

router.get("/:id", async (req, res) =>{
    try {
        const data = await getPoke(req.params.id)
        res.json(data)
    } catch (error) {
        console.log("routes/getById", error)
    }
})

module.exports = router;