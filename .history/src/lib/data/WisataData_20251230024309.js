const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .trim();
}

// =====================
// PROVINSI DATA
// =====================
export const provincesData = [
  { id: 1, name: "Aceh", capital: "Banda Aceh" },
  { id: 2, name: "Bali", capital: "Denpasar" },
  { id: 3, name: "Banten", capital: "Serang" },
  { id: 4, name: "Bengkulu", capital: "Bengkulu" },
  { id: 5, name: "DI Yogyakarta", capital: "Yogyakarta" },
  { id: 6, name: "DKI Jakarta", capital: "Jakarta" },
  { id: 7, name: "Gorontalo", capital: "Gorontalo" },
  { id: 8, name: "Jambi", capital: "Jambi" },
  { id: 9, name: "Jawa Barat", capital: "Bandung" },
  { id: 10, name: "Jawa Tengah", capital: "Semarang" },
  { id: 11, name: "Jawa Timur", capital: "Surabaya" },
  { id: 12, name: "Kalimantan Barat", capital: "Pontianak" },
  { id: 13, name: "Kalimantan Selatan", capital: "Banjarmasin" },
  { id: 14, name: "Kalimantan Tengah", capital: "Palangka Raya" },
  { id: 15, name: "Kalimantan Timur", capital: "Samarinda" },
  { id: 16, name: "Kalimantan Utara", capital: "Tanjung Selor" },
  { id: 17, name: "Kepulauan Bangka Belitung", capital: "Pangkal Pinang" },
  { id: 18, name: "Kepulauan Riau", capital: "Tanjungpinang" },
  { id: 19, name: "Lampung", capital: "Bandar Lampung" },
  { id: 20, name: "Maluku", capital: "Ambon" },
  { id: 21, name: "Maluku Utara", capital: "Sofifi" },
  { id: 22, name: "Nusa Tenggara Barat", capital: "Mataram" },
  { id: 23, name: "Nusa Tenggara Timur", capital: "Kupang" },
  { id: 24, name: "Papua", capital: "Jayapura" },
  { id: 25, name: "Papua Barat", capital: "Manokwari" },
  { id: 26, name: "Papua Barat Daya", capital: "Sorong" },
  { id: 27, name: "Papua Pegunungan", capital: "Jayawijaya" },
  { id: 28, name: "Papua Selatan", capital: "Merauke" },
  { id: 29, name: "Papua Tengah", capital: "Nabire" },
  { id: 30, name: "Riau", capital: "Pekanbaru" },
  { id: 31, name: "Sulawesi Barat", capital: "Mamuju" },
  { id: 32, name: "Sulawesi Selatan", capital: "Makassar" },
  { id: 33, name: "Sulawesi Tengah", capital: "Palu" },
  { id: 34, name: "Sulawesi Tenggara", capital: "Kendari" },
  { id: 35, name: "Sulawesi Utara", capital: "Manado" },
  { id: 36, name: "Sumatera Barat", capital: "Padang" },
  { id: 37, name: "Sumatera Selatan", capital: "Palembang" },
  { id: 38, name: "Sumatera Utara", capital: "Medan" },
];

// =====================
// DEFAULT WISATA DATA WITH FULL STRUCTURE
// =====================
export const defaultWisataData = [
  // CONTOH DESTINASI LENGKAP
  {
  id: 1,
  name: "Kawah Putih",
  location: "Bandung",
  province: "Jawa Barat",
  category: "alam",

  // PRICING
  price: "Rp 100.000",
  priceNum: 100000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 100.000",

  // MEDIA
  image: `/images/${slugify("Kawah Putih")}.jpg`,
  gallery: [`/images/${slugify("Kawah Putih")}.jpg`],
  videoUrl: null,

  // DETAILS
  description: "Kawah Putih adalah danau kawah dengan air berwarna putih kehijauan yang terletak di Gunung Patuha, Ciwidey. Tempat ini menawarkan pemandangan alam yang eksotis dengan suhu udara yang sejuk berkisar 8-22°C.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir Luas", "Toilet", "Musholla", "Warung Makan", "Spot Foto Instagramable", "Gazebo"],
  aktivitas: ["Fotografi", "Trekking Ringan", "Menikmati Pemandangan", "Wisata Edukasi"],
  tips: "",

  // LOCATION
  coordinates: null,

  // ACCOMMODATION
  hotelTerdekat: []
},
{
  id: 2,
  name: "Tangkuban Perahu",
  location: "Bandung Barat",
  province: "Jawa Barat",
  category: "alam",

  // PRICING
  price: "Rp 75.000",
  priceNum: 75000,
  htmLokal: "Rp 37.500",
  htmTuris: "Rp 75.000",

  // MEDIA
  image: `/images/${slugify("Tangkuban Perahu")}.jpg`,
  gallery: [`/images/${slugify("Tangkuban Perahu")}.jpg`],
  videoUrl: null,

  // DETAILS
  description: "Tangkuban Perahu merupakan gunung berapi aktif dengan kawah yang dapat diakses langsung oleh wisatawan dan menawarkan panorama alam khas pegunungan.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan", "Toko Souvenir"],
  aktivitas: ["Melihat Kawah", "Fotografi", "Wisata Edukasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 3,
  name: "Pantai Pangandaran",
  location: "Pangandaran",
  province: "Jawa Barat",
  category: "pantai",

  // PRICING
  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 30.000",

  // MEDIA
  image: `/images/${slugify("Pantai Pangandaran")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pangandaran")}.jpg`],
  videoUrl: null,

  // DETAILS
  description: "Pantai Pangandaran merupakan destinasi pantai populer dengan pasir hitam-putih, ombak tenang, dan pemandangan matahari terbit serta terbenam.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Penginapan", "Warung Makan"],
  aktivitas: ["Bermain Air", "Bersantai", "Fotografi", "Menikmati Sunset"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 4,
  name: "Situ Patenggang",
  location: "Bandung",
  province: "Jawa Barat",
  category: "alam",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 12.500",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Situ Patenggang")}.jpg`,
  gallery: [`/images/${slugify("Situ Patenggang")}.jpg`],
  videoUrl: null,

  description: "Situ Patenggang adalah danau alami di kawasan Ciwidey yang menawarkan suasana tenang dengan panorama pegunungan.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Perahu Wisata"],
  aktivitas: ["Naik Perahu", "Fotografi", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 5,
  name: "Curug Cimahi",
  location: "Cimahi",
  province: "Jawa Barat",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Curug Cimahi")}.jpg`,
  gallery: [`/images/${slugify("Curug Cimahi")}.jpg`],
  videoUrl: null,

  description: "Curug Cimahi atau Air Terjun Pelangi menawarkan panorama air terjun tinggi dengan pencahayaan warna-warni di malam hari.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Jalur Trekking"],
  aktivitas: ["Trekking", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 6,
  name: "Gunung Papandayan",
  location: "Garut",
  province: "Jawa Barat",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Gunung Papandayan")}.jpg`,
  gallery: [`/images/${slugify("Gunung Papandayan")}.jpg`],
  videoUrl: null,

  description: "Gunung Papandayan merupakan gunung favorit pendaki pemula dengan jalur landai dan pemandangan kawah aktif.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Camping Ground", "Toilet"],
  aktivitas: ["Hiking", "Camping", "Fotografi Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 7,
  name: "Pantai Santolo",
  location: "Garut",
  province: "Jawa Barat",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 7.500",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Santolo")}.jpg`,
  gallery: [`/images/${slugify("Pantai Santolo")}.jpg`],
  videoUrl: null,

  description: "Pantai Santolo menawarkan pasir putih dan ombak yang relatif tenang, cocok untuk wisata keluarga.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan", "Penginapan"],
  aktivitas: ["Bermain Air", "Memancing", "Menikmati Sunset"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 8,
  name: "Stone Garden",
  location: "Padalarang",
  province: "Jawa Barat",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Stone Garden")}.jpg`,
  gallery: [`/images/${slugify("Stone Garden")}.jpg`],
  videoUrl: null,

  description: "Stone Garden adalah kawasan bebatuan purba dengan pemandangan perbukitan dan kota dari ketinggian.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Hiking Ringan"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 9,
  name: "Saung Angklung Udjo",
  location: "Bandung",
  province: "Jawa Barat",
  category: "budaya",

  price: "Rp 60.000",
  priceNum: 60000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 60.000",

  image: `/images/${slugify("Saung Angklung Udjo")}.jpg`,
  gallery: [`/images/${slugify("Saung Angklung Udjo")}.jpg`],
  videoUrl: null,

  description: "Saung Angklung Udjo merupakan pusat pelestarian budaya Sunda dengan pertunjukan musik angklung.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Toko Souvenir"],
  aktivitas: ["Menonton Pertunjukan", "Wisata Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 10,
  name: "Alun-Alun Bandung",
  location: "Bandung",
  province: "Jawa Barat",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Alun-Alun Bandung")}.jpg`,
  gallery: [`/images/${slugify("Alun-Alun Bandung")}.jpg`],
  videoUrl: null,

  description: "Alun-Alun Bandung adalah ruang publik ikonik di pusat kota yang menjadi tempat berkumpul warga.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Masjid Raya"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Kota"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // DI YOGYAKARTA (11-20)
  {
  id: 11,
  name: "Candi Borobudur",
  location: "Magelang",
  province: "DI Yogyakarta",
  category: "budaya",

  // PRICING
  price: "Rp 150.000",
  priceNum: 150000,
  htmLokal: "Rp 75.000",
  htmTuris: "Rp 150.000",

  // MEDIA
  image: `/images/${slugify("Candi Borobudur")}.jpg`,
  gallery: [`/images/${slugify("Candi Borobudur")}.jpg`],
  videoUrl: null,

  // DETAILS
  description: "Candi Borobudur merupakan candi Buddha terbesar di dunia yang menjadi warisan budaya UNESCO dan ikon wisata Indonesia.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir Luas", "Toilet", "Pusat Informasi", "Toko Souvenir"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Edukasi Budaya"],
  tips: "",

  // LOCATION
  coordinates: null,

  // ACCOMMODATION
  hotelTerdekat: []
},
{
  id: 12,
  name: "Candi Prambanan",
  location: "Sleman",
  province: "DI Yogyakarta",
  category: "budaya",

  price: "Rp 100.000",
  priceNum: 100000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 100.000",

  image: `/images/${slugify("Candi Prambanan")}.jpg`,
  gallery: [`/images/${slugify("Candi Prambanan")}.jpg`],
  videoUrl: null,

  description: "Candi Prambanan adalah kompleks candi Hindu terbesar di Indonesia dengan arsitektur megah dan nilai sejarah tinggi.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Edukasi Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 13,
  name: "Keraton Yogyakarta",
  location: "Yogyakarta",
  province: "DI Yogyakarta",
  category: "budaya",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 12.500",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Keraton Yogyakarta")}.jpg`,
  gallery: [`/images/${slugify("Keraton Yogyakarta")}.jpg`],
  videoUrl: null,

  description: "Keraton Yogyakarta merupakan pusat kebudayaan Jawa dan kediaman resmi Sultan Yogyakarta.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Museum"],
  aktivitas: ["Wisata Budaya", "Edukasi Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 14,
  name: "Taman Sari",
  location: "Yogyakarta",
  province: "DI Yogyakarta",
  category: "budaya",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 7.500",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Taman Sari")}.jpg`,
  gallery: [`/images/${slugify("Taman Sari")}.jpg`],
  videoUrl: null,

  description: "Taman Sari adalah kompleks bekas taman kerajaan yang terkenal dengan arsitektur unik dan lorong bawah tanah.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Toilet", "Pemandu Wisata"],
  aktivitas: ["Fotografi", "Wisata Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 15,
  name: "Pantai Parangtritis",
  location: "Bantul",
  province: "DI Yogyakarta",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Parangtritis")}.jpg`,
  gallery: [`/images/${slugify("Pantai Parangtritis")}.jpg`],
  videoUrl: null,

  description: "Pantai Parangtritis merupakan pantai legendaris dengan ombak besar dan panorama matahari terbenam.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Menikmati Sunset", "Bermain Pasir", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 16,
  name: "Pantai Indrayanti",
  location: "Gunungkidul",
  province: "DI Yogyakarta",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 7.500",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Indrayanti")}.jpg`,
  gallery: [`/images/${slugify("Pantai Indrayanti")}.jpg`],
  videoUrl: null,

  description: "Pantai Indrayanti dikenal dengan pasir putih bersih dan fasilitas pantai yang tertata rapi.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 17,
  name: "Goa Pindul",
  location: "Gunungkidul",
  province: "DI Yogyakarta",
  category: "alam",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Goa Pindul")}.jpg`,
  gallery: [`/images/${slugify("Goa Pindul")}.jpg`],
  videoUrl: null,

  description: "Goa Pindul menawarkan pengalaman cave tubing menyusuri sungai bawah tanah yang unik.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata"],
  aktivitas: ["Cave Tubing", "Petualangan Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 18,
  name: "Hutan Pinus Mangunan",
  location: "Bantul",
  province: "DI Yogyakarta",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 2.500",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Hutan Pinus Mangunan")}.jpg`,
  gallery: [`/images/${slugify("Hutan Pinus Mangunan")}.jpg`],
  videoUrl: null,

  description: "Hutan Pinus Mangunan menawarkan suasana sejuk dengan deretan pohon pinus yang cocok untuk bersantai.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 19,
  name: "Tebing Breksi",
  location: "Sleman",
  province: "DI Yogyakarta",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Tebing Breksi")}.jpg`,
  gallery: [`/images/${slugify("Tebing Breksi")}.jpg`],
  videoUrl: null,

  description: "Tebing Breksi adalah kawasan bekas tambang batu yang disulap menjadi destinasi wisata dengan pemandangan unik.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 20,
  name: "Malioboro",
  location: "Yogyakarta",
  province: "DI Yogyakarta",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Malioboro")}.jpg`,
  gallery: [`/images/${slugify("Malioboro")}.jpg`],
  videoUrl: null,

  description: "Malioboro adalah kawasan wisata belanja dan kuliner yang paling ikonik di Yogyakarta.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Kuliner"],
  aktivitas: ["Wisata Belanja", "Kuliner", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // JAWA TENGAH (21-30) - TEMPLATE CONTINUE
  {
  id: 21,
  name: "Lawang Sewu",
  location: "Semarang",
  province: "Jawa Tengah",
  category: "budaya",

  price: "Rp 40.000",
  priceNum: 40000,
  htmLokal: "Rp 40.000",
  htmTuris: "Rp 40.000",

  image: `/images/${slugify("Lawang Sewu")}.jpg`,
  gallery: [`/images/${slugify("Lawang Sewu")}.jpg`],
  videoUrl: null,

  description: "Lawang Sewu merupakan bangunan bersejarah peninggalan kolonial Belanda yang terkenal dengan arsitektur klasik dan nilai sejarahnya.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata", "Museum"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Edukasi Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 22,
  name: "Dieng Plateau",
  location: "Wonosobo",
  province: "Jawa Tengah",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Dieng Plateau")}.jpg`,
  gallery: [`/images/${slugify("Dieng Plateau")}.jpg`],
  videoUrl: null,

  description: "Dieng Plateau adalah kawasan dataran tinggi yang menawarkan panorama alam pegunungan, kawah vulkanik, dan telaga alami.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Alam", "Fotografi", "Menikmati Panorama"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 23,
  name: "Umbul Ponggok",
  location: "Klaten",
  province: "Jawa Tengah",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Umbul Ponggok")}.jpg`,
  gallery: [`/images/${slugify("Umbul Ponggok")}.jpg`],
  videoUrl: null,

  description: "Umbul Ponggok merupakan wisata mata air alami yang terkenal dengan air jernih dan aktivitas snorkeling air tawar.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Toilet", "Area Parkir", "Penyewaan Alat"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Air"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 24,
  name: "Pantai Menganti",
  location: "Kebumen",
  province: "Jawa Tengah",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Menganti")}.jpg`,
  gallery: [`/images/${slugify("Pantai Menganti")}.jpg`],
  videoUrl: null,

  description: "Pantai Menganti menawarkan keindahan pasir putih dan tebing karst dengan panorama laut yang menawan.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Menikmati Pantai", "Fotografi", "Sunset Hunting"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 25,
  name: "Candi Gedong Songo",
  location: "Semarang",
  province: "Jawa Tengah",
  category: "budaya",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Candi Gedong Songo")}.jpg`,
  gallery: [`/images/${slugify("Candi Gedong Songo")}.jpg`],
  videoUrl: null,

  description: "Candi Gedong Songo adalah kompleks candi Hindu yang terletak di lereng Gunung Ungaran dengan udara sejuk dan panorama alam.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Trekking Ringan", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 26,
  name: "Brown Canyon",
  location: "Semarang",
  province: "Jawa Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Brown Canyon")}.jpg`,
  gallery: [`/images/${slugify("Brown Canyon")}.jpg`],
  videoUrl: null,

  description: "Brown Canyon merupakan kawasan bekas tambang yang menghadirkan pemandangan tebing-tebing tinggi yang unik.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir Sederhana"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 27,
  name: "Bukit Sikunir",
  location: "Dieng",
  province: "Jawa Tengah",
  category: "alam",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Bukit Sikunir")}.jpg`,
  gallery: [`/images/${slugify("Bukit Sikunir")}.jpg`],
  videoUrl: null,

  description: "Bukit Sikunir terkenal sebagai spot terbaik untuk menikmati golden sunrise dengan latar pegunungan Dieng.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Hiking", "Fotografi", "Menikmati Sunrise"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 28,
  name: "Keraton Surakarta",
  location: "Solo",
  province: "Jawa Tengah",
  category: "budaya",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Keraton Surakarta")}.jpg`,
  gallery: [`/images/${slugify("Keraton Surakarta")}.jpg`],
  videoUrl: null,

  description: "Keraton Surakarta merupakan pusat kebudayaan Jawa yang menyimpan berbagai peninggalan sejarah dan tradisi.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Toilet", "Museum", "Pemandu Wisata"],
  aktivitas: ["Wisata Budaya", "Edukasi Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 29,
  name: "Museum Sangiran",
  location: "Sragen",
  province: "Jawa Tengah",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Museum Sangiran")}.jpg`,
  gallery: [`/images/${slugify("Museum Sangiran")}.jpg`],
  videoUrl: null,

  description: "Museum Sangiran merupakan situs manusia purba yang menyimpan koleksi fosil dan artefak bersejarah.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Museum"],
  aktivitas: ["Wisata Edukasi", "Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 30,
  name: "Alun-Alun Kidul Solo",
  location: "Solo",
  province: "Jawa Tengah",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Alun-Alun Kidul Solo")}.jpg`,
  gallery: [`/images/${slugify("Alun-Alun Kidul Solo")}.jpg`],
  videoUrl: null,

  description: "Alun-Alun Kidul Solo merupakan ruang publik yang menjadi pusat aktivitas masyarakat dan wisata budaya.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Terbuka", "Pedagang Kuliner"],
  aktivitas: ["Wisata Kuliner", "Bersantai", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // Continue for remaining 300 destinations with the same pattern...
  // For brevity, showing template for next destinations

  // JAWA TIMUR (31-40)
  {
  id: 31,
  name: "Gunung Bromo",
  location: "Malang",
  province: "Jawa Timur",
  category: "alam",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Gunung Bromo")}.jpg`,
  gallery: [`/images/${slugify("Gunung Bromo")}.jpg`],
  videoUrl: null,

  description: "Gunung Bromo merupakan gunung berapi aktif yang terkenal dengan panorama lautan pasir dan pemandangan matahari terbit yang ikonik.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Jeep Wisata", "Warung Makan"],
  aktivitas: ["Menikmati Sunrise", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 32,
  name: "Kawah Ijen",
  location: "Banyuwangi",
  province: "Jawa Timur",
  category: "alam",

  price: "Rp 80.000",
  priceNum: 80000,
  htmLokal: "Rp 80.000",
  htmTuris: "Rp 80.000",

  image: `/images/${slugify("Kawah Ijen")}.jpg`,
  gallery: [`/images/${slugify("Kawah Ijen")}.jpg`],
  videoUrl: null,

  description: "Kawah Ijen terkenal dengan fenomena api biru dan danau kawah berwarna toska yang memukau.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pos Pendakian"],
  aktivitas: ["Pendakian", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 33,
  name: "Pantai Papuma",
  location: "Jember",
  province: "Jawa Timur",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pantai Papuma")}.jpg`,
  gallery: [`/images/${slugify("Pantai Papuma")}.jpg`],
  videoUrl: null,

  description: "Pantai Papuma menawarkan hamparan pasir putih dengan batuan karang besar dan panorama laut selatan.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Menikmati Pantai", "Fotografi", "Sunset Hunting"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 34,
  name: "Tumpak Sewu",
  location: "Lumajang",
  province: "Jawa Timur",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Tumpak Sewu")}.jpg`,
  gallery: [`/images/${slugify("Tumpak Sewu")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Tumpak Sewu dikenal sebagai salah satu air terjun terindah di Indonesia dengan aliran air yang melingkar.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Lokal"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 35,
  name: "Museum Angkut",
  location: "Batu",
  province: "Jawa Timur",
  category: "budaya",

  price: "Rp 120.000",
  priceNum: 120000,
  htmLokal: "Rp 120.000",
  htmTuris: "Rp 120.000",

  image: `/images/${slugify("Museum Angkut")}.jpg`,
  gallery: [`/images/${slugify("Museum Angkut")}.jpg`],
  videoUrl: null,

  description: "Museum Angkut merupakan museum transportasi modern dengan koleksi kendaraan dari berbagai era dan negara.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Food Court"],
  aktivitas: ["Wisata Edukasi", "Fotografi", "Rekreasi Keluarga"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 36,
  name: "Jatim Park 1",
  location: "Batu",
  province: "Jawa Timur",
  category: "budaya",

  price: "Rp 130.000",
  priceNum: 130000,
  htmLokal: "Rp 130.000",
  htmTuris: "Rp 130.000",

  image: `/images/${slugify("Jatim Park 1")}.jpg`,
  gallery: [`/images/${slugify("Jatim Park 1")}.jpg`],
  videoUrl: null,

  description: "Jatim Park 1 adalah taman rekreasi edukatif yang menggabungkan wahana permainan dan pembelajaran.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Wahana Permainan"],
  aktivitas: ["Rekreasi", "Wisata Edukasi", "Keluarga"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 37,
  name: "Pantai Klayar",
  location: "Pacitan",
  province: "Jawa Timur",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Klayar")}.jpg`,
  gallery: [`/images/${slugify("Pantai Klayar")}.jpg`],
  videoUrl: null,

  description: "Pantai Klayar dikenal dengan batu karang unik dan semburan air laut alami yang disebut seruling laut.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Menikmati Pantai", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 38,
  name: "Candi Penataran",
  location: "Blitar",
  province: "Jawa Timur",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Candi Penataran")}.jpg`,
  gallery: [`/images/${slugify("Candi Penataran")}.jpg`],
  videoUrl: null,

  description: "Candi Penataran merupakan kompleks candi Hindu terbesar di Jawa Timur dengan nilai sejarah tinggi.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Edukasi Budaya", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 39,
  name: "Makam Sunan Ampel",
  location: "Surabaya",
  province: "Jawa Timur",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Makam Sunan Ampel")}.jpg`,
  gallery: [`/images/${slugify("Makam Sunan Ampel")}.jpg`],
  videoUrl: null,

  description: "Makam Sunan Ampel merupakan destinasi wisata religi yang ramai dikunjungi peziarah dari berbagai daerah.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Toilet", "Area Parkir", "Tempat Ibadah"],
  aktivitas: ["Wisata Religi", "Ziarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 40,
  name: "Alun-Alun Kota Batu",
  location: "Batu",
  province: "Jawa Timur",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Alun-Alun Kota Batu")}.jpg`,
  gallery: [`/images/${slugify("Alun-Alun Kota Batu")}.jpg`],
  videoUrl: null,

  description: "Alun-Alun Kota Batu adalah ruang publik yang menjadi pusat rekreasi dan aktivitas masyarakat.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Terbuka", "Kuliner", "Wahana Anak"],
  aktivitas: ["Bersantai", "Wisata Kuliner", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // DKI JAKARTA (41–50)
  // =====================
  {
  id: 41,
  name: "Monas",
  location: "Jakarta Pusat",
  province: "DKI Jakarta",
  category: "budaya",

  price: "Rp 24.000",
  priceNum: 24000,
  htmLokal: "Rp 24.000",
  htmTuris: "Rp 24.000",

  image: `/images/${slugify("Monas")}.jpg`,
  gallery: [`/images/${slugify("Monas")}.jpg`],
  videoUrl: null,

  description: "Monumen Nasional merupakan ikon Jakarta yang dibangun untuk mengenang perjuangan kemerdekaan Indonesia.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Museum", "Lift Monumen"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "Datang pagi untuk menghindari antrean panjang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 42,
  name: "Museum Nasional",
  location: "Jakarta Pusat",
  province: "DKI Jakarta",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Museum Nasional")}.jpg`,
  gallery: [`/images/${slugify("Museum Nasional")}.jpg`],
  videoUrl: null,

  description: "Museum Nasional menyimpan koleksi sejarah, arkeologi, dan budaya dari seluruh Nusantara.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Ruang Pameran"],
  aktivitas: ["Wisata Edukasi", "Sejarah", "Fotografi"],
  tips: "Luangkan waktu minimal 2 jam agar puas berkeliling.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 43,
  name: "Kota Tua Jakarta",
  location: "Jakarta Barat",
  province: "DKI Jakarta",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Kota Tua Jakarta")}.jpg`,
  gallery: [`/images/${slugify("Kota Tua Jakarta")}.jpg`],
  videoUrl: null,

  description: "Kota Tua Jakarta merupakan kawasan bersejarah dengan bangunan peninggalan kolonial Belanda.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Museum", "Sewa Sepeda"],
  aktivitas: ["Fotografi", "Wisata Sejarah", "Jalan Santai"],
  tips: "Datang sore hari untuk suasana lebih nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 44,
  name: "Pantai Ancol",
  location: "Jakarta Utara",
  province: "DKI Jakarta",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pantai Ancol")}.jpg`,
  gallery: [`/images/${slugify("Pantai Ancol")}.jpg`],
  videoUrl: null,

  description: "Pantai Ancol menawarkan wisata pantai dengan berbagai fasilitas hiburan di kawasan perkotaan.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Kuliner", "Area Bermain"],
  aktivitas: ["Wisata Pantai", "Santai", "Menikmati Sunset"],
  tips: "Hindari jam sibuk akhir pekan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 45,
  name: "Dufan",
  location: "Jakarta Utara",
  province: "DKI Jakarta",
  category: "budaya",

  price: "Rp 250.000",
  priceNum: 250000,
  htmLokal: "Rp 250.000",
  htmTuris: "Rp 250.000",

  image: `/images/${slugify("Dufan")}.jpg`,
  gallery: [`/images/${slugify("Dufan")}.jpg`],
  videoUrl: null,

  description: "Dunia Fantasi adalah taman hiburan terbesar di Jakarta dengan berbagai wahana permainan.",
  jamOperasional: "10.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Wahana Permainan", "Food Court"],
  aktivitas: ["Wahana Ekstrem", "Wisata Keluarga"],
  tips: "Beli tiket online untuk lebih hemat waktu.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 46,
  name: "TMII",
  location: "Jakarta Timur",
  province: "DKI Jakarta",
  category: "budaya",

  price: "Rp 35.000",
  priceNum: 35000,
  htmLokal: "Rp 35.000",
  htmTuris: "Rp 35.000",

  image: `/images/${slugify("TMII")}.jpg`,
  gallery: [`/images/${slugify("TMII")}.jpg`],
  videoUrl: null,

  description: "Taman Mini Indonesia Indah menampilkan miniatur budaya dan rumah adat dari seluruh provinsi Indonesia.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Museum", "Kereta Gantung"],
  aktivitas: ["Wisata Edukasi", "Keluarga", "Fotografi"],
  tips: "Gunakan transport internal untuk hemat tenaga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 47,
  name: "Ragunan",
  location: "Jakarta Selatan",
  province: "DKI Jakarta",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Ragunan")}.jpg`,
  gallery: [`/images/${slugify("Ragunan")}.jpg`],
  videoUrl: null,

  description: "Taman Margasatwa Ragunan merupakan kebun binatang dengan koleksi satwa yang lengkap.",
  jamOperasional: "07.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Area Piknik"],
  aktivitas: ["Edukasi", "Wisata Keluarga"],
  tips: "Datang pagi agar tidak terlalu panas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 48,
  name: "Hutan Kota GBK",
  location: "Jakarta Pusat",
  province: "DKI Jakarta",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Hutan Kota GBK")}.jpg`,
  gallery: [`/images/${slugify("Hutan Kota GBK")}.jpg`],
  videoUrl: null,

  description: "Hutan Kota GBK adalah ruang terbuka hijau untuk bersantai di tengah kota Jakarta.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Toilet", "Area Duduk", "Jogging Track"],
  aktivitas: ["Santai", "Olahraga", "Fotografi"],
  tips: "Cocok untuk datang sore hari.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 49,
  name: "Jakarta Aquarium",
  location: "Jakarta Barat",
  province: "DKI Jakarta",
  category: "alam",

  price: "Rp 180.000",
  priceNum: 180000,
  htmLokal: "Rp 180.000",
  htmTuris: "Rp 180.000",

  image: `/images/${slugify("Jakarta Aquarium")}.jpg`,
  gallery: [`/images/${slugify("Jakarta Aquarium")}.jpg`],
  videoUrl: null,

  description: "Jakarta Aquarium menampilkan berbagai satwa laut dan pertunjukan edukatif.",
  jamOperasional: "10.00 - 20.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Food Court"],
  aktivitas: ["Wisata Edukasi", "Keluarga"],
  tips: "Datang di weekday agar lebih sepi.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 50,
  name: "Pulau Tidung",
  location: "Kepulauan Seribu",
  province: "DKI Jakarta",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Tidung")}.jpg`,
  gallery: [`/images/${slugify("Pulau Tidung")}.jpg`],
  videoUrl: null,

  description: "Pulau Tidung terkenal dengan Jembatan Cinta dan wisata bahari yang indah.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Toilet", "Penyewaan Sepeda"],
  aktivitas: ["Snorkeling", "Wisata Pantai", "Bersepeda"],
  tips: "Datang saat cuaca cerah untuk laut yang tenang.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // BANTEN (51–60)
  // =====================
  {
  id: 51,
  name: "Pantai Anyer",
  location: "Anyer",
  province: "Banten",
  category: "pantai",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Pantai Anyer")}.jpg`,
  gallery: [`/images/${slugify("Pantai Anyer")}.jpg`],
  videoUrl: null,

  description: "Pantai Anyer terkenal dengan pasir putih dan pemandangan laut yang indah, cocok untuk liburan keluarga.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Penginapan", "Warung Makan"],
  aktivitas: ["Wisata Pantai", "Bermain Air", "Menikmati Sunset"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 52,
  name: "Pantai Carita",
  location: "Pandeglang",
  province: "Banten",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pantai Carita")}.jpg`,
  gallery: [`/images/${slugify("Pantai Carita")}.jpg`],
  videoUrl: null,

  description: "Pantai Carita menawarkan ombak yang relatif tenang dan pemandangan Gunung Krakatau dari kejauhan.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Penginapan"],
  aktivitas: ["Wisata Pantai", "Snorkeling", "Santai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 53,
  name: "Pantai Tanjung Lesung",
  location: "Pandeglang",
  province: "Banten",
  category: "pantai",

  price: "Rp 40.000",
  priceNum: 40000,
  htmLokal: "Rp 40.000",
  htmTuris: "Rp 40.000",

  image: `/images/${slugify("Pantai Tanjung Lesung")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Lesung")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Lesung merupakan kawasan wisata terpadu dengan pantai bersih dan fasilitas lengkap.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Resort", "Toilet", "Restoran"],
  aktivitas: ["Wisata Pantai", "Fotografi", "Santai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 54,
  name: "Pantai Sawarna",
  location: "Lebak",
  province: "Banten",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Sawarna")}.jpg`,
  gallery: [`/images/${slugify("Pantai Sawarna")}.jpg`],
  videoUrl: null,

  description: "Pantai Sawarna terkenal dengan ombak besar dan panorama alam yang masih alami.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Penginapan"],
  aktivitas: ["Wisata Pantai", "Fotografi", "Surfing"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 55,
  name: "Ujung Kulon",
  location: "Pandeglang",
  province: "Banten",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Ujung Kulon")}.jpg`,
  gallery: [`/images/${slugify("Ujung Kulon")}.jpg`],
  videoUrl: null,

  description: "Taman Nasional Ujung Kulon merupakan habitat badak Jawa dan kawasan konservasi alam.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Pusat Informasi", "Toilet"],
  aktivitas: ["Wisata Alam", "Edukasi", "Observasi Satwa"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 56,
  name: "Baduy Luar",
  location: "Lebak",
  province: "Banten",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Baduy Luar")}.jpg`,
  gallery: [`/images/${slugify("Baduy Luar")}.jpg`],
  videoUrl: null,

  description: "Baduy Luar menawarkan pengalaman budaya masyarakat adat yang masih memegang tradisi leluhur.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Jelajah Desa"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 57,
  name: "Masjid Banten Lama",
  location: "Serang",
  province: "Banten",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Masjid Banten Lama")}.jpg`,
  gallery: [`/images/${slugify("Masjid Banten Lama")}.jpg`],
  videoUrl: null,

  description: "Masjid Banten Lama merupakan peninggalan sejarah Kesultanan Banten.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Tempat Ibadah"],
  aktivitas: ["Wisata Religi", "Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 58,
  name: "Keraton Kaibon",
  location: "Serang",
  province: "Banten",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Keraton Kaibon")}.jpg`,
  gallery: [`/images/${slugify("Keraton Kaibon")}.jpg`],
  videoUrl: null,

  description: "Keraton Kaibon merupakan reruntuhan istana Kesultanan Banten yang sarat nilai sejarah.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Wisata Sejarah", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 59,
  name: "Pantai Bagedur",
  location: "Lebak",
  province: "Banten",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Bagedur")}.jpg`,
  gallery: [`/images/${slugify("Pantai Bagedur")}.jpg`],
  videoUrl: null,

  description: "Pantai Bagedur memiliki garis pantai yang panjang dengan ombak besar.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Pantai", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 60,
  name: "Ocean Park BSD",
  location: "Tangerang Selatan",
  province: "Banten",
  category: "budaya",

  price: "Rp 120.000",
  priceNum: 120000,
  htmLokal: "Rp 120.000",
  htmTuris: "Rp 120.000",

  image: `/images/${slugify("Ocean Park BSD")}.jpg`,
  gallery: [`/images/${slugify("Ocean Park BSD")}.jpg`],
  videoUrl: null,

  description: "Ocean Park BSD adalah taman bermain air dengan berbagai wahana keluarga.",
  jamOperasional: "09.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Food Court", "Wahana Air"],
  aktivitas: ["Wisata Keluarga", "Bermain Air"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // NUSA TENGGARA BARAT (61–70)
  // =====================
  {
  id: 61,
  name: "Pantai Senggigi",
  location: "Lombok Barat",
  province: "Nusa Tenggara Barat",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pantai Senggigi")}.jpg`,
  gallery: [`/images/${slugify("Pantai Senggigi")}.jpg`],
  videoUrl: null,

  description: "Pantai Senggigi merupakan salah satu destinasi pantai populer di Lombok dengan pasir putih, ombak tenang, dan panorama matahari terbenam yang indah.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan", "Penginapan"],
  aktivitas: ["Berenang", "Menikmati Sunset", "Fotografi"],
  tips: "Datang sore hari untuk menikmati sunset terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 62,
  name: "Pantai Kuta Mandalika",
  location: "Lombok Tengah",
  province: "Nusa Tenggara Barat",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pantai Kuta Mandalika")}.jpg`,
  gallery: [`/images/${slugify("Pantai Kuta Mandalika")}.jpg`],
  videoUrl: null,

  description: "Pantai Kuta Mandalika terkenal dengan garis pantainya yang panjang, pasir putih, dan kawasan wisata modern Mandalika.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan", "Resort"],
  aktivitas: ["Berenang", "Bersantai", "Fotografi"],
  tips: "Gunakan sunscreen karena area cukup terbuka.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 63,
  name: "Gili Trawangan",
  location: "Lombok Utara",
  province: "Nusa Tenggara Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Gili Trawangan")}.jpg`,
  gallery: [`/images/${slugify("Gili Trawangan")}.jpg`],
  videoUrl: null,

  description: "Gili Trawangan adalah pulau wisata terkenal dengan pantai eksotis, snorkeling, dan kehidupan malam yang hidup.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Restoran", "Pelabuhan", "Penyewaan Sepeda"],
  aktivitas: ["Snorkeling", "Diving", "Bersepeda", "Menikmati Sunset"],
  tips: "Bawa uang tunai karena ATM terbatas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 64,
  name: "Gili Air",
  location: "Lombok Utara",
  province: "Nusa Tenggara Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Gili Air")}.jpg`,
  gallery: [`/images/${slugify("Gili Air")}.jpg`],
  videoUrl: null,

  description: "Gili Air menawarkan suasana tenang dengan pantai jernih yang cocok untuk relaksasi dan snorkeling.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Restoran", "Pelabuhan"],
  aktivitas: ["Snorkeling", "Bersantai", "Yoga"],
  tips: "Cocok untuk wisatawan yang mencari ketenangan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 65,
  name: "Gunung Rinjani",
  location: "Lombok Timur",
  province: "Nusa Tenggara Barat",
  category: "alam",

  price: "Rp 150.000",
  priceNum: 150000,
  htmLokal: "Rp 150.000",
  htmTuris: "Rp 150.000",

  image: `/images/${slugify("Gunung Rinjani")}.jpg`,
  gallery: [`/images/${slugify("Gunung Rinjani")}.jpg`],
  videoUrl: null,

  description: "Gunung Rinjani merupakan gunung tertinggi kedua di Indonesia dengan jalur pendakian menantang dan panorama Danau Segara Anak.",
  jamOperasional: "Sesuai Jadwal Pendakian",
  fasilitas: ["Basecamp", "Guide", "Camping Area"],
  aktivitas: ["Pendakian", "Camping", "Fotografi Alam"],
  tips: "Wajib reservasi dan cek cuaca sebelum mendaki.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 66,
  name: "Air Terjun Sendang Gila",
  location: "Lombok Utara",
  province: "Nusa Tenggara Barat",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Air Terjun Sendang Gila")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Sendang Gila")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Sendang Gila menawarkan pemandangan air terjun yang segar dengan suasana hutan yang alami.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Jalur Trekking"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Gunakan alas kaki yang tidak licin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 67,
  name: "Bukit Pergasingan",
  location: "Lombok Timur",
  province: "Nusa Tenggara Barat",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Bukit Pergasingan")}.jpg`,
  gallery: [`/images/${slugify("Bukit Pergasingan")}.jpg`],
  videoUrl: null,

  description: "Bukit Pergasingan terkenal dengan panorama sawah warna-warni dan jalur hiking yang menantang.",
  jamOperasional: "05.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Camping Area"],
  aktivitas: ["Hiking", "Camping", "Fotografi"],
  tips: "Datang pagi hari untuk view terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 68,
  name: "Desa Sade",
  location: "Lombok Tengah",
  province: "Nusa Tenggara Barat",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Desa Sade")}.jpg`,
  gallery: [`/images/${slugify("Desa Sade")}.jpg`],
  videoUrl: null,

  description: "Desa Sade merupakan desa adat Suku Sasak yang masih mempertahankan tradisi dan arsitektur khas Lombok.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Hormati adat dan budaya setempat.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 69,
  name: "Pura Lingsar",
  location: "Lombok Barat",
  province: "Nusa Tenggara Barat",
  category: "budaya",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pura Lingsar")}.jpg`,
  gallery: [`/images/${slugify("Pura Lingsar")}.jpg`],
  videoUrl: null,

  description: "Pura Lingsar adalah tempat ibadah unik yang mencerminkan toleransi antara umat Hindu dan Islam.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Religi", "Edukasi Budaya"],
  tips: "Gunakan pakaian sopan saat berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 70,
  name: "Pulau Moyo",
  location: "Sumbawa",
  province: "Nusa Tenggara Barat",
  category: "alam",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Pulau Moyo")}.jpg`,
  gallery: [`/images/${slugify("Pulau Moyo")}.jpg`],
  videoUrl: null,

  description: "Pulau Moyo merupakan pulau eksotis dengan alam yang masih asri, air terjun, dan spot snorkeling.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Dermaga"],
  aktivitas: ["Snorkeling", "Wisata Alam", "Fotografi"],
  tips: "Persiapkan logistik dengan baik sebelum berangkat.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // ACEH (71–80)
  // =====================
  { id: 71, name: "Masjid Raya Baiturrahman", location: "Banda Aceh", price: "Gratis", priceNum: 0, image: `/images/${slugify("Masjid Raya Baiturrahman")}.jpg`, category: "budaya", province: "Aceh" },
  { id: 72, name: "Museum Tsunami Aceh", location: "Banda Aceh", price: "Gratis", priceNum: 0, image: `/images/${slugify("Museum Tsunami Aceh")}.jpg`, category: "budaya", province: "Aceh" },
  { id: 73, name: "Pantai Lampuuk", location: "Aceh Besar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Lampuuk")}.jpg`, category: "pantai", province: "Aceh" },
  { id: 74, name: "Pantai Lhoknga", location: "Aceh Besar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Lhoknga")}.jpg`, category: "pantai", province: "Aceh" },
  { id: 75, name: "Pulau Weh", location: "Sabang", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Weh")}.jpg`, category: "pantai", province: "Aceh" },
  { id: 76, name: "Pantai Iboih", location: "Sabang", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Iboih")}.jpg`, category: "pantai", province: "Aceh" },
  { id: 77, name: "Danau Laut Tawar", location: "Aceh Tengah", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Laut Tawar")}.jpg`, category: "alam", province: "Aceh" },
  { id: 78, name: "Air Terjun Suhom", location: "Aceh Besar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Suhom")}.jpg`, category: "alam", province: "Aceh" },
  { id: 79, name: "Benteng Indra Patra", location: "Aceh Besar", price: "Gratis", priceNum: 0, image: `/images/${slugify("Benteng Indra Patra")}.jpg`, category: "budaya", province: "Aceh" },
  { id: 80, name: "Tugu KM Nol", location: "Sabang", price: "Gratis", priceNum: 0, image: `/images/${slugify("Tugu KM Nol")}.jpg`, category: "budaya", province: "Aceh" },

  // =====================
  // NUSA TENGGARA TIMUR (81–90)
  // =====================
  { id: 81, name: "Taman Nasional Komodo", location: "Labuan Bajo", price: "Rp 150.000", priceNum: 150000, image: `/images/${slugify("Taman Nasional Komodo")}.jpg`, category: "alam", province: "Nusa Tenggara Timur" },
  { id: 82, name: "Pulau Padar", location: "Labuan Bajo", price: "Rp 150.000", priceNum: 150000, image: `/images/${slugify("Pulau Padar")}.jpg`, category: "alam", province: "Nusa Tenggara Timur" },
  { id: 83, name: "Pink Beach", location: "Labuan Bajo", price: "Rp 150.000", priceNum: 150000, image: `/images/${slugify("Pink Beach")}.jpg`, category: "pantai", province: "Nusa Tenggara Timur" },
  { id: 84, name: "Danau Kelimutu", location: "Ende", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Danau Kelimutu")}.jpg`, category: "alam", province: "Nusa Tenggara Timur" },
  { id: 85, name: "Pantai Lasiana", location: "Kupang", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Lasiana")}.jpg`, category: "pantai", province: "Nusa Tenggara Timur" },
  { id: 86, name: "Bukit Cinta", location: "Labuan Bajo", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Cinta")}.jpg`, category: "alam", province: "Nusa Tenggara Timur" },
  { id: 87, name: "Pulau Kanawa", location: "Labuan Bajo", price: "Rp 100.000", priceNum: 100000, image: `/images/${slugify("Pulau Kanawa")}.jpg`, category: "pantai", province: "Nusa Tenggara Timur" },
  { id: 88, name: "Goa Rangko", location: "Manggarai Barat", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Goa Rangko")}.jpg`, category: "alam", province: "Nusa Tenggara Timur" },
  { id: 89, name: "Pantai Kolbano", location: "Timor Tengah Selatan", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Kolbano")}.jpg`, category: "pantai", province: "Nusa Tenggara Timur" },
  { id: 90, name: "Kampung Adat Bena", location: "Ngada", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Kampung Adat Bena")}.jpg`, category: "budaya", province: "Nusa Tenggara Timur" },

  // =====================
  // BENGKULU (91–100)
  // =====================
  { id: 91, name: "Pantai Panjang", location: "Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Panjang")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 92, name: "Benteng Marlborough", location: "Bengkulu", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Benteng Marlborough")}.jpg`, category: "budaya", province: "Bengkulu" },
  { id: 93, name: "Danau Dendam Tak Sudah", location: "Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Dendam Tak Sudah")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 94, name: "Pantai Tapak Paderi", location: "Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Tapak Paderi")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 95, name: "Air Terjun Curug Embun", location: "Rejang Lebong", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Curug Embun")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 96, name: "Pantai Sungai Suci", location: "Bengkulu Tengah", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Sungai Suci")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 97, name: "Bukit Kandis", location: "Seluma", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Kandis")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 98, name: "Danau Mas Harun Bastari", location: "Rejang Lebong", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Danau Mas Harun Bastari")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 99, name: "Rumah Pengasingan Bung Karno", location: "Bengkulu", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Rumah Pengasingan Bung Karno")}.jpg`, category: "budaya", province: "Bengkulu" },
  { id: 100, name: "Pantai Jakat", location: "Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Jakat")}.jpg`, category: "pantai", province: "Bengkulu" },

  // =====================
  // GORONTALO (101–110)
  // =====================
  { id: 101, name: "Pantai Olele", location: "Bone Bolango", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Olele")}.jpg`, category: "pantai", province: "Gorontalo" },
  { id: 102, name: "Benteng Otanaha", location: "Gorontalo", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Benteng Otanaha")}.jpg`, category: "budaya", province: "Gorontalo" },
  { id: 103, name: "Pulau Saronde", location: "Gorontalo Utara", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Saronde")}.jpg`, category: "pantai", province: "Gorontalo" },
  { id: 104, name: "Pantai Botutonuo", location: "Bone Bolango", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Botutonuo")}.jpg`, category: "pantai", province: "Gorontalo" },
  { id: 105, name: "Danau Limboto", location: "Gorontalo", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Limboto")}.jpg`, category: "alam", province: "Gorontalo" },
  { id: 106, name: "Bukit Layang", location: "Gorontalo", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Layang")}.jpg`, category: "alam", province: "Gorontalo" },
  { id: 107, name: "Pulau Cinta", location: "Boalemo", price: "Rp 50.000", priceNum: 50000, image: `/images/${slugify("Pulau Cinta")}.jpg`, category: "pantai", province: "Gorontalo" },
  { id: 108, name: "Pantai Ratu", location: "Gorontalo Utara", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Ratu")}.jpg`, category: "pantai", province: "Gorontalo" },
  { id: 109, name: "Air Terjun Taludaa", location: "Bone Bolango", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Taludaa")}.jpg`, category: "alam", province: "Gorontalo" },
  { id: 110, name: "Museum Purbakala Gorontalo", location: "Gorontalo", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Purbakala Gorontalo")}.jpg`, category: "budaya", province: "Gorontalo" },

  // =====================
  // SULAWESI BARAT (111–120)
  // =====================
  { id: 111, name: "Pantai Manakarra", location: "Mamuju", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Manakarra")}.jpg`, category: "pantai", province: "Sulawesi Barat" },
  { id: 112, name: "Pulau Karampuang", location: "Mamuju", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Karampuang")}.jpg`, category: "pantai", province: "Sulawesi Barat" },
  { id: 113, name: "Pantai Dato", location: "Majene", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Dato")}.jpg`, category: "pantai", province: "Sulawesi Barat" },
  { id: 114, name: "Air Terjun Limbong Kamandang", location: "Mamasa", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Limbong Kamandang")}.jpg`, category: "alam", province: "Sulawesi Barat" },
  { id: 115, name: "Pegunungan Quarles", location: "Mamasa", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pegunungan Quarles")}.jpg`, category: "alam", province: "Sulawesi Barat" },
  { id: 116, name: "Danau Tanralili", location: "Mamasa", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Danau Tanralili")}.jpg`, category: "alam", province: "Sulawesi Barat" },
  { id: 117, name: "Pantai Palippis", location: "Polewali Mandar", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Palippis")}.jpg`, category: "pantai", province: "Sulawesi Barat" },
  { id: 118, name: "Pulau Gusung Toraja", location: "Polewali Mandar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Gusung Toraja")}.jpg`, category: "pantai", province: "Sulawesi Barat" },
  { id: 119, name: "Air Terjun Tamasapi", location: "Mamuju", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Tamasapi")}.jpg`, category: "alam", province: "Sulawesi Barat" },
  { id: 120, name: "Pantai Malunda", location: "Majene", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Malunda")}.jpg`, category: "pantai", province: "Sulawesi Barat" },

  // =====================
  // BALI (121–130)
  // =====================
  { id: 121, name: "Pantai Kuta", location: "Badung", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Kuta")}.jpg`, category: "pantai", province: "Bali" },
  { id: 122, name: "Pantai Sanur", location: "Denpasar", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Sanur")}.jpg`, category: "pantai", province: "Bali" },
  { id: 123, name: "Pantai Pandawa", location: "Badung", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pantai Pandawa")}.jpg`, category: "pantai", province: "Bali" },
  { id: 124, name: "Pantai Melasti", location: "Badung", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Melasti")}.jpg`, category: "pantai", province: "Bali" },
  { id: 125, name: "Pura Besakih", location: "Karangasem", price: "Rp 60.000", priceNum: 60000, image: `/images/${slugify("Pura Besakih")}.jpg`, category: "budaya", province: "Bali" },
  { id: 126, name: "Pura Tanah Lot", location: "Tabanan", price: "Rp 60.000", priceNum: 60000, image: `/images/${slugify("Pura Tanah Lot")}.jpg`, category: "budaya", province: "Bali" },
  { id: 127, name: "Tegallalang Rice Terrace", location: "Gianyar", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Tegallalang Rice Terrace")}.jpg`, category: "alam", province: "Bali" },
  { id: 128, name: "Air Terjun Tegenungan", location: "Gianyar", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Air Terjun Tegenungan")}.jpg`, category: "alam", province: "Bali" },
  { id: 129, name: "Monkey Forest", location: "Ubud", price: "Rp 80.000", priceNum: 80000, image: `/images/${slugify("Monkey Forest")}.jpg`, category: "alam", province: "Bali" },
  { id: 130, name: "Nusa Penida", location: "Klungkung", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Nusa Penida")}.jpg`, category: "pantai", province: "Bali" },

  // =====================
  // SULAWESI TENGGARA (131–140)
  // =====================
  { id: 131, name: "Pulau Bokori", location: "Konawe", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Bokori")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 132, name: "Pantai Nambo", location: "Kendari", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Nambo")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 133, name: "Pulau Labengki", location: "Konawe Utara", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Labengki")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 134, name: "Pulau Sombori", location: "Morowali", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pulau Sombori")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 135, name: "Pantai Toronipa", location: "Konawe", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Toronipa")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 136, name: "Danau Biru Napabale", location: "Muna", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Biru Napabale")}.jpg`, category: "alam", province: "Sulawesi Tenggara" },
  { id: 137, name: "Benteng Keraton Buton", location: "Baubau", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Benteng Keraton Buton")}.jpg`, category: "budaya", province: "Sulawesi Tenggara" },
  { id: 138, name: "Pantai Lakeba", location: "Baubau", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Lakeba")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 139, name: "Air Terjun Moramo", location: "Konawe Selatan", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Air Terjun Moramo")}.jpg`, category: "alam", province: "Sulawesi Tenggara" },
  { id: 140, name: "Pulau Hoga", location: "Wakatobi", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Hoga")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },

  // =====================
  // SULAWESI TENGAH (141–150)
  // =====================
  { id: 141, name: "Danau Poso", location: "Poso", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Poso")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 142, name: "Air Terjun Saluopa", location: "Poso", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Saluopa")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 143, name: "Pantai Tanjung Karang", location: "Donggala", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Karang")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 144, name: "Pantai Talise", location: "Palu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Talise")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 145, name: "Danau Tambing", location: "Sigi", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Danau Tambing")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 146, name: "Lembah Bada", location: "Poso", price: "Gratis", priceNum: 0, image: `/images/${slugify("Lembah Bada")}.jpg`, category: "budaya", province: "Sulawesi Tengah" },
  { id: 147, name: "Pantai Pusat Laut", location: "Donggala", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Pusat Laut")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 148, name: "Air Terjun Wera", location: "Sigi", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Wera")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 149, name: "Pulau Togean", location: "Tojo Una-Una", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Togean")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 150, name: "Pantai Malino", location: "Donggala", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Malino")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },

  // =====================
  // SULAWESI UTARA (151–160)
  // =====================
  { id: 151, name: "Bunaken", location: "Manado", price: "Rp 50.000", priceNum: 50000, image: `/images/${slugify("Bunaken")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 152, name: "Pantai Malalayang", location: "Manado", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Malalayang")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 153, name: "Pulau Siladen", location: "Manado", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pulau Siladen")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 154, name: "Danau Tondano", location: "Minahasa", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Tondano")}.jpg`, category: "alam", province: "Sulawesi Utara" },
  { id: 155, name: "Gunung Lokon", location: "Tomohon", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Gunung Lokon")}.jpg`, category: "alam", province: "Sulawesi Utara" },
  { id: 156, name: "Bukit Kasih Kanonang", location: "Minahasa", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Kasih Kanonang")}.jpg`, category: "budaya", province: "Sulawesi Utara" },
  { id: 157, name: "Pantai Paal", location: "Likupang", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Paal")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 158, name: "Pulau Lihaga", location: "Likupang", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pulau Lihaga")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 159, name: "Taman Laut Tumbak", location: "Minahasa Tenggara", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Taman Laut Tumbak")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 160, name: "Museum Negeri Sulut", location: "Manado", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Negeri Sulut")}.jpg`, category: "budaya", province: "Sulawesi Utara" },

  // =====================
  // SULAWESI SELATAN (161–170)
  // =====================
  { id: 161, name: "Pantai Losari", location: "Makassar", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Losari")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 162, name: "Benteng Rotterdam", location: "Makassar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Benteng Rotterdam")}.jpg`, category: "budaya", province: "Sulawesi Selatan" },
  { id: 163, name: "Pantai Tanjung Bira", location: "Bulukumba", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Bira")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 164, name: "Pulau Samalona", location: "Makassar", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Samalona")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 165, name: "Pulau Kodingareng Keke", location: "Makassar", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pulau Kodingareng Keke")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 166, name: "Rammang-Rammang", location: "Maros", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Rammang-Rammang")}.jpg`, category: "alam", province: "Sulawesi Selatan" },
  { id: 167, name: "Taman Nasional Bantimurung", location: "Maros", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Taman Nasional Bantimurung")}.jpg`, category: "alam", province: "Sulawesi Selatan" },
  { id: 168, name: "Toraja Land", location: "Tana Toraja", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Toraja Land")}.jpg`, category: "budaya", province: "Sulawesi Selatan" },
  { id: 169, name: "Kuburan Batu Lemo", location: "Tana Toraja", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Kuburan Batu Lemo")}.jpg`, category: "budaya", province: "Sulawesi Selatan" },
  { id: 170, name: "Pantai Akkarena", location: "Makassar", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Akkarena")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },

  // =====================
  // JAMBI (171–180)
  // =====================
  { id: 171, name: "Danau Gunung Tujuh", location: "Kerinci", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Danau Gunung Tujuh")}.jpg`, category: "alam", province: "Jambi" },
  { id: 172, name: "Gunung Kerinci", location: "Kerinci", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Gunung Kerinci")}.jpg`, category: "alam", province: "Jambi" },
  { id: 173, name: "Taman Nasional Kerinci Seblat", location: "Kerinci", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Taman Nasional Kerinci Seblat")}.jpg`, category: "alam", province: "Jambi" },
  { id: 174, name: "Candi Muaro Jambi", location: "Muaro Jambi", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Candi Muaro Jambi")}.jpg`, category: "budaya", province: "Jambi" },
  { id: 175, name: "Danau Sipin", location: "Jambi", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Sipin")}.jpg`, category: "alam", province: "Jambi" },
  { id: 176, name: "Jembatan Gentala Arasy", location: "Jambi", price: "Gratis", priceNum: 0, image: `/images/${slugify("Jembatan Gentala Arasy")}.jpg`, category: "budaya", province: "Jambi" },
  { id: 177, name: "Air Terjun Telun Berasap", location: "Kerinci", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Telun Berasap")}.jpg`, category: "alam", province: "Jambi" },
  { id: 178, name: "Bukit Khayangan", location: "Sungai Penuh", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Khayangan")}.jpg`, category: "alam", province: "Jambi" },
  { id: 179, name: "Museum Negeri Jambi", location: "Jambi", price: "Rp 3.000", priceNum: 3000, image: `/images/${slugify("Museum Negeri Jambi")}.jpg`, category: "budaya", province: "Jambi" },
  { id: 180, name: "Hutan Pinus Jantho", location: "Merangin", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Hutan Pinus Jantho")}.jpg`, category: "alam", province: "Jambi" },

  // =====================
  // LAMPUNG (181–190)
  // =====================
  { id: 181, name: "Pantai Mutun", location: "Pesawaran", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pantai Mutun")}.jpg`, category: "pantai", province: "Lampung" },
  { id: 182, name: "Pantai Pahawang", location: "Pesawaran", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pantai Pahawang")}.jpg`, category: "pantai", province: "Lampung" },
  { id: 183, name: "Pantai Sari Ringgung", location: "Pesawaran", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Sari Ringgung")}.jpg`, category: "pantai", province: "Lampung" },
  { id: 184, name: "Taman Nasional Way Kambas", location: "Lampung Timur", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Taman Nasional Way Kambas")}.jpg`, category: "alam", province: "Lampung" },
  { id: 185, name: "Bukit Sakura Kemiling", location: "Bandar Lampung", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Sakura Kemiling")}.jpg`, category: "alam", province: "Lampung" },
  { id: 186, name: "Danau Ranau", location: "Lampung Barat", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Ranau")}.jpg`, category: "alam", province: "Lampung" },
  { id: 187, name: "Pantai Tanjung Setia", location: "Pesisir Barat", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Setia")}.jpg`, category: "pantai", province: "Lampung" },
  { id: 188, name: "Pulau Tangkil", location: "Pesawaran", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Tangkil")}.jpg`, category: "pantai", province: "Lampung" },
  { id: 189, name: "Museum Lampung", location: "Bandar Lampung", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Lampung")}.jpg`, category: "budaya", province: "Lampung" },
  { id: 190, name: "Pantai Duta Wisata", location: "Bandar Lampung", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Duta Wisata")}.jpg`, category: "pantai", province: "Lampung" },

  // =====================
  // MALUKU (191–200)
  // =====================
  { id: 191, name: "Pantai Natsepa", location: "Ambon", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Natsepa")}.jpg`, category: "pantai", province: "Maluku" },
  { id: 192, name: "Pantai Liang", location: "Maluku Tengah", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Liang")}.jpg`, category: "pantai", province: "Maluku" },
  { id: 193, name: "Pulau Pombo", location: "Maluku Tengah", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Pombo")}.jpg`, category: "pantai", province: "Maluku" },
  { id: 194, name: "Pulau Ora", location: "Seram", price: "Rp 50.000", priceNum: 50000, image: `/images/${slugify("Pulau Ora")}.jpg`, category: "pantai", province: "Maluku" },
  { id: 195, name: "Gunung Binaiya", location: "Seram", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Gunung Binaiya")}.jpg`, category: "alam", province: "Maluku" },
  { id: 196, name: "Benteng Amsterdam", location: "Maluku Tengah", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Benteng Amsterdam")}.jpg`, category: "budaya", province: "Maluku" },
  { id: 197, name: "Benteng Victoria", location: "Ambon", price: "Gratis", priceNum: 0, image: `/images/${slugify("Benteng Victoria")}.jpg`, category: "budaya", province: "Maluku" },
  { id: 198, name: "Danau Rana", location: "Seram", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Rana")}.jpg`, category: "alam", province: "Maluku" },
  { id: 199, name: "Pantai Pintu Kota", location: "Ambon", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Pintu Kota")}.jpg`, category: "pantai", province: "Maluku" },
  { id: 200, name: "Museum Siwalima", location: "Ambon", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Siwalima")}.jpg`, category: "budaya", province: "Maluku" },

  // =====================
  // KEPULAUAN RIAU (201–210)
  // =====================
  { id: 201, name: "Pantai Trikora", location: "Bintan", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Trikora")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 202, name: "Pulau Penyengat", location: "Tanjung Pinang", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pulau Penyengat")}.jpg`, category: "budaya", province: "Kepulauan Riau" },
  { id: 203, name: "Pantai Lagoi", location: "Bintan", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Lagoi")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 204, name: "Pulau Beralas Pasir", location: "Bintan", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Beralas Pasir")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 205, name: "Pantai Nongsa", location: "Batam", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Nongsa")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 206, name: "Jembatan Barelang", location: "Batam", price: "Gratis", priceNum: 0, image: `/images/${slugify("Jembatan Barelang")}.jpg`, category: "budaya", province: "Kepulauan Riau" },
  { id: 207, name: "Pantai Melayu", location: "Batam", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Melayu")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 208, name: "Pulau Abang", location: "Batam", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pulau Abang")}.jpg`, category: "pantai", province: "Kepulauan Riau" },
  { id: 209, name: "Bukit Senyum", location: "Batam", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Senyum")}.jpg`, category: "alam", province: "Kepulauan Riau" },
  { id: 210, name: "Museum Raja Ali Haji", location: "Tanjung Pinang", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Raja Ali Haji")}.jpg`, category: "budaya", province: "Kepulauan Riau" },

  // =====================
  // KEPULAUAN BANGKA BELITUNG (211–220)
  // =====================
  { id: 211, name: "Pantai Tanjung Tinggi", location: "Belitung", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Tanjung Tinggi")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 212, name: "Pantai Tanjung Kelayang", location: "Belitung", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Kelayang")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 213, name: "Pulau Lengkuas", location: "Belitung", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pulau Lengkuas")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 214, name: "Danau Kaolin", location: "Belitung", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Kaolin")}.jpg`, category: "alam", province: "Kepulauan Bangka Belitung" },
  { id: 215, name: "Pantai Parai Tenggiri", location: "Bangka", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pantai Parai Tenggiri")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 216, name: "Bukit Menumbing", location: "Bangka Barat", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Menumbing")}.jpg`, category: "alam", province: "Kepulauan Bangka Belitung" },
  { id: 217, name: "Pantai Tikus Emas", location: "Bangka", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Tikus Emas")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 218, name: "Museum Timah Indonesia", location: "Pangkal Pinang", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Timah Indonesia")}.jpg`, category: "budaya", province: "Kepulauan Bangka Belitung" },
  { id: 219, name: "Pantai Batu Bedaun", location: "Bangka", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Batu Bedaun")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },
  { id: 220, name: "Pantai Rambak", location: "Bangka", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Rambak")}.jpg`, category: "pantai", province: "Kepulauan Bangka Belitung" },

  // =====================
  // KALIMANTAN BARAT (221–225)
  // =====================
  { id: 221, name: "Danau Sentarum", location: "Kapuas Hulu", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Danau Sentarum")}.jpg`, category: "alam", province: "Kalimantan Barat" },
  { id: 222, name: "Pantai Temajuk", location: "Sambas", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Temajuk")}.jpg`, category: "pantai", province: "Kalimantan Barat" },
  { id: 223, name: "Tugu Khatulistiwa", location: "Pontianak", price: "Gratis", priceNum: 0, image: `/images/${slugify("Tugu Khatulistiwa")}.jpg`, category: "budaya", province: "Kalimantan Barat" },
  { id: 224, name: "Istana Kadriah", location: "Pontianak", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Istana Kadriah")}.jpg`, category: "budaya", province: "Kalimantan Barat" },
  { id: 225, name: "Gunung Palung", location: "Ketapang", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Gunung Palung")}.jpg`, category: "alam", province: "Kalimantan Barat" },

  // =====================
  // KALIMANTAN TENGAH (226–230)
  // =====================
  { id: 226, name: "Taman Nasional Tanjung Puting", location: "Kotawaringin Barat", price: "Rp 50.000", priceNum: 50000, image: `/images/${slugify("Taman Nasional Tanjung Puting")}.jpg`, category: "alam", province: "Kalimantan Tengah" },
  { id: 227, name: "Bukit Tangkiling", location: "Palangka Raya", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Tangkiling")}.jpg`, category: "alam", province: "Kalimantan Tengah" },
  { id: 228, name: "Danau Tahai", location: "Palangka Raya", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Danau Tahai")}.jpg`, category: "alam", province: "Kalimantan Tengah" },
  { id: 229, name: "Rumah Betang", location: "Palangka Raya", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Rumah Betang")}.jpg`, category: "budaya", province: "Kalimantan Tengah" },
  { id: 230, name: "Sungai Kahayan", location: "Palangka Raya", price: "Gratis", priceNum: 0, image: `/images/${slugify("Sungai Kahayan")}.jpg`, category: "alam", province: "Kalimantan Tengah" },

  // =====================
  // KALIMANTAN TIMUR (231–235)
  // =====================
  { id: 231, name: "Derawan", location: "Berau", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Derawan")}.jpg`, category: "pantai", province: "Kalimantan Timur" },
  { id: 232, name: "Pulau Kakaban", location: "Berau", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Pulau Kakaban")}.jpg`, category: "pantai", province: "Kalimantan Timur" },
  { id: 233, name: "Danau Labuan Cermin", location: "Berau", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Danau Labuan Cermin")}.jpg`, category: "alam", province: "Kalimantan Timur" },
  { id: 234, name: "Pantai Lamaru", location: "Balikpapan", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pantai Lamaru")}.jpg`, category: "pantai", province: "Kalimantan Timur" },
  { id: 235, name: "Museum Mulawarman", location: "Kutai Kartanegara", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Museum Mulawarman")}.jpg`, category: "budaya", province: "Kalimantan Timur" },

  // =====================
  // KALIMANTAN UTARA (236–240)
  // =====================
  { id: 236, name: "Pantai Amal", location: "Tarakan", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Amal")}.jpg`, category: "pantai", province: "Kalimantan Utara" },
  { id: 237, name: "Hutan Mangrove Tarakan", location: "Tarakan", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Hutan Mangrove Tarakan")}.jpg`, category: "alam", province: "Kalimantan Utara" },
  { id: 238, name: "Air Terjun Gunung Rian", location: "Malinau", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Gunung Rian")}.jpg`, category: "alam", province: "Kalimantan Utara" },
  { id: 239, name: "Gunung Putih", location: "Tana Tidung", price: "Gratis", priceNum: 0, image: `/images/${slugify("Gunung Putih")}.jpg`, category: "alam", province: "Kalimantan Utara" },
  { id: 240, name: "Museum Kesultanan Bulungan", location: "Bulungan", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Kesultanan Bulungan")}.jpg`, category: "budaya", province: "Kalimantan Utara" },

  // =====================
  // KALIMANTAN SELATAN (241–245)
  // =====================
  { id: 241, name: "Pasar Terapung Lok Baintan", location: "Banjar", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pasar Terapung Lok Baintan")}.jpg`, category: "budaya", province: "Kalimantan Selatan" },
  { id: 242, name: "Gunung Meratus", location: "Hulu Sungai Tengah", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Gunung Meratus")}.jpg`, category: "alam", province: "Kalimantan Selatan" },
  { id: 243, name: "Pulau Samber Gelap", location: "Kotabaru", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Samber Gelap")}.jpg`, category: "pantai", province: "Kalimantan Selatan" },
  { id: 244, name: "Pantai Angsana", location: "Tanah Bumbu", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Angsana")}.jpg`, category: "pantai", province: "Kalimantan Selatan" },
  { id: 245, name: "Museum Wasaka", location: "Banjarmasin", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Wasaka")}.jpg`, category: "budaya", province: "Kalimantan Selatan" },

  // =====================
  // BENGKULU (246–255)
  // =====================
  { id: 246, name: "Pantai Panjang", location: "Kota Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Panjang")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 247, name: "Benteng Marlborough", location: "Kota Bengkulu", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Benteng Marlborough")}.jpg`, category: "budaya", province: "Bengkulu" },
  { id: 248, name: "Danau Dendam Tak Sudah", location: "Kota Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Dendam Tak Sudah")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 249, name: "Pantai Tapak Paderi", location: "Kota Bengkulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Tapak Paderi")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 250, name: "Rumah Pengasingan Bung Karno", location: "Kota Bengkulu", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Rumah Pengasingan Bung Karno")}.jpg`, category: "budaya", province: "Bengkulu" },
  { id: 251, name: "Air Terjun Curug Embun", location: "Kepahiang", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Air Terjun Curug Embun")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 252, name: "Bukit Kaba", location: "Rejang Lebong", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Bukit Kaba")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 253, name: "Pantai Sungai Suci", location: "Bengkulu Tengah", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Sungai Suci")}.jpg`, category: "pantai", province: "Bengkulu" },
  { id: 254, name: "Danau Mas Harun Bastari", location: "Rejang Lebong", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Danau Mas Harun Bastari")}.jpg`, category: "alam", province: "Bengkulu" },
  { id: 255, name: "Taman Wisata Mangrove Bhadrika", location: "Bengkulu Tengah", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Taman Wisata Mangrove Bhadrika")}.jpg`, category: "alam", province: "Bengkulu" },

  // =====================
  // MALUKU UTARA (256–265)
  // =====================
  { id: 256, name: "Benteng Tolukko", location: "Ternate", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Benteng Tolukko")}.jpg`, category: "budaya", province: "Maluku Utara" },
  { id: 257, name: "Danau Tolire Besar", location: "Ternate", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Tolire Besar")}.jpg`, category: "alam", province: "Maluku Utara" },
  { id: 258, name: "Pantai Sulamadaha", location: "Ternate", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Sulamadaha")}.jpg`, category: "pantai", province: "Maluku Utara" },
  { id: 259, name: "Gunung Gamalama", location: "Ternate", price: "Gratis", priceNum: 0, image: `/images/${slugify("Gunung Gamalama")}.jpg`, category: "alam", province: "Maluku Utara" },
  { id: 260, name: "Pulau Maitara", location: "Tidore Kepulauan", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pulau Maitara")}.jpg`, category: "pantai", province: "Maluku Utara" },
  { id: 261, name: "Benteng Oranje", location: "Ternate", price: "Gratis", priceNum: 0, image: `/images/${slugify("Benteng Oranje")}.jpg`, category: "budaya", province: "Maluku Utara" },
  { id: 262, name: "Pantai Jikomalamo", location: "Ternate", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Jikomalamo")}.jpg`, category: "pantai", province: "Maluku Utara" },
  { id: 263, name: "Danau Tolire Kecil", location: "Ternate", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Tolire Kecil")}.jpg`, category: "alam", province: "Maluku Utara" },
  { id: 264, name: "Pulau Dodola", location: "Morotai", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Dodola")}.jpg`, category: "pantai", province: "Maluku Utara" },
  { id: 265, name: "Museum Kedaton Sultan Ternate", location: "Ternate", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Kedaton Sultan Ternate")}.jpg`, category: "budaya", province: "Maluku Utara" },

  // =====================
  // PAPUA (266–270)
  // =====================
  { id: 266, name: "Pantai Base-G", location: "Jayapura", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Base-G")}.jpg`, category: "pantai", province: "Papua" },
  { id: 267, name: "Danau Sentani", location: "Jayapura", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Sentani")}.jpg`, category: "alam", province: "Papua" },
  { id: 268, name: "Bukit Teletubbies", location: "Jayapura", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Teletubbies")}.jpg`, category: "alam", province: "Papua" },
  { id: 269, name: "Museum Loka Budaya", location: "Jayapura", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Loka Budaya")}.jpg`, category: "budaya", province: "Papua" },
  { id: 270, name: "Pantai Hamadi", location: "Jayapura", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Hamadi")}.jpg`, category: "pantai", province: "Papua" },

  // =====================
  // PAPUA BARAT (271–275)
  // =====================
  { id: 271, name: "Pantai Pasir Putih", location: "Manokwari", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Pasir Putih")}.jpg`, category: "pantai", province: "Papua Barat" },
  { id: 272, name: "Pulau Mansinam", location: "Manokwari", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Mansinam")}.jpg`, category: "budaya", province: "Papua Barat" },
  { id: 273, name: "Danau Anggi Giji", location: "Pegunungan Arfak", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Anggi Giji")}.jpg`, category: "alam", province: "Papua Barat" },
  { id: 274, name: "Pegunungan Arfak", location: "Manokwari", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pegunungan Arfak")}.jpg`, category: "alam", province: "Papua Barat" },
  { id: 275, name: "Pantai Bakaro", location: "Manokwari", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Bakaro")}.jpg`, category: "pantai", province: "Papua Barat" },

  // =====================
  // PAPUA BARAT DAYA (276–280)
  // =====================
  { id: 276, name: "Pantai Tanjung Kasuari", location: "Sorong", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Kasuari")}.jpg`, category: "pantai", province: "Papua Barat Daya" },
  { id: 277, name: "Hutan Mangrove Klawalu", location: "Sorong", price: "Gratis", priceNum: 0, image: `/images/${slugify("Hutan Mangrove Klawalu")}.jpg`, category: "alam", province: "Papua Barat Daya" },
  { id: 278, name: "Pantai Saoka", location: "Sorong", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Saoka")}.jpg`, category: "pantai", province: "Papua Barat Daya" },
  { id: 279, name: "Pulau Doom", location: "Sorong", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pulau Doom")}.jpg`, category: "budaya", province: "Papua Barat Daya" },
  { id: 280, name: "Pantai Mailan Makbon", location: "Sorong", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Mailan Makbon")}.jpg`, category: "pantai", province: "Papua Barat Daya" },

  // =====================
  // PAPUA PEGUNUNGAN (281–285)
  // =====================
  { id: 281, name: "Lembah Baliem", location: "Jayawijaya", price: "Gratis", priceNum: 0, image: `/images/${slugify("Lembah Baliem")}.jpg`, category: "budaya", province: "Papua Pegunungan" },
  { id: 282, name: "Festival Lembah Baliem", location: "Jayawijaya", price: "Gratis", priceNum: 0, image: `/images/${slugify("Festival Lembah Baliem")}.jpg`, category: "budaya", province: "Papua Pegunungan" },
  { id: 283, name: "Gunung Trikora", location: "Jayawijaya", price: "Gratis", priceNum: 0, image: `/images/${slugify("Gunung Trikora")}.jpg`, category: "alam", province: "Papua Pegunungan" },
  { id: 284, name: "Desa Wisata Wamena", location: "Wamena", price: "Gratis", priceNum: 0, image: `/images/${slugify("Desa Wisata Wamena")}.jpg`, category: "budaya", province: "Papua Pegunungan" },
  { id: 285, name: "Bukit Habema", location: "Jayawijaya", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Habema")}.jpg`, category: "alam", province: "Papua Pegunungan" },

  // =====================
  // PAPUA SELATAN (286–290)
  // =====================
  { id: 286, name: "Pantai Lampu Satu", location: "Merauke", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Lampu Satu")}.jpg`, category: "pantai", province: "Papua Selatan" },
  { id: 287, name: "Taman Nasional Wasur", location: "Merauke", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Taman Nasional Wasur")}.jpg`, category: "alam", province: "Papua Selatan" },
  { id: 288, name: "Monumen Kapsul Waktu", location: "Merauke", price: "Gratis", priceNum: 0, image: `/images/${slugify("Monumen Kapsul Waktu")}.jpg`, category: "budaya", province: "Papua Selatan" },
  { id: 289, name: "Pantai Payum", location: "Merauke", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Payum")}.jpg`, category: "pantai", province: "Papua Selatan" },
  { id: 290, name: "Rawa Biru", location: "Merauke", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Rawa Biru")}.jpg`, category: "alam", province: "Papua Selatan" },

  // =====================
  // PAPUA TENGAH (291–295)
  // =====================
  { id: 291, name: "Pantai Deiyai", location: "Deiyai", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Deiyai")}.jpg`, category: "alam", province: "Papua Tengah" },
  { id: 292, name: "Danau Tigi", location: "Deiyai", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Tigi")}.jpg`, category: "alam", province: "Papua Tengah" },
  { id: 293, name: "Bukit Kamu", location: "Paniai", price: "Gratis", priceNum: 0, image: `/images/${slugify("Bukit Kamu")}.jpg`, category: "alam", province: "Papua Tengah" },
  { id: 294, name: "Danau Paniai", location: "Paniai", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Paniai")}.jpg`, category: "alam", province: "Papua Tengah" },
  { id: 295, name: "Desa Adat Mee", location: "Paniai", price: "Gratis", priceNum: 0, image: `/images/${slugify("Desa Adat Mee")}.jpg`, category: "budaya", province: "Papua Tengah" },

  // =====================
  // RIAU (296–300)
  // =====================
  { id: 296, name: "Istana Siak Sri Indrapura", location: "Siak", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Istana Siak Sri Indrapura")}.jpg`, category: "budaya", province: "Riau" },
  { id: 297, name: "Danau Raja", location: "Indragiri Hulu", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Raja")}.jpg`, category: "alam", province: "Riau" },
  { id: 298, name: "Air Terjun Batang Koban", location: "Rokan Hulu", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Air Terjun Batang Koban")}.jpg`, category: "alam", province: "Riau" },
  { id: 299, name: "Pantai Selat Baru", location: "Bengkalis", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Selat Baru")}.jpg`, category: "pantai", province: "Riau" },
  { id: 300, name: "Taman Rekreasi Alam Mayang", location: "Pekanbaru", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Taman Rekreasi Alam Mayang")}.jpg`, category: "alam", province: "Riau" },

  // =====================
  // SULAWESI SELATAN (301–305)
  // =====================
  { id: 301, name: "Pantai Losari", location: "Makassar", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Losari")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 302, name: "Benteng Rotterdam", location: "Makassar", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Benteng Rotterdam")}.jpg`, category: "budaya", province: "Sulawesi Selatan" },
  { id: 303, name: "Tana Toraja", location: "Toraja", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Tana Toraja")}.jpg`, category: "budaya", province: "Sulawesi Selatan" },
  { id: 304, name: "Pantai Bira", location: "Bulukumba", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Bira")}.jpg`, category: "pantai", province: "Sulawesi Selatan" },
  { id: 305, name: "Air Terjun Bantimurung", location: "Maros", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Air Terjun Bantimurung")}.jpg`, category: "alam", province: "Sulawesi Selatan" },

  // =====================
  // SULAWESI TENGAH (306–310)
  // =====================
  { id: 306, name: "Danau Poso", location: "Poso", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Poso")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 307, name: "Pantai Tanjung Karang", location: "Donggala", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Tanjung Karang")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 308, name: "Air Terjun Saluopa", location: "Poso", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Air Terjun Saluopa")}.jpg`, category: "alam", province: "Sulawesi Tengah" },
  { id: 309, name: "Pulau Dua", location: "Donggala", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pulau Dua")}.jpg`, category: "pantai", province: "Sulawesi Tengah" },
  { id: 310, name: "Museum Sulawesi Tengah", location: "Palu", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Museum Sulawesi Tengah")}.jpg`, category: "budaya", province: "Sulawesi Tengah" },

  // =====================
  // SULAWESI TENGGARA (311–315)
  // =====================
  { id: 311, name: "Pulau Labengki", location: "Konawe Utara", price: "Rp 20.000", priceNum: 20000, image: `/images/${slugify("Pulau Labengki")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 312, name: "Pulau Bokori", location: "Konawe", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Pulau Bokori")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 313, name: "Pantai Nambo", location: "Kendari", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pantai Nambo")}.jpg`, category: "pantai", province: "Sulawesi Tenggara" },
  { id: 314, name: "Air Terjun Moramo", location: "Konawe Selatan", price: "Rp 15.000", priceNum: 15000, image: `/images/${slugify("Air Terjun Moramo")}.jpg`, category: "alam", province: "Sulawesi Tenggara" },
  { id: 315, name: "Benteng Keraton Buton", location: "Baubau", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Benteng Keraton Buton")}.jpg`, category: "budaya", province: "Sulawesi Tenggara" },

  // =====================
  // SULAWESI UTARA (316–320)
  // =====================
  { id: 316, name: "Taman Nasional Bunaken", location: "Manado", price: "Rp 50.000", priceNum: 50000, image: `/images/${slugify("Taman Nasional Bunaken")}.jpg`, category: "alam", province: "Sulawesi Utara" },
  { id: 317, name: "Pantai Malalayang", location: "Manado", price: "Gratis", priceNum: 0, image: `/images/${slugify("Pantai Malalayang")}.jpg`, category: "pantai", province: "Sulawesi Utara" },
  { id: 318, name: "Danau Tondano", location: "Minahasa", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Tondano")}.jpg`, category: "alam", province: "Sulawesi Utara" },
  { id: 319, name: "Bukit Kasih Kanonang", location: "Minahasa", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Bukit Kasih Kanonang")}.jpg`, category: "budaya", province: "Sulawesi Utara" },
  { id: 320, name: "Pulau Siladen", location: "Manado", price: "Rp 25.000", priceNum: 25000, image: `/images/${slugify("Pulau Siladen")}.jpg`, category: "pantai", province: "Sulawesi Utara" },

  // =====================
  // SUMATERA SELATAN (321–325)
  // =====================
  { id: 321, name: "Jembatan Ampera", location: "Palembang", price: "Gratis", priceNum: 0, image: `/images/${slugify("Jembatan Ampera")}.jpg`, category: "budaya", province: "Sumatera Selatan" },
  { id: 322, name: "Benteng Kuto Besak", location: "Palembang", price: "Gratis", priceNum: 0, image: `/images/${slugify("Benteng Kuto Besak")}.jpg`, category: "budaya", province: "Sumatera Selatan" },
  { id: 323, name: "Pulau Kemaro", location: "Palembang", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Kemaro")}.jpg`, category: "budaya", province: "Sumatera Selatan" },
  { id: 324, name: "Danau Ranau", location: "OKU Selatan", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Ranau")}.jpg`, category: "alam", province: "Sumatera Selatan" },
  { id: 325, name: "Air Terjun Bidadari", location: "Lahat", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Air Terjun Bidadari")}.jpg`, category: "alam", province: "Sumatera Selatan" },

  // =====================
  // SUMATERA UTARA (326–330)
  // =====================
  { id: 326, name: "Danau Toba", location: "Samosir", price: "Gratis", priceNum: 0, image: `/images/${slugify("Danau Toba")}.jpg`, category: "alam", province: "Sumatera Utara" },
  { id: 327, name: "Pulau Samosir", location: "Samosir", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Pulau Samosir")}.jpg`, category: "budaya", province: "Sumatera Utara" },
  { id: 328, name: "Air Terjun Sipiso-piso", location: "Karo", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Air Terjun Sipiso-piso")}.jpg`, category: "alam", province: "Sumatera Utara" },
  { id: 329, name: "Istana Maimun", location: "Medan", price: "Rp 10.000", priceNum: 10000, image: `/images/${slugify("Istana Maimun")}.jpg`, category: "budaya", province: "Sumatera Utara" },
  { id: 330, name: "Pantai Pandan", location: "Tapanuli Tengah", price: "Rp 5.000", priceNum: 5000, image: `/images/${slugify("Pantai Pandan")}.jpg`, category: "pantai", province: "Sumatera Utara" }
  // ... rest of your 330+ destinations
];

// =====================
// HELPER FUNCTIONS
// =====================

// Load data from localStorage or use default
export function getWisataData() {
  if (typeof window === 'undefined') return defaultWisataData;

  const stored = localStorage.getItem('wisata_data');
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (error) {
      console.error('Error parsing stored data:', error);
      return defaultWisataData;
    }
  }
  return defaultWisataData;
}

// Save data to localStorage
export function saveWisataData(data) {
  if (typeof window === 'undefined') return false;

  try {
    localStorage.setItem('wisata_data', JSON.stringify(data));
    return true;
  } catch (error) {
    console.error('Error saving data:', error);
    return false;
  }
}

// Add new wisata with full structure
export function addWisata(wisataData) {
  const currentData = getWisataData();
  const newId = Math.max(...currentData.map(d => d.id), 0) + 1;

  const newWisata = {
    id: newId,
    name: wisataData.name || "",
    location: wisataData.location || "",
    province: wisataData.province || "",
    category: wisataData.category || "",

    // PRICING
    price: wisataData.price || "Gratis",
    priceNum: wisataData.priceNum || 0,
    htmLokal: wisataData.htmLokal || "",
    htmTuris: wisataData.htmTuris || "",

    // MEDIA
    image: wisataData.image || "",
    gallery: wisataData.gallery || [],
    videoUrl: wisataData.videoUrl || "",

    // DETAILS
    description: wisataData.description || "",
    jamOperasional: wisataData.jamOperasional || "",
    fasilitas: wisataData.fasilitas || [],
    aktivitas: wisataData.aktivitas || [],
    tips: wisataData.tips || "",

    // LOCATION
    coordinates: wisataData.coordinates || null,

    // ACCOMMODATION
    hotelTerdekat: wisataData.hotelTerdekat || []
  };

  const updatedData = [...currentData, newWisata];
  saveWisataData(updatedData);

  return newWisata;
}

// Update wisata
export function updateWisata(id, wisataData) {
  const currentData = getWisataData();
  const index = currentData.findIndex(w => w.id === id);

  if (index === -1) return null;

  const updatedWisata = {
    ...currentData[index],
    ...wisataData,
    id, // Keep original ID
  };

  currentData[index] = updatedWisata;
  saveWisataData(currentData);

  return updatedWisata;
}

// Delete wisata
export function deleteWisata(id) {
  const currentData = getWisataData();
  const filtered = currentData.filter(w => w.id !== id);

  if (filtered.length === currentData.length) return false;

  saveWisataData(filtered);
  return true;
}

// Bulk delete wisata
export function bulkDeleteWisata(ids) {
  const currentData = getWisataData();
  const filtered = currentData.filter(w => !ids.includes(w.id));

  saveWisataData(filtered);
  return currentData.length - filtered.length;
}

// Get wisata by ID
export function getWisataById(id) {
  const currentData = getWisataData();
  return currentData.find(w => w.id === id) || null;
}

// Get wisata statistics
export function getWisataStats() {
  const data = getWisataData();
  return {
    totalWisata: data.length,
    totalProvinsi: [...new Set(data.map(d => d.province))].length,
    totalKategori: [...new Set(data.map(d => d.category))].length,
    totalViews: data.reduce((sum, dest) => sum + (dest.views || 0), 0) || 12543
  };
}

// Search wisata
export function searchWisata(query) {
  const lowerQuery = query.toLowerCase();
  const data = getWisataData();
  return data.filter(dest =>
    dest.name.toLowerCase().includes(lowerQuery) ||
    dest.location.toLowerCase().includes(lowerQuery) ||
    dest.province.toLowerCase().includes(lowerQuery)
  );
}

// Filter by province
export function getWisataByProvince(province) {
  const data = getWisataData();
  return data.filter(dest => dest.province === province);
}

// Filter by category
export function getWisataByCategory(category) {
  const data = getWisataData();
  return data.filter(dest => dest.category === category);
}

// Check if wisata has detail content
export function hasDetailContent(id) {
  const wisata = getWisataById(id);
  if (!wisata) return false;

  return !!(
    wisata.description ||
    (wisata.fasilitas && wisata.fasilitas.length > 0) ||
    (wisata.aktivitas && wisata.aktivitas.length > 0) ||
    wisata.jamOperasional ||
    wisata.tips ||
    (wisata.gallery && wisata.gallery.length > 1) ||
    wisata.videoUrl ||
    (wisata.hotelTerdekat && wisata.hotelTerdekat.length > 0)
  );
}