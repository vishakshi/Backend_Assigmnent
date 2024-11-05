const express = require("express");
const userController = require("../controllers/userControllers");
const authenticateToken = require("../middleware/authenticateToken"); 


const router = express.Router();

router.get("/", userController.getAllUsers);
router.get("/:id", userController.getUserById);
router.post("/", userController.createUser);
router.put("/:id", authenticateToken, userController.updateUser); // Corrected path
router.delete("/:id", authenticateToken, userController.deleteUser);

module.exports = router;
