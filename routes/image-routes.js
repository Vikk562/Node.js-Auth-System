const {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
} = require("../controllers/image-controller");
const authMiddleware = require("../middleware/auth-middleware");
const isAdminUser = require("../middleware/admin-middleware");
const uploadMiddleware = require("../middleware/upload-middleware");

const express = require("express");

const router = express.Router();

//upload an image
router.post(
  "/upload",
  authMiddleware,
  isAdminUser,
  uploadMiddleware.single("image"),
  uploadImageController
);

//to get all the images
router.get("/get", authMiddleware, fetchImagesController);

//delete an image only authorized
router.delete("/:id", authMiddleware, isAdminUser, deleteImageController);

module.exports = router;
