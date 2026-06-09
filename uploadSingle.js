const cloudinary = require('cloudinary').v2;
const path = require('path');
require('dotenv').config();

// Konfigurasi Kredensial Cloudinary
cloudinary.config({
  cloud_name: 'dnxo5qbrg',
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true
});

async function uploadLogo() {
  try {
    // Sesuaikan path ke lokasi file logo_sulselgoo.png di laptopmu
    // Contoh di bawah ini mengasumsikan file ada di folder 'Backend/gambar/logo_sulselgoo.png'
    // Ganti baris filePath yang lama dengan ini:
    const filePath = path.join(__dirname, '..', 'frontend', 'public', 'gambar','logo_sulselgoo.png');

    console.log("Sedang mengunggah logo ke Cloudinary...");
    
    const result = await cloudinary.uploader.upload(filePath, {
      folder: 'sulselgo',
      use_filename: true,
      unique_filename: false // Agar namanya tetap logo_sulselgoo di Cloudinary
    });

    console.log("\n✔ Berhasil Diunggah!");
    console.log(`Nama File d Cloudinary: ${result.public_id}`);
    console.log(`URL untuk Frontend Kamu: ${result.secure_url}`);

  } catch (error) {
    console.error("Gagal mengunggah gambar:", error);
  }
}

uploadLogo();