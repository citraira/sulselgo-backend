const mongoose = require("mongoose");
const mongoURI = "mongodb://citra:Sulselgo123@ac-icmspid-shard-00-00.j1qubwj.mongodb.net:27017,ac-icmspid-shard-00-01.j1qubwj.mongodb.net:27017,ac-icmspid-shard-00-02.j1qubwj.mongodb.net:27017/sulselgo?ssl=true&replicaSet=atlas-s8a385-shard-0&authSource=admin&appName=Cluster0";

const DestinasiSchema = new mongoose.Schema({
  nama: { type: String, required: true },

  deskripsiSingkat: String,
  deskripsiLengkap: String,

  gambar: String,
  galeri: [String],

  kategori: String,
  kabupaten: String,
  lokasi: String,

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Destinasi = mongoose.model("Destinasi", DestinasiSchema);

const destinasiData = [
  // --- MAKASSAR ---
  {
    nama: "Pulau Samalona",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/cAbugcZ1UStK6Gup71",
    gambar: "https://nama-backend-hosting.com/gambar/PulauSamalona.jpeg",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauSamalona.jpeg",
      "https://nama-backend-hosting.com/gambar/PulauSamalon1.png"
    ],
    deskripsiSingkat: "Pulau cantik di Makassar dengan pasir putih and air laut jernih yang cocok untuk snorkeling.",
    deskripsiLengkap: "Pulau Samalona merupakan salah satu destinasi wisata bahari terkenal di Kota Makassar, Sulawesi Selatan. Pulau ini menawarkan pemandangan laut yang jernih, pasir putih yang bersih, serta keindahan bawah laut yang sangat cocok untuk aktivitas snorkeling dan diving. Wisatawan dapat menikmati suasana tenang, berfoto di tepi pantai, hingga menikmati sunset yang indah. Pulau ini juga mudah dijangkau menggunakan perahu dari Pantai Losari atau Dermaga Kayu Bangkoa."
  },
  {
    nama: "Pantai Akkarena",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/wEbjnKcvRRHcfFCDA",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiAkkaren.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiAkkaren.png",
      "https://nama-backend-hosting.com/gambar/PantaiAkkarena1.png"
    ],
    deskripsiSingkat: "Pantai populer di Makassar dengan pemandangan sunset indah, suasana santai, and spot foto menarik.",
    deskripsiLengkap: "Pantai Akkarena merupakan salah satu destinasi wisata favorit di Kota Makassar, Sulawesi Selatan. Pantai ini terkenal dengan suasana santai, deretan pohon kelapa yang indah, serta pemandangan sunset yang memukau. Wisatawan dapat menikmati berjalan di tepi pantai, bersantai di gazebo, berfoto di berbagai spot menarik, hingga menikmati kuliner khas di sekitar area pantai. Pantai Akkarena juga sering menjadi tempat berkumpul keluarga maupun anak muda karena fasilitasnya yang cukup lengkap dan lokasinya yang mudah dijangkau dari pusat Kota Makassar."
  },
  {
    nama: "Benteng Rotterdam",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/YNxTEEaJVJzxx6cC6",
    gambar: "https://nama-backend-hosting.com/gambar/BentengRotterdam.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BentengRotterdam.png",
      "https://nama-backend-hosting.com/gambar/BentengRotterdam1.png"
    ],
    deskripsiSingkat: "Benteng bersejarah peninggalan Kerajaan Gowa and Belanda yang menjadi ikon wisata budaya di Makassar.",
    deskripsiLengkap: "Benteng Rotterdam merupakan salah satu destinasi wisata sejarah paling terkenal di Kota Makassar, Sulawesi Selatan. Benteng ini awalnya dibangun oleh Kerajaan Gowa pada abad ke-17 and kemudian dikuasai oleh Belanda yang mengubah bentuknya menyerupai penyu. Kawasan benteng memiliki bangunan khas kolonial yang masih terawat dengan baik and kini difungsikan sebagai museum serta pusat edukasi sejarah and budaya. Wisatawan dapat menikmati suasana klasik, mempelajari sejarah Makassar, berfoto di area benteng, hingga menikmati berbagai kegiatan seni and budaya yang sering diadakan di kawasan ini."
  },
  {
    nama: "Bugis Waterpark Adventure",
    kategori: "Wisata Hiburan",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/aqyAT7EzvX72BT87A",
    gambar: "https://nama-backend-hosting.com/gambar/BugisWaterparkAdventure.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BugisWaterparkAdventure.png",
      "https://nama-backend-hosting.com/gambar/BugisWaterparkAdventure1.png"
    ],
    deskripsiSingkat: "Waterpark populer di Makassar dengan berbagai wahana air seru and suasana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Bugis Waterpark Adventure merupakan salah satu taman rekreasi air terbesar and paling terkenal di Kota Makassar, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana air menarik seperti seluncuran, kolam ombak, lazy river, and area bermain anak yang cocok untuk liburan keluarga. Dengan suasana yang asri and fasilitas yang lengkap, pengunjung dapat menikmati aktivitas bermain air, bersantai bersama keluarga, hingga menikmati berbagai spot foto menarik di area waterpark. Lokasinya yang mudah dijangkau menjadikan Bugis Waterpark Adventure sebagai destinasi favorit wisatawan lokal maupun luar daerah."
  },

  // --- PAREPARE ---
  {
    nama: "Pantai Paputo",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/neQGPTwbZiLKEeXY7",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiPaputo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiPaputo.png",
      "https://nama-backend-hosting.com/gambar/PantaiPaputo1.png"
    ],
    deskripsiSingkat: "Pantai indah di Parepare dengan panorama laut, suasana santai, and pemandangan sunset yang memukau.",
    deskripsiLengkap: "Pantai Poputo merupakan salah satu destinasi wisata pantai yang populer di Kota Parepare, Sulawesi Selatan. Pantai ini menawarkan suasana yang tenang dengan pemandangan laut yang luas serta panorama matahari terbenam yang sangat indah. Wisatawan dapat menikmati angin pantai, bersantai di area tepi laut, berfoto di berbagai spot menarik, hingga menikmati kuliner khas yang tersedia di sekitar kawasan wisata. Dengan suasana yang nyaman and lokasi yang mudah dijangkau, Pantai Poputo menjadi tempat favorit untuk rekreasi bersama keluarga maupun teman."
  },
  {
    nama: "Kebun Raya Jompie",
    kategori: "Wisata Alam Darat",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/sfzMrnaZu9bRSsoo8",
    gambar: "https://nama-backend-hosting.com/gambar/KebunRayaJompie.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KebunRayaJompie.png",
      "https://nama-backend-hosting.com/gambar/KebunRayaJompie1.png"
    ],
    deskripsiSingkat: "Wisata alam hijau di Parepare dengan suasana sejuk, taman edukasi, and spot foto menarik.",
    deskripsiLengkap: "Kebun Raya Jompie merupakan salah satu destinasi wisata alam and edukasi yang terkenal di Kota Parepare, Sulawesi Selatan. Tempat ini menawarkan suasana yang asri dengan pepohonan hijau, udara sejuk, and berbagai koleksi tanaman yang cocok untuk wisata keluarga maupun edukasi. Pengunjung dapat berjalan santai menikmati taman, berfoto di berbagai spot menarik, hingga bersantai menikmati suasana alam yang tenang. Kebun Raya Jompie juga menjadi tempat favorit masyarakat untuk rekreasi, olahraga, and menikmati keindahan alam di tengah kota."
  },
  {
    nama: "Museum BJ Habibie",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/fc7oeN5SbaTSaSWx6",
    gambar: "https://nama-backend-hosting.com/gambar/MuseumBJHabibie.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MuseumBJHabibie.png",
      "https://nama-backend-hosting.com/gambar/MuseumBJHabibie1.png"
    ],
    deskripsiSingkat: "Museum edukasi di Parepare yang mengenang perjalanan hidup and karya Presiden BJ Habibie.",
    deskripsiLengkap: "Museum BJ Habibie merupakan salah satu destinasi wisata sejarah and edukasi terkenal di Kota Parepare, Sulawesi Selatan. Museum ini didedikasikan untuk mengenang sosok Presiden ke-3 Republik Indonesia, Bacharuddin Jusuf Habibie, yang lahir di Parepare. Di dalam museum, pengunjung dapat melihat berbagai koleksi foto, kutipan inspiratif, dokumentasi perjalanan hidup, hingga informasi tentang kontribusi BJ Habibie dalam bidang teknologi and pendidikan. Tempat ini cocok dijadikan wisata edukasi bagi pelajar, keluarga, maupun wisatawan yang ingin mengenal lebih dekat sejarah and prestasi BJ Habibie."
  },
  {
    nama: "Water boom Parepare",
    kategori: "Wisata Hiburan",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/5UapMJAdmDGfe855A",
    gambar: "https://nama-backend-hosting.com/gambar/WaterboomParepare.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/WaterboomParepare.png",
      "https://nama-backend-hosting.com/gambar/WaterboomParepare1.png"
    ],
    deskripsiSingkat: "Tempat wisata air favorit di Parepare dengan kolam renang and wahana seru untuk keluarga.",
    deskripsiLengkap: "Waterboom Parepare merupakan salah satu destinasi wisata rekreasi air yang populer di Kota Parepare, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai fasilitas kolam renang and wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Pengunjung dapat menikmati suasana santai sambil berenang, bermain air, and bersantai bersama keluarga. Dengan area yang nyaman and fasilitas yang cukup lengkap, Waterboom Parepare menjadi pilihan favorit masyarakat untuk menghabiskan waktu liburan and akhir pekan."
  },

  // --- PALOPO ---
  {
    nama: "Pulau Libukang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/JUt45p9Bx49m3khg9",
    gambar: "https://nama-backend-hosting.com/gambar/PulauLibukang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauLibukang.png",
      "https://nama-backend-hosting.com/gambar/PulauLibukang1.png"
    ],
    deskripsiSingkat: "Pulau cantik di Palopo dengan pasir putih, air laut jernih, and suasana alam yang tenang.",
    deskripsiLengkap: "Pulau Libukang merupakan salah satu destinasi wisata bahari yang populer di Kota Palopo, Sulawesi Selatan. Pulau ini menawarkan keindahan pantai dengan pasir putih bersih, air laut yang jernih, serta panorama alam tropis yang memukau. Wisatawan dapat menikmati aktivitas snorkeling, berenang, memancing, maupun bersantai menikmati suasana pulau yang tenang. Dengan pemandangan laut biru and udara yang segar, Pulau Libukang menjadi tempat favorit untuk rekreasi bersama keluarga maupun teman."
  },
  {
    nama: "Bukit Kambo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/zH2zwrVfUbsef4rv8",
    gambar: "https://nama-backend-hosting.com/gambar/BukitKambo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BukitKambo.png",
      "https://nama-backend-hosting.com/gambar/BukitKambo1.png"
    ],
    deskripsiSingkat: "Destinasi wisata perbukitan di Palopo dengan panorama alam indah and suasana sejuk yang menenangkan.",
    deskripsiLengkap: "Bukit Kambo merupakan salah satu destinasi wisata alam terkenal di Kota Palopo, Sulawesi Selatan. Tempat ini menawarkan pemandangan perbukitan hijau, udara yang sejuk, serta panorama Kota Palopo dari ketinggian yang sangat memukau. Wisatawan dapat menikmati suasana santai, berfoto di berbagai spot menarik, hingga menikmati penginapan and fasilitas rekreasi yang tersedia di kawasan wisata. Dengan suasana alam yang tenang and pemandangan yang indah, Bukit Kambo menjadi tempat favorit untuk berlibur bersama keluarga maupun teman."
  },
  {
    nama: "Masjid Jami Tua Palopo",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/9ECLDh8j81tEUhxu7",
    gambar: "https://nama-backend-hosting.com/gambar/MasjidJamiTuaPalopo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MasjidJamiTuaPalopo.png",
      "https://nama-backend-hosting.com/gambar/MasjidJamiTuaPalopo1.png"
    ],
    deskripsiSingkat: "Masjid bersejarah di Palopo dengan arsitektur tradisional and nilai budaya yang tinggi.",
    deskripsiLengkap: "Masjid Jami Tua Palopo merupakan salah satu masjid tertua and bersejarah di Sulawesi Selatan yang berada di Kota Palopo. Masjid ini dikenal dengan arsitektur tradisional khas Nusantara yang unik serta menjadi simbol penyebaran Islam di wilayah Luwu. Bangunan masjid yang masih terawat hingga sekarang menjadikannya sebagai salah satu cagar budaya penting di Palopo. Wisatawan dapat menikmati suasana religius, mempelajari sejarah Islam di Tanah Luwu, serta melihat keindahan arsitektur klasik yang menjadi daya tarik utama masjid ini."
  },
  {
    nama: "Agrowisata Waterpark Palopo",
    kategori: "Wisata Hiburan",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/Hx2VhQhSohfpf5Bz9",
    gambar: "https://nama-backend-hosting.com/gambar/AgrowisataWaterparkPalopo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AgrowisataWaterparkPalopo.png",
      "https://nama-backend-hosting.com/gambar/AgrowisataWaterparkPalop1.png"
    ],
    deskripsiSingkat: "Tempat wisata air di Palopo dengan berbagai wahana seru and suasana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Agrowisata Waterpark Palopo merupakan salah satu destinasi wisata rekreasi air populer di Kota Palopo, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai fasilitas kolam renang, seluncuran air, and area bermain yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang nyaman and area yang luas, pengunjung dapat menikmati liburan bersama keluarga sambil bermain air and bersantai. Selain wahana air yang menarik, kawasan ini juga memiliki suasana hijau and asri yang membuat wisatawan merasa nyaman selama berkunjung."
  },

  // --- GOWA ---
  {
    nama: "Air Terjun Cinta",
    kategori: "Wisata Alam Darat",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/qUVmMpvTNkKKAbhM8",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunCinta.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunCinta.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunCinta1.png"
    ],
    deskripsiSingkat: "Air terjun alami di Gowa dengan kolam jernih and suasana hutan yang sejuk serta menenangkan.",
    deskripsiLengkap: "Air Terjun Cinta merupakan salah satu destinasi wisata alam yang populer di Kabupaten Gowa, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun dengan kolam alami yang jernih, dikelilingi bebatuan besar and pepohonan hijau yang asri. Suasana alam yang tenang and udara yang sejuk menjadikan tempat ini cocok untuk bersantai, berenang, maupun menikmati keindahan alam bersama keluarga and teman. Air Terjun Cinta juga menjadi spot favorit wisatawan untuk berfoto karena panorama alamnya yang unik and memukau."
  },
  {
    nama: "Danau Tanralili",
    kategori: "Wisata Alam Darat",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/jAgrkY8fnZhszMAWA",
    gambar: "https://nama-backend-hosting.com/gambar/DanauTanralili.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauTanralili.png",
      "https://nama-backend-hosting.com/gambar/DanauTanralili1.png"
    ],
    deskripsiSingkat: "Danau indah di kawasan pegunungan Gowa dengan panorama alam yang sejuk and menenangkan.",
    deskripsiLengkap: "Danau Tanralili merupakan salah satu destinasi wisata alam terkenal di Kabupaten Gowa, Sulawesi Selatan. Danau ini berada di kawasan pegunungan dengan pemandangan alam yang sangat indah, dikelilingi perbukitan hijau and udara yang sejuk. Air danaunya yang jernih serta suasana yang tenang menjadikan tempat ini cocok untuk camping, hiking, fotografi, maupun bersantai menikmati alam. Danau Tanralili juga menjadi favorit para pendaki and pecinta alam karena menawarkan pengalaman wisata alam yang asri and memukau."
  },
  {
    nama: "Makam Sultan Hasanuddin",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/SaZ3Q69SzEyWPVjk6",
    gambar: "https://nama-backend-hosting.com/gambar/MakamSultanHasanuddin.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MakamSultanHasanuddin.png",
      "https://nama-backend-hosting.com/gambar/MakamSultanHasanuddin1.png"
    ],
    deskripsiSingkat: "Kompleks makam bersejarah Sultan Hasanuddin and raja-raja Gowa dengan arsitektur khas kerajaan.",
    deskripsiLengkap: "Makam Sultan Hasanuddin merupakan salah satu situs sejarah penting di Kabupaten Gowa, Sulawesi Selatan. Kompleks makam ini menjadi tempat peristirahatan Sultan Hasanuddin serta beberapa raja-raja Kerajaan Gowa lainnya. Bangunan makam memiliki arsitektur batu khas kerajaan dengan nilai sejarah and budaya yang tinggi. Wisatawan dapat mempelajari sejarah perjuangan Sultan Hasanuddin yang dikenal sebagai pahlawan nasional Indonesia sekaligus menikmati suasana kawasan bersejarah yang masih terawat dengan baik. Tempat ini juga sering dikunjungi sebagai wisata edukasi and religi."
  },
  {
    nama: "Dewi Sri Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/omDfu1WL2cyVJony7",
    gambar: "https://nama-backend-hosting.com/gambar/DewiSriWaterpark.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DewiSriWaterpark.png",
      "https://nama-backend-hosting.com/gambar/DewiSriWaterpark1.png"
    ],
    deskripsiSingkat: "Waterpark modern di Gowa dengan berbagai wahana air seru and fasilitas rekreasi keluarga.",
    deskripsiLengkap: "Dewi Sri Waterpark merupakan salah satu destinasi wisata rekreasi air populer di Kabupaten Gowa, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air seperti kolam renang, seluncuran, and area bermain anak yang cocok untuk liburan keluarga. Dengan fasilitas yang lengkap and area yang nyaman, pengunjung dapat menikmati suasana santai sambil bermain air bersama keluarga maupun teman. Dewi Sri Waterpark juga memiliki desain modern dengan area yang luas sehingga menjadi salah satu tempat favorit masyarakat untuk berlibur and menghabiskan akhir pekan."
  },

  // --- MAROS ---
  {
    nama: "Kampoeng Karst Rammang Rammang",
    kategori: "Wisata Alam Darat",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/LRifUEGn6xGzZKJD8",
    gambar: "https://nama-backend-hosting.com/gambar/KampungRammangRammang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KampungRammangRammang.png",
      "https://nama-backend-hosting.com/gambar/KampungRammangRammang1.png"
    ],
    deskripsiSingkat: "Kawasan wisata alam di Maros dengan sungai indah, perahu tradisional, and pegunungan karst yang memukau.",
    deskripsiLengkap: "Wisata Kampung Rammang-Rammang merupakan salah satu destinasi wisata alam paling terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini dikenal dengan pemandangan pegunungan karst yang megah, sungai yang tenang, serta suasana pedesaan yang asri. Wisatawan dapat menikmati perjalanan menggunakan perahu tradisional menyusuri sungai sambil menikmati panorama alam yang indah. Kawasan ini juga menjadi salah satu kawasan karst terbesar di dunia and sangat cocok untuk fotografi, rekreasi keluarga, maupun wisata alam."
  },
  {
    nama: "Air Terjun Bantimurung",
    kategori: "Wisata Alam Darat",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/he5wp3RUEfGhkJyT8",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunBantimurung.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunBantimurung.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunBantimurung1.png"
    ],
    deskripsiSingkat: "Air terjun terkenal di Maros dengan kolam alami jernih and suasana hutan tropis yang sejuk.",
    deskripsiLengkap: "Air Terjun Bantimurung merupakan salah satu destinasi wisata alam paling terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun yang mengalir di antara bebatuan alami dengan suasana hutan tropis yang asri and sejuk. Wisatawan dapat menikmati pemandangan alam, bermain air di kolam alami, hingga bersantai bersama keluarga. Kawasan Bantimurung juga dikenal sebagai habitat kupu-kupu and sering dijuluki sebagai Kingdom of Butterfly karena keanekaragaman spesies kupu-kupu yang hidup di area ini."
  },
  {
    nama: "Taman Arkeologi Leang-Leang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/iYczZ3gZLA53j189A",
    gambar: "https://nama-backend-hosting.com/gambar/TamanArkeologiLeangLeang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanArkeologiLeangLeang.png",
      "https://nama-backend-hosting.com/gambar/TamanArkeologiLeangLeang1.png"
    ],
    deskripsiSingkat: "Kawasan wisata sejarah di Maros dengan formasi batu karst unik and situs prasejarah terkenal.",
    deskripsiLengkap: "Taman Arkeologi Leang-Leang merupakan salah satu destinasi wisata sejarah and alam terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini dikenal sebagai kawasan situs prasejarah dengan gua-gua purba and lukisan tangan manusia purba yang memiliki nilai sejarah tinggi. Selain nilai arkeologi, kawasan ini juga menawarkan panorama pegunungan karst yang indah and unik. Wisatawan dapat menikmati suasana alam, menjelajahi kawasan gua, serta mempelajari sejarah kehidupan manusia purba di Sulawesi Selatan."
  },
  {
    nama: "Waterboom Grand Mall",
    kategori: "Wisata Hiburan",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/6bjxLD4E9o8WidLk7",
    gambar: "https://nama-backend-hosting.com/gambar/WaterboomGrandMall.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/WaterboomGrandMall.png",
      "https://nama-backend-hosting.com/gambar/WaterboomGrandMall1.png"
    ],
    deskripsiSingkat: "Waterpark modern di Maros dengan wahana permainan air seru and area rekreasi keluarga yang luas.",
    deskripsiLengkap: "Waterboom Grandmall merupakan salah satu destinasi wisata rekreasi air populer di Kabupaten Maros, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air modern seperti inflatable water playground, seluncuran, and area kolam yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang ramai and fasilitas yang lengkap, pengunjung dapat menikmati aktivitas bermain air bersama keluarga and teman. Lokasinya yang berada di kawasan Grand Mall Maros menjadikan tempat ini mudah dijangkau and menjadi pilihan favorit untuk liburan keluarga."
  },

  // --- BONE ---
  {
    nama: "Pantai Tete",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/zkykpQQswRwHVQd68",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiTete.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiTete.png",
      "https://nama-backend-hosting.com/gambar/PantaiTete1.png"
    ],
    deskripsiSingkat: "Pantai indah di Bone dengan air laut jernih and suasana tropis yang menenangkan.",
    deskripsiLengkap: "Pantai Tete merupakan salah satu destinasi wisata pantai populer di Kabupaten Bone, Sulawesi Selatan. Pantai ini menawarkan pemandangan laut biru yang jernih, pasir yang bersih, serta suasana alam tropis yang nyaman untuk bersantai. Wisatawan dapat menikmati panorama pantai, berfoto, bermain air, maupun menikmati suasana sunset yang indah. Dengan suasana yang tenang and alami, Pantai Tete menjadi tempat favorit untuk rekreasi keluarga and wisata alam."
  },
  {
    nama: "Air Terjun Ladenring",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/KhWAv1vrgCnjdG6D6",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunLadenring.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunLadenring.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunLadenring1.png"
    ],
    deskripsiSingkat: "Air terjun alami di Bone dengan suasana hutan yang sejuk and kolam alami yang jernih.",
    deskripsiLengkap: "Air Terjun Ladenring merupakan salah satu destinasi wisata alam menarik di Kabupaten Bone, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun bertingkat dengan aliran air yang jernih serta suasana alam yang asri and menenangkan. Pengunjung dapat menikmati udara segar, bermain air, hingga berfoto di sekitar kawasan air terjun. Dikelilingi pepohonan hijau and bebatuan alami, Air Terjun Ladenring menjadi tempat favorit wisatawan pecinta alam."
  },
  {
    nama: "Goa Mampu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/zZRWgw2tG6zrdbYb9",
    gambar: "https://nama-backend-hosting.com/gambar/GoaMampu.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/GoaMampu.png",
      "https://nama-backend-hosting.com/gambar/GoaMampu1.png"
    ],
    deskripsiSingkat: "Goa bersejarah di Bone dengan stalaktit unik and cerita legenda masyarakat setempat.",
    deskripsiLengkap: "Goa Mampu merupakan salah satu destinasi wisata alam and sejarah terkenal di Kabupaten Bone, Sulawesi Selatan. Goa ini dikenal dengan formasi batu stalaktit and stalagmit yang unik serta legenda masyarakat setempat yang masih dipercaya hingga sekarang. Suasana di dalam goa memberikan pengalaman petualangan menarik bagi wisatawan yang ingin menjelajahi keindahan alam bawah tanah. Tempat ini juga menjadi wisata edukasi and budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Situjutujue Waterboom",
    kategori: "Wisata Hiburan",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/JGYEFfFoueCveC3u9",
    gambar: "https://nama-backend-hosting.com/gambar/SitujutujueWaterboom.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/SitujutujueWaterboom.png",
      "https://nama-backend-hosting.com/gambar/SitujutujueWaterboom1.png"
    ],
    deskripsiSingkat: "Tempat wisata air di Bone dengan kolam renang and wahana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Situjutujue Waterboom merupakan salah satu destinasi wisata rekreasi air yang populer di Kabupaten Bone, Sulawesi Selatan. Tempat wisata ini menyediakan berbagai fasilitas kolam renang and wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang ramai and fasilitas yang cukup lengkap, pengunjung dapat menikmati waktu liburan bersama keluarga and teman. Tempat ini menjadi salah satu pilihan favorit masyarakat Bone untuk rekreasi and bersantai."
  },

  // --- WAJO ---
  {
    nama: "Rumah Adat Attakkae",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/R6c4rLBgqMHUisxZ9",
    gambar: "https://nama-backend-hosting.com/gambar/RumahAdatAttakkae.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/RumahAdatAttakkae.png",
      "https://nama-backend-hosting.com/gambar/RumahAdatAttakkae1.png"
    ],
    deskripsiSingkat: "Rumah adat khas Wajo dengan arsitektur tradisional Bugis yang megah and bernilai sejarah tinggi.",
    deskripsiLengkap: "Rumah Adat Attakkae merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Wajo, Sulawesi Selatan. Bangunan ini menampilkan arsitektur tradisional Bugis dengan bentuk rumah panggung yang khas and detail ukiran yang indah. Tempat ini menjadi simbol budaya masyarakat Bugis serta sering dijadikan lokasi wisata edukasi and sejarah. Pengunjung dapat menikmati suasana tradisional sambil mempelajari nilai budaya and sejarah masyarakat Wajo."
  },
  {
    nama: "Danau Tempe",
    kategori: "Wisata Alam Darat",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/JYgKd3mG9SnNjs8c9",
    gambar: "https://nama-backend-hosting.com/gambar/DanauTempe.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauTempe.png",
      "https://nama-backend-hosting.com/gambar/DanauTempe1.png"
    ],
    deskripsiSingkat: "Danau terkenal di Wajo dengan pemandangan alam indah and kehidupan masyarakat nelayan terapung.",
    deskripsiLengkap: "Danau Tempe merupakan salah satu destinasi wisata alam terkenal di Kabupaten Wajo, Sulawesi Selatan. Danau ini menawarkan panorama alam yang luas dengan suasana yang tenang and asri. Wisatawan dapat melihat rumah-rumah terapung milik nelayan serta menikmati aktivitas masyarakat sekitar yang menggantungkan hidup dari danau. Danau Tempe juga dikenal sebagai tempat wisata favorit untuk menikmati sunset, memancing, dens wisata budaya masyarakat Bugis."
  },
  {
    nama: "Saoraja Arung Belawa",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/1NxEx4rzqNnyHd4f9",
    gambar: "https://nama-backend-hosting.com/gambar/SaorajaMallangga.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/SaorajaMallangga.png",
      "https://nama-backend-hosting.com/gambar/SaorajaMallangga1.png"
    ],
    deskripsiSingkat: "Rumah adat bersejarah di Wajo dengan arsitektur tradisional Bugis yang khas and megah.",
    deskripsiLengkap: "Saoraja Mallangga merupakan salah satu rumah adat and situs budaya terkenal di Kabupaten Wajo, Sulawesi Selatan. Bangunan ini memiliki desain arsitektur tradisional Bugis yang unik dengan bentuk rumah panggung khas kerajaan Bugis tempo dulu. Tempat ini menjadi simbol budaya and sejarah masyarakat Wajo serta sering dikunjungi wisatawan untuk mengenal warisan budaya lokal. Selain memiliki nilai sejarah tinggi, Saoraja Mallangga juga menjadi spot fotografi yang menarik."
  },
  {
    nama: "Kolam Renang Syariah NBS",
    kategori: "Wisata Hiburan",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/DmKHUNWPyKthY1Kw8",
    gambar: "https://nama-backend-hosting.com/gambar/KolamRenangSyariahNBS.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KolamRenangSyariahNBS.png",
      "https://nama-backend-hosting.com/gambar/KolamRenangSyariahNBS1.png"
    ],
    deskripsiSingkat: "Tempat wisata rekreasi keluarga di Wajo dengan konsep syariah and berbagai fasilitas menarik.",
    deskripsiLengkap: "Kolam Renang Syariah NBS merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Wajo, Sulawesi Selatan. Tempat wisata ini menawarkan kolam renang and area rekreasi keluarga dengan konsep syariah yang nyaman and ramah keluarga. Selain kolam renang, kawasan wisata ini juga memiliki berbagai spot menarik seperti replika bangunan dunia, taman hijau, and area santai yang cocok untuk liburan bersama keluarga maupun teman."
  },

  // --- SOPPENG ---
  {
    nama: "Puncak Gunung Sewo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/LGXvadZLv86k6kKx5",
    gambar: "https://nama-backend-hosting.com/gambar/PuncakGunungSewo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PuncakGunungSewo.png",
      "https://nama-backend-hosting.com/gambar/PuncakGunungSewo1.png"
    ],
    deskripsiSingkat: "Destinasi wisata alam di Soppeng dengan panorama perbukitan and spot camping yang indah.",
    deskripsiLengkap: "Puncak Gunung Sewo merupakan salah satu destinasi wisata alam populer di Kabupaten Soppeng, Sulawesi Selatan. Tempat ini menawarkan pemandangan alam berupa perbukitan hijau, bebatuan alami, and panorama lembah yang memukau. Wisatawan dapat menikmati suasana sejuk, berkemah, berburu sunrise, hingga berfoto di spot-spot alam yang menarik. Dengan udara segar and pemandangan yang luas, tempat ini menjadi favorit para pecinta alam and pendaki."
  },
  {
    nama: "Taman Wisata Alam Lejja",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/RwyRPPaxMaUcdpBv7",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianAirPanasLejja.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasLejja.png",
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasLejja1.png"
    ],
    deskripsiSingkat: "Permandian air panas alami di Soppeng dengan suasana hutan tropis yang sejuk and nyaman.",
    deskripsiLengkap: "Permandian Air Panas Lejja merupakan salah satu destinasi wisata terkenal di Kabupaten Soppeng, Sulawesi Selatan. Tempat wisata ini menawarkan kolam air panas alami yang berada di tengah kawasan hutan yang asri and sejuk. Pengunjung dapat menikmati sensasi berendam air panas sambil menikmati suasana alam yang menenangkan. Tempat ini cocok untuk rekreasi keluarga, relaksasi, and wisata alam."
  },
  {
    nama: "Rumah Adat Sao Mario",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/MMfrj34agmYo1LVTA",
    gambar: "https://nama-backend-hosting.com/gambar/RumahAdatSaoMario.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/RumahAdatSaoMario.png",
      "https://nama-backend-hosting.com/gambar/RumahAdatSaoMario1.png"
    ],
    deskripsiSingkat: "Rumah adat khas Bugis di Soppeng dengan arsitektur tradisional yang megah and bersejarah.",
    deskripsiLengkap: "Rumah Adat Sao Mario merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Soppeng, Sulawesi Selatan. Bangunan tradisional ini memiliki arsitektur khas Bugis dengan bentuk rumah panggung yang megah and detail ukiran yang indah. Tempat ini menjadi simbol budaya masyarakat Bugis serta sering dijadikan lokasi wisata sejarah and edukasi budaya. Pengunjung dapat menikmati suasana tradisional sambil mempelajari warisan budaya lokal."
  },
  {
    nama: "Permandian Alam Citta",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/feXdGj211GJ5yHDU6",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianAlamCitta.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianAlamCitta.png",
      "https://nama-backend-hosting.com/gambar/PermandianAlamCitta1.png"
    ],
    deskripsiSingkat: "Permandian alami di Soppeng dengan air jernih and suasana santai yang cocok untuk rekreasi keluarga.",
    deskripsiLengkap: "Permandian Alam Citta merupakan salah satu destinasi wisata alam populer di Kabupaten Soppeng, Sulawesi Selatan. Tempat ini menawarkan kolam alami dengan air yang jernih and segar, dikelilingi pepohonan hijau yang membuat suasana terasa sejuk and nyaman. Wisatawan dapat berenang, bermain air, maupun bersantai bersama keluarga and teman. Tempat ini menjadi salah satu pilihan favorit masyarakat untuk menikmati liburan alam yang menyenangkan."
  },

  // --- BARRU ---
  {
    nama: "Pulau Dutungan",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/HcXkwWCCxJ2Htqpn9",
    gambar: "https://nama-backend-hosting.com/gambar/PulauDutungan.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauDutungan.png",
      "https://nama-backend-hosting.com/gambar/PulauDutungan1.png"
    ],
    deskripsiSingkat: "Pulau wisata di Barru dengan pantai indah, laut jernih, and suasana tropis yang menenangkan.",
    deskripsiLengkap: "Pulau Dutungan merupakan salah satu destinasi wisata bahari terkenal di Kabupaten Barru, Sulawesi Selatan. Pulau ini menawarkan panorama laut biru yang jernih, pasir putih yang bersih, serta suasana alam tropis yang masih asri. Wisatawan dapat menikmati aktivitas snorkeling, berenang, memancing, maupun bersantai menikmati keindahan alam pulau. Pulau Dutungan juga menjadi tempat favorit untuk menikmati sunset and liburan keluarga."
  },
  {
    nama: "Air Terjun Sarang Burung",
    kategori: "Wisata Alam Darat",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/XHXCLVxLnkqk51ac8",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunSarangBurung.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunSarangBurung.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunSarangBurung1.png"
    ],
    deskripsiSingkat: "Air terjun alami di Barru dengan suasana hutan hijau yang sejuk and menenangkan.",
    deskripsiLengkap: "Air Terjun Sarang Burung merupakan salah satu destinasi wisata alam populer di Kabupaten Barru, Sulawesi Selatan. Tempat wisata ini menawarkan panorama air terjun bertingkat yang mengalir di antara bebatuan alami and pepohonan hijau yang lebat. Suasana yang sejuk and alami membuat tempat ini cocok untuk rekreasi, bersantai, maupun menikmati keindahan alam. Pengunjung juga dapat berfoto and bermain air di sekitar kawasan air terjun."
  },
  {
    nama: "Rumah Adat Saoraja Lapinceng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/gnt49MeXHfZGaNh28",
    gambar: "https://nama-backend-hosting.com/gambar/RumahAdatSaorajaLapinceng.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/RumahAdatSaorajaLapinceng.png",
      "https://nama-backend-hosting.com/gambar/RumahAdatSaorajaLapinceng1.png"
    ],
    deskripsiSingkat: "Rumah adat khas Bugis di Barru dengan arsitektur tradisional yang unik and bersejarah.",
    deskripsiLengkap: "Rumah Adat Saoraja Lapinceng merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Barru, Sulawesi Selatan. Bangunan tradisional ini memiliki bentuk rumah panggung khas Bugis dengan material kayu and desain arsitektur yang unik. Tempat ini menjadi simbol budaya masyarakat Bugis serta memiliki nilai sejarah yang tinggi. Wisatawan dapat menikmati suasana tradisional sambil mengenal budaya and sejarah lokal masyarakat Barru."
  },
  {
    nama: "Diana Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/fDjpLrvB2pUoy43KA",
    gambar: "https://nama-backend-hosting.com/gambar/DianaWaterpark.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DianaWaterpark.png",
      "https://nama-backend-hosting.com/gambar/DianaWaterpark1.png"
    ],
    deskripsiSingkat: "Waterpark modern di Barru dengan berbagai wahana permainan air and panorama alam yang indah.",
    deskripsiLengkap: "Diana Waterpark merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Barru, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air seperti seluncuran warna-warni, kolam renang keluarga, and area bermain anak. Dengan latar perbukitan hijau and udara yang sejuk, pengunjung dapat menikmati suasana liburan yang menyenangkan bersama keluarga and teman. Diana Waterpark menjadi salah satu pilihan favorit wisata keluarga di Barru."
  },

  // --- PANGKAJENE & KEPULAUAN ---
  {
    nama: "Pulau Kapoposang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/nWNK3kt4NrtBEpPg7",
    gambar: "https://nama-backend-hosting.com/gambar/PulauKapoposang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauKapoposang.png",
      "https://nama-backend-hosting.com/gambar/PulauKapoposang1.png"
    ],
    deskripsiSingkat: "Pulau eksotis dengan laut jernih, pasir putih, and keindahan bawah laut yang memukau.",
    deskripsiLengkap: "Pulau Kapoposang merupakan salah satu destinasi wisata bahari terkenal di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Pulau ini menawarkan pemandangan laut yang jernih, pasir putih yang bersih, serta terumbu karang yang indah. Wisatawan dapat menikmati aktivitas snorkeling, diving, berenang, hingga bersantai menikmati suasana pantai tropis. Dengan suasana yang tenang and panorama alam yang memukau, Pulau Kapoposang menjadi tempat favorit wisatawan pecinta laut."
  },
  {
    nama: "Danau Hijau Balocci",
    kategori: "Wisata Alam Darat",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/1PjedaK6RvqiKd8P9",
    gambar: "https://nama-backend-hosting.com/gambar/DanauHijauBalocci.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauHijauBalocci.png",
      "https://nama-backend-hosting.com/gambar/DanauHijauBalocci1.png"
    ],
    deskripsiSingkat: "Danau hijau alami dengan panorama pegunungan karst yang indah and menenangkan.",
    deskripsiLengkap: "Danau Hijau Balocci merupakan salah satu destinasi wisata alam populer di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat ini menawarkan panorama danau berwarna hijau yang dikelilingi perbukitan karst and pepohonan hijau yang asri. Wisatawan dapat menikmati suasana tenang, berfoto, maupun menikmati keindahan alam sekitar. Tempat ini menjadi salah satu spot wisata favorit pecinta alam and fotografi."
  },
  {
    nama: "Taman Purbakala Sumpang Bita",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/vvFC1DhB9MqZzNhB6",
    gambar: "https://nama-backend-hosting.com/gambar/TamanPurbakalaSumpangBita.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanPurbakalaSumpangBita.png",
      "https://nama-backend-hosting.com/gambar/TamanPurbakalaSumpangBita1.png"
    ],
    deskripsiSingkat: "Taman wisata alam and sejarah dengan panorama karst serta suasana hijau yang asri.",
    deskripsiLengkap: "Taman Purbakala Sumpang Bita merupakan salah satu destinasi wisata sejarah and alam terkenal di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat ini memiliki kawasan hijau yang luas dengan latar pegunungan karst yang indah and suasana yang sejuk. Selain menjadi tempat wisata alam, kawasan ini juga memiliki nilai sejarah and budaya yang menarik untuk dipelajari. Pengunjung dapat menikmati pemandangan alam, berjalan santai, and berfoto di berbagai spot menarik."
  },
  {
    nama: "Wisata Hutan Mangrove Dewi Biringngkassi",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/RkzWMoUVoEYhxAD6A",
    gambar: "https://nama-backend-hosting.com/gambar/WisataHutanMangroveDewiBiringngkassi.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/WisataHutanMangroveDewiBiringngkassi.png",
      "https://nama-backend-hosting.com/gambar/WisataHutanMangroveDewiBiringngkassi1.png"
    ],
    deskripsiSingkat: "Wisata hutan mangrove dengan suasana alami and jembatan kayu yang menarik untuk dijelajahi.",
    deskripsiLengkap: "Wisata Hutan Mangrove Dewi Biringngkassi merupakan salah satu destinasi wisata alam populer di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat wisata ini menawarkan kawasan hutan mangrove yang asri dengan jalur jembatan kayu yang dapat digunakan pengunjung untuk menikmati keindahan alam sekitar. Selain menjadi tempat rekreasi, kawasan ini juga berfungsi sebagai wisata edukasi mengenai ekosistem mangrove and pelestarian lingkungan."
  },

  // --- TAKALAR ---
  {
    nama: "Pantai Barugaya Punaga",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/PidtnBijs6vpom33A",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiPunaga.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiPunaga.png",
      "https://nama-backend-hosting.com/gambar/PantaiPunaga1.png"
    ],
    deskripsiSingkat: "Pantai eksotis di Takalar dengan batu karang unik and panorama sunset yang indah.",
    deskripsiLengkap: "Pantai Punaga merupakan salah satu destinasi wisata pantai terkenal di Kabupaten Takalar, Sulawesi Selatan. Pantai ini memiliki ciri khas berupa batuan karang alami yang berada di tepi laut dengan panorama laut biru yang indah. Wisatawan dapat menikmati suasana pantai yang tenang, berburu sunset, berfoto, maupun bersantai menikmati angin laut. Tempat ini menjadi salah satu spot favorit wisata alam and fotografi di Takalar."
  },
  {
    nama: "PPLH Puntondo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/v8xmd2jCQueamtNV9",
    gambar: "https://nama-backend-hosting.com/gambar/PPLHPuntondo.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PPLHPuntondo.png",
      "https://nama-backend-hosting.com/gambar/PPLHPuntondo1.png"
    ],
    deskripsiSingkat: "Kawasan wisata edukasi alam dengan penginapan kayu and suasana hutan yang asri.",
    deskripsiLengkap: "PPLH Puntondo merupakan salah satu destinasi wisata edukasi and alam populer di Kabupaten Takalar, Sulawesi Selatan. Tempat ini menawarkan suasana alami dengan bangunan kayu tradisional yang berada di tengah pepohonan hijau yang rindang. Selain menjadi tempat rekreasi, kawasan ini juga digunakan sebagai pusat pendidikan lingkungan hidup. Pengunjung dapat menikmati suasana tenang, belajar tentang lingkungan, and beristirahat di area wisata yang nyaman."
  },
  {
    nama: "Kawasan Benteng Sanrobone",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/D2hThhsqPHhcGBGR8",
    gambar: "https://nama-backend-hosting.com/gambar/BentengSanrobone.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BentengSanrobone.png",
      "https://nama-backend-hosting.com/gambar/BentengSanrobone1.png"
    ],
    deskripsiSingkat: "Situs sejarah di Takalar dengan bangunan makam kuno and nilai budaya yang tinggi.",
    deskripsiLengkap: "Benteng Sanrobone merupakan salah satu situs sejarah terkenal di Kabupaten Takalar, Sulawesi Selatan. Kawasan ini memiliki bangunan bersejarah and kompleks makam kuno yang menjadi bagian dari sejarah Kerajaan Sanrobone. Tempat ini menjadi destinasi wisata budaya and sejarah yang menarik untuk dikunjungi. Wisatawan dapat mempelajari sejarah lokal sekaligus menikmati suasana kawasan yang tenang and penuh nilai budaya."
  },
  {
    nama: "Permandian Taman Wisata Rita",
    kategori: "Wisata Hiburan",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/nWmF53CYdLpHwEVz8",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianTamanWisataRita.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianTamanWisataRita.png",
      "https://nama-backend-hosting.com/gambar/PermandianTamanWisataRita1.png"
    ],
    deskripsiSingkat: "Tempat wisata keluarga di Takalar dengan kolam renang and wahana permainan air yang seru.",
    deskripsiLengkap: "Permandian Taman Wisata Rita merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Takalar, Sulawesi Selatan. Tempat wisata ini menawarkan kolam renang luas dengan berbagai wahana permainan air seperti seluncuran warna-warni yang cocok untuk anak-anak maupun keluarga. Suasana tempat yang nyaman and area bermain yang menarik menjadikan tempat ini favorit untuk liburan and rekreasi bersama keluarga."
  },

  // --- JENEPONTO ---
  {
    nama: "Pantai Garassikang Katubiri",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/aCFUdHAT8suDLKRVA",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiGarassikangKatubiri.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiGarassikangKatubiri.png",
      "https://nama-backend-hosting.com/gambar/PantaiGarassikangKatubir1.png"
    ],
    deskripsiSingkat: "Pantai eksotis di Jeneponto dengan tebing batu karang unik and pemandangan laut yang indah.",
    deskripsiLengkap: "Pantai Garassikang atau Katubiri merupakan salah satu destinasi wisata alam populer di Kabupaten Jeneponto, Sulawesi Selatan. Pantai ini terkenal dengan formasi batu karang putih yang unik and pemandangan laut biru yang menenangkan. Tempat ini cocok untuk bersantai, berfoto, menikmati sunset, serta menikmati suasana alam pesisir yang masih alami."
  },
  {
    nama: "Danau Bulu Jaya",
    kategori: "Wisata Alam Darat",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/UJr4cYFRUGUoGFVt5",
    gambar: "https://nama-backend-hosting.com/gambar/DanauBuluJaya.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauBuluJaya.png",
      "https://nama-backend-hosting.com/gambar/DanauBuluJaya1.png"
    ],
    deskripsiSingkat: "Danau alami dengan panorama perbukitan hijau and suasana tenang yang cocok untuk rekreasi.",
    deskripsiLengkap: "Danau Bulu Jaya merupakan destinasi wisata alam di Kabupaten Jeneponto yang menawarkan keindahan danau dengan panorama perbukitan hijau di sekitarnya. Tempat ini menjadi lokasi favorit untuk menikmati pemandangan alam, berfoto, and bersantai bersama keluarga maupun teman. Udara yang sejuk and suasana yang tenang menjadikan Danau Bulu Jaya cocok sebagai tempat rekreasi alam."
  },
  {
    nama: "Makam Raja-Raja Binamu",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/zsmG8NJ18oYQxroK6",
    gambar: "https://nama-backend-hosting.com/gambar/MakamRajaRajaBinamu.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MakamRajaRajaBinamu.png",
      "https://nama-backend-hosting.com/gambar/MakamRajaRajaBinamu1.png"
    ],
    deskripsiSingkat: "Kompleks makam bersejarah peninggalan kerajaan Binamu di Jeneponto.",
    deskripsiLengkap: "Makam Raja-Raja Binamu merupakan situs sejarah and budaya yang berada di Kabupaten Jeneponto, Sulawesi Selatan. Kompleks makam ini menjadi bukti sejarah keberadaan Kerajaan Binamu pada masa lampau. Dengan arsitektur makam tradisional and suasana yang penuh nilai sejarah, tempat ini sering dikunjungi untuk wisata edukasi, penelitian sejarah, and ziarah budaya."
  },
  {
    nama: "Jeneponto Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/nkJHN2gSBtGwdVff8",
    gambar: "https://nama-backend-hosting.com/gambar/JenepontoWaterpark.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/JenepontoWaterpark.png",
      "https://nama-backend-hosting.com/gambar/JenepontoWaterpark1.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang and wahana permainan air di Jeneponto.",
    deskripsiLengkap: "Jeneponto Waterpark merupakan salah satu tempat wisata rekreasi keluarga yang populer di Kabupaten Jeneponto. Tempat ini menyediakan kolam renang and berbagai wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang nyaman and fasilitas yang lengkap, Jeneponto Waterpark menjadi pilihan favorit masyarakat untuk berlibur and menghabiskan waktu bersama keluarga."
  },

  // --- BANTAENG ---
  {
    nama: "Pantai Marina Bantaeng",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/fm8SZaoHWsZdphLo7",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiMarinaBantaeng.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiMarinaBantaeng.png",
      "https://nama-backend-hosting.com/gambar/PantaiMarinaBantaeng1.png"
    ],
    deskripsiSingkat: "Pantai populer di Bantaeng dengan taman indah and suasana pantai yang nyaman.",
    deskripsiLengkap: "Pantai Marina merupakan salah satu destinasi wisata favorit di Kabupaten Bantaeng, Sulawesi Selatan. Tempat ini menawarkan pemandangan laut yang indah, area taman yang tertata rapi, gazebo untuk bersantai, serta suasana pantai yang nyaman untuk rekreasi keluarga. Pantai Marina juga sering dijadikan lokasi berkumpul masyarakat and tempat menikmati sunset."
  },
  {
    nama: "Air Terjun Bissappu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/NAiPCriX39QHE9a3A",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunBissappu.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunBissappu.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunBissappu1.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan panorama hutan hijau yang sejuk and menenangkan.",
    deskripsiLengkap: "Air Terjun Bissappu adalah destinasi wisata alam di Kabupaten Bantaeng yang terkenal dengan keindahan air terjun tinggi and suasana hutan yang asri. Tempat ini menawarkan udara yang sejuk, pemandangan alam yang memukau, serta jembatan and area viewing spot untuk menikmati keindahan air terjun secara langsung. Cocok untuk wisata alam, fotografi, and relaksasi."
  },
  {
    nama: "Balla Lompoa Bantaeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/5zhu53sSFdL4aDKW7",
    gambar: "https://nama-backend-hosting.com/gambar/BallaLompoaBantaeng.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BallaLompoaBantaeng.png",
      "https://nama-backend-hosting.com/gambar/BallaLompoaBantaeng1.png"
    ],
    deskripsiSingkat: "Rumah adat and museum budaya khas Bantaeng dengan arsitektur tradisional yang megah.",
    deskripsiLengkap: "Balla Lompoa Bantaeng merupakan salah satu bangunan adat and pusat budaya yang berada di Kabupaten Bantaeng, Sulawesi Selatan. Bangunan ini memiliki arsitektur rumah panggung tradisional khas Bugis-Makassar yang megah and sarat nilai sejarah. Selain menjadi ikon budaya daerah, tempat ini juga digunakan sebagai museum and lokasi edukasi sejarah serta budaya masyarakat Bantaeng."
  },
  {
    nama: "Permandian Eremerasa Ermes",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/6jhUgDQLQMQNwWg36",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianEremerasaErmes.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianEremerasaErmes.png",
      "https://nama-backend-hosting.com/gambar/PermandianEremerasaErmes1.png"
    ],
    deskripsiSingkat: "Permandian alam dengan suasana hutan yang sejuk and kolam renang alami yang menyegarkan.",
    deskripsiLengkap: "Permandian Eremerasa atau yang dikenal dengan Ermes merupakan salah satu tempat wisata rekreasi alam di Kabupaten Bantaeng. Tempat ini menawarkan kolam pemandian alami yang berada di tengah kawasan hutan hijau yang asri and sejuk. Dengan fasilitas gazebo, area santai, and suasana alam yang nyaman, Ermes menjadi lokasi favorit untuk berlibur bersama keluarga maupun teman."
  },

  // --- BULUKUMBA ---
  {
    nama: "Tebing Appalarang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/SVCES47xUo1WeJzp7",
    gambar: "https://nama-backend-hosting.com/gambar/TebingAppalarang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TebingAppalarang.png",
      "https://nama-backend-hosting.com/gambar/TebingAppalarang1.png"
    ],
    deskripsiSingkat: "Tebing laut eksotis dengan pemandangan air biru jernih khas Bulukumba.",
    deskripsiLengkap: "Tebing Appalarang merupakan salah satu destinasi wisata alam populer di Kabupaten Bulukumba, Sulawesi Selatan. Tempat ini terkenal dengan tebing batu karang yang menjulang tinggi di atas laut biru jernih. Wisatawan dapat menikmati panorama laut, berfoto di spot menarik, serta merasakan suasana alam pantai yang masih alami and menenangkan."
  },
  {
    nama: "Donggia Kahayya",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/yrXMREqGXooUcm8P9",
    gambar: "https://nama-backend-hosting.com/gambar/DonggiaKahayya.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DonggiaKahayya.png",
      "https://nama-backend-hosting.com/gambar/DonggiaKahayya1.png"
    ],
    deskripsiSingkat: "Bukit wisata dengan panorama pegunungan hijau and jalur kayu yang estetik.",
    deskripsiLengkap: "Donggia Kahayya merupakan destinasi wisata alam di Kabupaten Bulukumba yang menawarkan pemandangan perbukitan hijau and lembah yang indah. Tempat ini memiliki jalur kayu and gardu pandang yang menjadi spot favorit wisatawan untuk menikmati panorama alam serta berfoto. Udara yang sejuk and suasana yang tenang membuat Donggia Kahayya cocok untuk rekreasi and healing."
  },
  {
    nama: "Kawasan Adat Ammatoa",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/oFC3Rgu7XJttrAmS7",
    gambar: "https://nama-backend-hosting.com/gambar/KawasanAdatAmmatoa.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KawasanAdatAmmatoa.png",
      "https://nama-backend-hosting.com/gambar/KawasanAdatAmmatoa1.png"
    ],
    deskripsiSingkat: "Kawasan adat tradisional masyarakat Kajang yang masih menjaga budaya leluhur.",
    deskripsiLengkap: "Kawasan Adat Ammatoa Kajang merupakan salah satu wisata budaya terkenal di Kabupaten Bulukumba, Sulawesi Selatan. Masyarakat adat di kawasan ini masih mempertahankan tradisi leluhur, rumah adat tradisional, serta gaya hidup sederhana yang penuh nilai budaya. Wisatawan dapat mengenal budaya lokal, melihat rumah adat khas Kajang, and mempelajari kehidupan masyarakat adat yang unik."
  },
  {
    nama: "Sumur Panjang Hila-Hila",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/kdmB8FmR6diHvgsx9",
    gambar: "https://nama-backend-hosting.com/gambar/SumurPanjangHilaHila.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/SumurPanjangHilaHila.png",
      "https://nama-backend-hosting.com/gambar/SumurPanjangHilaHila1.png"
    ],
    deskripsiSingkat: "Permandian alami dengan air jernih and suasana tropis yang sejuk.",
    deskripsiLengkap: "Sumur Panjang Hila-Hila atau Permandian Hila-Hila merupakan destinasi wisata alam di Kabupaten Bulukumba yang terkenal dengan airnya yang jernih and menyegarkan. Tempat ini memiliki kolam alami, jembatan kecil, and suasana rindang yang cocok untuk bersantai bersama keluarga. Dengan nuansa tropis yang asri, wisata ini menjadi pilihan favorit masyarakat untuk rekreasi and menikmati suasana alam."
  }, 
  {
    nama: "Pantai Tanjung Bira",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/ZCJYLG5KcxB4Ndn1A",
    gambar: "https://nama-backend-hosting.com/gambar/Tanjung_Bira.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/Tanjung_Bira.png",
      "https://nama-backend-hosting.com/gambar/Tanjung_Bira1.png"
    ],
    deskripsiSingkat: "Pantai Tanjung Bira di Bulukumba adalah destinasi wisata bahari unggulan Sulawesi Selatan yang terkenal dengan hamparan pasir putih sehalus tepung, air laut jernih berwarna biru kehijauan, serta kedekatannya dengan pusat pembuatan kapal tradisional Phinisi yang ikonik.",
    deskripsiLengkap: "Pantai Tanjung Bira yang terletak di ujung tenggara Kabupaten Bulukumba merupakan salah satu permata wisata bahari paling ikonik di Sulawesi Selatan yang menawarkan perpaduan sempurna antara keindahan alam tropis and kekayaan budaya maritim. Karakteristik utama yang membuat pantai ini tersohor adalah hamparan pasir putihnya yang sangat halus dengan tekstur menyerupai tepung, yang berpadu serasi dengan kejernihan air lautnya yang memancarkan gradasi warna biru hingga kehijauan yang memukau. Berada di lokasi yang cukup jauh dari kebisingan kota, pantai ini menyajikan suasana yang tenang and menyegarkan, menjadikannya pelarian ideal bagi siapa saja yang ingin menikmati panorama matahari terbenam yang spektakuler sambil merasakan sejuknya angin pesisir di antara perbukitan hijau yang memagari garis pantai. Selain pesona estetikanya, kawasan Tanjung Bira juga menjadi pintu gerbang menuju berbagai petualangan bahari and edukasi budaya yang sangat berharga bagi para pengunjungnya. Para pecinta aktivitas air dapat dengan mudah menyeberang menuju Pulau Liukang Loe atau Pulau Kambing yang menyuguhkan ekosistem bawah laut menawan, lengkap dengan terumbu karang yang terjaga and keragaman biota laut yang menjadikannya lokasi favorit untuk kegiatan snorkeling serta menyelam. Lebih dari itu, kunjungan ke kawasan ini akan terasa kurang lengkap tanpa menyambangi daerah Tana Beru yang terletak tidak jauh dari lokasi pantai, di mana wisatawan dapat menyaksikan secara langsung proses pembuatan kapal Phinisi tradisional secara manual oleh para pengrajin lokal yang kemampuannya telah diakui hingga ke kancah internasional. Didukung dengan fasilitas akomodasi yang kini telah tersedia dalam berbagai kelas, mulai dari penginapan ramah anggaran hingga resor kelas atas, Tanjung Bira bukan sekadar destinasi wisata pantai biasa, melainkan sebuah kawasan wisata terpadu yang menawarkan pengalaman autentik bagi setiap orang yang datang untuk menikmati pesona alam serta sejarah maritim di tanah Sulawesi. Apakah Anda memerlukan informasi tambahan mengenai rute perjalanan dari wilayah Anda atau rekomendasi waktu terbaik untuk berkunjung ke sana?"
  },

  // --- SINJAI ---
  {
    nama: "Pulau Sembilan",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/FyS5rqH3GyE111bx5",
    gambar: "https://nama-backend-hosting.com/gambar/PulauSembilan.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauSembilan.png",
      "https://nama-backend-hosting.com/gambar/PulauSembilan1.png"
    ],
    deskripsiSingkat: "Destinasi wisata bahari dengan pasir putih and laut biru jernih yang memukau.",
    deskripsiLengkap: "Pulau Sembilan merupakan salah satu destinasi wisata unggulan di Kabupaten Sinjai, Sulawesi Selatan. Tempat ini terkenal dengan hamparan pasir putih, laut biru jernih, and panorama pulau kecil yang indah. Wisatawan dapat menikmati snorkeling, berenang, berfoto, serta suasana alam bahari yang tenang and eksotis."
  },
  {
    nama: "Air Terjun Laliako",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/aVy4VcYuiXLMaX1S9",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunLaliako.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunLaliako.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunLaliako1.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan suasana hijau and udara sejuk khas pegunungan.",
    deskripsiLengkap: "Air Terjun Laliako merupakan destinasi wisata alam di Kabupaten Sinjai yang menawarkan panorama air terjun bertingkat dengan lingkungan hijau yang asri. Tempat ini cocok untuk wisata alam, bersantai, and menikmati udara segar pegunungan. Keindahan alam sekitar menjadikan Air Terjun Laliako favorit bagi wisatawan pecinta alam."
  },
  {
    nama: "Taman Purbakala Batu Pake Gojeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/Pu5NJd5uNbAtVTnNA",
    gambar: "https://nama-backend-hosting.com/gambar/TamanPurbakalaBatuPakeGojeng.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanPurbakalaBatuPakeGojeng.png",
      "https://nama-backend-hosting.com/gambar/TamanPurbakalaBatuPakeGojeng1.png"
    ],
    deskripsiSingkat: "Situs purbakala dengan batu-batu bersejarah and suasana taman yang alami.",
    deskripsiLengkap: "Taman Purbakala Batu Pake Gojeng merupakan salah satu situs sejarah and budaya di Kabupaten Sinjai. Tempat ini menyimpan berbagai batu purbakala yang memiliki nilai sejarah tinggi and menjadi bukti peninggalan masa lampau. Dikelilingi pepohonan rindang and suasana alami, lokasi ini cocok untuk wisata edukasi and sejarah."
  },
  {
    nama: "Taman Wisata Fafaliang",
    kategori: "Wisata Hiburan",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/xmrr5PgJEdrVzdkP6",
    gambar: "https://nama-backend-hosting.com/gambar/TamanWisataFafaliang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanWisataFafaliang.png",
      "https://nama-backend-hosting.com/gambar/TamanWisataFafaliang1.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang and suasana alam yang nyaman.",
    deskripsiLengkap: "Taman Wisata Fafaliang merupakan salah satu destinasi rekreasi keluarga di Kabupaten Sinjai yang menyediakan kolam renang, wahana permainan air, gazebo, and area santai. Dikelilingi pemandangan hijau and suasana alam yang asri, tempat ini menjadi pilihan favorit masyarakat untuk berlibur bersama keluarga and teman."
  }, 

  // --- PINRANG ---
  {
    nama: "Pantai Salopi",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/H4VG1zaistabRMV86",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiSalopi.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiSalopi.png",
      "https://nama-backend-hosting.com/gambar/PantaiSalopi1.png"
    ],
    deskripsiSingkat: "Pantai dengan suasana santai, pasir luas, and pemandangan laut yang indah.",
    deskripsiLengkap: "Pantai Salopi merupakan salah satu destinasi wisata pantai di Kabupaten Pinrang, Sulawesi Selatan. Tempat ini menawarkan suasana pantai yang tenang dengan hamparan pasir luas, pepohonan kelapa yang rindang, and panorama laut yang menenangkan. Pantai ini cocok untuk bersantai bersama keluarga, menikmati sunset, and berfoto di area tepi pantai."
  },
  {
    nama: "Air Terjun Kalijodoh",
    kategori: "Wisata Alam Darat",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/RrLzYZe8eyYpLouS6",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunKaliJodoh.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunKaliJodoh.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunKaliJodoh1.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan suasana hutan hijau and kolam air yang jernih.",
    deskripsiLengkap: "Air Terjun Kali Jodoh merupakan destinasi wisata alam di Kabupaten Pinrang yang menawarkan keindahan air terjun dengan aliran air yang jernih and menyegarkan. Dikelilingi pepohonan hijau and bebatuan alami, tempat ini cocok untuk wisata alam, relaksasi, and menikmati udara segar pegunungan."
  },
  {
    nama: "Rumah Adat Saoraja",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/DKrRyeQeCzyB4rEd6",
    gambar: "https://nama-backend-hosting.com/gambar/RumahAdatSaoraja.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/RumahAdatSaoraja.png",
      "https://nama-backend-hosting.com/gambar/RumahAdatSaoraja1.png"
    ],
    deskripsiSingkat: "Rumah adat khas Pinrang dengan arsitektur tradisional yang megah and bersejarah.",
    deskripsiLengkap: "Rumah Adat Saoraja merupakan salah satu ikon budaya and sejarah di Kabupaten Pinrang, Sulawesi Selatan. Bangunan ini memiliki arsitektur khas Bugis dengan bentuk rumah panggung yang megah and ornamen tradisional yang unik. Selain menjadi simbol budaya daerah, tempat ini juga sering dijadikan lokasi edukasi sejarah and wisata budaya."
  },
  {
    nama: "Waterboom Pinrang",
    kategori: "Wisata Hiburan",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/k7zQ1QLwqc3DHPbM9",
    gambar: "https://nama-backend-hosting.com/gambar/WaterboomPinrang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/WaterboomPinrang.png",
      "https://nama-backend-hosting.com/gambar/WaterboomPinrang1.png"
    ],
    deskripsiSingkat: "Tempat wisata keluarga dengan kolam renang and wahana permainan air yang seru.",
    deskripsiLengkap: "Waterboom Pinrang merupakan salah satu tempat wisata rekreasi keluarga yang populer di Kabupaten Pinrang. Tempat ini menyediakan kolam renang luas, wahana seluncuran air warna-warni, and area bermain anak yang cocok untuk liburan bersama keluarga maupun teman. Dengan suasana yang nyaman and fasilitas lengkap, Waterboom Pinrang menjadi destinasi favorit masyarakat."
  }, 

  // --- SIDRAP ---
  {
    nama: "Taman Wisata Puncak Bila ",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/qeUTx17jQiFmF6uQ6",
    gambar: "https://nama-backend-hosting.com/gambar/PuncakBila.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PuncakBila.png",
      "https://nama-backend-hosting.com/gambar/PuncakBila1.png"
    ],
    deskripsiSingkat: "Destinasi wisata alam dengan danau indah, area camping, and pemandangan hijau yang menenangkan.",
    deskripsiLengkap: "Puncak Bila merupakan salah satu destinasi wisata alam populer di Kabupaten Sidrap yang menawarkan suasana sejuk and pemandangan danau yang indah. Tempat ini memiliki area camping, gazebo untuk bersantai, serta spot foto menarik seperti patung singa ikonik di tepi danau. Dengan suasana alam yang asri and nyaman, Puncak Bila menjadi pilihan favorit wisata keluarga maupun pecinta alam."
  },
  {
    nama: "PLTB Sidrap",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/KxRU7DmMpa1CTF1n8",
    gambar: "https://nama-backend-hosting.com/gambar/KincirAnginRaksasa.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KincirAnginRaksasa.png",
      "https://nama-backend-hosting.com/gambar/KincirAnginRaksasa1.png"
    ],
    deskripsiSingkat: "Kawasan pembangkit listrik tenaga angin dengan panorama perbukitan yang memukau.",
    deskripsiLengkap: "Kincir Angin Raksasa Sidrap merupakan kawasan pembangkit listrik tenaga bayu terbesar yang menjadi ikon wisata modern di Kabupaten Sidrap. Deretan turbin angin raksasa berdiri di atas perbukitan hijau dengan panorama alam yang sangat indah. Tempat ini sering dijadikan lokasi wisata edukasi and spot fotografi karena menghadirkan pemandangan yang unik and menakjubkan."
  },
  {
    nama: "Mesjid Tua Jarae",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/y5qM1i3HxcZmLAWK7",
    gambar: "https://nama-backend-hosting.com/gambar/MesjidTuaJarae.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MesjidTuaJarae.png",
      "https://nama-backend-hosting.com/gambar/MesjidTuaJarae1.png"
    ],
    deskripsiSingkat: "Masjid bersejarah dengan arsitektur tradisional khas Bugis yang masih terjaga.",
    deskripsiLengkap: "Mesjid Tua Jara’e merupakan salah satu bangunan religi bersejarah di Kabupaten Sidrap yang memiliki arsitektur tradisional khas Bugis. Masjid ini menjadi simbol sejarah penyebaran Islam di daerah tersebut and masih digunakan oleh masyarakat hingga sekarang. Dengan bentuk bangunan unik and suasana yang tenang, Mesjid Tua Jara’e menjadi destinasi wisata religi and budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Taman Rekreasi Datae",
    kategori: "Wisata Hiburan",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/fNEG85Q3r5mWMnAW6",
    gambar: "https://nama-backend-hosting.com/gambar/TamanRekreasiDatae.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanRekreasiDatae.png",
      "https://nama-backend-hosting.com/gambar/TamanRekreasiDatae1.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang and wahana permainan air yang menyenangkan.",
    deskripsiLengkap: "Taman Rekreasi Data’e merupakan destinasi wisata keluarga di Kabupaten Sidrap yang menyediakan berbagai fasilitas hiburan and permainan air. Tempat ini memiliki kolam renang untuk anak-anak maupun dewasa, seluncuran air, serta area santai yang nyaman untuk keluarga. Dengan suasana yang segar and fasilitas lengkap, Taman Rekreasi Data’e menjadi salah satu tempat favorit masyarakat untuk berlibur bersama keluarga."
  },

  // --- ENREKANG ---
  {
    nama: "Tebing Mandu Tontonan",
    kategori: "Wisata Alam Darat",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/Fz9NQ2fByrUBP6cf7",
    gambar: "https://nama-backend-hosting.com/gambar/TebingManduTontonan.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TebingManduTontonan.png",
      "https://nama-backend-hosting.com/gambar/TebingManduTontonan1.png"
    ],
    deskripsiSingkat: "Tebing batu megah dengan panorama alam pegunungan yang menakjubkan.",
    deskripsiLengkap: "Tebing Mandu Tontonan merupakan salah satu destinasi wisata alam terkenal di Kabupaten Enrekang yang menawarkan pemandangan tebing batu raksasa dengan suasana pegunungan yang sejuk and asri. Tempat ini menjadi favorit wisatawan untuk menikmati keindahan alam, fotografi, and bersantai menikmati panorama khas pegunungan Enrekang."
  },
  {
    nama: "Dante Pine",
    kategori: "Wisata Alam Darat",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/tZ7XJFgUDVBECwJAA",
    gambar: "https://nama-backend-hosting.com/gambar/DantePine.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DantePine.png",
      "https://nama-backend-hosting.com/gambar/DantePine1.png"
    ],
    deskripsiSingkat: "Tempat wisata dengan spot nongkrong estetik and pemandangan pegunungan yang indah.",
    deskripsiLengkap: "Dante Pine merupakan destinasi wisata alam populer di Kabupaten Enrekang yang menghadirkan suasana sejuk khas pegunungan dengan spot santai yang unik and estetik. Pengunjung dapat menikmati makanan and minuman sambil melihat panorama perbukitan hijau yang memukau. Tempat ini sangat cocok untuk bersantai, berfoto,  dan menikmati suasana alam bersama keluarga maupun teman."
  },
  {
    nama: "Rumah Adat Matakali",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/98qFsMMZgW7F9vji7",
    gambar: "https://nama-backend-hosting.com/gambar/RumahAdatMatakali.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/RumahAdatMatakali.png",
      "https://nama-backend-hosting.com/gambar/RumahAdatMatakali1.png"
    ],
    deskripsiSingkat: "Rumah adat tradisional khas Enrekang dengan arsitektur budaya yang masih terjaga.",
    deskripsiLengkap: "Rumah Adat Matakali merupakan salah satu peninggalan budaya di Kabupaten Enrekang yang menampilkan arsitektur tradisional khas masyarakat setempat. Bangunan rumah panggung ini memiliki bentuk unik dengan nuansa tradisional yang masih dipertahankan hingga sekarang. Tempat ini menjadi simbol budaya and sejarah masyarakat Enrekang yang menarik untuk dipelajari and dikunjungi."
  },
  {
    nama: "Kolam Renang Matua",
    kategori: "Wisata Hiburan",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/8SDS1djNfWhCchNV8",
    gambar: "https://nama-backend-hosting.com/gambar/KolamRenangMatua.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KolamRenangMatua.png",
      "https://nama-backend-hosting.com/gambar/KolamRenangMatua1.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang and wahana permainan air yang seru.",
    deskripsiLengkap: "Kolam Renang Matua merupakan salah satu tempat wisata rekreasi keluarga di Kabupaten Enrekang yang menyediakan berbagai fasilitas kolam renang and wahana permainan air. Dengan suasana yang nyaman serta pemandangan alam perbukitan di sekitarnya, tempat ini cocok untuk liburan bersama keluarga, anak-anak, maupun teman."
  },

  // --- LUWU ---
  {
    nama: "Pantai Ponnori",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/1eQEsnKhK2ys6UQF7",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiPonnori.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiPonnori.png",
      "https://nama-backend-hosting.com/gambar/PantaiPonnori1.png"
    ],
    deskripsiSingkat: "Pantai dengan suasana tenang, air laut jernih, and pemandangan alam tropis yang indah.",
    deskripsiLengkap: "Pantai Ponnori merupakan salah satu destinasi wisata pantai di Kabupaten Luwu yang menawarkan panorama laut yang tenang and suasana alami yang asri. Dikelilingi pepohonan hijau serta perahu nelayan di sekitar pantai, tempat ini cocok untuk bersantai, menikmati angin laut, and menikmati keindahan pesisir bersama keluarga maupun teman."
  },
  {
    nama: "Air Terjun Sarambu Masiang",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/t8QLuV4k4t8UmSqC9",
    gambar: "https://nama-backend-hosting.com/gambar/AirTerjunSarambuMasiang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/AirTerjunSarambuMasiang.png",
      "https://nama-backend-hosting.com/gambar/AirTerjunSarambuMasiang1.png"
    ],
    deskripsiSingkat: "Air terjun bertingkat dengan suasana hutan tropis yang sejuk and alami.",
    deskengkap: "Air Terjun Sarambu Masiang merupakan destinasi wisata alam di Kabupaten Luwu yang terkenal dengan aliran air bertingkat di atas bebatuan besar. Dikelilingi hutan tropis yang hijau and udara yang sejuk, tempat ini menjadi lokasi favorit wisatawan untuk menikmati keindahan alam, bermain air, and berfoto dengan panorama alami yang menawan."
  },
  {
    nama: "Gua Ila Batu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/sq9QWtZAMmWvdWiH7",
    gambar: "https://nama-backend-hosting.com/gambar/GuaIlaBatu.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/GuaIlaBatu.png",
      "https://nama-backend-hosting.com/gambar/GuaIlaBatu1.png"
    ],
    deskripsiSingkat: "Gua alami dengan formasi batu unik and suasana petualangan yang menarik.",
    deskripsiLengkap: "Gua Ila Batu merupakan salah satu wisata alam di Kabupaten Luwu yang menawarkan keindahan gua alami dengan formasi batuan yang unik and eksotis. Suasana di dalam gua memberikan pengalaman petualangan yang menarik bagi para pengunjung, terutama pecinta alam and fotografi. Tempat ini menjadi salah satu destinasi yang cocok untuk eksplorasi and wisata alam."
  },
  {
    nama: "Taman Hijau Andi Benni",
    kategori: "Wisata Hiburan",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/2nkySWbDn4miJAGH7",
    gambar: "https://nama-backend-hosting.com/gambar/TamanHijauAndiBenni.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanHijauAndiBenni.png",
      "https://nama-backend-hosting.com/gambar/TamanHijauAndiBenni1.png"
    ],
    deskripsiSingkat: "Taman wisata dengan jembatan warna-warni and suasana alam yang menyegarkan.",
    deskripsiLengkap: "Taman Hijau Andi Benni merupakan salah satu tempat wisata rekreasi di Kabupaten Luwu yang terkenal dengan jembatan kayu warna-warni di tengah hamparan hijau. Tempat ini menjadi favorit masyarakat untuk bersantai, berfoto,  dan menikmati suasana alam yang asri. Dengan desain yang unik and penuh warna, Taman Hijau Andi Benni cocok dijadikan destinasi wisata keluarga maupun tempat rekreasi bersama teman."
  },

  // --- LUWU UTARA ---
  {
    nama: "Pantai Seta Seta",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/DUnAurqDqDfQgfJe6",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiSetaSeta.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiSetaSeta.png",
      "https://nama-backend-hosting.com/gambar/PantaiSetaSeta1.png"
    ],
    deskripsiSingkat: "Pantai indah dengan air laut biru jernih and panorama pulau yang memukau.",
    deskripsiLengkap: "Pantai Seta-Seta merupakan salah satu destinasi wisata pantai di Kabupaten Luwu Utara yang menawarkan pemandangan laut yang sangat indah dengan air berwarna biru jernih. Dikelilingi pepohonan hijau and panorama pegunungan di kejauhan, tempat ini cocok untuk bersantai, menikmati suasana pantai, serta menjadi lokasi favorit untuk fotografi and rekreasi keluarga."
  },
  {
    nama: "Permandian Alam Tamboke",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/kEW1Hvnoy4YTAHsn9",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianAlamTamboke.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianAlamTamboke.png",
      "https://nama-backend-hosting.com/gambar/PermandianAlamTamboke1.png"
    ],
    deskripsiSingkat: "Permandian alami dengan aliran air jernih and suasana pegunungan yang sejuk.",
    deskripsiLengkap: "Permandian Alam Tamboke merupakan tempat wisata alam di Kabupaten Luwu Utara yang menawarkan suasana asri dengan aliran air yang jernih and segar. Area permandian ini dikelilingi pepohonan hijau and panorama alam pegunungan sehingga memberikan suasana yang nyaman untuk bersantai and berlibur bersama keluarga."
  },
  {
    nama: "Makam Datuk Sulaiman Pattimang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/8KceacAdTgVG84daA",
    gambar: "https://nama-backend-hosting.com/gambar/MakamDatukSulaimanPattimang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MakamDatukSulaimanPattimang.png",
      "https://nama-backend-hosting.com/gambar/MakamDatukSulaimanPattimang1.png"
    ],
    deskripsiSingkat: "Situs religi bersejarah yang menjadi tempat ziarah masyarakat.",
    deskripsiLengkap: "Makam Datuk Sulaiman atau Pattimang merupakan salah satu situs religi and sejarah penting di Kabupaten Luwu Utara. Tempat ini sering dikunjungi masyarakat untuk berziarah and mengenang perjuangan tokoh penyebar agama Islam di daerah tersebut. Dengan suasana yang tenang and sakral, lokasi ini menjadi destinasi wisata religi yang memiliki nilai sejarah tinggi."
  },
  {
    nama: "Permandian Air Panas Pincara",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/KZg1diM66gKhYpVFA",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianAirPanasPincara.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasPincara.png",
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasPincara1.png"
    ],
    deskripsiSingkat: "Pemandian air panas alami dengan suasana alam yang sejuk and menenangkan.",
    deskripsiLengkap: "Permandian Air Panas Pincara merupakan salah satu destinasi wisata alam populer di Kabupaten Luwu Utara. Tempat ini menawarkan kolam air panas alami yang dipercaya dapat membantu relaksasi tubuh. Dikelilingi pepohonan hijau and suasana alam yang tenang, lokasi ini cocok untuk beristirahat and menikmati wisata bersama keluarga maupun teman."
  },

  // --- LUWU TIMUR ---
  {
    nama: "Pulau Bulu Poloe",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/jBJyTPJGrqdUgRCbA",
    gambar: "https://nama-backend-hosting.com/gambar/PulauBuluPoloe.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauBuluPoloe.png",
      "https://nama-backend-hosting.com/gambar/PulauBuluPoloe1.png"
    ],
    deskripsiSingkat: "Pulau eksotis dengan laut biru jernih and panorama alam tropis yang memukau.",
    deskripsiLengkap: "Pulau Bulu’Poloe merupakan salah satu destinasi wisata bahari di Kabupaten Luwu Timur yang menawarkan pemandangan laut biru jernih and hamparan pasir putih yang indah. Pulau ini dikelilingi hutan hijau tropis and cocok untuk wisata alam, fotografi, serta menikmati suasana pantai yang tenang and alami."
  },
  {
    nama: "Danau Towuti",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/JEA6sPp3ueuLWeAF8",
    gambar: "https://nama-backend-hosting.com/gambar/DanauTowuti.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauTowuti.png",
      "https://nama-backend-hosting.com/gambar/DanauTowuti1.png"
    ],
    deskripsiSingkat: "Danau alami dengan air tenang and panorama hijau yang menyejukkan.",
    deskripsiLengkap: "Danau Towuti merupakan salah satu danau terbesar di Sulawesi yang berada di Kabupaten Luwu Timur. Danau ini memiliki air yang jernih dengan panorama alam hijau di sekelilingnya. Suasana yang tenang menjadikan Danau Towuti cocok untuk bersantai, memancing, wisata perahu, maupun menikmati keindahan alam bersama keluarga."
  },
  {
    nama: "Danau Matano",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/rZ4hz8Ezhcs7k8M3A",
    gambar: "https://nama-backend-hosting.com/gambar/DanauMatano.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauMatano.png",
      "https://nama-backend-hosting.com/gambar/DanauMatano1.png"
    ],
    deskripsiSingkat: "Danau terdalam dengan panorama pulau kecil and air biru yang mempesona.",
    deskripsiLengkap: "Danau Matano merupakan salah satu danau terdalam di Indonesia yang terletak di Kabupaten Luwu Timur. Danau ini terkenal dengan airnya yang sangat jernih and pemandangan alam yang memukau. Dikelilingi pepohonan hijau and pulau-pulau kecil, Danau Matano menjadi destinasi favorit wisatawan untuk menikmati keindahan alam and suasana yang damai."
  },
  {
    nama: "Permandian Bukit Kasih",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/7tZntaZdDTJJKiFs9",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianBukitKasih.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianBukitKasih.png",
      "https://nama-backend-hosting.com/gambar/PermandianBukitKasih1.png"
    ],
    deskripsiSingkat: "Permandian dengan kolam luas and suasana pegunungan yang sejuk serta nyaman.",
    deskripsiLengkap: "Permandian Bukit Kasih merupakan salah satu destinasi wisata rekreasi di Kabupaten Luwu Timur yang menawarkan kolam pemandian luas dengan air yang jernih and suasana alam yang menenangkan. Dikelilingi pemandangan hijau and udara segar khas pegunungan, tempat ini cocok untuk bersantai, berenang, and menikmati liburan bersama keluarga maupun teman."
  },

  // --- TORAJA UTARA ---
  {
    nama: "Danau Limbong",
    kategori: "Wisata Alam Darat",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/bTnzR4Fp3kTJer5T8",
    gambar: "https://nama-backend-hosting.com/gambar/DanauLimbong.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/DanauLimbong.png",
      "https://nama-backend-hosting.com/gambar/DanauLimbong1.png"
    ],
    deskripsiSingkat: "Danau alami dengan air hijau jernih and panorama tebing batu yang memukau.",
    deskripsiLengkap: "Danau Limbong merupakan salah satu destinasi wisata alam di Toraja Utara yang terkenal dengan airnya yang berwarna hijau alami and suasana yang sangat tenang. Dikelilingi pepohonan lebat serta tebing batu yang eksotis, tempat ini cocok untuk menikmati keindahan alam, bersantai, and fotografi."
  },
  {
    nama: "Londa Ancient Graveyard",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/pDWvx7UpLSC4Cvwy5",
    gambar: "https://nama-backend-hosting.com/gambar/Londa.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/Londa.png",
      "https://nama-backend-hosting.com/gambar/Londa1.png"
    ],
    deskripsiSingkat: "Wisata gua pemakaman tradisional khas Toraja yang penuh nilai sejarah.",
    deskripsiLengkap: "Londa merupakan salah satu situs budaya and sejarah terkenal di Toraja Utara yang menampilkan kompleks pemakaman tradisional di dalam gua batu. Tempat ini memiliki peti mati khas Toraja serta patung tau-tau yang menjadi simbol budaya masyarakat Toraja. Londa menjadi destinasi wisata budaya yang menarik bagi wisatawan lokal maupun mancanegara."
  },
  {
    nama: "Museum Ne Gandeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/vSv7eZVD7goZu1fj8",
    gambar: "https://nama-backend-hosting.com/gambar/MuseumNeGandeng.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/MuseumNeGandeng.png",
      "https://nama-backend-hosting.com/gambar/MuseumNeGandeng1.png"
    ],
    deskripsiSingkat: "Museum budaya Toraja dengan rumah adat khas and peninggalan sejarah.",
    deskripsiLengkap: "Museum Ne’Gandeng merupakan salah satu tempat wisata budaya di Toraja Utara yang memperkenalkan sejarah, adat, and tradisi masyarakat Toraja. Dengan latar rumah adat Tongkonan yang khas and koleksi peninggalan budaya, museum ini menjadi tempat edukasi sekaligus wisata budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Kolam Renang Alam Tilanga",
    kategori: "Wisata Alam Darat",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/es7iLDgXMi7mGZj96",
    gambar: "https://nama-backend-hosting.com/gambar/KolamRenangAlamTilanga.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/KolamRenangAlamTilanga.png",
      "https://nama-backend-hosting.com/gambar/KolamRenangAlamTilanga1.png"
    ],
    deskripsiSingkat: "Kolam alami dengan air biru jernih di tengah bebatuan and alam hijau.",
    deskripsiLengkap: "Kolam Renang Alam Tilanga merupakan salah satu wisata alam populer di Toraja Utara yang menawarkan air alami berwarna biru jernih dengan suasana yang sejuk and asri. Dikelilingi bebatuan alam and pepohonan hijau, tempat ini menjadi lokasi favorit wisatawan untuk berenang, bersantai, and menikmati keindahan alam Toraja."
  },

  // --- TANA TORAJA ---
  {
    nama: "Buntu Burake",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/hBEu2rS5frc4Z3166",
    gambar: "https://nama-backend-hosting.com/gambar/BuntuBurake.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/BuntuBurake.png",
      "https://nama-backend-hosting.com/gambar/BuntuBurake1.png"
    ],
    deskripsiSingkat: "Destinasi wisata pegunungan dengan patung Yesus raksasa and panorama alam Toraja.",
    deskripsiLengkap: "Buntu Burake merupakan salah satu destinasi wisata terkenal di Tana Toraja yang menghadirkan patung Yesus raksasa di atas pegunungan. Tempat ini menawarkan panorama alam yang sangat indah dengan pemandangan perbukitan and pegunungan khas Toraja. Selain menjadi wisata religi, Buntu Burake juga menjadi lokasi favorit wisatawan untuk menikmati udara sejuk and berfoto."
  },
  {
    nama: "Pohon Kuburan Bayi Kambira",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/pg41XdWfQ49TSfa58",
    gambar: "https://nama-backend-hosting.com/gambar/PohonKuburanBayiKambira.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PohonKuburanBayiKambira.png",
      "https://nama-backend-hosting.com/gambar/PohonKuburanBayiKambira1.png"
    ],
    deskripsiSingkat: "Situs budaya unik berupa pemakaman bayi di dalam batang pohon besar.",
    deskripsiLengkap: "Pohon Kuburan Bayi Kambira merupakan salah satu situs budaya and tradisi unik masyarakat Toraja. Bayi yang meninggal sebelum tumbuh gigi dimakamkan di dalam batang pohon besar sebagai simbol kembali ke alam. Tempat ini menjadi wisata budaya yang menarik karena memiliki nilai sejarah and tradisi adat yang masih dijaga hingga sekarang."
  },
  {
    nama: "Tebing Romantis Ollon",
    kategori: "Wisata Alam Darat",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/m4P4YXYt4M77jkCL8",
    gambar: "https://nama-backend-hosting.com/gambar/TebingRomantisOllon.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TebingRomantisOllon.png",
      "https://nama-backend-hosting.com/gambar/TebingRomantisOllon1.png"
    ],
    deskripsiSingkat: "Perbukitan hijau dengan panorama pegunungan yang indah and romantis.",
    deskripsiLengkap: "Tebing Romantis Ollon merupakan salah satu destinasi wisata alam populer di Tana Toraja yang terkenal dengan hamparan bukit hijau and panorama pegunungan yang menakjubkan. Suasana yang sejuk and pemandangan luas menjadikan tempat ini cocok untuk bersantai, berkemah, fotografi, and menikmati keindahan alam Toraja."
  },
  {
    nama: "Permandian Air Panas Makula",
    kategori: "Wisata Alam Darat",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/cSG5vhTyuMeaGFSw8",
    gambar: "https://nama-backend-hosting.com/gambar/PermandianAirPanasMakula.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasMakula.png",
      "https://nama-backend-hosting.com/gambar/PermandianAirPanasMakula1.png"
    ],
    deskripsiSingkat: "Permandian air panas alami dengan suasana asri and udara yang sejuk.",
    deskripsiLengkap: "Permandian Air Panas Makula merupakan salah satu wisata alam di Tana Toraja yang menawarkan kolam air panas alami dengan kandungan belerang. Tempat ini cocok untuk relaksasi and menikmati suasana alam yang tenang. Dikelilingi pepohonan hijau and udara segar, lokasi ini menjadi favorit wisatawan untuk beristirahat bersama keluarga."
  },

  // --- KEPULAUAN SELAYAR ---
  {
    nama: "Taman Nasional Bonerate",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/1GBdbf6fAkeY9xr87",
    gambar: "https://nama-backend-hosting.com/gambar/TamanNasionalBonerate.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/TamanNasionalBonerate.png",
      "https://nama-backend-hosting.com/gambar/TamanNasionalBonerate1.png"
    ],
    deskripsiSingkat: "Kawasan wisata bahari dengan pulau tropis, pasir putih, and laut biru jernih.",
    deskripsiLengkap: "Taman Nasional Bonerate merupakan salah satu destinasi wisata bahari terkenal di Kepulauan Selayar yang memiliki keindahan laut luar biasa. Dengan hamparan pasir putih, air laut jernih berwarna biru toska, serta terumbu karang yang indah, tempat ini menjadi lokasi favorit wisatawan untuk snorkeling, diving, and menikmati panorama alam tropis."
  },
  {
    nama: "Pantai Liang Kareta",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/QZKJ9gGP5AimFuE3A",
    gambar: "https://nama-backend-hosting.com/gambar/PantaiLiangKareta.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PantaiLiangKareta.png",
      "https://nama-backend-hosting.com/gambar/PantaiLiangKareta1.png"
    ],
    deskripsiSingkat: "Pantai alami dengan air laut hijau jernih and suasana yang tenang.",
    deskripsiLengkap: "Pantai Liang Kareta merupakan salah satu wisata pantai indah di Kepulauan Selayar yang menawarkan air laut jernih and suasana alami yang masih asri. Pantai ini dikelilingi bebatuan karang serta pepohonan hijau yang memberikan pemandangan eksotis and cocok untuk bersantai maupun menikmati wisata alam."
  },
  {
    nama: "Perkampungan Tua Bitombang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/gtBJAfJFSzyuPbZs8",
    gambar: "https://nama-backend-hosting.com/gambar/PerkampunganTuaBitombang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PerkampunganTuaBitombang.png",
      "https://nama-backend-hosting.com/gambar/PerkampunganTuaBitombang1.png"
    ],
    deskripsiSingkat: "Perkampungan tradisional dengan rumah panggung tinggi khas budaya lokal.",
    deskripsiLengkap: "Perkampungan Tua Bitombang merupakan salah satu destinasi wisata budaya di Kepulauan Selayar yang terkenal dengan rumah adat panggung tinggi yang unik and bersejarah. Rumah-rumah tradisional ini dibangun dengan arsitektur khas masyarakat setempat and dikelilingi suasana alam hijau yang masih alami."
  },
  {
    nama: "Pulau Bahuluang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/X1GiQsXUtnq3jqog8",
    gambar: "https://nama-backend-hosting.com/gambar/PulauBahuluang.png",
    galeri: [
      "https://nama-backend-hosting.com/gambar/PulauBahuluang.png",
      "https://nama-backend-hosting.com/gambar/PulauBahuluang1.png"
    ],
    deskripsiSingkat: "Pulau pasir putih eksotis dengan panorama laut biru yang mempesona.",
    deskripsiLengkap: "Pulau Bahuluang merupakan destinasi wisata bahari di Kepulauan Selayar yang terkenal dengan hamparan pasir putih panjang di tengah laut biru jernih. Pulau ini menawarkan pemandangan alam yang sangat indah and menjadi lokasi favorit wisatawan untuk berfoto, menikmati pantai, serta menikmati suasana tropis yang tenang."
  }
];

const seedDestinasi = async () => {
  try {
    await mongoose.connect(mongoURI, {
      tls: true,
      tlsAllowInvalidCertificates: true
    });
    console.log("MongoDB terkoneksi");

    for (const item of destinasiData) {
      await Destinasi.findOneAndUpdate(
        { nama: item.nama, kabupaten: item.kabupaten },
        item,
        {
          upsert: true,
          returnDocument: "after"
        }
      );
    }

    console.log(`${destinasiData.length} destinasi berhasil dimasukkan/diperbarui`);
    process.exit();
  } catch (error) {
    console.error("Gagal seed destinasi:", error);
    process.exit(1);
  }
};

seedDestinasi();