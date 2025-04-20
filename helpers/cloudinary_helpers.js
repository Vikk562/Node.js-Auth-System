const cloudinary = require("../config/cloudinary");

//receives the file we are trying to upload to cloudinary the file path as paramter
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath);

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };
  } catch (error) {
    console.error("Error while trying to upload image to cloudinary", error);
    throw new Error("Error while trying to upload image to cloudinary");
  }
};

module.exports = uploadToCloudinary;
