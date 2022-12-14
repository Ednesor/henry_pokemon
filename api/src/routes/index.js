const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getAll = require("./getAll.js");
const createPoke = require("./createPoke.js");
const getTypes = require("./types.js");
const getById = require("./getById.js");
const deletePokemon = require("./deletePokemon")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getAll)
router.use("/pokemons", createPoke)
router.use("/types", getTypes)
router.use("/pokemons", getById)
router.use("/pokemons", deletePokemon)


module.exports = router;
