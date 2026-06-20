require("dotenv").config();

//express menerima request
const express = require('express');

const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');

const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const { body, validationResult } = require("express-validator");

const app = express();
const JWT_SECRET = process.env.JWT_SECRET;
const mongoURL = process.env.MONGO_URL;
if (!JWT_SECRET || !mongoURL) {
  console.log("ENV belum lengkap");
  process.exit(1);
}

const User = require("./models/User");
const userRoutes = require("./routes/userRoutes");
const { verifyToken } = require("./middleware/auth");
const path = require("path");

// Middleware
app.use(cors());

app.use(helmet());

app.use(express.json());
 
app.use("/gambar", express.static(path.join(__dirname, "gambar")));

app.use("/api", userRoutes);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 1000,    // app.use(limiter);
  message: "Terlalu banyak request, coba lagi nanti"
});

app.use(limiter);

let connectPromise = null;

async function connectDB() {
  if (mongoose.connection.readyState === 1) {
    return;
  }

  if (mongoose.connection.readyState === 2 && connectPromise) {
    await connectPromise;
    return;
  }

  connectPromise = mongoose.connect(mongoURL);
  await connectPromise;
  console.log("Database SULSELGO Terkoneksi! ✅");
}

mongoose.connection.on("disconnected", () => {
  connectPromise = null;
});

mongoose.connection.on("error", () => {
  connectPromise = null;
});

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});


// Destinasi Schema
const DestinasiSchema = new mongoose.Schema({
  nama: { type: String, required: true },

  deskripsiSingkat: String,
  deskripsiLengkap: String,

  gambar: String,
  galeri: [String],

  kategori: String,
  kabupaten: String,
  lokasi: String,

  createdAt: { type: Date, default: Date.now }
});

DestinasiSchema.index({
  nama: "text",
  kategori: "text",
  kabupaten: "text"
});

const Destinasi = mongoose.model('Destinasi', DestinasiSchema);

// Review Schema
const ReviewSchema = new mongoose.Schema({

  destinasiId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Destinasi",
    required: true
  },

  namaDestinasi: {
    type: String,
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  nama: String,

  rating: Number,

  ulasan: String,

  likes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 

  dislikes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]

}, { timestamps: true });

const Review = mongoose.model('Review', ReviewSchema);

// Favorit Schema (Dibutuhkan untuk FavoritPage.jsx)
const FavoritSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  destinasiId: { type: mongoose.Schema.Types.ObjectId, ref: 'Destinasi', required: true }
});
const Favorit = mongoose.model('Favorit', FavoritSchema);


// 4. API ROUTES

// --- AUTHENTICATION ---

app.post('/api/register',
  [
    body("username")
      .notEmpty()
      .withMessage("Username wajib diisi"),
    body("email")
      .isEmail()
      .withMessage("Email tidak valid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password minimal 6 karakter"),
    body("telepon")
      .matches(/^08[0-9]{8,11}$/)
      .withMessage("Nomor telepon tidak valid")
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array()
        });
      }
      const {
        username,
        email,
        telepon,
        password
      } = req.body;
      const userExists = await User.findOne({
        $or: [{ email }, { username }]
      });
      if (userExists) {
        return res.status(400).json({
          message: "Username atau Email sudah ada!"
        });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        telepon,
        password: hashedPassword
      });
      await newUser.save();
      res.status(201).json({
        message: "Registrasi Berhasil!"
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: "Terjadi kesalahan server"
      });
    }
  }
);

app.post('/api/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(401).json({
        message: "Username atau password salah"
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        message: "Username atau password salah"
      });
    }

    // BUAT TOKEN JWT
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username
      },
      JWT_SECRET,
      {
        expiresIn: '90d'
      }
    );

    res.json({
      message: "Login berhasil",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        telepon: user.telepon
      }
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: "Server error"
    });
  }
});

// --- GET USER PROFILE ---
app.get('/api/user/:id', async (req, res) => {

  try {

    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan"
      });
    }

    res.json(user);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Gagal mengambil user"
    });

  }

});


// --- UPDATE USER PROFILE ---
app.put('/api/user/:id', verifyToken, async (req, res) => {

  try {

    const {
      nama,
      username,
      email,
      telepon,
      tanggalLahir,
      alamat
    } = req.body;

    const updatedUser = await User.findByIdAndUpdate(

      req.params.id,

      {
        username: nama || username,
        email,
        telepon,
        tanggalLahir,
        alamat
      },

      {
        returnDocument: 'after'
      }

    );

    res.json({
      id: updatedUser._id,
      username: updatedUser.username,
      email: updatedUser.email,
      telepon: updatedUser.telepon,
      tanggalLahir: updatedUser.tanggalLahir,
      alamat: updatedUser.alamat
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Gagal update profil"
    });

  }

});


// --- DESTINASI ---
app.get('/api/destinasi', async (req, res) => {
  try {
    const data = await Destinasi.find()
    .sort({ createdAt: -1 });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/destinasi/wilayah/:kabupaten', async (req, res) => {
  try {
    const { kabupaten } = req.params;
    const data = await Destinasi.find({ kabupaten: new RegExp('^' + kabupaten + '$', 'i') });
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get('/api/destinasi/search', async (req, res) => {

  try {

    const q = req.query.q?.trim();
    
    if (!q || q.length > 50) {
      return res.status(400).json({
        message: "Query pencarian tidak valid"
      });
    }

    const data = await Destinasi.find({
      $or: [
        { nama: { $regex: q, $options: "i" } },
        { kategori: { $regex: q, $options: "i" } },
        { kabupaten: { $regex: q, $options: "i" } }
      ]
    });
    res.json(data);
  } catch (err) {

    res.status(500).json({
      message: "Gagal mencari data"
    });
  }
});

// --- FAVORIT (Untuk FavoritPage.jsx) ---
app.post('/api/favorit', verifyToken, async (req, res) => {
  try {
    const { userId, destinasiId } = req.body;
    const exists = await Favorit.findOne({ userId, destinasiId });
    if (exists) {
      await Favorit.deleteOne({ userId, destinasiId });
      return res.json({ message: "Dihapus dari favorit" });
    }
    const newFavorit = new Favorit({ userId, destinasiId });
    await newFavorit.save();
    res.status(201).json({ message: "Ditambahkan ke favorit" });
  } catch (err) {
    res.status(500).json({ message: "Gagal memproses favorit" });
  }
});

app.get('/api/favorit/:userId', verifyToken, async (req, res) => {
  try {
    const data = await Favorit.find({ userId: req.params.userId }).populate('destinasiId');
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Gagal mengambil data favorit" });
  }
});

// --- REVIEWS ---
app.get('/api/reviews/:destinasiId', async (req, res) => {
  try {
    const data = await Review.find({
      destinasiId: req.params.destinasiId
    }).populate("userId", "username");

    res.json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Gagal mengambil ulasan"
    });
  }
});

app.post("/api/reviews/:id/like", verifyToken, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    const userId = req.user.id;

    if (review.likes.includes(userId)) {
      review.likes = review.likes.filter(id => id.toString() !== userId);
    } else {
      review.likes.push(userId);
      review.dislikes = review.dislikes.filter(id => id.toString() !== userId);
    }
    
    await review.save();
    
    const updatedReview = await Review.findById(req.params.id).populate("userId", "username");
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: "Gagal like" });
  }
});

app.post("/api/reviews/:id/dislike", verifyToken, async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    const userId = req.user.id;

    if (review.dislikes.includes(userId)) {
      review.dislikes = review.dislikes.filter(id => id.toString() !== userId);
    } else {
      review.likes = review.likes.filter(id => id.toString() !== userId);
      review.dislikes.push(userId);
    }
    
    await review.save();
    
    const updatedReview = await Review.findById(req.params.id).populate("userId", "username");
    res.json(updatedReview);
  } catch (err) {
    res.status(500).json({ message: "Gagal dislike" });
  }
});

app.put("/api/reviews/:id", verifyToken, async (req, res) => {

  try {

    const { rating, ulasan } = req.body;

    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review tidak ditemukan"
      });
    }

    // hanya pemilik review yang bisa edit
    if (review.userId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Tidak diizinkan"
      });
    }

    review.rating = rating;
    review.ulasan = ulasan;

    await review.save();

    res.json({
      message: "Review berhasil diperbarui",
      review
    });

  } catch (error) {

    res.status(500).json({
      message: "Gagal update review"
    });

  }

});

app.delete("/api/reviews/:id", verifyToken, async (req, res) => {

  try {

    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        message: "Review tidak ditemukan"
      });
    }

    // hanya pemilik review yang bisa hapus
    if (review.userId.toString() !== req.user.id) {
      return res.status(403).json({
        message: "Tidak diizinkan"
      });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.json({
      message: "Review berhasil dihapus"
    });

  } catch (error) {

    res.status(500).json({
      message: "Gagal menghapus review"
    });

  }

});

// --- PERBAIKAN PENGIRIMAN DATA REVIEWS ---
app.post('/api/reviews', verifyToken, async (req, res) => {
  try {
    const {
      destinasiId,
      userId,
      nama,
      rating,
      ulasan
    } = req.body;

    const destinasi = await Destinasi.findById(destinasiId);

    if (!destinasi) {
      return res.status(404).json({
        message: "Destinasi tidak ditemukan"
      });
    }

    const newReview = new Review({
      destinasiId,
      namaDestinasi: destinasi.nama,
      userId,
      nama,
      rating,
      ulasan
    });

    await newReview.save();

    // PERBAIKAN UTAMA: Ambil data ulasan yang baru disimpan dan populate relasi userId
    const savedReview = await Review.findById(newReview._id).populate("userId", "username");

    // Kirim savedReview ke frontend, bukan newReview mentah
    res.status(201).json(savedReview);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Gagal mengirim ulasan"
    });
  }
});

// --- TOP DESTINASI ---
app.get('/api/top-destinasi', async (req, res) => {

  try {

    const topDestinasi = await Destinasi.aggregate([

      // JOIN REVIEW
      {
        $lookup: {

          from: "reviews",

          localField: "nama",

          foreignField: "namaDestinasi",

          as: "reviews"

        }
      },

      // HITUNG TOTAL & RATING
      {
        $addFields: {

          totalReview: {
            $size: "$reviews"
          },

          avgRating: {
            $cond: [

              { $gt: [{ $size: "$reviews" }, 0] },

              { $avg: "$reviews.rating" },

              0
            ]
          }
        }
      },

      // URUTKAN
      {
        $sort: {
          totalReview: -1,
          avgRating: -1
        }
      },

      // AMBIL 5
      {
        $limit: 5
      }

    ]);

    res.json(topDestinasi);

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Gagal mengambil top destinasi"
    });

  }

});

// --- PASSWORD RESET ---
app.post('/api/forgot-password', async (req, res) => {
  try {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: 'Email tidak ditemukan'
      });
    }

    // buat kode OTP 6 digit
    const resetCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // simpan kode ke database
    user.resetCode = resetCode;
    user.resetCodeExpire = Date.now() + 10 * 60 * 1000;

    await user.save();

    // kirim email
    await transporter.sendMail({
      from: 'SULSELGO',
      to: email,
      subject: 'Reset Password SULSELGO',
      html: `
        <h2>Reset Password SULSELGO</h2>

        <p>Kode reset password Anda:</p>

        <h1 style="letter-spacing: 5px;">
          ${resetCode}
        </h1>

        <p>Kode berlaku 10 menit.</p>
      `
    });

    res.json({
      message: 'Kode reset password berhasil dikirim'
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

app.post('/api/reset-password/:token', async (req, res) => {
  try {
    const { token } = req.params;
    const { newPassword } = req.body;

    // verifikasi token
    const decoded = jwt.verify(token, JWT_SECRET);

    // hash password baru
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // update password
    await User.findByIdAndUpdate(decoded.id, {
      password: hashedPassword
    });

    res.json({
      message: 'Password berhasil diubah'
    });
  } catch (err) {
    console.log(err);

    res.status(400).json({
      message: 'Token tidak valid atau sudah expired'
    });
  }
});


app.get("/", (req, res) => {
  res.send("Backend SULSELGO berjalan");
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend SULSELGO berjalan"
  });
});

app.post('/api/verify-reset-code', async (req, res) => {
  try {

    const { email, code, newPassword } = req.body;

    const user = await User.findOne({
      email,
      resetCode: code,
      resetCodeExpire: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({
        message: 'Kode tidak valid atau expired'
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;

    user.resetCode = null;
    user.resetCodeExpire = null;

    await user.save();

    res.json({
      message: 'Password berhasil diubah'
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      message: 'Server error'
    });
  }
});

// ENDPOINT AMAN UNTUK SINKRONISASI DATA DESTINASI (DARI VS CODE)
app.post("/api/sync-destinasi-seeder", async (req, res) => {
  try {
    const dataDariSeeder = req.body;

    if (!Array.isArray(dataDariSeeder) || dataDariSeeder.length === 0) {
      return res.status(400).json({ success: false, message: "Data yang dikirim kosong atau bukan array!" });
    }

    // 1. Hapus data destinasi lama di MongoDB Atlas
    await Destinasi.deleteMany({});

    // 2. Masukkan data destinasi lengkap yang dikirim dari komputer kamu
    await Destinasi.insertMany(dataDariSeeder);

    res.json({ 
      success: true, 
      message: `Sukses! Berhasil menyinkronkan ${dataDariSeeder.length} data destinasi lengkap ke MongoDB Atlas! ✅` 
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});


// RUTE DARURAT: PEMBERSIH SEMUA ULASAN UJI COBA VIA POSTMAN
app.delete("/api/bersihkan-semua-ulasan-test", async (req, res) => {
  try {
    // Menghapus total seluruh dokumen yang ada di koleksi reviews
    // Catatan: Pastikan nama model Review kamu sesuai (misal: Review atau Ulasan)
    await Review.deleteMany({}); 
    
    res.json({ 
      success: true, 
      message: "Database ulasan BERHASIL DIKOSONGKAN TOTAL secara permanen! 🚀✅" 
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: err.message });
  }
});


// 5. JALANKAN SERVER
const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "test") {

  connectDB().catch((err) =>
    console.log("Gagal Koneksi Database: ❌", err)
  );

  app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
  });

}

module.exports = {
  app,
  mongoose,
  connectDB
};