const router = require("express").Router()
const userController = require("../controllers/users")
const verify = require("../token")


// update
router.put("/:id", verify, userController.updateUser)


// delete
router.delete("/:id", verify, userController.delUser)


// get a user
router.get("/fing/:id", verify, userController.getUser)


// get all users
router.get("/", verify, userController.getAllUsers)


// get user stats
router.get("/stats", userController.getUserStats)


module.exports = router