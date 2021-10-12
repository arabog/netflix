const router = require("express").Router()
const verify = require("../token")
const listRoute = require("../controllers/lists")


// create
router.post("/", verify, listRoute.createList)


// delete
router.delete("/:id", verify, listRoute.delList)


// get
router.get("/", verify, listRoute.getList)


module.exports = router