const { Router } = require('express');
const createTypes = require("../controllers/Type/createTypes");

const router = Router()

router.get("/", async (req, res) => {
    try {
        const types = await createTypes();
        return res.json(types)
    } catch (error) {
        console.log("routes/types.js", error)
    }
})

module.exports = router;