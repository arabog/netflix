const router = require("express").Router()
const verify = require("../token")
const movieRoute = require("../controllers/movies")


// cr8 movie
router.post("/", verify, movieRoute.createMovie)


// update movie
router.put("/:id", verify, movieRoute.updateMovie)


// delete movie
router.delete("/:id", verify, movieRoute.delMovie)


// get a movie
router.get("/find/:id", verify, movieRoute.getAMovie)


// get random movie
router.get("/random", verify, movieRoute.getRandomMovie)


// get all movies
router.get("/", verify, movieRoute.getAllMovies)


module.exports = router
