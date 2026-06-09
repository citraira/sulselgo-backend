require("dotenv").config();
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const folderPath = path.join(__dirname, "../Frontend/public/gambar");

async function uploadImages() {
  const files = fs.readdirSync(folderPath);

  for (const file of files) {
    try {
      const filePath = path.join(folderPath, file);

      const result = await cloudinary.uploader.upload(filePath, {
        folder: "sulselgo",
      });

      console.log(`${file} => ${result.secure_url}`);
    } catch (err) {
      console.error(`Gagal upload ${file}`, err.message);
    }
  }
}

uploadImages();