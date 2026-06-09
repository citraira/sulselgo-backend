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
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028871/sulselgo/e6ymkzot1fi2pczo6mcy.jpg",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028871/sulselgo/e6ymkzot1fi2pczo6mcy.jpg",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028869/sulselgo/weuu3zyn7hzduih9ohjs.png"
    ],
    deskripsiSingkat: "Pulau cantik di Makassar dengan pasir putih dan air laut jernih yang cocok untuk snorkeling.",
    deskripsiLengkap: "Pulau Samalona merupakan salah satu destinasi wisata bahari terkenal di Kota Makassar, Sulawesi Selatan. Pulau ini menawarkan pemandangan laut yang jernih, pasir putih yang bersih, serta keindahan bawah laut yang sangat cocok untuk aktivitas snorkeling dan diving. Wisatawan dapat menikmati suasana tenang, berfoto di tepi pantai, hingga menikmati sunset yang indah. Pulau ini juga mudah dijangkau menggunakan perahu dari Pantai Losari atau Dermaga Kayu Bangkoa."
  },
  {
    nama: "Pantai Akkarena",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/wEbjnKcvRRHcfFCDA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028145/sulselgo/mymlylrtnxietznsmqks.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028145/sulselgo/mymlylrtnxietznsmqks.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028158/sulselgo/g0hhtn2eqxwgvmpzunyl.png"
    ],
    deskripsiSingkat: "Pantai populer di Makassar dengan pemandangan sunset indah, suasana santai, dan spot foto menarik.",
    deskripsiLengkap: "Pantai Akkarena merupakan salah satu destinasi wisata favorit di Kota Makassar, Sulawesi Selatan. Pantai ini terkenal dengan suasana santai, deretan pohon kelapa yang indah, serta pemandangan sunset yang memukau. Wisatawan dapat menikmati berjalan di tepi pantai, bersantai di gazebo, berfoto di berbagai spot menarik, hingga menikmati kuliner khas di sekitar area pantai. Pantai Akkarena juga sering menjadi tempat berkumpul keluarga maupun anak muda karena fasilitasnya yang cukup lengkap and lokasinya yang mudah dijangkau dari pusat Kota Makassar."
  },
  {
    nama: "Benteng Rotterdam",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/YNxTEEaJVJzxx6cC6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027154/sulselgo/uypnaqx8ioua9kbbcqo4.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027154/sulselgo/uypnaqx8ioua9kbbcqo4.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027167/sulselgo/h604zhjhxkzsft6dwsjo.png"
    ],
    deskripsiSingkat: "Benteng bersejarah peninggalan Kerajaan Gowa dan Belanda yang menjadi ikon wisata budaya di Makassar.",
    deskripsiLengkap: "Benteng Rotterdam merupakan salah satu destinasi wisata sejarah paling terkenal di Kota Makassar, Sulawesi Selatan. Benteng ini awalnya dibangun oleh Kerajaan Gowa pada abad ke-17 dan kemudian dikuasai oleh Belanda yang mengubah bentuknya menyerupai penyu. Kawasan benteng memiliki bangunan khas kolonial yang masih terawat dengan baik dan kini difungsikan sebagai museum serta pusat edukasi sejarah dan budaya. Wisatawan dapat menikmati suasana klasik, mempelajari sejarah Makassar, berfoto di area benteng, hingga menikmati berbagai kegiatan seni dan budaya yang sering diadakan di kawasan ini."
  },
  {
    nama: "Bugis Waterpark Adventure",
    kategori: "Wisata Hiburan",
    kabupaten: "Makassar",
    lokasi: "https://maps.app.goo.gl/aqyAT7EzvX72BT87A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027209/sulselgo/zfychzq7ap6ogdkn26fj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027209/sulselgo/zfychzq7ap6ogdkn26fj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027224/sulselgo/mnm2xrgs9pjom94oeao9.png"
    ],
    deskripsiSingkat: "Waterpark populer di Makassar dengan berbagai wahana air seru dan suasana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Bugis Waterpark Adventure merupakan salah satu taman rekreasi air terbesar dan paling terkenal di Kota Makassar, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana air menarik seperti seluncuran, kolam ombak, lazy river, dan area bermain anak yang cocok untuk liburan keluarga. Dengan suasana yang asri and fasilitas yang lengkap, pengunjung dapat menikmati aktivitas bermain air, bersantai bersama keluarga, hingga menikmati berbagai spot foto menarik di area waterpark. Lokasinya yang mudah dijangkau menjadikan Bugis Waterpark Adventure sebagai destinasi favorit wisatawan lokal maupun luar daerah."
  },

  // --- PAREPARE ---
  {
    nama: "Pantai Paputo",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/neQGPTwbZiLKEeXY7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028255/sulselgo/z0ce8m9enwztaiv6t8p4.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028255/sulselgo/z0ce8m9enwztaiv6t8p4.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028266/sulselgo/mtuibmbllwcez05saxx1.png"
    ],
    deskripsiSingkat: "Pantai indah di Parepare dengan panorama laut, suasana santai, dan pemandangan sunset yang memukau.",
    deskripsiLengkap: "Pantai Poputo merupakan salah satu destinasi wisata pantai yang populer di Kota Parepare, Sulawesi Selatan. Pantai ini menawarkan suasana yang tenang dengan pemandangan laut yang luas serta panorama matahari terbenam yang sangat indah. Wisatawan dapat menikmati angin pantai, bersantai di area tepi laut, berfoto di berbagai spot menarik, hingga menikmati kuliner khas yang tersedia di sekitar kawasan wisata. Dengan suasana yang nyaman dan lokasi yang mudah dijangkau, Pantai Poputo menjadi tempat favorit untuk rekreasi bersama keluarga maupun teman."
  },
  {
    nama: "Kebun Raya Jompie",
    kategori: "Wisata Alam Darat",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/sfzMrnaZu9bRSsoo8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027760/sulselgo/pg5kruzsoeva5h1wl6dk.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027760/sulselgo/pg5kruzsoeva5h1wl6dk.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027775/sulselgo/rlvbivq2hhjdrux8disi.png"
    ],
    deskripsiSingkat: "Wisata alam hijau di Parepare dengan suasana sejuk, taman edukasi, dan spot foto menarik.",
    deskripsiLengkap: "Kebun Raya Jompie merupakan salah satu destinasi wisata alam dan edukasi yang terkenal di Kota Parepare, Sulawesi Selatan. Tempat ini menawarkan suasana yang asri dengan pepohonan hijau, udara sejuk, dan berbagai koleksi tanaman yang cocok untuk wisata keluarga maupun edukasi. Pengunjung dapat berjalan santai menikmati taman, berfoto di berbagai spot menarik, hingga bersantai menikmati suasana alam yang tenang. Kebun Raya Jompie juga menjadi tempat favorit masyarakat untuk rekreasi, olahraga, dan menikmati keindahan alam di tengah kota."
  },
  {
    nama: "Museum BJ Habibie",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/fc7oeN5SbaTSaSWx6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028056/sulselgo/dmtnw8h4q6kgiprximyj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028056/sulselgo/dmtnw8h4q6kgiprximyj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028070/sulselgo/jqjkagwxfwqdsyqkaefv.png"
    ],
    deskripsiSingkat: "Museum edukasi di Parepare yang mengenang perjalanan hidup dan karya Presiden BJ Habibie.",
    deskripsiLengkap: "Museum BJ Habibie merupakan salah satu destinasi wisata sejarah and edukasi terkenal di Kota Parepare, Sulawesi Selatan. Museum ini didedikasikan untuk mengenang sosok Presiden ke-3 Republik Indonesia, Bacharuddin Jusuf Habibie, yang lahir di Parepare. Di dalam museum, pengunjung dapat melihat berbagai koleksi foto, kutipan inspiratif, dokumentasi perjalanan hidup, hingga informasi tentang kontribusi BJ Habibie dalam bidang teknologi and pendidikan. Tempat ini cocok dijadikan wisata edukasi bagi pelajar, keluarga, maupun wisatawan yang ingin mengenal lebih dekat sejarah dan prestasi BJ Habibie."
  },
  {
    nama: "Water boom Parepare",
    kategori: "Wisata Hiburan",
    kabupaten: "Parepare",
    lokasi: "https://maps.app.goo.gl/5UapMJAdmDGfe855A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029524/sulselgo/pqqhbfl09fucdynmkujk.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029524/sulselgo/pqqhbfl09fucdynmkujk.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029535/sulselgo/tmq7gpmnowbcic6ktdf9.png"
    ],
    deskripsiSingkat: "Tempat wisata air favorit di Parepare dengan kolam renang dan wahana seru untuk keluarga.",
    deskripsiLengkap: "Waterboom Parepare merupakan salah satu destinasi wisata rekreasi air yang populer di Kota Parepare, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai fasilitas kolam renang dan wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Pengunjung dapat menikmati suasana santai sambil berenang, bermain air, dan bersantai bersama keluarga. Dengan area yang nyaman dan fasilitas yang cukup lengkap, Waterboom Parepare menjadi pilihan favorit masyarakat untuk menghabiskan waktu liburan dan akhir pekan."
  },

  // --- PALOPO ---
  {
    nama: "Pulau Libukang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/JUt45p9Bx49m3khg9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028844/sulselgo/z27zgzvep7nudyszs0tl.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028844/sulselgo/z27zgzvep7nudyszs0tl.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028858/sulselgo/hfrzom4x1rak13qed8si.png"
    ],
    deskripsiSingkat: "Pulau cantik di Palopo dengan pasir putih, air laut jernih, dan suasana alam yang tenang.",
    deskripsiLengkap: "Pulau Libukang merupakan salah satu destinasi wisata bahari yang populer di Kota Palopo, Sulawesi Selatan. Pulau ini menawarkan keindahan pantai dengan pasir putih bersih, air laut yang jernih, serta panorama alam tropis yang memukau. Wisatawan dapat menikmati aktivitas snorkeling, berenang, memancing, maupun bersantai menikmati suasana pulau yang tenang. Dengan pemandangan laut biru dan udara yang segar, Pulau Libukang menjadi tempat favorit untuk rekreasi bersama keluarga maupun teman."
  },
  {
    nama: "Bukit Kambo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/zH2zwrVfUbsef4rv8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027239/sulselgo/sxr1z7ae6jbvo3mzujvu.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027239/sulselgo/sxr1z7ae6jbvo3mzujvu.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027254/sulselgo/be5e0xonfheshvolzhhz.png"
    ],
    deskripsiSingkat: "Destinasi wisata perbukitan di Palopo dengan panorama alam indah dan suasana sejuk yang menenangkan.",
    deskripsiLengkap: "Bukit Kambo merupakan salah satu destinasi wisata alam terkenal di Kota Palopo, Sulawesi Selatan. Tempat ini menawarkan pemandangan perbukitan hijau, udara yang sejuk, serta panorama Kota Palopo dari ketinggian yang sangat memukau. Wisatawan dapat menikmati suasana santai, berfoto di berbagai spot menarik, hingga menikmati penginapan dan fasilitas rekreasi yang tersedia di kawasan wisata. Dengan suasana alam yang tenang dan pemandangan yang indah, Bukit Kambo menjadi tempat favorit untuk berlibur bersama keluarga maupun teman."
  },
  {
    nama: "Masjid Jami Tua Palopo",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/9ECLDh8j81tEUhxu7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028002/sulselgo/fttxpsmnyhsocvuagqt3.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028002/sulselgo/fttxpsmnyhsocvuagqt3.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028013/sulselgo/lmrmigbecakyl0nl7osd.png"
    ],
    deskripsiSingkat: "Masjid bersejarah di Palopo dengan arsitektur tradisional dan nilai budaya yang tinggi.",
    deskripsiLengkap: "Masjid Jami Tua Palopo merupakan salah satu masjid tertua dan bersejarah di Sulawesi Selatan yang berada di Kota Palopo. Masjid ini dikenal with arsitektur tradisional khas Nusantara yang unik serta menjadi simbol penyebaran Islam di wilayah Luwu. Bangunan masjid yang masih terawat hingga sekarang menjadikannya sebagai salah satu cagar budaya penting di Palopo. Wisatawan dapat menikmati suasana religius, mempelajari sejarah Islam di Tanah Luwu, serta melihat keindahan arsitektur klasik yang menjadi daya tarik utama masjid ini."
  },
  {
    nama: "Agrowisata Waterpark Palopo",
    kategori: "Wisata Hiburan",
    kabupaten: "Palopo",
    lokasi: "https://maps.app.goo.gl/Hx2VhQhSohfpf5Bz9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027818/sulselgo/wlhs9xesby1dv2wbr0pq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027818/sulselgo/wlhs9xesby1dv2wbr0pq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026801/sulselgo/afewepwhg4rztypw52rr.png"
    ],
    deskripsiSingkat: "Tempat wisata air di Palopo dengan berbagai wahana seru dan suasana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Agrowisata Waterpark Palopo merupakan salah satu destinasi wisata rekreasi air populer di Kota Palopo, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai fasilitas kolam renang, seluncuran air, dan area bermain yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang nyaman dan area yang luas, pengunjung dapat menikmati wilayah liburan bersama keluarga sambil bermain air dan bersantai. Selain wahana air yang menarik, kawasan ini juga memiliki suasana hijau dan asri yang membuat wisatawan merasa nyaman selama berkunjung."
  },

  // --- GOWA ---
  {
    nama: "Air Terjun Cinta",
    kategori: "Wisata Alam Darat",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/qUVmMpvTNkKKAbhM8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026903/sulselgo/hllabknvzdf66hm6dytf.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026903/sulselgo/hllabknvzdf66hm6dytf.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026917/sulselgo/ezlt3ktdyfxvqbymblz2.png"
    ],
    deskripsiSingkat: "Air terjun alami di Gowa dengan kolam jernih dan suasana hutan yang sejuk serta menenangkan.",
    deskripsiLengkap: "Air Terjun Cinta merupakan salah satu destinasi wisata alam yang populer di Kabupaten Gowa, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun dengan kolam alami yang jernih, dikelilingi bebatuan besar dan pepohonan hijau yang asri. Suasana alam yang tenang dan udara yang sejuk menjadikan tempat ini cocok untuk bersantai, berenang, maupun menikmati keindahan alam bersama keluarga dan teman. Air Terjun Cinta juga menjadi spot favorit wisatawan untuk berfoto karena panorama alamnya yang unik dan memukau."
  },
  {
    nama: "Danau Tanralili",
    kategori: "Wisata Alam Darat",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/jAgrkY8fnZhszMAWA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027420/sulselgo/u2edx8nwxnnqunvitqs1.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027420/sulselgo/u2edx8nwxnnqunvitqs1.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027435/sulselgo/whymbeqhpdgto8zprdf0.png"
    ],
    deskripsiSingkat: "Danau indah di kawasan pegunungan Gowa dengan panorama alam yang sejuk dan menenangkan.",
    deskripsiLengkap: "Danau Tanralili merupakan salah satu destinasi wisata alam terkenal di Kabupaten Gowa, Sulawesi Selatan. Danau ini berada di kawasan pegunungan dengan pemandangan alam yang sangat indah, dikelilingi perbukitan hijau dan udara yang sejuk. Air danaunya yang jernih serta suasana yang tenang menjadikan tempat ini cocok untuk camping, hiking, fotografi, maupun bersantai menikmati alam. Danau Tanralili juga menjadi favorit para pendaki dan pecinta alam karena menawarkan pengalaman wisata alam yang asri dan memukau."
  },
  {
    nama: "Makam Sultan Hasanuddin",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/SaZ3Q69SzEyWPVjk6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027977/sulselgo/s3crduvdipo9mn4zxemr.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027977/sulselgo/s3crduvdipo9mn4zxemr.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027991/sulselgo/pnj0qvthtn9qzq0tftyb.png"
    ],
    deskripsiSingkat: "Kompleks makam bersejarah Sultan Hasanuddin dan raja-raja Gowa dengan arsitektur khas kerajaan.",
    deskripsiLengkap: "Makam Sultan Hasanuddin merupakan salah satu situs sejarah penting di Kabupaten Gowa, Sulawesi Selatan. Kompleks makam ini menjadi tempat peristirahatan Sultan Hasanuddin serta beberapa raja-raja Kerajaan Gowa lainnya. Bangunan makam memiliki arsitektur batu khas kerajaan dengan nilai sejarah and budaya yang tinggi. Wisatawan dapat mempelajari sejarah perjuangan Sultan Hasanuddin yang dikenal sebagai pahlawan nasional Indonesia sekaligus menikmati suasana kawasan bersejarah yang masih terawat dengan baik. Tempat ini juga sering dikunjungi sebagai wisata edukasi dan religi."
  },
  {
    nama: "Dewi Sri Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Gowa",
    lokasi: "https://maps.app.goo.gl/omDfu1WL2cyVJony7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027537/sulselgo/x7vt0rhpzhatyfziflw3.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027537/sulselgo/x7vt0rhpzhatyfziflw3.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027550/sulselgo/qan9dpyjdouzdupf4rvp.png"
    ],
    deskripsiSingkat: "Waterpark modern di Gowa dengan berbagai wahana air seru dan fasilitas rekreasi keluarga.",
    deskripsiLengkap: "Dewi Sri Waterpark merupakan salah satu destinasi wisata rekreasi air populer di Kabupaten Gowa, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air seperti kolam renang, seluncuran, dan area bermain anak yang cocok untuk liburan keluarga. Dengan fasilitas yang lengkap dan area yang nyaman, pengunjung dapat menikmati suasana santai sambil bermain air bersama keluarga maupun teman. Dewi Sri Waterpark juga memiliki desain modern dengan area yang luas sehingga menjadi salah satu tempat favorit masyarakat untuk berlibur dan menghabiskan akhir pekan."
  },

  // --- MAROS ---
  {
    nama: "Kampoeng Karst Rammang Rammang",
    kategori: "Wisata Alam Darat",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/LRifUEGn6xGzZKJD8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027705/sulselgo/qap8obrgxdjaarjzv41p.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027705/sulselgo/qap8obrgxdjaarjzv41p.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027718/sulselgo/srnritixpesqxaugvm2m.png"
    ],
    deskripsiSingkat: "Kawasan wisata alam di Maros dengan sungai indah, perahu tradisional, dan pegunungan karst yang memukau.",
    deskripsiLengkap: "Wisata Kampung Rammang-Rammang merupakan salah satu destinasi wisata alam paling terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini dikenal dengan pemandangan pegunungan karst yang megah, sungai yang tenang, serta suasana pedesaan yang asri. Wisatawan dapat menikmati perjalanan menggunakan perahu tradisional menyusuri sungai sambil menikmati panorama alam yang indah. Kawasan ini juga menjadi salah satu kawasan karst terbesar di dunia dan sangat cocok untuk fotografi, rekreasi keluarga, maupun wisata alam."
  },
  {
    nama: "Air Terjun Bantimurung",
    kategori: "Wisata Alam Darat",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/he5wp3RUEfGhkJyT8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026846/sulselgo/fijtvsjuavcafehqbugt.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026846/sulselgo/fijtvsjuavcafehqbugt.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026860/sulselgo/da6w80nobikffvc4qylh.png"
    ],
    deskripsiSingkat: "Air terjun terkenal di Maros dengan kolam alami jernih and suasana hutan tropis yang sejuk.",
    deskripsiLengkap: "Air Terjun Bantimurung merupakan salah satu destinasi wisata alam paling terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun yang mengalir di antara bebatuan alami dengan suasana hutan tropis yang asri and sejuk. Wisatawan dapat menikmati pemandangan alam, bermain air di kolam alami, hingga bersantai bersama keluarga. Kawasan Bantimurung juga dikenal sebagai habitat kupu-kupu dan sering dijuluki sebagai Kingdom of Butterfly karena keanekaragaman spesies kupu-kupu yang hidup di area ini."
  },
  {
    nama: "Taman Arkeologi Leang-Leang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/iYczZ3gZLA53j189A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029194/sulselgo/uqvwwj9q2d6qxr7evper.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029194/sulselgo/uqvwwj9q2d6qxr7evper.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029208/sulselgo/dz4uuuyvhpbryrbszefv.png"
    ],
    deskripsiSingkat: "Kawasan wisata sejarah di Maros dengan formasi batu karst unik dan situs prasejarah terkenal.",
    deskripsiLengkap: "Taman Arkeologi Leang-Leang merupakan salah satu destinasi wisata sejarah dan alam terkenal di Kabupaten Maros, Sulawesi Selatan. Tempat ini dikenal sebagai kawasan situs prasejarah dengan gua-gua purba dan lukisan tangan manusia purba yang memiliki nilai sejarah tinggi. Selain nilai arkeologi, kawasan ini juga menawarkan panorama pegunungan karst yang indah dan unik. Wisatawan dapat menikmati suasana alam, menjelajahi kawasan gua, serta mempelajari sejarah kehidupan manusia purba di Sulawesi Selatan."
  },
  {
    nama: "Waterboom Grand Mall",
    kategori: "Wisata Hiburan",
    kabupaten: "Maros",
    lokasi: "https://maps.app.goo.gl/6bjxLD4E9o8WidLk7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029501/sulselgo/hpkiilabg3hgyddzl5gl.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029501/sulselgo/hpkiilabg3hgyddzl5gl.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029513/sulselgo/nfhdpsdoso9tfbb9pvmi.png"
    ],
    deskripsiSingkat: "Waterpark modern di Maros dengan wahana permainan air seru dan area rekreasi keluarga yang luas.",
    deskripsiLengkap: "Waterboom Grandmall merupakan salah satu destinasi wisata rekreasi air populer di Kabupaten Maros, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air modern seperti inflatable water playground, seluncuran, dan area kolam yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang ramai dan fasilitas yang lengkap, pengunjung dapat menikmati aktivitas bermain air bersama keluarga dan teman. Lokasinya yang berada di kawasan Grand Mall Maros menjadikan tempat ini mudah dijangkau dan menjadi pilihan favorit untuk liburan keluarga."
  },

  // --- BONE ---
  {
    nama: "Pantai Tete",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/zkykpQQswRwHVQd68",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028379/sulselgo/ve1ahnhfmlqemrq5ix8f.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028379/sulselgo/ve1ahnhfmlqemrq5ix8f.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028391/sulselgo/sbhneis7810ur1kwp9eu.png"
    ],
    deskripsiSingkat: "Pantai indah di Bone dengan air laut jernih dan suasana tropis yang menenangkan.",
    deskripsiLengkap: "Pantai Tete merupakan salah satu destinasi wisata pantai populer di Kabupaten Bone, Sulawesi Selatan. Pantai ini menawarkan pemandangan laut biru yang jernih, pasir yang bersih, serta suasana alam tropis yang nyaman untuk bersantai. Wisatawan dapat menikmati panorama pantai, berfoto, bermain air, maupun menikmati suasana sunset yang indah. Dengan suasana yang tenang dan alami, Pantai Tete menjadi tempat favorit untuk rekreasi keluarga dan wisata alam."
  },
  {
    nama: "Air Terjun Ladenring",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/KhWAv1vrgCnjdG6D6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026963/sulselgo/nz9ctqixtol1c5jsghuu.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026963/sulselgo/nz9ctqixtol1c5jsghuu.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027012/sulselgo/zxzuktovydcx2f4bkjtm.png"
    ],
    deskripsiSingkat: "Air terjun alami di Bone dengan suasana hutan yang sejuk dan kolam alami yang jernih.",
    deskripsiLengkap: "Air Terjun Ladenring merupakan salah satu destinasi wisata alam menarik di Kabupaten Bone, Sulawesi Selatan. Tempat ini menawarkan keindahan air terjun bertingkat dengan aliran air yang jernih serta suasana alam yang asri dan menenangkan. Pengunjung dapat menikmati udara segar, bermain air, hingga berfoto di sekitar kawasan air terjun. Dikelilingi pepohonan hijau dan bebatuan alami, Air Terjun Ladenring menjadi tempat favorit wisatawan pecinta alam."
  },
  {
    nama: "Goa Mampu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/zZRWgw2tG6zrdbYb9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027616/sulselgo/rzdqhbrs45bc9r65o3he.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027616/sulselgo/rzdqhbrs45bc9r65o3he.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027630/sulselgo/h0vrzbexga0egapkralz.png"
    ],
    deskripsiSingkat: "Goa bersejarah di Bone dengan stalaktit unik dan cerita legenda masyarakat setempat.",
    deskripsiLengkap: "Goa Mampu merupakan salah satu destinasi wisata alam dan sejarah terkenal di Kabupaten Bone, Sulawesi Selatan. Goa ini dikenal dengan formasi batu stalaktit dan stalagmit yang unik serta legenda masyarakat setempat yang masih dipercaya hingga sekarang. Suasana di dalam goa memberikan pengalaman petualangan menarik bagi wisatawan yang ingin menjelajahi keindahan alam bawah tanah. Tempat ini juga menjadi wisata edukasi dan budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Situjutujue Waterboom",
    kategori: "Wisata Hiburan",
    kabupaten: "Bone",
    lokasi: "https://maps.app.goo.gl/JGYEFfFoueCveC3u9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029138/sulselgo/wug5nhvrwsno1y1dtyzq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029138/sulselgo/wug5nhvrwsno1y1dtyzq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029149/sulselgo/ziaf23bgasab3lkk031m.png"
    ],
    deskripsiSingkat: "Tempat wisata air di Bone dengan kolam renang dan wahana rekreasi keluarga yang menyenangkan.",
    deskripsiLengkap: "Situjutujue Waterboom merupakan salah satu destinasi wisata rekreasi air yang populer di Kabupaten Bone, Sulawesi Selatan. Tempat wisata ini menyediakan berbagai fasilitas kolam renang dan wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang ramai dan fasilitas yang cukup lengkap, pengunjung dapat menikmati waktu liburan bersama keluarga dan teman. Tempat ini menjadi salah satu pilihan favorit masyarakat Bone untuk rekreasi dan bersantai."
  },

  // --- WAJO ---
  {
    nama: "Rumah Adat Attakkae",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/R6c4rLBgqMHUisxZ9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028983/sulselgo/cybkwxjb3zmzmmnol4m6.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028983/sulselgo/cybkwxjb3zmzmmnol4m6.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028997/sulselgo/uc3zqlzl9lvnp8dntrqf.png"
    ],
    deskripsiSingkat: "Rumah adat khas Wajo dengan arsitektur tradisional Bugis yang megah dan bernilai sejarah tinggi.",
    deskripsiLengkap: "Rumah Adat Attakkae merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Wajo, Sulawesi Selatan. Bangunan ini menampilkan arsitektur tradisional Bugis dengan bentuk rumah panggung yang khas dan detail ukiran yang indah. Tempat ini menjadi simbol budaya masyarakat Bugis serta sering dijadikan lokasi wisata edukasi dan sejarah. Pengunjung dapat menikmati suasana tradisional sambil mempelajari nilai budaya dan sejarah masyarakat Wajo."
  },
  {
    nama: "Danau Tempe",
    kategori: "Wisata Alam Darat",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/JYgKd3mG9SnNjs8c9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027446/sulselgo/npdntjxta3tsitf9x0c5.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027446/sulselgo/npdntjxta3tsitf9x0c5.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027457/sulselgo/aqcngo18gjbd2hv1ko6x.png"
    ],
    deskripsiSingkat: "Danau terkenal di Wajo dengan pemandangan alam indah dan kehidupan masyarakat nelayan terapung.",
    deskripsiLengkap: "Danau Tempe merupakan salah satu destinasi wisata alam terkenal di Kabupaten Wajo, Sulawesi Selatan. Danau ini menawarkan panorama alam yang luas dengan suasana yang tenang dan asri. Wisatawan dapat melihat rumah-rumah terapung milik nelayan serta menikmati aktivitas masyarakat sekitar yang menggantungkan hidup dari danau. Danau Tempe juga dikenal sebagai tempat wisata favorit untuk menikmati sunset, memancing, dan wisata budaya masyarakat Bugis."
  },
  {
    nama: "Saoraja Arung Belawa",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/1NxEx4rzqNnyHd4f9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029115/sulselgo/a8lpwahgwgz7sk0ewvpe.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029115/sulselgo/a8lpwahgwgz7sk0ewvpe.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029127/sulselgo/ystoendvwlxrnqh3wdfs.png"
    ],
    deskripsiSingkat: "Rumah adat bersejarah di Wajo dengan arsitektur tradisional Bugis yang khas dan megah.",
    deskripsiLengkap: "Saoraja Mallangga merupakan salah satu rumah adat dan situs budaya terkenal di Kabupaten Wajo, Sulawesi Selatan. Bangunan ini memiliki desain arsitektur tradisional Bugis yang unik dengan bentuk rumah panggung khas kerajaan Bugis tempo dulu. Tempat ini menjadi simbol budaya dan sejarah masyarakat Wajo serta sering dikunjungi wisatawan untuk mengenal warisan budaya lokal. Selain memiliki nilai sejarah tinggi, Saoraja Mallangga juga menjadi spot fotografi yang menarik."
  },
  {
    nama: "Kolam Renang Syariah NBS",
    kategori: "Wisata Hiburan",
    kabupaten: "Wajo",
    lokasi: "https://maps.app.goo.gl/DmKHUNWPyKthY1Kw8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027871/sulselgo/q2c06zeajfgajbestubz.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027871/sulselgo/q2c06zeajfgajbestubz.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027881/sulselgo/ksvl0oxi25g8mmc3lia9.png"
    ],
    deskripsiSingkat: "Tempat wisata rekreasi keluarga di Wajo dengan konsep syariah dan berbagai fasilitas menarik.",
    deskripsiLengkap: "Kolam Renang Syariah NBS merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Wajo, Sulawesi Selatan. Tempat wisata ini menawarkan kolam renang dan area rekreasi keluarga dengan konsep syariah yang nyaman dan ramah keluarga. Selain kolam renang, kawasan wisata ini juga memiliki berbagai spot menarik seperti replika bangunan dunia, taman hijau, dan area santai yang cocok untuk liburan bersama keluarga maupun teman."
  },

  // --- SOPPENG ---
  {
    nama: "Puncak Gunung Sewo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/LGXvadZLv86k6kKx5",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028941/sulselgo/dswkmefo3khivfaxutx0.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028941/sulselgo/dswkmefo3khivfaxutx0.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028955/sulselgo/epftvug7smnegnpqpvuq.png"
    ],
    deskripsiSingkat: "Destinasi wisata alam di Soppeng dengan panorama perbukitan dan spot camping yang indah.",
    deskripsiLengkap: "Puncak Gunung Sewo merupakan salah satu destinasi wisata alam populer di Kabupaten Soppeng, Sulawesi Selatan. Tempat ini menawarkan pemandangan alam berupa perbukitan hijau, bebatuan alami, dan panorama lembah yang memukau. Wisatawan dapat menikmati suasana sejuk, berkemah, berburu sunrise, hingga berfoto di spot-spot alam yang menarik. Dengan udara segar dan pemandangan yang luas, tempat ini menjadi favorit para pecinta alam dan pendaki."
  },
  {
    nama: "Taman Wisata Alam Lejja",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/RwyRPPaxMaUcdpBv7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028453/sulselgo/g1pqsjenfmfehqpdtiy8.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028453/sulselgo/g1pqsjenfmfehqpdtiy8.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028468/sulselgo/wzb7b5wg2h3lxe1swisn.png"
    ],
    deskripsiSingkat: "Permandian air panas alami di Soppeng dengan suasana hutan tropis yang sejuk dan nyaman.",
    deskripsiLengkap: "Permandian Air Panas Lejja merupakan salah satu destinasi wisata terkenal di Kabupaten Soppeng, Sulawesi Selatan. Tempat wisata ini menawarkan kolam air panas alami yang berada di tengah kawasan hutan yang asri and sejuk. Pengunjung dapat menikmati sensasi berendam air panas sambil menikmati suasana alam yang menenangkan. Tempat ini cocok untuk rekreasi keluarga, relaksasi, dan wisata alam."
  },
  {
    nama: "Rumah Adat Sao Mario",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/MMfrj34agmYo1LVTA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029040/sulselgo/culfyef0lqs6dfeft5lj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029040/sulselgo/culfyef0lqs6dfeft5lj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029051/sulselgo/mg0pj9ihdzaehmciuuqz.png"
    ],
    deskripsiSingkat: "Rumah adat khas Bugis di Soppeng dengan arsitektur tradisional yang megah dan bersejarah.",
    deskripsiLengkap: "Rumah Adat Sao Mario merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Soppeng, Sulawesi Selatan. Bangunan tradisional ini memiliki arsitektur khas Bugis dengan bentuk rumah panggung yang megah dan detail ukiran yang indah. Tempat ini menjadi simbol budaya masyarakat Bugis serta sering dijadikan lokasi wisata sejarah dan edukasi budaya. Pengunjung dapat menikmati suasana tradisional sambil mempelajari warisan budaya lokal."
  },
  {
    nama: "Permandian Alam Citta",
    kategori: "Wisata Alam Darat",
    kabupaten: "Soppeng",
    lokasi: "https://maps.app.goo.gl/feXdGj211GJ5yHDU6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028537/sulselgo/vs8fh2c4u7tfqigxacke.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028537/sulselgo/vs8fh2c4u7tfqigxacke.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028552/sulselgo/g9w7mtothhrf6xy3z9g2.png"
    ],
    deskripsiSingkat: "Permandian alami di Soppeng dengan air jernih dan suasana santai yang cocok untuk rekreasi keluarga.",
    deskripsiLengkap: "Permandian Alam Citta merupakan salah satu destinasi wisata alam populer di Kabupaten Soppeng, Sulawesi Selatan. Tempat ini menawarkan kolam alami dengan air yang jernih dan segar, dikelilingi pepohonan hijau yang membuat suasana terasa sejuk dan nyaman. Wisatawan dapat berenang, bermain air, maupun bersantai bersama keluarga dan teman. Tempat ini menjadi salah satu pilihan favorit masyarakat untuk menikmati liburan alam yang menyenangkan."
  },

  // --- BARRU ---
  {
    nama: "Pulau Dutungan",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/HcXkwWCCxJ2Htqpn9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028795/sulselgo/ls0cbxja8vo1b9clvbg2.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028795/sulselgo/ls0cbxja8vo1b9clvbg2.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028808/sulselgo/e4micvjqnik9wt4opzxc.png"
    ],
    deskripsiSingkat: "Pulau wisata di Barru dengan pantai indah, laut jernih, dan suasana tropis yang menenangkan.",
    deskripsiLengkap: "Pulau Dutungan merupakan salah satu destinasi wisata bahari terkenal di Kabupaten Barru, Sulawesi Selatan. Pulau ini menawarkan panorama laut biru yang jernih, pasir putih yang bersih, serta suasana alam tropis yang masih asri. Wisatawan dapat menikmati aktivitas snorkeling, berenang, memancing, maupun bersantai menikmati keindahan alam pulau. Pulau Dutungan juga menjadi tempat favorit untuk menikmati sunset and liburan keluarga."
  },
  {
    nama: "Air Terjun Sarang Burung",
    kategori: "Wisata Alam Darat",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/XHXCLVxLnkqk51ac8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027104/sulselgo/egktoescmmnvuqk0jxzb.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027104/sulselgo/egktoescmmnvuqk0jxzb.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027118/sulselgo/kshtg3yumnd9za3rrtyb.png"
    ],
    deskripsiSingkat: "Air terjun alami di Barru dengan suasana hutan hijau yang sejuk and menenangkan.",
    deskripsiLengkap: "Air Terjun Sarang Burung merupakan salah satu destinasi wisata alam populer di Kabupaten Barru, Sulawesi Selatan. Tempat wisata ini menawarkan panorama air terjun bertingkat yang mengalir di antara bebatuan alami dan pepohonan hijau yang lebat. Suasana yang sejuk dan alami membuat tempat ini cocok untuk rekreasi, bersantai, maupun menikmati keindahan alam. Pengunjung juga dapat berfoto dan bermain air di sekitar kawasan air terjun."
  },
  {
    nama: "Rumah Adat Saoraja Lapinceng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/gnt49MeXHfZGaNh28",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029081/sulselgo/iwf48xzumwbw44gaju7n.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029081/sulselgo/iwf48xzumwbw44gaju7n.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029092/sulselgo/f4yhzzrnvp7lyq7mzaek.png"
    ],
    deskripsiSingkat: "Rumah adat khas Bugis di Barru dengan arsitektur tradisional yang unik dan bersejarah.",
    deskripsiLengkap: "Rumah Adat Saoraja Lapinceng merupakan salah satu destinasi wisata budaya terkenal di Kabupaten Barru, Sulawesi Selatan. Bangunan tradisional ini memiliki bentuk rumah panggung khas Bugis dengan material kayu dan desain arsitektur yang unik. Tempat ini menjadi simbol budaya masyarakat Bugis serta memiliki nilai sejarah yang tinggi. Wisatawan dapat menikmati suasana tradisional sambil mengenal budaya dan sejarah lokal masyarakat Barru."
  },
  {
    nama: "Diana Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Barru",
    lokasi: "https://maps.app.goo.gl/fDjpLrvB2pUoy43KA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027563/sulselgo/mtkvdxmb290gaqgz9l0s.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027563/sulselgo/mtkvdxmb290gaqgz9l0s.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027578/sulselgo/jypgqtk8eykccahzonys.png"
    ],
    deskripsiSingkat: "Waterpark modern di Barru dengan berbagai wahana permainan air dan panorama alam yang indah.",
    deskripsiLengkap: "Diana Waterpark merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Barru, Sulawesi Selatan. Tempat wisata ini menawarkan berbagai wahana permainan air seperti seluncuran warna-warni, kolam renang keluarga, dan area bermain anak. Dengan latar perbukitan hijau dan udara yang sejuk, pengunjung dapat menikmati suasana liburan yang menyenangkan bersama keluarga dan teman. Diana Waterpark menjadi salah satu pilihan favorit wisata keluarga di Barru."
  },

  // --- PANGKAJENE & KEPULAUAN ---
  {
    nama: "Pulau Kapoposang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/nWNK3kt4NrtBEpPg7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028819/sulselgo/xfjcuhwreysofbpiw3t9.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028819/sulselgo/xfjcuhwreysofbpiw3t9.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028831/sulselgo/p2wdzpm9pvo4lhpxdxfg.png"
    ],
    deskripsiSingkat: "Pulau eksotis dengan laut jernih, pasir putih, dan keindahan bawah laut yang memukau.",
    deskripsiLengkap: "Pulau Kapoposang merupakan salah satu destinasi wisata bahari terkenal di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Pulau ini menawarkan pemandangan laut yang jernih, pasir putih yang bersih, serta terumbu karang yang indah. Wisatawan dapat menikmati aktivitas snorkeling, diving, berenang, hingga bersantai menikmati suasana pantai tropis. Dengan suasana yang tenang dan panorama alam yang memukau, Pulau Kapoposang menjadi tempat favorit wisatawan pecinta laut."
  },
  {
    nama: "Danau Hijau Balocci",
    kategori: "Wisata Alam Darat",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/1PjedaK6RvqiKd8P9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027330/sulselgo/zrpww5ay2dy8cfst9di7.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027330/sulselgo/zrpww5ay2dy8cfst9di7.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027341/sulselgo/snjttcd7mmjrlfj2jrzr.png"
    ],
    deskripsiSingkat: "Danau hijau alami dengan panorama pegunungan karst yang indah dan menenangkan.",
    deskripsiLengkap: "Danau Hijau Balocci merupakan salah satu destinasi wisata alam populer di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat ini menawarkan panorama danau berwarna hijau yang dikelilingi perbukitan karst dan pepohonan hijau yang asri. Wisatawan dapat menikmati suasana tenang, berfoto, maupun menikmati keindahan alam sekitar. Tempat ini menjadi salah satu spot wisata favorit pecinta alam dan fotografi."
  },
  {
    nama: "Taman Purbakala Sumpang Bita",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/vvFC1DhB9MqZzNhB6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029310/sulselgo/baufsnyx15yt0nbbljet.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029310/sulselgo/baufsnyx15yt0nbbljet.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029323/sulselgo/sfykzvwzdfgrnsrhfnua.png"
    ],
    deskripsiSingkat: "Taman wisata alam dan sejarah dengan panorama karst serta suasana hijau yang asri.",
    deskripsiLengkap: "Taman Purbakala Sumpang Bita merupakan salah satu destinasi wisata sejarah dan alam terkenal di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat ini memiliki kawasan hijau yang luas dengan latar pegunungan karst yang indah dan suasana yang sejuk. Selain menjadi tempat wisata alam, kawasan ini juga memiliki nilai sejarah dan budaya yang menarik untuk dipelajari. Pengunjung dapat menikmati pemandangan alam, berjalan santai, dan berfoto di berbagai spot menarik."
  },
  {
    nama: "Wisata Hutan Mangrove Dewi Biringngkassi",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pangkep",
    lokasi: "https://maps.app.goo.gl/RkzWMoUVoEYhxAD6A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029623/sulselgo/cxqbuygvx9s7akjw1nrl.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029623/sulselgo/cxqbuygvx9s7akjw1nrl.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029636/sulselgo/yya31gpd9hf0qnr1zicq.png"
    ],
    deskripsiSingkat: "Wisata hutan mangrove dengan suasana alami dan jembatan kayu yang menarik untuk dijelajahi.",
    deskripsiLengkap: "Wisata Hutan Mangrove Dewi Biringngkassi merupakan salah satu destinasi wisata alam populer di Kabupaten Pangkajene & Kepulauan, Sulawesi Selatan. Tempat wisata ini menawarkan kawasan hutan mangrove yang asri dengan jalur jembatan kayu yang dapat digunakan pengunjung untuk menikmati keindahan alam sekitar. Selain menjadi tempat rekreasi, kawasan ini juga berfungsi sebagai wisata edukasi mengenai ekosistem mangrove dan pelestarian lingkungan."
  },

  // --- TAKALAR ---
  {
    nama: "Pantai Barugaya Punaga",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/PidtnBijs6vpom33A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028304/sulselgo/iurxkt65sx9pztspfbqu.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028304/sulselgo/iurxkt65sx9pztspfbqu.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028316/yshgtrugvyhokbdp1r5t.png"
    ],
    deskripsiSingkat: "Pantai eksotis di Takalar dengan batu karang unik dan panorama sunset yang indah.",
    deskripsiLengkap: "Pantai Punaga merupakan salah satu destinasi wisata pantai terkenal di Kabupaten Takalar, Sulawesi Selatan. Pantai ini memiliki ciri khas berupa batuan karang alami yang berada di tepi laut dengan panorama laut biru yang indah. Wisatawan dapat menikmati suasana pantai yang tenang, berburu sunset, berfoto, maupun bersantai menikmati angin laut. Tempat ini menjadi salah satu spot favorit wisata alam dan fotografi di Takalar."
  },
  {
    nama: "PPLH Puntondo",
    kategori: "Wisata Alam Darat",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/v8xmd2jCQueamtNV9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028709/sulselgo/qa6htwlcujgzdxmqdf8j.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028709/sulselgo/qa6htwlcujgzdxmqdf8j.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028729/sulselgo/kx9uxhqpodife9ychibc.png"
    ],
    deskripsiSingkat: "Kawasan wisata edukasi alam dengan penginapan kayu dan suasana hutan yang asri.",
    deskripsiLengkap: "PPLH Puntondo merupakan salah satu destinasi wisata edukasi dan alam populer di Kabupaten Takalar, Sulawesi Selatan. Tempat ini menawarkan suasana alami dengan bangunan kayu tradisional yang berada di tengah pepohonan hijau yang rindang. Selain menjadi tempat rekreasi, kawasan ini juga digunakan sebagai pusat pendidikan lingkungan hidup. Pengunjung dapat menikmati suasana tenang, belajar tentang lingkungan, dan beristirahat di area wisata yang nyaman."
  },
  {
    nama: "Kawasan Benteng Sanrobone",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/D2hThhsqPHhcGBGR8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027182/sulselgo/eyauspw4omtrmmiqvr4x.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027182/sulselgo/eyauspw4omtrmmiqvr4x.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027196/sulselgo/w2slteuz5arpzjd912w1.png"
    ],
    deskripsiSingkat: "Situs sejarah di Takalar dengan bangunan makam kuno dan nilai budaya yang tinggi.",
    deskripsiLengkap: "Benteng Sanrobone merupakan salah satu situs sejarah terkenal di Kabupaten Takalar, Sulawesi Selatan. Kawasan ini memiliki bangunan bersejarah dan kompleks makam kuno yang menjadi bagian dari sejarah Kerajaan Sanrobone. Tempat ini menjadi destinasi wisata budaya dan sejarah yang menarik untuk dikunjungi. Wisatawan dapat mempelajari sejarah lokal sekaligus menikmati suasana kawasan yang tenang dan penuh nilai budaya."
  },
  {
    nama: "Permandian Taman Wisata Rita",
    kategori: "Wisata Hiburan",
    kabupaten: "Takalar",
    lokasi: "https://maps.app.goo.gl/nWmF53CYdLpHwEVz8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028652/sulselgo/fmwo0fkvpx4idwcygcel.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028652/sulselgo/fmwo0fkvpx4idwcygcel.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028663/sulselgo/ystjyoqvnflcvmmie9fi.png"
    ],
    deskripsiSingkat: "Tempat wisata keluarga di Takalar dengan kolam renang dan wahana permainan air yang seru.",
    deskripsiLengkap: "Permandian Taman Wisata Rita merupakan salah satu destinasi wisata rekreasi populer di Kabupaten Takalar, Sulawesi Selatan. Tempat wisata ini menawarkan kolam renang luas dengan berbagai wahana permainan air seperti seluncuran warna-warni yang cocok untuk anak-anak maupun keluarga. Suasana tempat yang nyaman dan area bermain yang menarik menjadikan tempat ini favorit untuk liburan dan rekreasi bersama keluarga."
  },

  // --- JENEPONTO ---
  {
    nama: "Pantai Garassikang Katubiri",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/aCFUdHAT8suDLKRVA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028184/sulselgo/miumaq3ckjvpduolqmx7.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028184/sulselgo/miumaq3ckjvpduolqmx7.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028173/sulselgo/ywlmcz220dq5tfbhvo5o.png"
    ],
    deskripsiSingkat: "Pantai eksotis di Jeneponto dengan tebing batu karang unik dan pemandangan laut yang indah.",
    deskripsiLengkap: "Pantai Garassikang atau Katubiri merupakan salah satu destinasi wisata alam populer di Kabupaten Jeneponto, Sulawesi Selatan. Pantai ini terkenal dengan formasi batu karang putih yang unik dan pemandangan laut biru yang menenangkan. Tempat ini cocok untuk bersantai, berfoto, menikmati sunset, serta menikmati suasana alam pesisir yang masih alami."
  },
  {
    nama: "Danau Bulu Jaya",
    kategori: "Wisata Alam Darat",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/UJr4cYFRUGUoGFVt5",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027306/sulselgo/xdd33l00nhqpv9zm7td3.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027306/sulselgo/xdd33l00nhqpv9zm7td3.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027315/sulselgo/oxgopezyeyruamiw2on8.png"
    ],
    deskripsiSingkat: "Danau alami dengan panorama perbukitan hijau dan suasana tenang yang cocok untuk rekreasi.",
    deskripsiLengkap: "Danau Bulu Jaya merupakan destinasi wisata alam di Kabupaten Jeneponto yang menawarkan keindahan danau dengan panorama perbukitan hijau di sekitarnya. Tempat ini menjadi lokasi favorit untuk menikmati pemandangan alam, berfoto, and bersantai bersama keluarga maupun teman. Udara yang sejuk dan suasana yang tenang menjadikan Danau Bulu Jaya cocok sebagai tempat rekreasi alam."
  },
  {
    nama: "Makam Datuk Sulaiman Pattimang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/8KceacAdTgVG84daA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027923/sulselgo/zfw8glusgrgou0dqyof2.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027923/sulselgo/zfw8glusgrgou0dqyof2.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027936/sulselgo/kpgpszbsk1vsiq8daofr.png"
    ],
    deskripsiSingkat: "Situs religi bersejarah yang menjadi tempat ziarah masyarakat.",
    deskripsiLengkap: "Makam Datuk Sulaiman atau Pattimang merupakan salah satu situs religi dan sejarah penting di Kabupaten Luwu Utara. Tempat ini sering dikunjungi masyarakat untuk berziarah dan mengenang perjuangan tokoh penyebar agama Islam di daerah tersebut. Dengan suasana yang tenang dan sakral, lokasi ini menjadi destinasi wisata religi yang memiliki nilai sejarah tinggi."
  },
  {
    nama: "Jeneponto Waterpark",
    kategori: "Wisata Hiburan",
    kabupaten: "Jeneponto",
    lokasi: "https://maps.app.goo.gl/nkJHN2gSBtGwdVff8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027678/sulselgo/s1s7oysgrshpjajjpvsf.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027678/sulselgo/s1s7oysgrshpjajjpvsf.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027692/sulselgo/qpfkmtzhaxbw1ahqzc5x.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang dan wahana permainan air di Jeneponto.",
    deskripsiLengkap: "Jeneponto Waterpark merupakan salah satu tempat wisata rekreasi keluarga yang populer di Kabupaten Jeneponto. Tempat ini menyediakan kolam renang dan berbagai wahana permainan air yang cocok untuk anak-anak maupun orang dewasa. Dengan suasana yang nyaman dan fasilitas yang lengkap, Jeneponto Waterpark menjadi pilihan favorit masyarakat untuk berlibur dan menghabiskan waktu bersama keluarga."
  },

  // --- BANTAENG ---
  {
    nama: "Pantai Marina Bantaeng",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/fm8SZaoHWsZdphLo7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028228/sulselgo/nawml0izjjgsmn3ctiia.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028228/sulselgo/nawml0izjjgsmn3ctiia.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028240/sulselgo/csbyitsgg5xunbpbcjle.png"
    ],
    deskripsiSingkat: "Pantai populer di Bantaeng dengan taman indah dan suasana pantai yang nyaman.",
    deskripsiLengkap: "Pantai Marina merupakan salah satu destinasi wisata favorit di Kabupaten Bantaeng, Sulawesi Selatan. Tempat ini menawarkan pemandangan laut yang indah, area taman yang tertata rapi, gazebo untuk bersantai, serta suasana pantai yang nyaman untuk rekreasi keluarga. Pantai Marina juga sering dijadikan lokasi berkumpul masyarakat dan tempat menikmati sunset."
  },
  {
    nama: "Air Terjun Bissappu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/NAiPCriX39QHE9a3A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026874/sulselgo/vkgtwlond5sdtuncwfzj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026874/sulselgo/vkgtwlond5sdtuncwfzj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026889/sulselgo/b5nenz938dbdocegv1q9.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan panorama hutan hijau yang sejuk dan menenangkan.",
    deskripsiLengkap: "Air Terjun Bissappu adalah destinasi wisata alam di Kabupaten Bantaeng yang terkenal dengan keindahan air terjun tinggi dan suasana hutan yang asri. Tempat ini menawarkan udara yang sejuk, pemandangan alam yang memukau, serta jembatan dan area viewing spot untuk menikmati keindahan air terjun secara langsung. Cocok untuk wisata alam, fotografi, dan relaksasi."
  },
  {
    nama: "Balla Lompoa Bantaeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/5zhu53sSFdL4aDKW7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027129/sulselgo/cjblr0kk9a2anucd7res.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027129/sulselgo/cjblr0kk9a2anucd7res.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027140/sulselgo/ptlffsxfxokxo7hzgjfk.png"
    ],
    deskripsiSingkat: "Rumah adat dan museum budaya khas Bantaeng dengan arsitektur tradisional yang megah.",
    deskripsiLengkap: "Balla Lompoa Bantaeng merupakan salah satu bangunan adat dan pusat budaya yang berada di Kabupaten Bantaeng, Sulawesi Selatan. Bangunan ini memiliki arsitektur rumah panggung tradisional khas Bugis-Makassar yang megah dan sarat nilai sejarah. Selain menjadi ikon budaya daerah, tempat ini juga digunakan sebagai museum and lokasi edukasi sejarah serta budaya masyarakat Bantaeng."
  },
  {
    nama: "Permandian Eremerasa Ermes",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bantaeng",
    lokasi: "https://maps.app.goo.gl/6jhUgDQLQMQNwWg36",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028627/sulselgo/pkdbpflbxay6qh8gprat.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028627/sulselgo/pkdbpflbxay6qh8gprat.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028641/sulselgo/ifdadsvqtgcenrbuh4kb.png"
    ],
    deskripsiSingkat: "Permandian alam dengan suasana hutan yang sejuk dan kolam renang alami yang menyegarkan.",
    deskripsiLengkap: "Permandian Eremerasa atau yang dikenal with Ermes merupakan salah satu tempat wisata rekreasi alam di Kabupaten Bantaeng. Tempat ini menawarkan kolam pemandian alami yang berada di tengah kawasan hutan hijau yang asri dan sejuk. Dengan fasilitas gazebo, area santai, dan suasana alam yang nyaman, Ermes menjadi lokasi favorit untuk berlibur bersama keluarga maupun teman."
  },

  // --- BULUKUMBA ---
  {
    nama: "Tebing Appalarang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/SVCES47xUo1WeJzp7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029423/sulselgo/tkzenwbkgitik4pqtpqi.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029423/sulselgo/tkzenwbkgitik4pqtpqi.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029440/sulselgo/rv6rjem6bcysypkh5pqb.png"
    ],
    deskripsiSingkat: "Tebing laut eksotis dengan pemandangan air biru jernih khas Bulukumba.",
    deskripsiLengkap: "Tebing Appalarang merupakan salah satu destinasi wisata alam populer di Kabupaten Bulukumba, Sulawesi Selatan. Tempat ini terkenal dengan tebing batu karang yang menjulang tinggi di atas laut biru jernih. Wisatawan dapat menikmati panorama laut, berfoto di spot menarik, serta merasakan suasana alam pantai yang masih alami dan menenangkan."
  },
  {
    nama: "Donggia Kahayya",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/yrXMREqGXooUcm8P9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027591/sulselgo/wgecslv4cq98gs4ifpsu.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027591/sulselgo/wgecslv4cq98gs4ifpsu.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027602/sulselgo/avukjjhsqgdbruulnsgc.png"
    ],
    deskripsiSingkat: "Bukit wisata dengan panorama pegunungan hijau dan jalur kayu yang estetik.",
    deskripsiLengkap: "Donggia Kahayya merupakan destinasi wisata alam di Kabupaten Bulukumba yang menawarkan pemandangan perbukitan hijau dan lembah yang indah. Tempat ini memiliki jalur kayu dan gardu pandang yang menjadi spot favorit wisatawan untuk menikmati panorama alam serta berfoto. Udara yang sejuk dan suasana yang tenang membuat Donggia Kahayya cocok untuk rekreasi dan healing."
  },
  {
    nama: "Kawasan Adat Ammatoa",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/oFC3Rgu7XJttrAmS7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027733/sulselgo/j2ldk43skjgmunlkhtsb.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027733/sulselgo/j2ldk43skjgmunlkhtsb.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027746/sulselgo/nk1zpujg3awudblofoaw.png"
    ],
    deskripsiSingkat: "Kawasan adat tradisional masyarakat Kajang yang masih menjaga budaya leluhur.",
    deskripsiLengkap: "Kawasan Adat Ammatoa Kajang merupakan salah satu wisata budaya terkenal di Kabupaten Bulukumba, Sulawesi Selatan. Masyarakat adat di kawasan ini masih mempertahankan tradisi leluhur, rumah adat tradisional, serta gaya hidup sederhana yang penuh nilai budaya. Wisatawan dapat mengenal budaya lokal, melihat rumah adat khas Kajang, dan mempelajari kehidupan masyarakat adat yang unik."
  },
  {
    nama: "Sumur Panjang Hila-Hila",
    kategori: "Wisata Alam Darat",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/kdmB8FmR6diHvgsx9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029163/sulselgo/pa3cg1baandydtbnlntq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029163/sulselgo/pa3cg1baandydtbnlntq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029179/sulselgo/aaezvlzyvx7tru8cbi6z.png"
    ],
    deskripsiSingkat: "Permandian alami dengan air jernih dan suasana tropis yang sejuk.",
    deskripsiLengkap: "Sumur Panjang Hila-Hila atau Permandian Hila-Hila merupakan destinasi wisata alam di Kabupaten Bulukumba yang terkenal dengan airnya yang jernih dan menyegarkan. Tempat ini memiliki kolam alami, jembatan kecil, dan suasana rindang yang cocok untuk bersantai bersama keluarga. Dengan nuansa tropis yang asri, wisata ini menjadi pilihan favorit masyarakat untuk rekreasi dan menikmati suasana alam."
  }, 
  {
    nama: "Pantai Tanjung Bira",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Bulukumba",
    lokasi: "https://maps.app.goo.gl/ZCJYLG5KcxB4Ndn1A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029397/sulselgo/k5ptrmeg8u3mzniztyws.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029397/sulselgo/k5ptrmeg8u3mzniztyws.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029408/sulselgo/ihrr87snwdgfq06wqwud.png"
    ],
    deskripsiSingkat: "Pantai Tanjung Bira di Bulukumba adalah destinasi wisata bahari unggulan Sulawesi Selatan yang terkenal dengan hamparan pasir putih sehalus tepung, air laut jernih berwarna biru kehijauan, serta kedekatannya dengan pusat pembuatan kapal tradisional Phinisi yang ikonik.",
    deskripsiLengkap: "Pantai Tanjung Bira yang terletak di ujung tenggara Kabupaten Bulukumba merupakan salah satu permata wisata bahari paling ikonik di Sulawesi Selatan yang menawarkan perpaduan sempurna antara keindahan alam tropis dan kekayaan budaya maritim. Karakteristik utama yang membuat pantai ini tersohor adalah hamparan pasir putihnya yang sangat halus dengan tekstur menyerupai tepung, yang berpadu serasi dengan kejernihan air lautnya yang memancarkan gradasi warna biru hingga kehijauan yang memukau. Berada di lokasi yang cukup jauh dari kebisingan kota, pantai ini menyajikan suasana yang tenang dan menyegarkan, menjadikannya pelarian ideal bagi siapa saja yang ingin menikmati panorama matahari terbenam yang spektakuler sambil merasakan sejuknya angin pesisir di antara perbukitan hijau yang memagari garis pantai. Selain pesona estetikanya, kawasan Tanjung Bira juga menjadi pintu gerbang menuju berbagai petualangan bahari dan edukasi budaya yang sangat berharga bagi para pengunjungnya. Para pecinta aktivitas air dapat dengan mudah menyeberang menuju Pulau Liukang Loe atau Pulau Kambing yang menyuguhkan ekosistem bawah laut menawan, lengkap dengan terumbu karang yang terjaga dan keragaman biota laut yang menjadikannya lokasi favorit untuk kegiatan snorkeling serta menyelam. Lebih dari itu, kunjungan ke kawasan ini akan terasa kurang lengkap tanpa menyambangi daerah Tana Beru yang terletak tidak jauh dari lokasi pantai, di mana wisatawan dapat menyaksikan secara langsung proses pembuatan kapal Phinisi tradisional secara manual oleh para pengrajin lokal yang kemampuannya telah diakui hingga ke kancah internasional. Didukung dengan fasilitas akomodasi yang kini telah tersedia dalam berbagai kelas, mulai dari penginapan ramah anggaran hingga resor kelas atas, Tanjung Bira bukan sekadar destinasi wisata pantai biasa, melainkan sebuah kawasan wisata terpadu yang menawarkan pengalaman autentik bagi setiap orang yang datang untuk menikmati pesona alam serta sejarah maritim di tanah Sulawesi. Apakah Anda memerlukan informasi tambahan mengenai rute perjalanan dari wilayah Anda atau rekomendasi waktu terbaik untuk berkunjung ke sana?"
  },

  // --- SINJAI ---
  {
    nama: "Pulau Sembilan",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/FyS5rqH3GyE111bx5",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028884/sulselgo/fdjxgkfucdz4zhc4rorq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028884/sulselgo/fdjxgkfucdz4zhc4rorq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028896/sulselgo/vvlkqzzmwhiy0mamfhog.png"
    ],
    deskripsiSingkat: "Destinasi wisata bahari dengan pasir putih and laut biru jernih yang memukau.",
    deskripsiLengkap: "Pulau Sembilan merupakan salah satu destinasi wisata unggulan di Kabupaten Sinjai, Sulawesi Selatan. Tempat ini terkenal dengan hamparan pasir putih, laut biru jernih, dan panorama pulau kecil yang indah. Wisatawan dapat menikmati snorkeling, berenang, berfoto, serta suasana alam bahari yang tenang dan eksotis."
  },
  {
    nama: "Air Terjun Laliako",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/aVy4VcYuiXLMaX1S9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027026/sulselgo/mooynhd7ffdoa080habb.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027026/sulselgo/mooynhd7ffdoa080habb.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027041/sulselgo/jxiocir0ajkhusrvbqmi.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan suasana hijau dan udara sejuk khas pegunungan.",
    deskripsiLengkap: "Air Terjun Laliako merupakan destinasi wisata alam di Kabupaten Sinjai yang menawarkan panorama air terjun bertingkat dengan lingkungan hijau yang asri. Tempat ini cocok untuk wisata alam, bersantai, dan menikmati udara segar pengunungan. Keindahan alam sekitar menjadikan Air Terjun Laliako favorit bagi wisatawan pecinta alam."
  },
  {
    nama: "Taman Purbakala Batu Pake Gojeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/Pu5NJd5uNbAtVTnNA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029281/sulselgo/i2mdp7nu4eowo9uwhsdp.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029281/sulselgo/i2mdp7nu4eowo9uwhsdp.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029295/sulselgo/bkva8dep5yx1aveyhpy5.png"
    ],
    deskripsiSingkat: "Situs purbakala dengan batu-batu bersejarah dan suasana taman yang alami.",
    deskripsiLengkap: "Taman Purbakala Batu Pake Gojeng merupakan salah satu situs sejarah dan budaya di Kabupaten Sinjai. Tempat ini menyimpan berbagai batu purbakala yang memiliki nilai sejarah tinggi dan menjadi bukti peninggalan masa lampau. Dikelilingi pepohonan rindang dan suasana alami, lokasi ini cocok untuk wisata edukasi dan sejarah."
  },
  {
    nama: "Taman Wisata Fafaliang",
    kategori: "Wisata Hiburan",
    kabupaten: "Sinjai",
    lokasi: "https://maps.app.goo.gl/xmrr5PgJEdrVzdkP6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029336/sulselgo/sqntussjpz8wnpiccg1u.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029368/sulselgo/vxotd8pxlmwta8jgk67a.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029387/sulselgo/vyikqf3awusbebdz5ojf.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang dan suasana alam yang nyaman.",
    deskripsiLengkap: "Taman Wisata Fafaliang merupakan salah satu destinasi rekreasi keluarga di Kabupaten Sinjai yang menyediakan kolam renang, wahana permainan air, gazebo, dan area santai. Dikelilingi pemandangan hijau dan suasana alam yang asri, tempat ini menjadi pilihan favorit masyarakat untuk berlibur bersama keluarga dan teman."
  }, 

  // --- PINRANG ---
  {
    nama: "Pantai Salopi",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/H4VG1zaistabRMV86",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028330/sulselgo/jehklhyaf3jn72qrguxz.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028330/sulselgo/jehklhyaf3jn72qrguxz.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028341/sulselgo/ay6jeqwx0g3q4n32qxk5.png"
    ],
    deskripsiSingkat: "Pantai dengan suasana santai, pasir luas, dan pemandangan laut yang indah.",
    deskripsiLengkap: "Pantai Salopi merupakan salah satu destinasi wisata pantai di Kabupaten Pinrang, Sulawesi Selatan. Tempat ini menawarkan suasana pantai yang tenang dengan hamparan pasir luas, pepohonan kelapa yang rindang, dan panorama laut yang menenangkan. Pantai ini cocok untuk bersantai bersama keluarga, menikmati sunset, dan berfoto di area tepi pantai."
  },
  {
    nama: "Air Terjun Kalijodoh",
    kategori: "Wisata Alam Darat",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/RrLzYZe8eyYpLouS6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026933/sulselgo/onwo4sokrpsdbvwt3dje.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026933/sulselgo/onwo4sokrpsdbvwt3dje.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781026947/sulselgo/ytujkwuqci0mkcmcmi7i.png"
    ],
    deskripsiSingkat: "Air terjun alami dengan suasana hutan hijau dan kolam air yang jernih.",
    deskripsiLengkap: "Air Terjun Kali Jodoh merupakan destinasi wisata alam di Kabupaten Pinrang yang menawarkan keindahan air terjun dengan aliran air yang jernih dan menyegarkan. Dikelilingi pepohonan hijau dan bebatuan alami, tempat ini cocok untuk wisata alam, relaksasi, dan menikmati udara segar pegunungan."
  },
  {
    nama: "Rumah Adat Saoraja",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/DKrRyeQeCzyB4rEd6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029061/sulselgo/r5kjojaxjmiedl65k9le.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029061/sulselgo/r5kjojaxjmiedl65k9le.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029070/sulselgo/ms7ai2cad7jxeiyvwybv.png"
    ],
    deskripsiSingkat: "Rumah adat khas Pinrang dengan arsitektur tradisional yang megah dan bersejarah.",
    deskripsiLengkap: "Rumah Adat Saoraja merupakan salah satu ikon budaya dan sejarah di Kabupaten Pinrang, Sulawesi Selatan. Bangunan ini memiliki arsitektur khas Bugis dengan bentuk rumah panggung yang megah dan ornamen tradisional yang unik. Selain menjadi simbol budaya daerah, tempat ini juga sering dijadikan lokasi edukasi sejarah dan wisata budaya."
  },
  {
    nama: "Waterboom Pinrang",
    kategori: "Wisata Hiburan",
    kabupaten: "Pinrang",
    lokasi: "https://maps.app.goo.gl/k7zQ1QLwqc3DHPbM9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029546/sulselgo/h9uouo0wduh934buetx9.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029546/sulselgo/h9uouo0wduh934buetx9.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029558/sulselgo/npec2e8x5xk2zz4xqkag.png"
    ],
    deskripsiSingkat: "Tempat wisata keluarga dengan kolam renang dan wahana permainan air yang seru.",
    deskripsiLengkap: "Waterboom Pinrang merupakan salah satu tempat wisata rekreasi keluarga yang populer di Kabupaten Pinrang. Tempat ini menyediakan kolam renang luas, wahana seluncuran air warna-warni, dan area bermain anak yang cocok untuk liburan bersama keluarga maupun teman. Dengan suasana yang nyaman dan fasilitas lengkap, Waterboom Pinrang menjadi destinasi favorit masyarakat."
  }, 

  // --- SIDRAP ---
  {
    nama: "Taman Wisata Puncak Bila ",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/qeUTx17jQiFmF6uQ6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028912/sulselgo/rjfyacq0yzflxzjgjfga.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028912/sulselgo/rjfyacq0yzflxzjgjfga.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028928/sulselgo/bd03mnrqjugl3ipahyyp.png"
    ],
    deskripsiSingkat: "Destinasi wisata alam dengan danau indah, area camping, dan pemandangan hijau yang menenangkan.",
    deskripsiLengkap: "Puncak Bila merupakan salah satu destinasi wisata alam populer di Kabupaten Sidrap yang menawarkan suasana sejuk dan pemandangan danau yang indah. Tempat ini memiliki area camping, gazebo untuk bersantai, serta spot foto menarik seperti patung singa ikonik di tepi danau. Dengan suasana alam yang asri dan nyaman, Puncak Bila menjadi pilihan favorit wisata keluarga maupun pecinta alam."
  },
  {
    nama: "PLTB Sidrap",
    kategori: "Wisata Alam Darat",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/KxRU7DmMpa1CTF1n8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027787/sulselgo/uafxsu9sakljeej3tttn.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027787/sulselgo/uafxsu9sakljeej3tttn.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027798/sulselgo/nfxqklh2shwx72n5bbls.png"
    ],
    deskripsiSingkat: "Kawasan pembangkit listrik tenaga angin dengan panorama perbukitan yang memukau.",
    deskripsiLengkap: "Kincir Angin Raksasa Sidrap merupakan kawasan pembangkit listrik tenaga bayu terbesar yang menjadi ikon wisata modern di Kabupaten Sidrap. Deretan turbin angin raksasa berdiri di atas perbukitan hijau dengan panorama alam yang sangat indah. Tempat ini sering dijadikan lokasi wisata edukasi dan spot fotografi karena menghadirkan pemandangan yang unik dan menakjubkan."
  },
  {
    nama: "Mesjid Tua Jarae",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/y5qM1i3HxcZmLAWK7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028027/sulselgo/vr7wggb4vgnope1h3thz.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028027/sulselgo/vr7wggb4vgnope1h3thz.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028042/sulselgo/jkr8mfgoveluch2namcm.png"
    ],
    deskripsiSingkat: "Masjid bersejarah dengan arsitektur tradisional khas Bugis yang masih terjaga.",
    deskripsiLengkap: "Mesjid Tua Jara’e merupakan salah satu bangunan religi bersejarah di Kabupaten Sidrap yang memiliki arsitektur tradisional khas Bugis. Masjid ini menjadi simbol sejarah penyebaran Islam di daerah tersebut dan masih digunakan oleh masyarakat hingga sekarang. Dengan bentuk bangunan unik dan suasana yang tenang, Mesjid Tua Jara’e menjadi destinasi wisata religi dan budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Taman Rekreasi Datae",
    kategori: "Wisata Hiburan",
    kabupaten: "Sidrap",
    lokasi: "https://maps.app.goo.gl/fNEG85Q3r5mWMnAW6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029336/sulselgo/sqntussjpz8wnpiccg1u.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029336/sulselgo/sqntussjpz8wnpiccg1u.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029350/sulselgo/jppmh17k2fgvgxkm3fmc.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang dan wahana permainan air yang menyenangkan.",
    deskripsiLengkap: "Taman Rekreasi Data’e merupakan destinasi wisata keluarga di Kabupaten Sidrap yang menyediakan berbagai fasilitas hiburan dan permainan air. Tempat ini memiliki kolam renang untuk anak-anak maupun dewasa, seluncuran air, serta area santai yang nyaman untuk keluarga. Dengan suasana yang segar dan fasilitas lengkap, Taman Rekreasi Data’e menjadi salah satu tempat favorit masyarakat untuk berlibur bersama keluarga."
  },

  // --- ENREKANG ---
  {
    nama: "Tebing Mandu Tontonan",
    kategori: "Wisata Alam Darat",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/Fz9NQ2fByrUBP6cf7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029452/sulselgo/zsoyz70l4jr4sgwslp0h.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029452/sulselgo/zsoyz70l4jr4sgwslp0h.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029467/sulselgo/wbcrzgqlm0zlh0cstf9f.png"
    ],
    deskripsiSingkat: "Tebing batu megah dengan panorama alam pegunungan yang menakjubkan.",
    deskripsiLengkap: "Tebing Mandu Tontonan merupakan salah satu destinasi wisata alam terkenal di Kabupaten Enrekang yang menawarkan pemandangan tebing batu raksasa dengan suasana pegunungan yang sejuk dan asri. Tempat ini menjadi favorit wisatawan untuk menikmati keindahan alam, fotografi, dan bersantai menikmati panorama khas pegunungan Enrekang."
  },
  {
    nama: "Dante Pine",
    kategori: "Wisata Alam Darat",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/tZ7XJFgUDVBECwJAA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027498/sulselgo/gq4alx1b3g78je9vebdo.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027498/sulselgo/gq4alx1b3g78je9vebdo.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027515/sulselgo/liqnkdjgrrvewgz2kq7q.png"
    ],
    deskripsiSingkat: "Tempat wisata dengan spot nongkrong estetik dan pemandangan pegunungan yang indah.",
    deskripsiLengkap: "Dante Pine merupakan destinasi wisata alam populer di Kabupaten Enrekang yang menghadirkan suasana sejuk khas pegunungan dengan spot santai yang unik dan estetik. Pengunjung dapat menikmati makanan dan minuman sambil melihat panorama perbukitan hijau yang memukau. Tempat ini sangat cocok untuk bersantai, berfoto, dan menikmati suasana alam bersama keluarga maupun teman."
  },
  {
    nama: "Rumah Adat Matakali",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/98qFsMMZgW7F9vji7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029010/sulselgo/dsastewe70pqiwe4gobn.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029010/sulselgo/dsastewe70pqiwe4gobn.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029025/sulselgo/xbxtsjtxfodzxf745hoe.png"
    ],
    deskripsiSingkat: "Rumah adat tradisional khas Enrekang dengan arsitektur budaya yang masih terjaga.",
    deskripsiLengkap: "Rumah Adat Matakali merupakan salah satu peninggalan budaya di Kabupaten Enrekang yang menampilkan arsitektur tradisional khas masyarakat setempat. Bangunan rumah panggung ini memiliki bentuk unik dengan nuansa tradisional yang masih dipertahankan hingga sekarang. Tempat ini menjadi simbol budaya dan sejarah masyarakat Enrekang yang menarik untuk dipelajari dan dikunjungi."
  },
  {
    nama: "Kolam Renang Matua",
    kategori: "Wisata Hiburan",
    kabupaten: "Enrekang",
    lokasi: "https://maps.app.goo.gl/8SDS1djNfWhCchNV8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027843/sulselgo/frqsvz9r61joirejvfw7.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027843/sulselgo/frqsvz9r61joirejvfw7.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027857/sulselgo/zgmsjbeyvmnvzarhubtq.png"
    ],
    deskripsiSingkat: "Tempat rekreasi keluarga dengan kolam renang dan wahana permainan air yang seru.",
    deskripsiLengkap: "Kolam Renang Matua merupakan salah satu tempat wisata rekreasi keluarga di Kabupaten Enrekang yang menyediakan berbagai fasilitas kolam renang dan wahana permainan air. Dengan suasana yang nyaman serta pemandangan alam perbukitan di sekitarnya, tempat ini cocok untuk liburan bersama keluarga, anak-anak, maupun teman."
  },

  // --- LUWU ---
  {
    nama: "Pantai Ponnori",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/1eQEsnKhK2ys6UQF7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028279/sulselgo/gfbeatvvxzg9k5ttjrsq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028279/sulselgo/gfbeatvvxzg9k5ttjrsq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028291/sulselgo/izgao7gwicp10a52h9hh.png"
    ],
    deskripsiSingkat: "Pantai dengan suasana tenang, air laut jernih, dan pemandangan alam tropis yang indah.",
    deskripsiLengkap: "Pantai Ponnori merupakan salah satu destinasi wisata pantai di Kabupaten Luwu yang menawarkan panorama laut yang tenang dan suasana alami yang asri. Dikelilingi pepohonan hijau serta perahu nelayan di sekitar pantai, tempat ini cocok untuk bersantai, menikmati angin laut, dan menikmati keindahan pesisir bersama keluarga maupun teman."
  },
  {
    nama: "Air Terjun Sarambu Masiang",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/t8QLuV4k4t8UmSqC9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027066/sulselgo/ymgipr5xis4vkejt7why.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027066/sulselgo/ymgipr5xis4vkejt7why.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027089/sulselgo/z0i5jowpvguulqf3rsuj.png"
    ],
    deskripsiSingkat: "Air terjun bertingkat dengan suasana hutan tropis yang sejuk dan alami.",
    deskripsiLengkap: "Air Terjun Sarambu Masiang merupakan destinasi wisata alam di Kabupaten Luwu yang terkenal dengan aliran air bertingkat di atas bebatuan besar. Dikelilingi hutan tropis yang hijau dan udara yang sejuk, tempat ini menjadi lokasi favorit wisatawan untuk menikmati keindahan alam, bermain air, dan berfoto dengan panorama alami yang menawan."
  },
  {
    nama: "Gua Ila Batu",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/sq9QWtZAMmWvdWiH7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027645/sulselgo/dz8dtjmbnab8xxyvhory.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027645/sulselgo/dz8dtjmbnab8xxyvhory.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027658/sulselgo/ijvjxcuztsnag77pplza.png"
    ],
    deskripsiSingkat: "Gua alami dengan formasi batu unik dan suasana petualangan yang menarik.",
    deskripsiLengkap: "Gua Ila Batu merupakan salah satu wisata alam di Kabupaten Luwu yang menawarkan keindahan gua alami dengan formasi batuan yang unik dan eksotis. Suasana di dalam gua memberikan pengalaman petualangan yang menarik bagi para pengunjung, terutama pecinta alam dan fotografi. Tempat ini menjadi salah satu destinasi yang cocok untuk eksplorasi dan wisata alam."
  },
  {
    nama: "Taman Hijau Andi Benni",
    kategori: "Wisata Hiburan",
    kabupaten: "Luwu",
    lokasi: "https://maps.app.goo.gl/2nkySWbDn4miJAGH7",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029223/sulselgo/sx08inittkh1pg2gcorg.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029223/sulselgo/sx08inittkh1pg2gcorg.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029237/sulselgo/nbx7xc5pu603r4c7da2j.png"
    ],
    deskripsiSingkat: "Taman wisata dengan jembatan warna-warni dan suasana alam yang menyegarkan.",
    deskripsiLengkap: "Taman Hijau Andi Benni merupakan salah satu tempat wisata rekreasi di Kabupaten Luwu yang terkenal dengan jembatan kayu warna-warni di tengah hamparan hijau. Tempat ini menjadi favorit masyarakat untuk bersantai, berfoto, dan menikmati suasana alam yang asri. Dengan desain yang unik dan penuh warna, Taman Hijau Andi Benni cocok dijadikan destinasi wisata keluarga maupun tempat rekreasi bersama teman."
  },

  // --- LUWU UTARA ---
  {
    nama: "Pantai Seta Seta",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/DUnAurqDqDfQgfJe6",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028353/sulselgo/nts30on0yypbfgrxooaj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028353/sulselgo/nts30on0yypbfgrxooaj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028368/sulselgo/xhswn3nbx36vvhkagei8.png"
    ],
    deskripsiSingkat: "Pantai indah dengan air laut biru jernih dan panorama pulau yang memukau.",
    deskripsiLengkap: "Pantai Seta-Seta merupakan salah satu destinasi wisata pantai di Kabupaten Luwu Utara yang menawarkan pemandangan laut yang sangat indah dengan air berwarna biru jernih. Dikelilingi pepohonan hijau dan panorama pegunungan di kejauhan, tempat ini cocok untuk bersantai, menikmati suasana pantai, serta menjadi lokasi favorit untuk fotografi dan rekreasi keluarga."
  },
  {
    nama: "Permandian Alam Tamboke",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/kEW1Hvnoy4YTAHsn9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028566/sulselgo/rkqf4noddxnrrbseyscu.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028566/sulselgo/rkqf4noddxnrrbseyscu.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028578/sulselgo/gliipdaeujyqxecuig8q.png"
    ],
    deskripsiSingkat: "Permandian alami dengan aliran air jernih dan suasana pegunungan yang sejuk.",
    deskripsiLengkap: "Permandian Alam Tamboke merupakan tempat wisata alam di Kabupaten Luwu Utara yang menawarkan suasana asri dengan aliran air yang jernih and segar. Area permandian ini dikelilingi pepohonan hijau dan panorama alam pegunungan sehingga memberikan suasana yang nyaman untuk bersantai and berlibur bersama keluarga."
  },
  {
    nama: "Permandian Air Panas Pincara",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Utara",
    lokasi: "https://maps.app.goo.gl/KZg1diM66gKhYpVFA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028510/sulselgo/feyxg5aqanihuayaa8jb.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028510/sulselgo/feyxg5aqanihuayaa8jb.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028523/sulselgo/pckndxbi0hof6adc9rez.png"
    ],
    deskripsiSingkat: "Pemandian air panas alami dengan suasana alam yang sejuk dan menenangkan.",
    deskripsiLengkap: "Permandian Air Panas Pincara merupakan salah satu destinasi wisata alam populer di Kabupaten Luwu Utara. Tempat ini menawarkan kolam air panas alami yang dipercaya dapat membantu relaksasi tubuh. Dikelilingi pepohonan hijau dan suasana alam yang tenang, lokasi ini cocok untuk beristirahat dan menikmati wisata bersama keluarga maupun teman."
  },

  // --- LUWU TIMUR ---
  {
    nama: "Pulau Bulu Poloe",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/jBJyTPJGrqdUgRCbA",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028768/sulselgo/liwnwc1trgmmrvekkizw.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028768/sulselgo/liwnwc1trgmmrvekkizw.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028781/sulselgo/eqy5a4jmeskjjcmbeglm.png"
    ],
    deskripsiSingkat: "Pulau eksotis dengan laut biru jernih dan panorama alam tropis yang memukau.",
    deskripsiLengkap: "Pulau Bulu’Poloe merupakan salah satu destinasi wisata bahari di Kabupaten Luwu Timur yang menawarkan pemandangan laut biru jernih dan hamparan pasir putih yang indah. Pulau ini dikelilingi hutan hijau tropis dan cocok untuk wisata alam, fotografi, serta menikmati suasana pantai yang tenang dan alami."
  },
  {
    nama: "Danau Towuti",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/JEA6sPp3ueuLWeAF8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027457/sulselgo/aqcngo18gjbd2hv1ko6x.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027457/sulselgo/aqcngo18gjbd2hv1ko6x.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027446/sulselgo/npdntjxta3tsitf9x0c5.png"
    ],
    deskripsiSingkat: "Danau alami dengan air tenang dan panorama hijau yang menyejukkan.",
    deskripsiLengkap: "Danau Towuti merupakan salah satu danau terbesar di Sulawesi yang berada di Kabupaten Luwu Timur. Danau ini memiliki air yang jernih dengan panorama alam hijau di sekelilingnya. Suasana yang tenang menjadikan Danau Towuti cocok untuk bersantai, memancing, wisata perahu, maupun menikmati keindahan alam bersama keluarga."
  },
  {
    nama: "Danau Matano",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/rZ4hz8Ezhcs7k8M3A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027385/sulselgo/daahc7bxlmfeoltnopg5.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027385/sulselgo/daahc7bxlmfeoltnopg5.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027399/sulselgo/v5l0xjshpqyoec0coplf.png"
    ],
    deskripsiSingkat: "Danau terdalam dengan panorama pulau kecil dan air biru yang mempesona.",
    deskripsiLengkap: "Danau Matano merupakan salah satu danau terdalam di Indonesia yang terletak di Kabupaten Luwu Timur. Danau ini terkenal dengan airnya yang sangat jernih dan pemandangan alam yang memukau. Dikelilingi pepohonan hijau dan pulau-pulau kecil, Danau Matano menjadi destinasi favorit wisatawan untuk menikmati keindahan alam dan suasana yang damai."
  },
  {
    nama: "Permandian Bukit Kasih",
    kategori: "Wisata Alam Darat",
    kabupaten: "Luwu Timur",
    lokasi: "https://maps.app.goo.gl/7tZntaZdDTJJKiFs9",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028593/sulselgo/eqmk7njqhq9uoeplkspz.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028593/sulselgo/eqmk7njqhq9uoeplkspz.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028605/sulselgo/wpnny0lxq5bgdjafxcu4.png"
    ],
    deskripsiSingkat: "Permandian dengan kolam luas dan suasana pegunungan yang sejuk serta nyaman.",
    deskripsiLengkap: "Permandian Bukit Kasih merupakan salah satu destinasi wisata rekreasi di Kabupaten Luwu Timur yang menawarkan kolam pemandian luas dengan air yang jernih dan suasana alam yang menenangkan. Dikelilingi pemandangan hijau dan udara segar khas pegunungan, tempat ini cocok untuk bersantai, berenang, dan menikmati liburan bersama keluarga maupun teman."
  },

  // --- TORAJA UTARA ---
  {
    nama: "Danau Limbong",
    kategori: "Wisata Alam Darat",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/bTnzR4Fp3kTJer5T8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027357/sulselgo/bj6omgqkgu8k4sa8yfq7.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027357/sulselgo/bj6omgqkgu8k4sa8yfq7.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027371/sulselgo/nfl2trojiik6wsrm1yac.png"
    ],
    deskripsiSingkat: "Danau alami dengan air hijau jernih and panorama tebing batu yang memukau.",
    deskripsiLengkap: "Danau Limbong merupakan salah satu destinasi wisata alam di Toraja Utara yang terkenal dengan airnya yang berwarna hijau alami dan suasana yang sangat tenang. Dikelilingi pepohonan lebat serta tebing batu yang eksotis, tempat ini cocok untuk menikmati keindahan alam, bersantai, dan fotografi."
  },
  {
    nama: "Londa Ancient Graveyard",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/pDWvx7UpLSC4Cvwy5",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027895/sulselgo/zeaep1uqthsp2xvcezt6.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027895/sulselgo/zeaep1uqthsp2xvcezt6.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027910/sulselgo/o5yxtrv21ztctdlpaarm.png"
    ],
    deskripsiSingkat: "Wisata gua pemakaman tradisional khas Toraja yang penuh nilai sejarah.",
    deskripsiLengkap: "Londa merupakan salah satu situs budaya dan sejarah terkenal di Toraja Utara yang menampilkan kompleks pemakaman tradisional di dalam gua batu. Tempat ini memiliki peti mati khas Toraja serta patung tau-tau yang menjadi simbol budaya masyarakat Toraja. Londa menjadi destinasi wisata budaya yang menarik bagi wisatawan lokal maupun mancanegara."
  },
  {
    nama: "Museum Ne Gandeng",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/vSv7eZVD7goZu1fj8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028084/sulselgo/odoac3rtccyvdsqtlkap.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028084/sulselgo/odoac3rtccyvdsqtlkap.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028100/sulselgo/m3gd9psilywr8hm5ai57.png"
    ],
    deskripsiSingkat: "Museum budaya Toraja dengan rumah adat khas dan peninggalan sejarah.",
    deskripsiLengkap: "Museum Ne’Gandeng merupakan salah satu tempat wisata budaya di Toraja Utara yang memperkenalkan sejarah, adat, dan tradisi masyarakat Toraja. Dengan latar rumah adat Tongkonan yang khas dan koleksi peninggalan budaya, museum ini menjadi tempat edukasi sekaligus wisata budaya yang menarik untuk dikunjungi."
  },
  {
    nama: "Kolam Renang Alam Tilanga",
    kategori: "Wisata Alam Darat",
    kabupaten: "Toraja Utara",
    lokasi: "https://maps.app.goo.gl/es7iLDgXMi7mGZj96",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027813/sulselgo/zyc3jblrofan2paj3u8d.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027813/sulselgo/zyc3jblrofan2paj3u8d.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027830/sulselgo/txjc90e9xxmzjgsosnnn.png"
    ],
    deskripsiSingkat: "Kolam alami dengan air biru jernih di tengah bebatuan dan alam hijau.",
    deskripsiLengkap: "Kolam Renang Alam Tilanga merupakan salah satu wisata alam populer di Toraja Utara yang menawarkan air alami berwarna biru jernih dengan suasana yang sejuk dan asri. Dikelilingi bebatuan alam dan pepohonan hijau, tempat ini menjadi lokasi favorit wisatawan untuk berenang, bersantai, dan menikmati keindahan alam Toraja."
  },

  // --- TANA TORAJA ---
  {
    nama: "Buntu Burake",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/hBEu2rS5frc4Z3166",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027278/sulselgo/acpyjiiaf2abre9gqnxw.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027278/sulselgo/acpyjiiaf2abre9gqnxw.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781027292/sulselgo/x0aemjoarfzmki2jdav8.png"
    ],
    deskripsiSingkat: "Destinasi wisata pegunungan dengan patung Yesus raksasa dan panorama alam Toraja.",
    deskripsiLengkap: "Buntu Burake merupakan salah satu destinasi wisata terkenal di Tana Toraja yang menghadirkan patung Yesus raksasa di atas pegunungan. Tempat ini menawarkan panorama alam yang sangat indah dengan pemandangan perbukitan dan pegunungan khas Toraja. Selain menjadi wisata religi, Buntu Burake juga menjadi lokasi favorit wisatawan untuk menikmati udara sejuk dan berfoto."
  },
  {
    nama: "Pohon Kuburan Bayi Kambira",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/pg41XdWfQ49TSfa58",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028677/sulselgo/fc5o9o1qs9epwwcojsqf.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028677/sulselgo/fc5o9o1qs9epwwcojsqf.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028693/sulselgo/frbrh8fmsmjdew1ji4du.png"
    ],
    deskripsiSingkat: "Situs budaya unik berupa pemakaman bayi di dalam batang pohon besar.",
    deskripsiLengkap: "Pohon Kuburan Bayi Kambira merupakan salah satu situs budaya dan tradisi unik masyarakat Toraja. Bayi yang meninggal sebelum tumbuh gigi dimakamkan di dalam batang pohon besar sebagai simbol kembali ke alam. Tempat ini menjadi wisata budaya yang menarik karena memiliki nilai sejarah dan tradisi adat yang masih dijaga hingga sekarang."
  },
  {
    nama: "Tebing Romantis Ollon",
    kategori: "Wisata Alam Darat",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/m4P4YXYt4M77jkCL8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029477/sulselgo/fmtf2y42zqj14arosttx.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029477/sulselgo/fmtf2y42zqj14arosttx.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029489/sulselgo/nftnd2ss1sb3qkluwtem.png"
    ],
    deskripsiSingkat: "Perbukitan hijau dengan panorama pegunungan yang indah dan romantis.",
    deskripsiLengkap: "Tebing Romantis Ollon merupakan salah satu destinasi wisata alam populer di Tana Toraja yang terkenal dengan hamparan bukit hijau dan panorama pegunungan yang menakjubkan. Suasana yang sejuk dan pemandangan luas menjadikan tempat ini cocok untuk bersantai, berkemah, jika ingin fotografi, dan menikmati keindahan alam Toraja."
  },
  {
    nama: "Permandian Air Panas Makula",
    kategori: "Wisata Alam Darat",
    kabupaten: "Tana Toraja",
    lokasi: "https://maps.app.goo.gl/cSG5vhTyuMeaGFSw8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028482/sulselgo/xy7lletf5lanezchmi31.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028482/sulselgo/xy7lletf5lanezchmi31.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028496/sulselgo/qdjlczfyqps3ybexalks.png"
    ],
    deskripsiSingkat: "Permandian air panas alami di Tana Toraja dengan kandungan belerang. Tempat ini cocok untuk relaksasi dan menikmati suasana alam yang tenang. Dikelilingi pepohonan hijau dan udara segar, lokasi ini menjadi favorit wisatawan untuk beristirahat bersama keluarga."
  },

  // --- KEPULAUAN SELAYAR ---
  {
    nama: "Taman Nasional Bonerate",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/1GBdbf6fAkeY9xr87",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029252/sulselgo/sx4wxeq05z7wphlt87aq.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029252/sulselgo/sx4wxeq05z7wphlt87aq.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781029266/sulselgo/dr3jog3tv2ytifybtbyl.png"
    ],
    deskripsiSingkat: "Kawasan wisata bahari dengan pulau tropis, pasir putih, dan laut biru jernih.",
    deskripsiLengkap: "Taman Nasional Bonerate merupakan salah satu destinasi wisata bahari terkenal di Kepulauan Selayar yang memiliki keindahan laut luar biasa. Dengan hamparan pasir putih, air laut jernih berwarna biru toska, serta terumbu karang yang indah, tempat ini menjadi lokasi favorit wisatawan untuk snorkeling, diving, dan menikmati panorama alam tropis."
  },
  {
    nama: "Pantai Liang Kareta",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/QZKJ9gGP5AimFuE3A",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028200/sulselgo/hi8v7k7cjvyav1zpqizb.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028200/sulselgo/hi8v7k7cjvyav1zpqizb.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028215/sulselgo/xxhsnree0leqc4elux6i.png"
    ],
    deskripsiSingkat: "Pantai alami dengan air laut hijau jernih dan suasana yang tenang.",
    deskripsiLengkap: "Pantai Liang Kareta merupakan salah satu wisata pantai indah di Kepulauan Selayar yang menawarkan air laut jernih dan suasana alami yang masih asri. Pantai ini dikelilingi bebatuan karang serta pepohonan hijau yang memberikan pemandangan eksotis dan cocok untuk bersantai maupun menikmati wisata alam."
  },
  {
    nama: "Perkampungan Tua Bitombang",
    kategori: "Wisata Budaya & Sejarah",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/gtBJAfJFSzyuPbZs8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028407/sulselgo/tz76vdivvidxdd9vtcgj.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028407/sulselgo/tz76vdivvidxdd9vtcgj.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028422/sulselgo/nm7dkcilcqauhdl3wuu0.png"
    ],
    deskripsiSingkat: "Perkampungan tradisional dengan rumah panggung tinggi khas budaya lokal.",
    deskripsiLengkap: "Perkampungan Tua Bitombang merupakan salah satu destinasi wisata budaya di Kepulauan Selayar yang terkenal dengan rumah adat panggung tinggi yang unik dan bersejarah. Rumah-rumah tradisional ini dibangun dengan arsitektur khas masyarakat setempat dan dikelilingi suasana alam hijau yang masih alami."
  },
  {
    nama: "Pulau Bahuluang",
    kategori: "Wisata Laut & Pesisir",
    kabupaten: "Kepulauan Selayar",
    lokasi: "https://maps.app.goo.gl/X1GiQsXUtnq3jqog8",
    gambar: "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028740/sulselgo/pme6ae6mme9zbvnbqd0g.png",
    galeri: [
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028740/sulselgo/pme6ae6mme9zbvnbqd0g.png",
      "https://res.cloudinary.com/dnxo5qbrg/image/upload/f_auto,q_auto,w_800/v1781028756/sulselgo/f5bgakmmfkkci5ptsxmk.png"
    ],
    deskripsiSingkat: "Pulau pasir putih eksotis dengan panorama laut biru yang mempesona.",
    deskripsiLengkap: "Pulau Bahuluang merupakan destinasi wisata bahari di Kepulauan Selayar yang terkenal dengan hamparan pasir putih panjang di tengah laut biru jernih. Pulau ini menawarkan pemandangan alam yang sangat indah dan menjadi lokasi favorit wisatawan untuk berfoto, menikmati pantai, serta menikmati suasana tropis yang tenang."
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