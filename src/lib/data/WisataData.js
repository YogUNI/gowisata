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
  {
  id: 71,
  name: "Masjid Raya Baiturrahman",
  location: "Banda Aceh",
  province: "Aceh",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Masjid Raya Baiturrahman")}.jpg`,
  gallery: [`/images/${slugify("Masjid Raya Baiturrahman")}.jpg`],
  videoUrl: null,

  description: "Masjid Raya Baiturrahman merupakan ikon Aceh yang bersejarah dan simbol kebangkitan masyarakat Aceh setelah tsunami.",
  jamOperasional: "04.30 - 22.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Tempat Wudhu"],
  aktivitas: ["Wisata Religi", "Fotografi", "Edukasi Sejarah"],
  tips: "Gunakan pakaian sopan saat berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 72,
  name: "Museum Tsunami Aceh",
  location: "Banda Aceh",
  province: "Aceh",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Museum Tsunami Aceh")}.jpg`,
  gallery: [`/images/${slugify("Museum Tsunami Aceh")}.jpg`],
  videoUrl: null,

  description: "Museum Tsunami Aceh dibangun sebagai monumen peringatan tsunami 2004 sekaligus pusat edukasi kebencanaan.",
  jamOperasional: "09.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Ruang Pameran"],
  aktivitas: ["Edukasi", "Wisata Sejarah", "Fotografi"],
  tips: "Datang pagi agar lebih leluasa mengeksplor.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 73,
  name: "Pantai Lampuuk",
  location: "Aceh Besar",
  province: "Aceh",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Lampuuk")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lampuuk")}.jpg`],
  videoUrl: null,

  description: "Pantai Lampuuk terkenal dengan pasir putih bersih dan ombak yang cocok untuk bersantai.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi", "Menikmati Sunset"],
  tips: "Datang sore hari untuk suasana terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 74,
  name: "Pantai Lhoknga",
  location: "Aceh Besar",
  province: "Aceh",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Lhoknga")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lhoknga")}.jpg`],
  videoUrl: null,

  description: "Pantai Lhoknga menawarkan pemandangan laut lepas dengan ombak besar yang digemari peselancar.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Surfing", "Fotografi", "Wisata Pantai"],
  tips: "Perhatikan kondisi ombak saat berenang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 75,
  name: "Pulau Weh",
  location: "Sabang",
  province: "Aceh",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Weh")}.jpg`,
  gallery: [`/images/${slugify("Pulau Weh")}.jpg`],
  videoUrl: null,

  description: "Pulau Weh merupakan destinasi wisata bahari unggulan Aceh dengan laut jernih dan terumbu karang indah.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Pelabuhan", "Restoran"],
  aktivitas: ["Snorkeling", "Diving", "Wisata Alam"],
  tips: "Bawa perlengkapan snorkeling pribadi jika ada.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 76,
  name: "Pantai Iboih",
  location: "Sabang",
  province: "Aceh",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Iboih")}.jpg`,
  gallery: [`/images/${slugify("Pantai Iboih")}.jpg`],
  videoUrl: null,

  description: "Pantai Iboih terkenal sebagai spot snorkeling favorit dengan air laut jernih dan biota laut beragam.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan", "Penginapan"],
  aktivitas: ["Snorkeling", "Berenang", "Fotografi"],
  tips: "Datang pagi saat air laut masih tenang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 77,
  name: "Danau Laut Tawar",
  location: "Aceh Tengah",
  province: "Aceh",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Laut Tawar")}.jpg`,
  gallery: [`/images/${slugify("Danau Laut Tawar")}.jpg`],
  videoUrl: null,

  description: "Danau Laut Tawar menawarkan panorama danau pegunungan yang sejuk dan asri di kawasan Takengon.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Alam"],
  tips: "Gunakan jaket karena udara cukup dingin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 78,
  name: "Air Terjun Suhom",
  location: "Aceh Besar",
  province: "Aceh",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Suhom")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Suhom")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Suhom menyuguhkan pemandangan air terjun bertingkat dengan latar pegunungan yang indah.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "Hati-hati jalan licin saat musim hujan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 79,
  name: "Benteng Indra Patra",
  location: "Aceh Besar",
  province: "Aceh",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Benteng Indra Patra")}.jpg`,
  gallery: [`/images/${slugify("Benteng Indra Patra")}.jpg`],
  videoUrl: null,

  description: "Benteng Indra Patra merupakan situs bersejarah peninggalan Kerajaan Lamuri di Aceh.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Wisata Sejarah", "Fotografi"],
  tips: "Datang pagi untuk cuaca yang lebih nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 80,
  name: "Tugu KM Nol",
  location: "Sabang",
  province: "Aceh",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Tugu KM Nol")}.jpg`,
  gallery: [`/images/${slugify("Tugu KM Nol")}.jpg`],
  videoUrl: null,

  description: "Tugu KM Nol Sabang menandai titik nol kilometer Indonesia dan menjadi simbol geografis nasional.",
  jamOperasional: "08.00 - 18.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Ikonik"],
  tips: "Datang saat cuaca cerah untuk foto maksimal.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // NUSA TENGGARA TIMUR (81–90)
  // =====================
  {
  id: 81,
  name: "Taman Nasional Komodo",
  location: "Labuan Bajo",
  province: "Nusa Tenggara Timur",
  category: "alam",

  price: "Rp 150.000",
  priceNum: 150000,
  htmLokal: "Rp 150.000",
  htmTuris: "Rp 150.000",

  image: `/images/${slugify("Taman Nasional Komodo")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Komodo")}.jpg`],
  videoUrl: null,

  description: "Taman Nasional Komodo merupakan habitat asli komodo dan destinasi wisata alam kelas dunia dengan lanskap savana dan laut yang eksotis.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Dermaga", "Guide Wisata"],
  aktivitas: ["Tracking", "Wisata Alam", "Fotografi"],
  tips: "Ikuti arahan ranger demi keselamatan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 82,
  name: "Pulau Padar",
  location: "Labuan Bajo",
  province: "Nusa Tenggara Timur",
  category: "alam",

  price: "Rp 150.000",
  priceNum: 150000,
  htmLokal: "Rp 150.000",
  htmTuris: "Rp 150.000",

  image: `/images/${slugify("Pulau Padar")}.jpg`,
  gallery: [`/images/${slugify("Pulau Padar")}.jpg`],
  videoUrl: null,

  description: "Pulau Padar terkenal dengan pemandangan perbukitan ikonik dan teluk berwarna kontras dari puncaknya.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Dermaga"],
  aktivitas: ["Hiking", "Fotografi", "Wisata Alam"],
  tips: "Gunakan alas kaki nyaman saat mendaki.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 83,
  name: "Pink Beach",
  location: "Labuan Bajo",
  province: "Nusa Tenggara Timur",
  category: "pantai",

  price: "Rp 150.000",
  priceNum: 150000,
  htmLokal: "Rp 150.000",
  htmTuris: "Rp 150.000",

  image: `/images/${slugify("Pink Beach")}.jpg`,
  gallery: [`/images/${slugify("Pink Beach")}.jpg`],
  videoUrl: null,

  description: "Pink Beach memiliki pasir berwarna merah muda yang unik akibat campuran pasir putih dan serpihan karang.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Dermaga"],
  aktivitas: ["Snorkeling", "Berenang", "Fotografi"],
  tips: "Datang saat cuaca cerah untuk warna maksimal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 84,
  name: "Danau Kelimutu",
  location: "Ende",
  province: "Nusa Tenggara Timur",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Danau Kelimutu")}.jpg`,
  gallery: [`/images/${slugify("Danau Kelimutu")}.jpg`],
  videoUrl: null,

  description: "Danau Kelimutu terkenal dengan tiga danau kawah yang dapat berubah warna secara alami.",
  jamOperasional: "05.00 - 12.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Menikmati Sunrise", "Fotografi"],
  tips: "Datang subuh untuk melihat matahari terbit.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 85,
  name: "Pantai Lasiana",
  location: "Kupang",
  province: "Nusa Tenggara Timur",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Lasiana")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lasiana")}.jpg`],
  videoUrl: null,

  description: "Pantai Lasiana merupakan pantai populer di Kupang dengan deretan pohon lontar.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Sore hari suasananya paling nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 86,
  name: "Bukit Cinta",
  location: "Labuan Bajo",
  province: "Nusa Tenggara Timur",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Cinta")}.jpg`,
  gallery: [`/images/${slugify("Bukit Cinta")}.jpg`],
  videoUrl: null,

  description: "Bukit Cinta menawarkan panorama kota Labuan Bajo dan laut lepas dari ketinggian.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Pemandangan"],
  tips: "Datang saat sunrise atau sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 87,
  name: "Pulau Kanawa",
  location: "Labuan Bajo",
  province: "Nusa Tenggara Timur",
  category: "pantai",

  price: "Rp 100.000",
  priceNum: 100000,
  htmLokal: "Rp 100.000",
  htmTuris: "Rp 100.000",

  image: `/images/${slugify("Pulau Kanawa")}.jpg`,
  gallery: [`/images/${slugify("Pulau Kanawa")}.jpg`],
  videoUrl: null,

  description: "Pulau Kanawa terkenal dengan pantai berpasir putih dan spot snorkeling yang jernih.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Dermaga", "Penginapan"],
  aktivitas: ["Snorkeling", "Berenang"],
  tips: "Bawa sunblock dan air minum.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 88,
  name: "Goa Rangko",
  location: "Manggarai Barat",
  province: "Nusa Tenggara Timur",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Goa Rangko")}.jpg`,
  gallery: [`/images/${slugify("Goa Rangko")}.jpg`],
  videoUrl: null,

  description: "Goa Rangko memiliki kolam air asin jernih di dalam gua yang memantulkan cahaya matahari.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Berenang", "Fotografi"],
  tips: "Datang saat matahari tinggi untuk cahaya maksimal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 89,
  name: "Pantai Kolbano",
  location: "Timor Tengah Selatan",
  province: "Nusa Tenggara Timur",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Kolbano")}.jpg`,
  gallery: [`/images/${slugify("Pantai Kolbano")}.jpg`],
  videoUrl: null,

  description: "Pantai Kolbano terkenal dengan batu-batu berwarna alami yang unik di sepanjang pantainya.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Pantai"],
  tips: "Jangan mengambil batu sebagai oleh-oleh.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 90,
  name: "Kampung Adat Bena",
  location: "Ngada",
  province: "Nusa Tenggara Timur",
  category: "budaya",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Kampung Adat Bena")}.jpg`,
  gallery: [`/images/${slugify("Kampung Adat Bena")}.jpg`],
  videoUrl: null,

  description: "Kampung Adat Bena merupakan desa tradisional dengan rumah adat dan budaya Megalitik yang masih lestari.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Fotografi"],
  tips: "Hormati adat dan budaya setempat.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // BENGKULU (91–100)
  // =====================
  {
  id: 91,
  name: "Pantai Panjang",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Panjang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Panjang")}.jpg`],
  videoUrl: null,

  description: "Pantai Panjang merupakan ikon wisata Bengkulu dengan garis pantai panjang dan ombak yang cocok untuk bersantai.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "Datang sore hari untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 92,
  name: "Benteng Marlborough",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Benteng Marlborough")}.jpg`,
  gallery: [`/images/${slugify("Benteng Marlborough")}.jpg`],
  videoUrl: null,

  description: "Benteng Marlborough adalah peninggalan kolonial Inggris yang menjadi salah satu benteng terbesar di Asia Tenggara.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata"],
  aktivitas: ["Wisata Sejarah", "Fotografi"],
  tips: "Baca papan informasi untuk memahami sejarah benteng.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 93,
  name: "Danau Dendam Tak Sudah",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Dendam Tak Sudah")}.jpg`,
  gallery: [`/images/${slugify("Danau Dendam Tak Sudah")}.jpg`],
  videoUrl: null,

  description: "Danau Dendam Tak Sudah merupakan kawasan konservasi dengan pemandangan danau dan hutan yang asri.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Alam"],
  tips: "Jaga kebersihan area danau.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 94,
  name: "Pantai Tapak Paderi",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Tapak Paderi")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tapak Paderi")}.jpg`],
  videoUrl: null,

  description: "Pantai Tapak Paderi merupakan pantai favorit warga lokal untuk menikmati sore hari.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Cocok dikunjungi bersama keluarga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 95,
  name: "Air Terjun Curug Embun",
  location: "Rejang Lebong",
  province: "Bengkulu",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Curug Embun")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Curug Embun")}.jpg`],
  videoUrl: null,

  description: "Curug Embun menawarkan suasana sejuk pegunungan dengan air terjun yang alami dan jernih.",
  jamOperasional: "07.00 - 16.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Wisata Alam", "Fotografi"],
  tips: "Gunakan alas kaki anti licin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 96,
  name: "Pantai Sungai Suci",
  location: "Bengkulu Tengah",
  province: "Bengkulu",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Sungai Suci")}.jpg`,
  gallery: [`/images/${slugify("Pantai Sungai Suci")}.jpg`],
  videoUrl: null,

  description: "Pantai Sungai Suci dikenal dengan jembatan gantung dan panorama laut lepas.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Jembatan Gantung"],
  aktivitas: ["Fotografi", "Wisata Pantai"],
  tips: "Hati-hati saat menyeberang jembatan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 97,
  name: "Bukit Kandis",
  location: "Seluma",
  province: "Bengkulu",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Bukit Kandis")}.jpg`,
  gallery: [`/images/${slugify("Bukit Kandis")}.jpg`],
  videoUrl: null,

  description: "Bukit Kandis memiliki formasi batuan unik dan cocok untuk spot foto alam.",
  jamOperasional: "06.00 - 17.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "Datang saat cuaca cerah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 98,
  name: "Danau Mas Harun Bastari",
  location: "Rejang Lebong",
  province: "Bengkulu",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Danau Mas Harun Bastari")}.jpg`,
  gallery: [`/images/${slugify("Danau Mas Harun Bastari")}.jpg`],
  videoUrl: null,

  description: "Danau Mas Harun Bastari adalah danau buatan dengan panorama pegunungan di sekitarnya.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Gazebo"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Cocok untuk wisata keluarga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 99,
  name: "Rumah Pengasingan Bung Karno",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Rumah Pengasingan Bung Karno")}.jpg`,
  gallery: [`/images/${slugify("Rumah Pengasingan Bung Karno")}.jpg`],
  videoUrl: null,

  description: "Rumah bersejarah tempat Bung Karno diasingkan semasa penjajahan Belanda.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Pemandu Wisata"],
  aktivitas: ["Wisata Sejarah", "Edukasi"],
  tips: "Hormati area bersejarah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 100,
  name: "Pantai Jakat",
  location: "Bengkulu",
  province: "Bengkulu",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Jakat")}.jpg`,
  gallery: [`/images/${slugify("Pantai Jakat")}.jpg`],
  videoUrl: null,

  description: "Pantai Jakat merupakan pantai perkotaan yang mudah diakses dan cocok untuk rekreasi ringan.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Bersantai", "Wisata Pantai"],
  tips: "Datang pagi untuk suasana lebih tenang.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // GORONTALO (101–110)
  // =====================
  {
  id: 101,
  name: "Pantai Olele",
  location: "Bone Bolango",
  province: "Gorontalo",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Olele")}.jpg`,
  gallery: [`/images/${slugify("Pantai Olele")}.jpg`],
  videoUrl: null,

  description: "Pantai Olele dikenal dengan keindahan bawah lautnya dan sering dijadikan lokasi snorkeling di Gorontalo.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Pantai"],
  tips: "Datang pagi hari untuk air laut yang lebih jernih.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 102,
  name: "Benteng Otanaha",
  location: "Gorontalo",
  province: "Gorontalo",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Benteng Otanaha")}.jpg`,
  gallery: [`/images/${slugify("Benteng Otanaha")}.jpg`],
  videoUrl: null,

  description: "Benteng Otanaha merupakan situs sejarah peninggalan Portugis dengan pemandangan Danau Limboto dari ketinggian.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Fotografi"],
  tips: "Gunakan alas kaki yang nyaman karena banyak anak tangga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 103,
  name: "Pulau Saronde",
  location: "Gorontalo Utara",
  province: "Gorontalo",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Saronde")}.jpg`,
  gallery: [`/images/${slugify("Pulau Saronde")}.jpg`],
  videoUrl: null,

  description: "Pulau kecil dengan pasir putih dan air laut jernih yang cocok untuk wisata bahari dan camping.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Dermaga", "Gazebo"],
  aktivitas: ["Snorkeling", "Camping", "Fotografi"],
  tips: "Bawa perlengkapan pribadi karena fasilitas terbatas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 104,
  name: "Pantai Botutonuo",
  location: "Bone Bolango",
  province: "Gorontalo",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Botutonuo")}.jpg`,
  gallery: [`/images/${slugify("Pantai Botutonuo")}.jpg`],
  videoUrl: null,

  description: "Pantai dengan pasir putih dan ombak tenang yang cocok untuk wisata keluarga.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Gazebo"],
  aktivitas: ["Bermain Air", "Fotografi"],
  tips: "Datang sore hari untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 105,
  name: "Danau Limboto",
  location: "Gorontalo",
  province: "Gorontalo",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Limboto")}.jpg`,
  gallery: [`/images/${slugify("Danau Limboto")}.jpg`],
  videoUrl: null,

  description: "Danau terbesar di Gorontalo yang menjadi ikon wisata alam dan tempat menikmati matahari terbit.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "Waktu terbaik berkunjung adalah pagi hari.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 106,
  name: "Bukit Layang",
  location: "Gorontalo",
  province: "Gorontalo",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Layang")}.jpg`,
  gallery: [`/images/${slugify("Bukit Layang")}.jpg`],
  videoUrl: null,

  description: "Bukit dengan pemandangan kota Gorontalo dan Danau Limboto dari ketinggian.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Hiking Ringan"],
  tips: "Gunakan kendaraan yang prima karena jalannya menanjak.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 107,
  name: "Pulau Cinta",
  location: "Boalemo",
  province: "Gorontalo",
  category: "pantai",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Pulau Cinta")}.jpg`,
  gallery: [`/images/${slugify("Pulau Cinta")}.jpg`],
  videoUrl: null,

  description: "Pulau eksotis berbentuk hati yang terkenal dengan resort terapung dan laut biru jernih.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Dermaga", "Resort"],
  aktivitas: ["Snorkeling", "Fotografi"],
  tips: "Booking lebih awal jika ingin menginap.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 108,
  name: "Pantai Ratu",
  location: "Gorontalo Utara",
  province: "Gorontalo",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Ratu")}.jpg`,
  gallery: [`/images/${slugify("Pantai Ratu")}.jpg`],
  videoUrl: null,

  description: "Pantai alami dengan suasana tenang dan pasir putih yang masih asri.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Bawa bekal sendiri karena minim warung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 109,
  name: "Air Terjun Taludaa",
  location: "Bone Bolango",
  province: "Gorontalo",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Taludaa")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Taludaa")}.jpg`],
  videoUrl: null,

  description: "Air terjun alami dengan aliran jernih yang cocok untuk wisata alam dan trekking ringan.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Trekking", "Fotografi"],
  tips: "Hati-hati saat musim hujan karena jalur licin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 110,
  name: "Museum Purbakala Gorontalo",
  location: "Gorontalo",
  province: "Gorontalo",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Purbakala Gorontalo")}.jpg`,
  gallery: [`/images/${slugify("Museum Purbakala Gorontalo")}.jpg`],
  videoUrl: null,

  description: "Museum yang menyimpan berbagai koleksi benda purbakala dan sejarah Gorontalo.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Edukasi"],
  tips: "Datang di jam operasional awal agar lebih leluasa.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SULAWESI BARAT (111–120)
  // =====================
  {
  id: 111,
  name: "Pantai Manakarra",
  location: "Mamuju",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Manakarra")}.jpg`,
  gallery: [`/images/${slugify("Pantai Manakarra")}.jpg`],
  videoUrl: null,

  description: "Pantai Manakarra merupakan ikon wisata Mamuju dengan pemandangan matahari terbenam yang indah.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung"],
  aktivitas: ["Bersantai", "Fotografi", "Menikmati Sunset"],
  tips: "Datang sore hari untuk sunset terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 112,
  name: "Pulau Karampuang",
  location: "Mamuju",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Karampuang")}.jpg`,
  gallery: [`/images/${slugify("Pulau Karampuang")}.jpg`],
  videoUrl: null,

  description: "Pulau Karampuang menawarkan pasir putih dan air laut jernih yang cocok untuk snorkeling.",
  jamOperasional: "06.00 - 17.00 WITA",
  fasilitas: ["Dermaga", "Gazebo"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Bahari"],
  tips: "Gunakan perahu pagi hari saat ombak lebih tenang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 113,
  name: "Pantai Dato",
  location: "Majene",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Dato")}.jpg`,
  gallery: [`/images/${slugify("Pantai Dato")}.jpg`],
  videoUrl: null,

  description: "Pantai Dato terkenal dengan tebing karangnya dan panorama laut lepas yang memukau.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Pemandangan"],
  tips: "Berhati-hati di area tebing.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 114,
  name: "Air Terjun Limbong Kamandang",
  location: "Mamasa",
  province: "Sulawesi Barat",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Limbong Kamandang")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Limbong Kamandang")}.jpg`],
  videoUrl: null,

  description: "Air terjun alami di Mamasa dengan suasana sejuk dan pemandangan hutan yang asri.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Gunakan alas kaki anti selip.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 115,
  name: "Pegunungan Quarles",
  location: "Mamasa",
  province: "Sulawesi Barat",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pegunungan Quarles")}.jpg`,
  gallery: [`/images/${slugify("Pegunungan Quarles")}.jpg`],
  videoUrl: null,

  description: "Pegunungan Quarles menyuguhkan panorama alam pegunungan dengan udara sejuk khas Mamasa.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Hiking", "Fotografi"],
  tips: "Datang pagi hari untuk cuaca lebih cerah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 116,
  name: "Danau Tanralili",
  location: "Mamasa",
  province: "Sulawesi Barat",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Danau Tanralili")}.jpg`,
  gallery: [`/images/${slugify("Danau Tanralili")}.jpg`],
  videoUrl: null,

  description: "Danau alami dengan air jernih dan suasana tenang yang cocok untuk relaksasi.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Bersantai"],
  tips: "Jaga kebersihan danau.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 117,
  name: "Pantai Palippis",
  location: "Polewali Mandar",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Palippis")}.jpg`,
  gallery: [`/images/${slugify("Pantai Palippis")}.jpg`],
  videoUrl: null,

  description: "Pantai Palippis menawarkan pasir putih dan pemandangan laut yang masih alami.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Warung"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Datang pagi untuk suasana lebih sepi.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 118,
  name: "Pulau Gusung Toraja",
  location: "Polewali Mandar",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Gusung Toraja")}.jpg`,
  gallery: [`/images/${slugify("Pulau Gusung Toraja")}.jpg`],
  videoUrl: null,

  description: "Pulau kecil dengan pasir putih yang muncul saat air laut surut, cocok untuk fotografi.",
  jamOperasional: "06.00 - 17.00 WITA",
  fasilitas: ["Dermaga"],
  aktivitas: ["Fotografi", "Bermain Pasir"],
  tips: "Perhatikan jadwal pasang surut laut.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 119,
  name: "Air Terjun Tamasapi",
  location: "Mamuju",
  province: "Sulawesi Barat",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Tamasapi")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Tamasapi")}.jpg`],
  videoUrl: null,

  description: "Air terjun populer di Mamuju yang mudah diakses dan cocok untuk wisata keluarga.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Bermain Air"],
  tips: "Hindari datang saat hujan lebat.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 120,
  name: "Pantai Malunda",
  location: "Majene",
  province: "Sulawesi Barat",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Malunda")}.jpg`,
  gallery: [`/images/${slugify("Pantai Malunda")}.jpg`],
  videoUrl: null,

  description: "Pantai Malunda memiliki garis pantai panjang dengan suasana tenang dan alami.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "Bawa bekal sendiri karena minim fasilitas.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // BALI (121–130)
  // =====================
  {
  id: 121,
  name: "Pantai Kuta",
  location: "Badung",
  province: "Bali",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Kuta")}.jpg`,
  gallery: [`/images/${slugify("Pantai Kuta")}.jpg`],
  videoUrl: null,

  description: "Pantai Kuta merupakan pantai paling terkenal di Bali dengan ombak yang cocok untuk surfing dan sunset ikonik.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Restoran", "Toko Souvenir"],
  aktivitas: ["Surfing", "Bersantai", "Menikmati Sunset", "Fotografi"],
  tips: "Datang sore hari untuk menikmati sunset terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 122,
  name: "Pantai Sanur",
  location: "Denpasar",
  province: "Bali",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Sanur")}.jpg`,
  gallery: [`/images/${slugify("Pantai Sanur")}.jpg`],
  videoUrl: null,

  description: "Pantai Sanur terkenal dengan suasana tenang dan cocok untuk menikmati sunrise.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Restoran"],
  aktivitas: ["Bersantai", "Fotografi", "Menikmati Sunrise"],
  tips: "Pagi hari adalah waktu terbaik untuk berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 123,
  name: "Pantai Pandawa",
  location: "Badung",
  province: "Bali",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Pandawa")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pandawa")}.jpg`],
  videoUrl: null,

  description: "Pantai Pandawa menawarkan pasir putih bersih dengan akses jalan unik di antara tebing kapur.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Berenang", "Fotografi", "Wisata Pantai"],
  tips: "Gunakan sunblock saat siang hari.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 124,
  name: "Pantai Melasti",
  location: "Badung",
  province: "Bali",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Melasti")}.jpg`,
  gallery: [`/images/${slugify("Pantai Melasti")}.jpg`],
  videoUrl: null,

  description: "Pantai Melasti terkenal dengan tebing megah dan air laut biru jernih.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Fotografi", "Bersantai", "Menikmati Sunset"],
  tips: "Datang sore hari untuk pencahayaan terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 125,
  name: "Pura Besakih",
  location: "Karangasem",
  province: "Bali",
  category: "budaya",

  price: "Rp 60.000",
  priceNum: 60000,
  htmLokal: "Rp 60.000",
  htmTuris: "Rp 60.000",

  image: `/images/${slugify("Pura Besakih")}.jpg`,
  gallery: [`/images/${slugify("Pura Besakih")}.jpg`],
  videoUrl: null,

  description: "Pura Besakih merupakan pura terbesar dan paling suci di Bali yang terletak di lereng Gunung Agung.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Fotografi", "Religi"],
  tips: "Gunakan pakaian sopan dan kain saat masuk pura.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 126,
  name: "Pura Tanah Lot",
  location: "Tabanan",
  province: "Bali",
  category: "budaya",

  price: "Rp 60.000",
  priceNum: 60000,
  htmLokal: "Rp 60.000",
  htmTuris: "Rp 60.000",

  image: `/images/${slugify("Pura Tanah Lot")}.jpg`,
  gallery: [`/images/${slugify("Pura Tanah Lot")}.jpg`],
  videoUrl: null,

  description: "Pura Tanah Lot berdiri di atas batu karang di tengah laut dan terkenal dengan panorama sunset.",
  jamOperasional: "07.00 - 19.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Toko Souvenir"],
  aktivitas: ["Fotografi", "Wisata Budaya", "Menikmati Sunset"],
  tips: "Perhatikan pasang surut air laut.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 127,
  name: "Tegallalang Rice Terrace",
  location: "Gianyar",
  province: "Bali",
  category: "alam",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Tegallalang Rice Terrace")}.jpg`,
  gallery: [`/images/${slugify("Tegallalang Rice Terrace")}.jpg`],
  videoUrl: null,

  description: "Terasering sawah Tegallalang menyuguhkan pemandangan hijau khas Bali yang ikonik.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Cafe"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "Datang pagi hari untuk cahaya terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 128,
  name: "Air Terjun Tegenungan",
  location: "Gianyar",
  province: "Bali",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Air Terjun Tegenungan")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Tegenungan")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Tegenungan mudah diakses dan cocok untuk wisata alam dan fotografi.",
  jamOperasional: "06.30 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung"],
  aktivitas: ["Bermain Air", "Fotografi"],
  tips: "Gunakan alas kaki yang nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 129,
  name: "Monkey Forest",
  location: "Ubud",
  province: "Bali",
  category: "alam",

  price: "Rp 80.000",
  priceNum: 80000,
  htmLokal: "Rp 80.000",
  htmTuris: "Rp 80.000",

  image: `/images/${slugify("Monkey Forest")}.jpg`,
  gallery: [`/images/${slugify("Monkey Forest")}.jpg`],
  videoUrl: null,

  description: "Monkey Forest Ubud merupakan kawasan hutan alami yang menjadi habitat ratusan monyet.",
  jamOperasional: "08.30 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Alam", "Fotografi", "Edukasi"],
  tips: "Simpan barang berharga dengan aman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 130,
  name: "Nusa Penida",
  location: "Klungkung",
  province: "Bali",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Nusa Penida")}.jpg`,
  gallery: [`/images/${slugify("Nusa Penida")}.jpg`],
  videoUrl: null,

  description: "Nusa Penida menawarkan pantai eksotis, tebing megah, dan spot foto kelas dunia.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Pelabuhan", "Toilet", "Warung"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Bahari"],
  tips: "Gunakan kendaraan yang prima karena medan jalan.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SULAWESI TENGAH (141–150)
  // =====================
  {
  id: 131,
  name: "Danau Poso",
  location: "Poso",
  province: "Sulawesi Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Poso")}.jpg`,
  gallery: [`/images/${slugify("Danau Poso")}.jpg`],
  videoUrl: null,

  description: "Danau Poso merupakan salah satu danau terdalam di Indonesia dengan air yang jernih dan panorama pegunungan yang menenangkan.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Fotografi", "Wisata Alam", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 132,
  name: "Air Terjun Saluopa",
  location: "Poso",
  province: "Sulawesi Tengah",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Saluopa")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Saluopa")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Saluopa memiliki banyak tingkatan dengan aliran air jernih yang dikelilingi hutan tropis.",
  jamOperasional: "07.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 133,
  name: "Pantai Tanjung Karang",
  location: "Donggala",
  province: "Sulawesi Tengah",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Tanjung Karang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Karang")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Karang terkenal dengan pasir putih dan spot snorkeling yang indah.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Gazebo", "Warung Makan"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 134,
  name: "Pantai Talise",
  location: "Palu",
  province: "Sulawesi Tengah",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Talise")}.jpg`,
  gallery: [`/images/${slugify("Pantai Talise")}.jpg`],
  videoUrl: null,

  description: "Pantai Talise merupakan ikon wisata Kota Palu yang cocok untuk bersantai dan menikmati senja.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Jogging Track", "Warung Makan"],
  aktivitas: ["Menikmati Sunset", "Fotografi", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 135,
  name: "Danau Tambing",
  location: "Sigi",
  province: "Sulawesi Tengah",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Danau Tambing")}.jpg`,
  gallery: [`/images/${slugify("Danau Tambing")}.jpg`],
  videoUrl: null,

  description: "Danau Tambing berada di kawasan Taman Nasional Lore Lindu dengan udara sejuk dan pemandangan hijau.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Camping Ground"],
  aktivitas: ["Camping", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 136,
  name: "Lembah Bada",
  location: "Poso",
  province: "Sulawesi Tengah",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Lembah Bada")}.jpg`,
  gallery: [`/images/${slugify("Lembah Bada")}.jpg`],
  videoUrl: null,

  description: "Lembah Bada dikenal dengan situs megalitik dan nilai sejarah serta budaya yang tinggi.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Edukasi Sejarah", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 137,
  name: "Pantai Pusat Laut",
  location: "Donggala",
  province: "Sulawesi Tengah",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Pusat Laut")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pusat Laut")}.jpg`],
  videoUrl: null,

  description: "Pantai Pusat Laut menawarkan suasana pantai yang tenang dengan panorama laut biru.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Gazebo"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 138,
  name: "Air Terjun Wera",
  location: "Sigi",
  province: "Sulawesi Tengah",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Wera")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Wera")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Wera menyuguhkan suasana alami dengan aliran air segar di tengah hutan.",
  jamOperasional: "07.00 - 16.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 139,
  name: "Pulau Togean",
  location: "Tojo Una-Una",
  province: "Sulawesi Tengah",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Togean")}.jpg`,
  gallery: [`/images/${slugify("Pulau Togean")}.jpg`],
  videoUrl: null,

  description: "Pulau Togean terkenal dengan keindahan bawah laut dan pantai tropis yang masih alami.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Penginapan", "Perahu Wisata"],
  aktivitas: ["Snorkeling", "Diving", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 140,
  name: "Pantai Malino",
  location: "Donggala",
  province: "Sulawesi Tengah",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Malino")}.jpg`,
  gallery: [`/images/${slugify("Pantai Malino")}.jpg`],
  videoUrl: null,

  description: "Pantai Malino menawarkan pantai yang tenang dengan pasir cerah dan suasana santai.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SULAWESI SELATAN (161–170)
  // =====================
  {
  id: 141,
  name: "Pantai Losari",
  location: "Makassar",
  province: "Sulawesi Selatan",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Losari")}.jpg`,
  gallery: [`/images/${slugify("Pantai Losari")}.jpg`],
  videoUrl: null,

  description: "Pantai Losari merupakan ikon Kota Makassar yang terkenal sebagai spot sunset dan pusat kuliner.",
  jamOperasional: "06.00 - 23.00 WITA",
  fasilitas: ["Area Parkir", "Kuliner", "Tempat Duduk"],
  aktivitas: ["Menikmati Sunset", "Kuliner", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 142,
  name: "Benteng Rotterdam",
  location: "Makassar",
  province: "Sulawesi Selatan",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Benteng Rotterdam")}.jpg`,
  gallery: [`/images/${slugify("Benteng Rotterdam")}.jpg`],
  videoUrl: null,

  description: "Benteng peninggalan Kerajaan Gowa yang menjadi pusat sejarah dan budaya Sulawesi Selatan.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Museum", "Area Parkir", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 143,
  name: "Pantai Tanjung Bira",
  location: "Bulukumba",
  province: "Sulawesi Selatan",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Tanjung Bira")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Bira")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Bira terkenal dengan pasir putih halus dan laut biru yang jernih.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Penginapan", "Area Parkir"],
  aktivitas: ["Berenang", "Snorkeling", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 144,
  name: "Pulau Samalona",
  location: "Makassar",
  province: "Sulawesi Selatan",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Samalona")}.jpg`,
  gallery: [`/images/${slugify("Pulau Samalona")}.jpg`],
  videoUrl: null,

  description: "Pulau Samalona menawarkan keindahan bawah laut yang cocok untuk snorkeling dan diving.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Snorkeling", "Diving", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 145,
  name: "Pulau Kodingareng Keke",
  location: "Makassar",
  province: "Sulawesi Selatan",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pulau Kodingareng Keke")}.jpg`,
  gallery: [`/images/${slugify("Pulau Kodingareng Keke")}.jpg`],
  videoUrl: null,

  description: "Pulau kecil dengan pasir putih dan laut jernih yang cocok untuk liburan singkat dari Makassar.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Berenang", "Snorkeling", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 146,
  name: "Rammang-Rammang",
  location: "Maros",
  province: "Sulawesi Selatan",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Rammang-Rammang")}.jpg`,
  gallery: [`/images/${slugify("Rammang-Rammang")}.jpg`],
  videoUrl: null,

  description: "Kawasan karst Rammang-Rammang menawarkan panorama alam unik dengan sungai dan pegunungan kapur.",
  jamOperasional: "07.00 - 17.00 WITA",
  fasilitas: ["Perahu", "Pemandu Lokal"],
  aktivitas: ["Susur Sungai", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 147,
  name: "Taman Nasional Bantimurung",
  location: "Maros",
  province: "Sulawesi Selatan",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Taman Nasional Bantimurung")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Bantimurung")}.jpg`],
  videoUrl: null,

  description: "Dikenal sebagai Kerajaan Kupu-Kupu dengan air terjun dan gua alami.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung"],
  aktivitas: ["Wisata Alam", "Fotografi", "Edukasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 148,
  name: "Toraja Land",
  location: "Tana Toraja",
  province: "Sulawesi Selatan",
  category: "budaya",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Toraja Land")}.jpg`,
  gallery: [`/images/${slugify("Toraja Land")}.jpg`],
  videoUrl: null,

  description: "Kawasan wisata budaya yang menampilkan rumah adat Tongkonan dan tradisi Toraja.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 149,
  name: "Kuburan Batu Lemo",
  location: "Tana Toraja",
  province: "Sulawesi Selatan",
  category: "budaya",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Kuburan Batu Lemo")}.jpg`,
  gallery: [`/images/${slugify("Kuburan Batu Lemo")}.jpg`],
  videoUrl: null,

  description: "Kompleks pemakaman unik khas Toraja yang terletak di tebing batu.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Fotografi", "Edukasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 150,
  name: "Pantai Akkarena",
  location: "Makassar",
  province: "Sulawesi Selatan",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Akkarena")}.jpg`,
  gallery: [`/images/${slugify("Pantai Akkarena")}.jpg`],
  videoUrl: null,

  description: "Pantai Akkarena adalah pantai modern dengan fasilitas rekreasi dan pemandangan laut Makassar.",
  jamOperasional: "07.00 - 22.00 WITA",
  fasilitas: ["Area Parkir", "Kafe", "Toilet"],
  aktivitas: ["Bersantai", "Fotografi", "Kuliner"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // JAMBI (171–180)
  // =====================
  {
  id: 151,
  name: "Danau Gunung Tujuh",
  location: "Kerinci",
  province: "Jambi",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Danau Gunung Tujuh")}.jpg`,
  gallery: [`/images/${slugify("Danau Gunung Tujuh")}.jpg`],
  videoUrl: null,

  description: "Danau Gunung Tujuh merupakan danau vulkanik tertinggi di Asia Tenggara yang dikelilingi pegunungan dan hutan lebat.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pos Pendakian"],
  aktivitas: ["Trekking", "Camping", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 152,
  name: "Gunung Kerinci",
  location: "Kerinci",
  province: "Jambi",
  category: "alam",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Gunung Kerinci")}.jpg`,
  gallery: [`/images/${slugify("Gunung Kerinci")}.jpg`],
  videoUrl: null,

  description: "Gunung Kerinci adalah gunung tertinggi di Sumatra dan tujuan favorit pendaki dengan panorama alam yang menakjubkan.",
  jamOperasional: "24 Jam (Pendakian Terjadwal)",
  fasilitas: ["Basecamp", "Area Parkir", "Pemandu"],
  aktivitas: ["Pendakian", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 153,
  name: "Taman Nasional Kerinci Seblat",
  location: "Kerinci",
  province: "Jambi",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Taman Nasional Kerinci Seblat")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Kerinci Seblat")}.jpg`],
  videoUrl: null,

  description: "Taman nasional terbesar di Sumatra yang menjadi habitat harimau Sumatra dan beragam flora fauna langka.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Pos Informasi", "Pemandu", "Area Parkir"],
  aktivitas: ["Observasi Alam", "Trekking", "Edukasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 154,
  name: "Candi Muaro Jambi",
  location: "Muaro Jambi",
  province: "Jambi",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Candi Muaro Jambi")}.jpg`,
  gallery: [`/images/${slugify("Candi Muaro Jambi")}.jpg`],
  videoUrl: null,

  description: "Kompleks percandian Buddha terbesar di Asia Tenggara yang menjadi situs sejarah penting di Provinsi Jambi.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 155,
  name: "Danau Sipin",
  location: "Jambi",
  province: "Jambi",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Sipin")}.jpg`,
  gallery: [`/images/${slugify("Danau Sipin")}.jpg`],
  videoUrl: null,

  description: "Danau Sipin merupakan danau alami di tengah kota Jambi yang cocok untuk wisata santai dan olahraga air.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan", "Jogging Track"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Keluarga"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 156,
  name: "Jembatan Gentala Arasy",
  location: "Jambi",
  province: "Jambi",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Jembatan Gentala Arasy")}.jpg`,
  gallery: [`/images/${slugify("Jembatan Gentala Arasy")}.jpg`],
  videoUrl: null,

  description: "Ikon wisata Kota Jambi yang menghubungkan dua kawasan bersejarah di Sungai Batanghari.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Spot Foto"],
  aktivitas: ["Fotografi", "Wisata Kota", "Jalan Santai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 157,
  name: "Air Terjun Telun Berasap",
  location: "Kerinci",
  province: "Jambi",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Telun Berasap")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Telun Berasap")}.jpg`],
  videoUrl: null,

  description: "Air terjun megah dengan debit air besar yang menciptakan kabut menyerupai asap.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Gazebo"],
  aktivitas: ["Wisata Alam", "Fotografi", "Relaksasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 158,
  name: "Bukit Khayangan",
  location: "Sungai Penuh",
  province: "Jambi",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Khayangan")}.jpg`,
  gallery: [`/images/${slugify("Bukit Khayangan")}.jpg`],
  videoUrl: null,

  description: "Bukit Khayangan menawarkan panorama Kota Sungai Penuh dari ketinggian dengan pemandangan awan yang indah.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Spot Foto"],
  aktivitas: ["Menikmati Pemandangan", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 159,
  name: "Museum Negeri Jambi",
  location: "Jambi",
  province: "Jambi",
  category: "budaya",

  price: "Rp 3.000",
  priceNum: 3000,
  htmLokal: "Rp 3.000",
  htmTuris: "Rp 3.000",

  image: `/images/${slugify("Museum Negeri Jambi")}.jpg`,
  gallery: [`/images/${slugify("Museum Negeri Jambi")}.jpg`],
  videoUrl: null,

  description: "Museum yang menyimpan koleksi sejarah, budaya, dan peninggalan adat masyarakat Jambi.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu"],
  aktivitas: ["Edukasi", "Wisata Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 160,
  name: "Hutan Pinus Jantho",
  location: "Merangin",
  province: "Jambi",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Hutan Pinus Jantho")}.jpg`,
  gallery: [`/images/${slugify("Hutan Pinus Jantho")}.jpg`],
  videoUrl: null,

  description: "Kawasan hutan pinus yang sejuk dan cocok untuk wisata keluarga serta fotografi alam.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Spot Foto"],
  aktivitas: ["Piknik", "Fotografi", "Relaksasi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // LAMPUNG (181–190)
  // =====================
  {
  id: 161,
  name: "Pantai Mutun",
  location: "Pesawaran",
  province: "Lampung",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Mutun")}.jpg`,
  gallery: [`/images/${slugify("Pantai Mutun")}.jpg`],
  videoUrl: null,

  description: "Pantai Mutun dikenal dengan pasir putih dan air laut yang tenang, cocok untuk wisata keluarga.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Gazebo", "Warung Makan"],
  aktivitas: ["Berenang", "Bermain Air", "Wisata Keluarga"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 162,
  name: "Pantai Pahawang",
  location: "Pesawaran",
  province: "Lampung",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pantai Pahawang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pahawang")}.jpg`],
  videoUrl: null,

  description: "Pantai Pahawang terkenal dengan keindahan bawah lautnya dan menjadi spot snorkeling favorit.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Dermaga", "Perahu Wisata", "Penginapan"],
  aktivitas: ["Snorkeling", "Diving", "Wisata Bahari"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 163,
  name: "Pantai Sari Ringgung",
  location: "Pesawaran",
  province: "Lampung",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Sari Ringgung")}.jpg`,
  gallery: [`/images/${slugify("Pantai Sari Ringgung")}.jpg`],
  videoUrl: null,

  description: "Pantai Sari Ringgung memiliki pasir putih dan masjid terapung yang menjadi ikon wisata.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Perahu Wisata"],
  aktivitas: ["Fotografi", "Wisata Pantai", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 164,
  name: "Taman Nasional Way Kambas",
  location: "Lampung Timur",
  province: "Lampung",
  category: "alam",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Taman Nasional Way Kambas")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Way Kambas")}.jpg`],
  videoUrl: null,

  description: "Taman nasional yang menjadi pusat konservasi gajah Sumatra dan satwa langka lainnya.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Edukasi"],
  aktivitas: ["Edukasi", "Wisata Alam", "Observasi Satwa"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 165,
  name: "Bukit Sakura Kemiling",
  location: "Bandar Lampung",
  province: "Lampung",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Bukit Sakura Kemiling")}.jpg`,
  gallery: [`/images/${slugify("Bukit Sakura Kemiling")}.jpg`],
  videoUrl: null,

  description: "Destinasi wisata dengan nuansa Jepang dan pemandangan Kota Bandar Lampung dari ketinggian.",
  jamOperasional: "09.00 - 21.00 WIB",
  fasilitas: ["Area Parkir", "Spot Foto", "Kafe"],
  aktivitas: ["Fotografi", "Wisata Keluarga"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 166,
  name: "Danau Ranau",
  location: "Lampung Barat",
  province: "Lampung",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Ranau")}.jpg`,
  gallery: [`/images/${slugify("Danau Ranau")}.jpg`],
  videoUrl: null,

  description: "Danau Ranau merupakan danau terbesar kedua di Sumatra dengan panorama pegunungan yang indah.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Penginapan", "Warung Makan"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 167,
  name: "Pantai Tanjung Setia",
  location: "Pesisir Barat",
  province: "Lampung",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Tanjung Setia")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Setia")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Setia terkenal sebagai spot surfing kelas dunia dengan ombak besar.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Penginapan", "Warung"],
  aktivitas: ["Surfing", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 168,
  name: "Pulau Tangkil",
  location: "Pesawaran",
  province: "Lampung",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Tangkil")}.jpg`,
  gallery: [`/images/${slugify("Pulau Tangkil")}.jpg`],
  videoUrl: null,

  description: "Pulau kecil dengan pasir putih dan air laut jernih yang cocok untuk snorkeling.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Dermaga", "Perahu Wisata"],
  aktivitas: ["Snorkeling", "Berenang", "Wisata Bahari"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 169,
  name: "Museum Lampung",
  location: "Bandar Lampung",
  province: "Lampung",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Lampung")}.jpg`,
  gallery: [`/images/${slugify("Museum Lampung")}.jpg`],
  videoUrl: null,

  description: "Museum yang menyimpan koleksi budaya, sejarah, dan adat istiadat masyarakat Lampung.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu"],
  aktivitas: ["Edukasi", "Wisata Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 170,
  name: "Pantai Duta Wisata",
  location: "Bandar Lampung",
  province: "Lampung",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Duta Wisata")}.jpg`,
  gallery: [`/images/${slugify("Pantai Duta Wisata")}.jpg`],
  videoUrl: null,

  description: "Pantai populer di pusat kota Bandar Lampung yang cocok untuk menikmati sunset.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Warung Makan", "Spot Foto"],
  aktivitas: ["Menikmati Sunset", "Jalan Santai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},


  // =====================
  // MALUKU (191–200)
  // =====================
  {
  id: 171,
  name: "Pantai Natsepa",
  location: "Ambon",
  province: "Maluku",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Natsepa")}.jpg`,
  gallery: [`/images/${slugify("Pantai Natsepa")}.jpg`],
  videoUrl: null,

  description: "Pantai Natsepa terkenal dengan pasir putih dan rujak khas Ambon yang populer di kalangan wisatawan.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Berenang", "Menikmati Kuliner", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 172,
  name: "Pantai Liang",
  location: "Maluku Tengah",
  province: "Maluku",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Liang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Liang")}.jpg`],
  videoUrl: null,

  description: "Pantai Liang dikenal sebagai salah satu pantai terindah di Indonesia dengan pasir putih halus.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Gazebo", "Toilet"],
  aktivitas: ["Berenang", "Fotografi", "Wisata Pantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 173,
  name: "Pulau Pombo",
  location: "Maluku Tengah",
  province: "Maluku",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Pombo")}.jpg`,
  gallery: [`/images/${slugify("Pulau Pombo")}.jpg`],
  videoUrl: null,

  description: "Pulau konservasi dengan terumbu karang dan habitat burung laut yang masih alami.",
  jamOperasional: "07.00 - 17.00 WIT",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Snorkeling", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 174,
  name: "Pulau Ora",
  location: "Seram",
  province: "Maluku",
  category: "pantai",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Pulau Ora")}.jpg`,
  gallery: [`/images/${slugify("Pulau Ora")}.jpg`],
  videoUrl: null,

  description: "Pulau Ora sering disebut sebagai Maldives-nya Indonesia dengan laut jernih dan resort terapung.",
  jamOperasional: "24 Jam",
  fasilitas: ["Resort", "Dermaga", "Perahu Wisata"],
  aktivitas: ["Snorkeling", "Diving", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 175,
  name: "Gunung Binaiya",
  location: "Seram",
  province: "Maluku",
  category: "alam",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Gunung Binaiya")}.jpg`,
  gallery: [`/images/${slugify("Gunung Binaiya")}.jpg`],
  videoUrl: null,

  description: "Gunung tertinggi di Maluku yang menjadi favorit pendaki dengan jalur menantang.",
  jamOperasional: "24 Jam",
  fasilitas: ["Basecamp", "Pemandu Lokal"],
  aktivitas: ["Pendakian", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 176,
  name: "Benteng Amsterdam",
  location: "Maluku Tengah",
  province: "Maluku",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Benteng Amsterdam")}.jpg`,
  gallery: [`/images/${slugify("Benteng Amsterdam")}.jpg`],
  videoUrl: null,

  description: "Benteng peninggalan kolonial Belanda yang menjadi saksi sejarah Maluku.",
  jamOperasional: "08.00 - 16.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu"],
  aktivitas: ["Wisata Sejarah", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 177,
  name: "Benteng Victoria",
  location: "Ambon",
  province: "Maluku",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Benteng Victoria")}.jpg`,
  gallery: [`/images/${slugify("Benteng Victoria")}.jpg`],
  videoUrl: null,

  description: "Benteng bersejarah yang kini menjadi markas militer dan ikon kota Ambon.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Sejarah"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 178,
  name: "Danau Rana",
  location: "Seram",
  province: "Maluku",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Rana")}.jpg`,
  gallery: [`/images/${slugify("Danau Rana")}.jpg`],
  videoUrl: null,

  description: "Danau alami di pedalaman Pulau Seram dengan suasana tenang dan asri.",
  jamOperasional: "24 Jam",
  fasilitas: [],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 179,
  name: "Pantai Pintu Kota",
  location: "Ambon",
  province: "Maluku",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Pintu Kota")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pintu Kota")}.jpg`],
  videoUrl: null,

  description: "Pantai unik dengan formasi batu karang berlubang menyerupai pintu alami.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Sunset"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 180,
  name: "Museum Siwalima",
  location: "Ambon",
  province: "Maluku",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Siwalima")}.jpg`,
  gallery: [`/images/${slugify("Museum Siwalima")}.jpg`],
  videoUrl: null,

  description: "Museum yang menampilkan sejarah, budaya, dan kehidupan masyarakat Maluku.",
  jamOperasional: "08.00 - 16.00 WIT",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Edukasi", "Wisata Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},


  // =====================
  // KEPULAUAN RIAU (201–210)
  // =====================
  {
  id: 181,
  name: "Pantai Trikora",
  location: "Bintan",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Trikora")}.jpg`,
  gallery: [`/images/${slugify("Pantai Trikora")}.jpg`],
  videoUrl: null,

  description: "Pantai Trikora terkenal dengan pasir putih dan ombak tenang yang cocok untuk bersantai.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Berenang", "Fotografi", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 182,
  name: "Pulau Penyengat",
  location: "Tanjung Pinang",
  province: "Kepulauan Riau",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pulau Penyengat")}.jpg`,
  gallery: [`/images/${slugify("Pulau Penyengat")}.jpg`],
  videoUrl: null,

  description: "Pulau bersejarah peninggalan Kesultanan Riau-Lingga dan pusat budaya Melayu.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Dermaga", "Pemandu Wisata"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 183,
  name: "Pantai Lagoi",
  location: "Bintan",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Lagoi")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lagoi")}.jpg`],
  videoUrl: null,

  description: "Pantai resort premium dengan pemandangan laut bersih dan fasilitas lengkap.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Resort", "Area Parkir"],
  aktivitas: ["Bersantai", "Fotografi"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 184,
  name: "Pulau Beralas Pasir",
  location: "Bintan",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Beralas Pasir")}.jpg`,
  gallery: [`/images/${slugify("Pulau Beralas Pasir")}.jpg`],
  videoUrl: null,

  description: "Pulau kecil dengan pasir putih yang muncul saat air laut surut.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Fotografi", "Snorkeling"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 185,
  name: "Pantai Nongsa",
  location: "Batam",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Nongsa")}.jpg`,
  gallery: [`/images/${slugify("Pantai Nongsa")}.jpg`],
  videoUrl: null,

  description: "Pantai favorit di Batam dengan pemandangan Singapura dari kejauhan.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Resort"],
  aktivitas: ["Menikmati Sunset", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 186,
  name: "Jembatan Barelang",
  location: "Batam",
  province: "Kepulauan Riau",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Jembatan Barelang")}.jpg`,
  gallery: [`/images/${slugify("Jembatan Barelang")}.jpg`],
  videoUrl: null,

  description: "Ikon Batam yang menghubungkan beberapa pulau utama.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Ikonik"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 187,
  name: "Pantai Melayu",
  location: "Batam",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Melayu")}.jpg`,
  gallery: [`/images/${slugify("Pantai Melayu")}.jpg`],
  videoUrl: null,

  description: "Pantai keluarga dengan ombak tenang dan area luas.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Berenang", "Bersantai"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 188,
  name: "Pulau Abang",
  location: "Batam",
  province: "Kepulauan Riau",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pulau Abang")}.jpg`,
  gallery: [`/images/${slugify("Pulau Abang")}.jpg`],
  videoUrl: null,

  description: "Pulau dengan spot snorkeling favorit dan air laut yang jernih.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Perahu Wisata"],
  aktivitas: ["Snorkeling", "Wisata Alam"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 189,
  name: "Bukit Senyum",
  location: "Batam",
  province: "Kepulauan Riau",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Senyum")}.jpg`,
  gallery: [`/images/${slugify("Bukit Senyum")}.jpg`],
  videoUrl: null,

  description: "Bukit dengan panorama kota Batam dan laut dari ketinggian.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Pemandangan"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 190,
  name: "Museum Raja Ali Haji",
  location: "Tanjung Pinang",
  province: "Kepulauan Riau",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Raja Ali Haji")}.jpg`,
  gallery: [`/images/${slugify("Museum Raja Ali Haji")}.jpg`],
  videoUrl: null,

  description: "Museum yang menyimpan sejarah dan karya sastra Raja Ali Haji.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Edukasi", "Wisata Budaya"],
  tips: "",

  coordinates: null,
  hotelTerdekat: []
},


  // =====================
  // KEPULAUAN BANGKA BELITUNG (211–220)
  // =====================
  {
  id: 191,
  name: "Pantai Tanjung Tinggi",
  location: "Belitung",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Tanjung Tinggi")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Tinggi")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Tinggi terkenal dengan batu granit raksasa dan menjadi lokasi syuting film Laskar Pelangi.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Warung Lokal"],
  aktivitas: ["Wisata Pantai", "Fotografi", "Menikmati Sunset"],
  tips: "Datang pagi atau sore hari untuk pencahayaan foto terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 192,
  name: "Pantai Tanjung Kelayang",
  location: "Belitung",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Tanjung Kelayang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Kelayang")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Kelayang merupakan titik awal wisata hopping island dengan pasir putih dan laut jernih.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Penyewaan Perahu"],
  aktivitas: ["Wisata Pantai", "Island Hopping", "Fotografi"],
  tips: "Gunakan topi dan sunscreen karena area cukup terbuka.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 193,
  name: "Pulau Lengkuas",
  location: "Belitung",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pulau Lengkuas")}.jpg`,
  gallery: [`/images/${slugify("Pulau Lengkuas")}.jpg`],
  videoUrl: null,

  description: "Pulau Lengkuas terkenal dengan mercusuar tua dan perairan dangkal yang cocok untuk snorkeling.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Mercusuar", "Area Istirahat"],
  aktivitas: ["Snorkeling", "Wisata Pantai", "Fotografi"],
  tips: "Bawa alas kaki anti karang untuk kenyamanan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 194,
  name: "Danau Kaolin",
  location: "Belitung",
  province: "Kepulauan Bangka Belitung",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Kaolin")}.jpg`,
  gallery: [`/images/${slugify("Danau Kaolin")}.jpg`],
  videoUrl: null,

  description: "Danau Kaolin memiliki air berwarna biru toska yang terbentuk dari bekas tambang kaolin.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Alam"],
  tips: "Hindari berenang demi keselamatan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 195,
  name: "Pantai Parai Tenggiri",
  location: "Bangka",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pantai Parai Tenggiri")}.jpg`,
  gallery: [`/images/${slugify("Pantai Parai Tenggiri")}.jpg`],
  videoUrl: null,

  description: "Pantai Parai Tenggiri menawarkan pasir putih bersih dan fasilitas wisata yang lengkap.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Resort", "Toilet", "Area Parkir"],
  aktivitas: ["Wisata Pantai", "Banana Boat", "Fotografi"],
  tips: "Cocok dikunjungi bersama keluarga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 196,
  name: "Bukit Menumbing",
  location: "Bangka Barat",
  province: "Kepulauan Bangka Belitung",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Bukit Menumbing")}.jpg`,
  gallery: [`/images/${slugify("Bukit Menumbing")}.jpg`],
  videoUrl: null,

  description: "Bukit Menumbing merupakan tempat bersejarah sekaligus spot panorama alam Bangka dari ketinggian.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Alam", "Sejarah", "Fotografi"],
  tips: "Datang saat cuaca cerah untuk pemandangan maksimal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 197,
  name: "Pantai Tikus Emas",
  location: "Bangka",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Tikus Emas")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tikus Emas")}.jpg`],
  videoUrl: null,

  description: "Pantai Tikus Emas menawarkan suasana tenang dengan pasir putih dan batu granit khas Bangka.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Warung Lokal"],
  aktivitas: ["Wisata Pantai", "Fotografi"],
  tips: "Cocok untuk menikmati suasana pantai yang sepi.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 198,
  name: "Museum Timah Indonesia",
  location: "Pangkal Pinang",
  province: "Kepulauan Bangka Belitung",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Timah Indonesia")}.jpg`,
  gallery: [`/images/${slugify("Museum Timah Indonesia")}.jpg`],
  videoUrl: null,

  description: "Museum Timah Indonesia menyajikan sejarah pertambangan timah yang menjadi identitas Bangka Belitung.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Edukasi", "Sejarah"],
  tips: "Cocok dikunjungi bersama rombongan pelajar.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 199,
  name: "Pantai Batu Bedaun",
  location: "Bangka",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Batu Bedaun")}.jpg`,
  gallery: [`/images/${slugify("Pantai Batu Bedaun")}.jpg`],
  videoUrl: null,

  description: "Pantai Batu Bedaun memiliki ombak yang cukup tenang dan cocok untuk wisata keluarga.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet"],
  aktivitas: ["Wisata Pantai", "Fotografi"],
  tips: "Perhatikan kondisi ombak jika membawa anak-anak.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 200,
  name: "Pantai Rambak",
  location: "Bangka",
  province: "Kepulauan Bangka Belitung",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Rambak")}.jpg`,
  gallery: [`/images/${slugify("Pantai Rambak")}.jpg`],
  videoUrl: null,

  description: "Pantai Rambak menawarkan hamparan pasir putih yang luas dan suasana pantai yang masih alami.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Wisata Pantai", "Fotografi"],
  tips: "Bawa bekal sendiri karena fasilitas terbatas.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // KALIMANTAN BARAT (221–225)
  // =====================
  {
  id: 201,
  name: "Danau Sentarum",
  location: "Kapuas Hulu",
  province: "Kalimantan Barat",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Danau Sentarum")}.jpg`,
  gallery: [`/images/${slugify("Danau Sentarum")}.jpg`],
  videoUrl: null,

  description: "Danau Sentarum merupakan kawasan danau musiman yang menjadi habitat berbagai flora dan fauna khas Kalimantan Barat.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Perahu Wisata"],
  aktivitas: ["Wisata Alam", "Fotografi", "Susur Danau"],
  tips: "Datang saat musim air pasang agar panorama danau terlihat maksimal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 202,
  name: "Pantai Temajuk",
  location: "Sambas",
  province: "Kalimantan Barat",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Temajuk")}.jpg`,
  gallery: [`/images/${slugify("Pantai Temajuk")}.jpg`],
  videoUrl: null,

  description: "Pantai Temajuk dikenal dengan pasir putihnya dan berada di wilayah perbatasan Indonesia–Malaysia.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Warung Lokal"],
  aktivitas: ["Wisata Pantai", "Fotografi", "Menikmati Sunset"],
  tips: "Bawa bekal sendiri karena fasilitas masih terbatas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 203,
  name: "Tugu Khatulistiwa",
  location: "Pontianak",
  province: "Kalimantan Barat",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Tugu Khatulistiwa")}.jpg`,
  gallery: [`/images/${slugify("Tugu Khatulistiwa")}.jpg`],
  videoUrl: null,

  description: "Tugu Khatulistiwa merupakan ikon Kota Pontianak yang menandai garis lintang nol derajat.",
  jamOperasional: "08.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Edukasi", "Fotografi"],
  tips: "Datang saat fenomena kulminasi untuk pengalaman unik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 204,
  name: "Istana Kadriah",
  location: "Pontianak",
  province: "Kalimantan Barat",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Istana Kadriah")}.jpg`,
  gallery: [`/images/${slugify("Istana Kadriah")}.jpg`],
  videoUrl: null,

  description: "Istana Kadriah adalah istana Kesultanan Pontianak yang menyimpan nilai sejarah dan budaya Melayu.",
  jamOperasional: "09.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Lokal"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Edukasi Budaya"],
  tips: "Gunakan pakaian sopan saat berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 205,
  name: "Gunung Palung",
  location: "Ketapang",
  province: "Kalimantan Barat",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Gunung Palung")}.jpg`,
  gallery: [`/images/${slugify("Gunung Palung")}.jpg`],
  videoUrl: null,

  description: "Gunung Palung merupakan kawasan taman nasional dengan hutan hujan tropis dan keanekaragaman hayati tinggi.",
  jamOperasional: "06.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Pos Penjagaan", "Pemandu"],
  aktivitas: ["Trekking", "Observasi Alam", "Fotografi"],
  tips: "Disarankan menggunakan pemandu untuk keamanan.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // KALIMANTAN TENGAH (226–230)
  // =====================
  {
  id: 206,
  name: "Taman Nasional Tanjung Puting",
  location: "Kotawaringin Barat",
  province: "Kalimantan Tengah",
  category: "alam",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Taman Nasional Tanjung Puting")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Tanjung Puting")}.jpg`],
  videoUrl: null,

  description: "Taman Nasional Tanjung Puting terkenal sebagai habitat orangutan liar dan ekosistem hutan rawa gambut.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Dermaga", "Pemandu Wisata", "Penginapan"],
  aktivitas: ["Wisata Alam", "Susur Sungai", "Edukasi Satwa"],
  tips: "Gunakan jasa pemandu lokal untuk pengalaman terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 207,
  name: "Bukit Tangkiling",
  location: "Palangka Raya",
  province: "Kalimantan Tengah",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Bukit Tangkiling")}.jpg`,
  gallery: [`/images/${slugify("Bukit Tangkiling")}.jpg`],
  videoUrl: null,

  description: "Bukit Tangkiling menawarkan pemandangan kota Palangka Raya dari ketinggian serta nuansa alam yang sejuk.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Gazebo"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Datang pagi hari untuk udara yang lebih segar.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 208,
  name: "Danau Tahai",
  location: "Palangka Raya",
  province: "Kalimantan Tengah",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Danau Tahai")}.jpg`,
  gallery: [`/images/${slugify("Danau Tahai")}.jpg`],
  videoUrl: null,

  description: "Danau Tahai memiliki air berwarna kemerahan akibat gambut dan dikelilingi hutan rawa yang eksotis.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Jembatan Kayu", "Warung Lokal"],
  aktivitas: ["Wisata Alam", "Fotografi", "Santai"],
  tips: "Gunakan alas kaki yang nyaman saat menyusuri jembatan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 209,
  name: "Rumah Betang",
  location: "Palangka Raya",
  province: "Kalimantan Tengah",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Rumah Betang")}.jpg`,
  gallery: [`/images/${slugify("Rumah Betang")}.jpg`],
  videoUrl: null,

  description: "Rumah Betang merupakan rumah adat suku Dayak yang mencerminkan kehidupan komunal dan nilai budaya lokal.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Pusat Informasi"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Hormati aturan adat saat berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 210,
  name: "Sungai Kahayan",
  location: "Palangka Raya",
  province: "Kalimantan Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Sungai Kahayan")}.jpg`,
  gallery: [`/images/${slugify("Sungai Kahayan")}.jpg`],
  videoUrl: null,

  description: "Sungai Kahayan adalah sungai terbesar di Kalimantan Tengah yang menjadi jalur transportasi dan wisata air.",
  jamOperasional: "24 Jam",
  fasilitas: ["Dermaga", "Perahu Wisata"],
  aktivitas: ["Susur Sungai", "Fotografi", "Wisata Alam"],
  tips: "Waktu terbaik berkunjung saat sore hari menjelang sunset.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // KALIMANTAN TIMUR (231–235)
  // =====================
  {
  id: 211,
  name: "Derawan",
  location: "Berau",
  province: "Kalimantan Timur",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Derawan")}.jpg`,
  gallery: [`/images/${slugify("Derawan")}.jpg`],
  videoUrl: null,

  description: "Pulau Derawan terkenal dengan pantai pasir putih, terumbu karang, dan keanekaragaman hayati lautnya.",
  jamOperasional: "08.00 - 18.00 WITA",
  fasilitas: ["Dermaga", "Penginapan", "Toilet"],
  aktivitas: ["Snorkeling", "Diving", "Wisata Pantai"],
  tips: "Gunakan sunblock ramah lingkungan untuk menjaga terumbu karang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 212,
  name: "Pulau Kakaban",
  location: "Berau",
  province: "Kalimantan Timur",
  category: "pantai",

  price: "Rp 30.000",
  priceNum: 30000,
  htmLokal: "Rp 30.000",
  htmTuris: "Rp 30.000",

  image: `/images/${slugify("Pulau Kakaban")}.jpg`,
  gallery: [`/images/${slugify("Pulau Kakaban")}.jpg`],
  videoUrl: null,

  description: "Pulau Kakaban terkenal dengan danau ubur-ubur tanpa sengat yang langka di dunia.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Dermaga", "Pemandu Lokal"],
  aktivitas: ["Snorkeling", "Wisata Alam", "Fotografi"],
  tips: "Hindari menyentuh ubur-ubur demi kelestarian ekosistem.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 213,
  name: "Danau Labuan Cermin",
  location: "Berau",
  province: "Kalimantan Timur",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Danau Labuan Cermin")}.jpg`,
  gallery: [`/images/${slugify("Danau Labuan Cermin")}.jpg`],
  videoUrl: null,

  description: "Danau Labuan Cermin memiliki dua lapisan air asin dan tawar dengan kejernihan seperti kaca.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Perahu", "Toilet"],
  aktivitas: ["Berenang", "Fotografi", "Wisata Alam"],
  tips: "Datang pagi hari untuk air yang lebih jernih.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 214,
  name: "Pantai Lamaru",
  location: "Balikpapan",
  province: "Kalimantan Timur",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pantai Lamaru")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lamaru")}.jpg`],
  videoUrl: null,

  description: "Pantai Lamaru cocok untuk wisata keluarga dengan pasir landai dan fasilitas yang cukup lengkap.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Gazebo", "Toilet"],
  aktivitas: ["Wisata Pantai", "Bermain Pasir", "Piknik"],
  tips: "Bawa tikar untuk piknik yang lebih nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 215,
  name: "Museum Mulawarman",
  location: "Kutai Kartanegara",
  province: "Kalimantan Timur",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Museum Mulawarman")}.jpg`,
  gallery: [`/images/${slugify("Museum Mulawarman")}.jpg`],
  videoUrl: null,

  description: "Museum Mulawarman menyimpan koleksi sejarah Kesultanan Kutai dan peninggalan budaya Kalimantan Timur.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Datang pagi agar lebih leluasa menjelajah museum.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // KALIMANTAN UTARA (236–240)
  // =====================
  {
  id: 216,
  name: "Pantai Amal",
  location: "Tarakan",
  province: "Kalimantan Utara",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Amal")}.jpg`,
  gallery: [`/images/${slugify("Pantai Amal")}.jpg`],
  videoUrl: null,

  description: "Pantai Amal merupakan pantai favorit di Tarakan dengan garis pantai panjang dan pemandangan matahari terbenam.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Wisata Pantai", "Kuliner", "Fotografi"],
  tips: "Datang sore hari untuk menikmati sunset yang indah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 217,
  name: "Hutan Mangrove Tarakan",
  location: "Tarakan",
  province: "Kalimantan Utara",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Hutan Mangrove Tarakan")}.jpg`,
  gallery: [`/images/${slugify("Hutan Mangrove Tarakan")}.jpg`],
  videoUrl: null,

  description: "Hutan Mangrove Tarakan menawarkan jalur tracking kayu untuk menikmati ekosistem mangrove secara langsung.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Jalur Tracking", "Toilet", "Pusat Informasi"],
  aktivitas: ["Tracking", "Edukasi", "Fotografi"],
  tips: "Gunakan alas kaki yang nyaman untuk berjalan jauh.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 218,
  name: "Air Terjun Gunung Rian",
  location: "Malinau",
  province: "Kalimantan Utara",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Air Terjun Gunung Rian")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Gunung Rian")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Gunung Rian dikelilingi hutan alami dengan suasana sejuk dan aliran air yang jernih.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Trekking", "Wisata Alam", "Fotografi"],
  tips: "Datang saat musim kemarau agar jalur tidak licin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 219,
  name: "Gunung Putih",
  location: "Tana Tidung",
  province: "Kalimantan Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Gunung Putih")}.jpg`,
  gallery: [`/images/${slugify("Gunung Putih")}.jpg`],
  videoUrl: null,

  description: "Gunung Putih dikenal dengan lanskap perbukitan kapur berwarna cerah yang unik di Kalimantan Utara.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Hiking", "Fotografi", "Wisata Alam"],
  tips: "Gunakan topi dan air minum karena area cukup terbuka.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 210,
  name: "Museum Kesultanan Bulungan",
  location: "Bulungan",
  province: "Kalimantan Utara",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Kesultanan Bulungan")}.jpg`,
  gallery: [`/images/${slugify("Museum Kesultanan Bulungan")}.jpg`],
  videoUrl: null,

  description: "Museum Kesultanan Bulungan menyimpan sejarah dan peninggalan budaya Kesultanan Bulungan.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Baca papan informasi untuk memahami sejarah lebih lengkap.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // KALIMANTAN SELATAN (241–245)
  // =====================
  {
  id: 211,
  name: "Pasar Terapung Lok Baintan",
  location: "Banjar",
  province: "Kalimantan Selatan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pasar Terapung Lok Baintan")}.jpg`,
  gallery: [`/images/${slugify("Pasar Terapung Lok Baintan")}.jpg`],
  videoUrl: null,

  description: "Pasar Terapung Lok Baintan adalah pasar tradisional di atas sungai, terkenal dengan transaksi dagang di perahu.",
  jamOperasional: "06.00 - 11.00 WITA",
  fasilitas: ["Akses Perahu", "Parkir", "Toilet"],
  aktivitas: ["Wisata Budaya", "Fotografi", "Belanja Oleh-Oleh"],
  tips: "Datang pagi hari untuk melihat aktivitas pasar yang paling ramai.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 212,
  name: "Gunung Meratus",
  location: "Hulu Sungai Tengah",
  province: "Kalimantan Selatan",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Gunung Meratus")}.jpg`,
  gallery: [`/images/${slugify("Gunung Meratus")}.jpg`],
  videoUrl: null,

  description: "Gunung Meratus adalah kawasan pegunungan dengan hutan tropis yang kaya flora dan fauna khas Kalimantan Selatan.",
  jamOperasional: "06.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Hiking", "Fotografi", "Wisata Alam"],
  tips: "Bawa peralatan hiking lengkap dan pakaian hangat.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 213,
  name: "Pulau Samber Gelap",
  location: "Kotabaru",
  province: "Kalimantan Selatan",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Samber Gelap")}.jpg`,
  gallery: [`/images/${slugify("Pulau Samber Gelap")}.jpg`],
  videoUrl: null,

  description: "Pulau Samber Gelap memiliki pantai berpasir putih dan air jernih, cocok untuk snorkeling dan bersantai.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Perahu", "Toilet", "Warung Makan"],
  aktivitas: ["Snorkeling", "Berenang", "Fotografi"],
  tips: "Bawa perlengkapan snorkeling sendiri agar lebih nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 214,
  name: "Pantai Angsana",
  location: "Tanah Bumbu",
  province: "Kalimantan Selatan",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Angsana")}.jpg`,
  gallery: [`/images/${slugify("Pantai Angsana")}.jpg`],
  videoUrl: null,

  description: "Pantai Angsana terkenal dengan pasir putihnya dan pemandangan laut yang menenangkan.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Berenang", "Fotografi", "Wisata Pantai"],
  tips: "Cocok untuk liburan keluarga dan sunset photography.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 215,
  name: "Museum Wasaka",
  location: "Banjarmasin",
  province: "Kalimantan Selatan",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Wasaka")}.jpg`,
  gallery: [`/images/${slugify("Museum Wasaka")}.jpg`],
  videoUrl: null,

  description: "Museum Wasaka menyimpan artefak sejarah dan budaya Kalimantan Selatan, termasuk kerajinan dan kostum tradisional.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Ikuti tur guide untuk info lebih lengkap mengenai sejarah dan budaya.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // MALUKU UTARA (256–265)
  // =====================
  {
  id: 216,
  name: "Benteng Tolukko",
  location: "Ternate",
  province: "Maluku Utara",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Benteng Tolukko")}.jpg`,
  gallery: [`/images/${slugify("Benteng Tolukko")}.jpg`],
  videoUrl: null,

  description: "Benteng Tolukko adalah benteng peninggalan Portugis yang kini menjadi objek wisata sejarah di Ternate.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Belajar Budaya"],
  tips: "Datang pagi hari untuk suasana lebih sejuk.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 217,
  name: "Danau Tolire Besar",
  location: "Ternate",
  province: "Maluku Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Tolire Besar")}.jpg`,
  gallery: [`/images/${slugify("Danau Tolire Besar")}.jpg`],
  videoUrl: null,

  description: "Danau Tolire Besar terkenal dengan legenda mistisnya dan pemandangan alam yang menawan.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Jalan Setapak", "Spot Fotografi"],
  aktivitas: ["Fotografi", "Wisata Alam", "Berjalan Santai"],
  tips: "Bawa kamera untuk menangkap pemandangan indah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 218,
  name: "Pantai Sulamadaha",
  location: "Ternate",
  province: "Maluku Utara",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Sulamadaha")}.jpg`,
  gallery: [`/images/${slugify("Pantai Sulamadaha")}.jpg`],
  videoUrl: null,

  description: "Pantai Sulamadaha memiliki pasir putih dan laut yang jernih, cocok untuk bersantai dan snorkeling.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Berenang", "Fotografi", "Snorkeling"],
  tips: "Gunakan alas kaki yang nyaman untuk berjalan di pantai berbatu.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 219,
  name: "Gunung Gamalama",
  location: "Ternate",
  province: "Maluku Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Gunung Gamalama")}.jpg`,
  gallery: [`/images/${slugify("Gunung Gamalama")}.jpg`],
  videoUrl: null,

  description: "Gunung Gamalama adalah gunung berapi aktif dengan jalur trekking menantang dan pemandangan spektakuler.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu Lokal", "Toilet"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Hanya untuk pendaki berpengalaman, gunakan perlengkapan lengkap.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 220,
  name: "Pulau Maitara",
  location: "Tidore Kepulauan",
  province: "Maluku Utara",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pulau Maitara")}.jpg`,
  gallery: [`/images/${slugify("Pulau Maitara")}.jpg`],
  videoUrl: null,

  description: "Pulau Maitara terkenal dengan pemandangan laut yang biru dan panorama Gunung Tidore di sekitarnya.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan", "Spot Fotografi"],
  aktivitas: ["Snorkeling", "Fotografi", "Bersantai di Pantai"],
  tips: "Datang saat pagi hari untuk pemandangan terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 221,
  name: "Benteng Oranje",
  location: "Ternate",
  province: "Maluku Utara",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Benteng Oranje")}.jpg`,
  gallery: [`/images/${slugify("Benteng Oranje")}.jpg`],
  videoUrl: null,

  description: "Benteng Oranje adalah benteng peninggalan Belanda yang kini menjadi objek wisata sejarah populer di Ternate.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Belajar Budaya"],
  tips: "Datang pagi hari untuk menghindari panas terik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 222,
  name: "Pantai Jikomalamo",
  location: "Ternate",
  province: "Maluku Utara",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Jikomalamo")}.jpg`,
  gallery: [`/images/${slugify("Pantai Jikomalamo")}.jpg`],
  videoUrl: null,

  description: "Pantai Jikomalamo memiliki pasir putih dan air jernih, cocok untuk berenang dan piknik keluarga.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Berenang", "Fotografi", "Wisata Pantai"],
  tips: "Datang sore hari untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 223,
  name: "Danau Tolire Kecil",
  location: "Ternate",
  province: "Maluku Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Tolire Kecil")}.jpg`,
  gallery: [`/images/${slugify("Danau Tolire Kecil")}.jpg`],
  videoUrl: null,

  description: "Danau Tolire Kecil adalah danau yang tenang dan memiliki legenda yang terkenal di Ternate.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Jalan Setapak", "Spot Fotografi"],
  aktivitas: ["Fotografi", "Wisata Alam", "Berjalan Santai"],
  tips: "Cocok untuk jalan santai dan foto-foto alam.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 224,
  name: "Pulau Dodola",
  location: "Morotai",
  province: "Maluku Utara",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Dodola")}.jpg`,
  gallery: [`/images/${slugify("Pulau Dodola")}.jpg`],
  videoUrl: null,

  description: "Pulau Dodola terkenal dengan pantai berpasir putih dan air laut yang jernih, cocok untuk snorkeling dan berenang.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Spot Fotografi", "Warung Makan"],
  aktivitas: ["Berenang", "Snorkeling", "Fotografi"],
  tips: "Bawa peralatan snorkeling untuk pengalaman maksimal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 225,
  name: "Museum Kedaton Sultan Ternate",
  location: "Ternate",
  province: "Maluku Utara",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Kedaton Sultan Ternate")}.jpg`,
  gallery: [`/images/${slugify("Museum Kedaton Sultan Ternate")}.jpg`],
  videoUrl: null,

  description: "Museum Kedaton Sultan Ternate menampilkan sejarah dan budaya Kesultanan Ternate yang kaya dan menarik.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu", "Toilet"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Belajar Budaya"],
  tips: "Ikuti tur guide untuk mendapatkan informasi lengkap tentang sejarah kesultanan.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA (266–270)
  // =====================
 {
  id: 226,
  name: "Pantai Base-G",
  location: "Jayapura",
  province: "Papua",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Base-G")}.jpg`,
  gallery: [`/images/${slugify("Pantai Base-G")}.jpg`],
  videoUrl: null,

  description: "Pantai Base-G merupakan salah satu pantai favorit di Jayapura dengan pasir putih dan ombak yang tenang.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Berenang", "Fotografi", "Bersantai"],
  tips: "Datang sore hari untuk menikmati sunset yang indah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 227,
  name: "Danau Sentani",
  location: "Jayapura",
  province: "Papua",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Sentani")}.jpg`,
  gallery: [`/images/${slugify("Danau Sentani")}.jpg`],
  videoUrl: null,

  description: "Danau Sentani adalah danau terbesar di Papua dengan pemandangan perbukitan dan budaya lokal yang khas.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Dermaga", "Spot Fotografi"],
  aktivitas: ["Fotografi", "Wisata Alam", "Perahu Wisata"],
  tips: "Gunakan perahu lokal untuk menikmati danau dari dekat.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 228,
  name: "Bukit Teletubbies",
  location: "Jayapura",
  province: "Papua",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Teletubbies")}.jpg`,
  gallery: [`/images/${slugify("Bukit Teletubbies")}.jpg`],
  videoUrl: null,

  description: "Bukit Teletubbies menawarkan hamparan perbukitan hijau dengan pemandangan alam yang menenangkan.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Spot Fotografi"],
  aktivitas: ["Fotografi", "Trekking Ringan", "Menikmati Alam"],
  tips: "Datang pagi hari saat cuaca cerah untuk hasil foto terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 229,
  name: "Museum Loka Budaya",
  location: "Jayapura",
  province: "Papua",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Museum Loka Budaya")}.jpg`,
  gallery: [`/images/${slugify("Museum Loka Budaya")}.jpg`],
  videoUrl: null,

  description: "Museum Loka Budaya menyimpan berbagai koleksi budaya dan sejarah masyarakat Papua.",
  jamOperasional: "08.00 - 16.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu", "Toilet"],
  aktivitas: ["Wisata Edukasi", "Fotografi", "Belajar Budaya"],
  tips: "Ikuti penjelasan pemandu untuk memahami koleksi secara mendalam.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 230,
  name: "Pantai Hamadi",
  location: "Jayapura",
  province: "Papua",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Hamadi")}.jpg`,
  gallery: [`/images/${slugify("Pantai Hamadi")}.jpg`],
  videoUrl: null,

  description: "Pantai Hamadi merupakan pantai populer di Jayapura yang cocok untuk rekreasi keluarga.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "Hindari datang saat cuaca mendung agar pengalaman lebih maksimal.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA BARAT (271–275)
  // =====================
  {
  id: 231,
  name: "Pantai Pasir Putih",
  location: "Manokwari",
  province: "Papua Barat",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Pasir Putih")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pasir Putih")}.jpg`],
  videoUrl: null,

  description: "Pantai Pasir Putih di Manokwari menawarkan hamparan pasir putih bersih dengan air laut yang jernih.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Berenang", "Fotografi", "Bersantai"],
  tips: "Datang pagi atau sore hari agar tidak terlalu panas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 232,
  name: "Pulau Mansinam",
  location: "Manokwari",
  province: "Papua Barat",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Mansinam")}.jpg`,
  gallery: [`/images/${slugify("Pulau Mansinam")}.jpg`],
  videoUrl: null,

  description: "Pulau Mansinam merupakan pulau bersejarah yang menjadi pusat penyebaran agama Kristen di Papua.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Dermaga", "Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Wisata Sejarah", "Ziarah", "Fotografi"],
  tips: "Gunakan perahu resmi dan perhatikan jadwal penyeberangan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 233,
  name: "Danau Anggi Giji",
  location: "Pegunungan Arfak",
  province: "Papua Barat",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Anggi Giji")}.jpg`,
  gallery: [`/images/${slugify("Danau Anggi Giji")}.jpg`],
  videoUrl: null,

  description: "Danau Anggi Giji berada di Pegunungan Arfak dengan suasana sejuk dan panorama alam yang masih alami.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Spot Fotografi"],
  aktivitas: ["Fotografi", "Wisata Alam", "Menikmati Pemandangan"],
  tips: "Gunakan jaket karena suhu cukup dingin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 234,
  name: "Pegunungan Arfak",
  location: "Manokwari",
  province: "Papua Barat",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pegunungan Arfak")}.jpg`,
  gallery: [`/images/${slugify("Pegunungan Arfak")}.jpg`],
  videoUrl: null,

  description: "Pegunungan Arfak terkenal dengan keanekaragaman hayati dan pemandangan alam pegunungan yang memukau.",
  jamOperasional: "06.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Pemandu Lokal"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Disarankan menggunakan jasa pemandu lokal.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 235,
  name: "Pantai Bakaro",
  location: "Manokwari",
  province: "Papua Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Bakaro")}.jpg`,
  gallery: [`/images/${slugify("Pantai Bakaro")}.jpg`],
  videoUrl: null,

  description: "Pantai Bakaro terkenal dengan atraksi memanggil ikan dan suasana pantai yang masih alami.",
  jamOperasional: "07.00 - 17.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Wisata Pantai", "Fotografi", "Atraksi Ikan"],
  tips: "Datang saat nelayan setempat melakukan atraksi ikan.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA BARAT DAYA (276–280)
  // =====================
  {
  id: 236,
  name: "Pantai Tanjung Kasuari",
  location: "Sorong",
  province: "Papua Barat Daya",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Tanjung Kasuari")}.jpg`,
  gallery: [`/images/${slugify("Pantai Tanjung Kasuari")}.jpg`],
  videoUrl: null,

  description: "Pantai Tanjung Kasuari menawarkan suasana pantai yang tenang dengan pasir putih dan pemandangan laut lepas khas Sorong.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Gazebo", "Warung Makan"],
  aktivitas: ["Berenang", "Fotografi", "Bersantai"],
  tips: "Datang sore hari untuk menikmati pemandangan matahari terbenam.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 237,
  name: "Hutan Mangrove Klawalu",
  location: "Sorong",
  province: "Papua Barat Daya",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Hutan Mangrove Klawalu")}.jpg`,
  gallery: [`/images/${slugify("Hutan Mangrove Klawalu")}.jpg`],
  videoUrl: null,

  description: "Hutan Mangrove Klawalu merupakan kawasan ekowisata dengan jalur tracking kayu di tengah hutan mangrove.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Jalur Tracking", "Area Parkir"],
  aktivitas: ["Wisata Alam", "Edukasi", "Fotografi"],
  tips: "Gunakan alas kaki yang nyaman untuk berjalan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 238,
  name: "Pantai Saoka",
  location: "Sorong",
  province: "Papua Barat Daya",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Saoka")}.jpg`,
  gallery: [`/images/${slugify("Pantai Saoka")}.jpg`],
  videoUrl: null,

  description: "Pantai Saoka dikenal dengan air lautnya yang jernih serta cocok untuk bersantai dan snorkeling ringan.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Gazebo"],
  aktivitas: ["Berenang", "Snorkeling", "Fotografi"],
  tips: "Bawa perlengkapan snorkeling sendiri.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 239,
  name: "Pulau Doom",
  location: "Sorong",
  province: "Papua Barat Daya",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pulau Doom")}.jpg`,
  gallery: [`/images/${slugify("Pulau Doom")}.jpg`],
  videoUrl: null,

  description: "Pulau Doom merupakan pulau bersejarah yang menjadi salah satu pusat perkembangan awal Kota Sorong.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Dermaga", "Pemukiman Warga"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Wisata Budaya"],
  tips: "Gunakan perahu penyeberangan resmi dari Sorong.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 240,
  name: "Pantai Mailan Makbon",
  location: "Sorong",
  province: "Papua Barat Daya",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Mailan Makbon")}.jpg`,
  gallery: [`/images/${slugify("Pantai Mailan Makbon")}.jpg`],
  videoUrl: null,

  description: "Pantai Mailan Makbon menawarkan panorama pantai alami dengan suasana tenang dan jauh dari keramaian.",
  jamOperasional: "07.00 - 18.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Bersantai", "Fotografi", "Wisata Pantai"],
  tips: "Bawa bekal sendiri karena fasilitas masih terbatas.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA PEGUNUNGAN (281–285)
  // =====================
  {
  id: 241,
  name: "Lembah Baliem",
  location: "Jayawijaya",
  province: "Papua Pegunungan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Lembah Baliem")}.jpg`,
  gallery: [`/images/${slugify("Lembah Baliem")}.jpg`],
  videoUrl: null,

  description: "Lembah Baliem merupakan kawasan lembah pegunungan yang menjadi pusat kehidupan dan budaya Suku Dani di Papua.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan Lokal", "Guide Lokal"],
  aktivitas: ["Wisata Budaya", "Trekking", "Fotografi"],
  tips: "Gunakan jasa guide lokal untuk pengalaman yang lebih aman dan mendalam.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 242,
  name: "Festival Lembah Baliem",
  location: "Jayawijaya",
  province: "Papua Pegunungan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Festival Lembah Baliem")}.jpg`,
  gallery: [`/images/${slugify("Festival Lembah Baliem")}.jpg`],
  videoUrl: null,

  description: "Festival Lembah Baliem adalah acara budaya tahunan yang menampilkan tarian adat, pakaian tradisional, dan simulasi perang suku.",
  jamOperasional: "Sesuai Jadwal Festival",
  fasilitas: ["Area Pertunjukan", "Stand UMKM"],
  aktivitas: ["Wisata Budaya", "Fotografi", "Edukasi Budaya"],
  tips: "Datang lebih awal saat festival berlangsung untuk mendapat spot terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 243,
  name: "Gunung Trikora",
  location: "Jayawijaya",
  province: "Papua Pegunungan",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Gunung Trikora")}.jpg`,
  gallery: [`/images/${slugify("Gunung Trikora")}.jpg`],
  videoUrl: null,

  description: "Gunung Trikora merupakan salah satu gunung tertinggi di Papua dan menjadi destinasi favorit bagi pendaki berpengalaman.",
  jamOperasional: "24 Jam",
  fasilitas: ["Basecamp Pendakian"],
  aktivitas: ["Pendakian", "Fotografi Alam", "Camping"],
  tips: "Persiapkan fisik dan logistik dengan matang sebelum mendaki.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 244,
  name: "Desa Wisata Wamena",
  location: "Wamena",
  province: "Papua Pegunungan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Desa Wisata Wamena")}.jpg`,
  gallery: [`/images/${slugify("Desa Wisata Wamena")}.jpg`],
  videoUrl: null,

  description: "Desa Wisata Wamena menawarkan pengalaman langsung kehidupan masyarakat adat Papua dengan tradisi yang masih terjaga.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Homestay", "Guide Lokal"],
  aktivitas: ["Wisata Budaya", "Interaksi Warga", "Fotografi"],
  tips: "Hormati adat dan budaya setempat saat berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 245,
  name: "Bukit Habema",
  location: "Jayawijaya",
  province: "Papua Pegunungan",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Habema")}.jpg`,
  gallery: [`/images/${slugify("Bukit Habema")}.jpg`],
  videoUrl: null,

  description: "Bukit Habema merupakan titik tertinggi yang bisa diakses kendaraan di Indonesia dengan pemandangan pegunungan yang spektakuler.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Fotografi", "Menikmati Alam", "Wisata Pegunungan"],
  tips: "Gunakan jaket tebal karena suhu bisa sangat dingin.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA SELATAN (286–290)
  // =====================
 {
  id: 246,
  name: "Pantai Lampu Satu",
  location: "Merauke",
  province: "Papua Selatan",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Lampu Satu")}.jpg`,
  gallery: [`/images/${slugify("Pantai Lampu Satu")}.jpg`],
  videoUrl: null,

  description: "Pantai Lampu Satu merupakan pantai populer di Merauke dengan pemandangan matahari terbenam dan suasana santai.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir", "Warung Makan"],
  aktivitas: ["Menikmati Sunset", "Fotografi", "Santai"],
  tips: "Datang sore hari untuk menikmati pemandangan matahari terbenam terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 247,
  name: "Taman Nasional Wasur",
  location: "Merauke",
  province: "Papua Selatan",
  category: "alam",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Taman Nasional Wasur")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Wasur")}.jpg`],
  videoUrl: null,

  description: "Taman Nasional Wasur dikenal sebagai 'Serengeti Papua' dengan ekosistem rawa dan savana yang luas.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Pos Penjagaan", "Guide Lokal"],
  aktivitas: ["Wisata Alam", "Bird Watching", "Fotografi"],
  tips: "Gunakan jasa pemandu untuk menjelajah area dengan aman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 248,
  name: "Monumen Kapsul Waktu",
  location: "Merauke",
  province: "Papua Selatan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Monumen Kapsul Waktu")}.jpg`,
  gallery: [`/images/${slugify("Monumen Kapsul Waktu")}.jpg`],
  videoUrl: null,

  description: "Monumen Kapsul Waktu merupakan simbol pembangunan Indonesia dari pinggiran hingga masa depan.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Terbuka"],
  aktivitas: ["Wisata Edukasi", "Fotografi"],
  tips: "Kunjungi pada pagi atau sore hari agar tidak terlalu panas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 249,
  name: "Pantai Payum",
  location: "Merauke",
  province: "Papua Selatan",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Payum")}.jpg`,
  gallery: [`/images/${slugify("Pantai Payum")}.jpg`],
  videoUrl: null,

  description: "Pantai Payum menawarkan suasana pantai alami dengan ombak tenang dan pemandangan laut lepas.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Santai", "Fotografi", "Menikmati Alam"],
  tips: "Bawa bekal sendiri karena fasilitas masih terbatas.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 250,
  name: "Rawa Biru",
  location: "Merauke",
  province: "Papua Selatan",
  category: "alam",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Rawa Biru")}.jpg`,
  gallery: [`/images/${slugify("Rawa Biru")}.jpg`],
  videoUrl: null,

  description: "Rawa Biru merupakan kawasan rawa air tawar dengan keanekaragaman hayati yang tinggi.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Perahu Wisata", "Guide Lokal"],
  aktivitas: ["Wisata Alam", "Observasi Satwa", "Fotografi"],
  tips: "Gunakan pakaian nyaman dan anti nyamuk.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // PAPUA TENGAH (291–295)
  // =====================
  {
  id: 251,
  name: "Pantai Deiyai",
  location: "Deiyai",
  province: "Papua Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Deiyai")}.jpg`,
  gallery: [`/images/${slugify("Pantai Deiyai")}.jpg`],
  videoUrl: null,

  description: "Pantai Deiyai menawarkan keindahan alam khas Papua Tengah dengan suasana tenang dan alami.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Menikmati Alam", "Fotografi", "Santai"],
  tips: "Datang pagi atau sore hari untuk cuaca yang lebih sejuk.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 252,
  name: "Danau Tigi",
  location: "Deiyai",
  province: "Papua Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Tigi")}.jpg`,
  gallery: [`/images/${slugify("Danau Tigi")}.jpg`],
  videoUrl: null,

  description: "Danau Tigi merupakan danau alami yang menjadi pusat kehidupan masyarakat sekitar dengan panorama pegunungan.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Terbuka"],
  aktivitas: ["Fotografi", "Wisata Alam", "Menikmati Pemandangan"],
  tips: "Gunakan pakaian hangat karena suhu cukup dingin.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 253,
  name: "Bukit Kamu",
  location: "Paniai",
  province: "Papua Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Bukit Kamu")}.jpg`,
  gallery: [`/images/${slugify("Bukit Kamu")}.jpg`],
  videoUrl: null,

  description: "Bukit Kamu menyuguhkan panorama alam Papua Tengah dari ketinggian dengan udara sejuk.",
  jamOperasional: "06.00 - 18.00 WIT",
  fasilitas: ["Jalur Trekking"],
  aktivitas: ["Trekking Ringan", "Fotografi", "Menikmati Panorama"],
  tips: "Gunakan sepatu nyaman saat mendaki.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 254,
  name: "Danau Paniai",
  location: "Paniai",
  province: "Papua Tengah",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Paniai")}.jpg`,
  gallery: [`/images/${slugify("Danau Paniai")}.jpg`],
  videoUrl: null,

  description: "Danau Paniai adalah salah satu danau terbesar di Papua Tengah dengan pemandangan alam yang masih asri.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Terbuka"],
  aktivitas: ["Wisata Alam", "Fotografi", "Santai"],
  tips: "Waktu terbaik berkunjung adalah pagi hari saat kabut tipis.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 255,
  name: "Desa Adat Mee",
  location: "Paniai",
  province: "Papua Tengah",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Desa Adat Mee")}.jpg`,
  gallery: [`/images/${slugify("Desa Adat Mee")}.jpg`],
  videoUrl: null,

  description: "Desa Adat Mee memperkenalkan kehidupan, tradisi, dan budaya asli suku Mee di Papua Tengah.",
  jamOperasional: "08.00 - 17.00 WIT",
  fasilitas: ["Pemandu Lokal"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Hormati adat dan budaya setempat selama berkunjung.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // RIAU (296–300)
  // =====================
  {
  id: 256,
  name: "Istana Siak Sri Indrapura",
  location: "Siak",
  province: "Riau",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Istana Siak Sri Indrapura")}.jpg`,
  gallery: [`/images/${slugify("Istana Siak Sri Indrapura")}.jpg`],
  videoUrl: null,

  description: "Istana peninggalan Kesultanan Siak yang menjadi ikon sejarah dan budaya Provinsi Riau.",
  jamOperasional: "08.00 - 16.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "Datang pagi agar bisa eksplor seluruh area istana dengan nyaman.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 257,
  name: "Danau Raja",
  location: "Indragiri Hulu",
  province: "Riau",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Raja")}.jpg`,
  gallery: [`/images/${slugify("Danau Raja")}.jpg`],
  videoUrl: null,

  description: "Danau Raja merupakan danau alami dengan suasana tenang yang cocok untuk bersantai.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Terbuka"],
  aktivitas: ["Santai", "Fotografi", "Menikmati Alam"],
  tips: "Waktu terbaik sore hari saat matahari mulai terbenam.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 258,
  name: "Air Terjun Batang Koban",
  location: "Rokan Hulu",
  province: "Riau",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Air Terjun Batang Koban")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Batang Koban")}.jpg`],
  videoUrl: null,

  description: "Air terjun alami dengan aliran air jernih dan lingkungan hutan yang masih asri.",
  jamOperasional: "07.00 - 17.00 WIB",
  fasilitas: ["Area Parkir"],
  aktivitas: ["Wisata Alam", "Fotografi", "Main Air"],
  tips: "Gunakan alas kaki anti licin saat mendekati air terjun.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 259,
  name: "Pantai Selat Baru",
  location: "Bengkalis",
  province: "Riau",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Selat Baru")}.jpg`,
  gallery: [`/images/${slugify("Pantai Selat Baru")}.jpg`],
  videoUrl: null,

  description: "Pantai populer di Bengkalis dengan pasir luas dan pemandangan laut yang indah.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Warung"],
  aktivitas: ["Santai", "Kuliner", "Fotografi"],
  tips: "Datang sore hari untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 260,
  name: "Taman Rekreasi Alam Mayang",
  location: "Pekanbaru",
  province: "Riau",
  category: "alam",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Taman Rekreasi Alam Mayang")}.jpg`,
  gallery: [`/images/${slugify("Taman Rekreasi Alam Mayang")}.jpg`],
  videoUrl: null,

  description: "Taman rekreasi keluarga dengan konsep alam, cocok untuk liburan dan edukasi.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Area Bermain", "Warung"],
  aktivitas: ["Wisata Keluarga", "Edukasi", "Santai"],
  tips: "Datang pagi agar bisa menikmati semua wahana.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SULAWESI TENGGARA (311–315)
  // =====================
  {
  id: 261,
  name: "Pulau Labengki",
  location: "Konawe Utara",
  province: "Sulawesi Tenggara",
  category: "pantai",

  price: "Rp 20.000",
  priceNum: 20000,
  htmLokal: "Rp 20.000",
  htmTuris: "Rp 20.000",

  image: `/images/${slugify("Pulau Labengki")}.jpg`,
  gallery: [`/images/${slugify("Pulau Labengki")}.jpg`],
  videoUrl: null,

  description: "Pulau Labengki dikenal dengan julukan Raja Ampat-nya Sulawesi Tenggara, memiliki laut jernih dan gugusan pulau karst yang indah.",
  jamOperasional: "24 Jam",
  fasilitas: ["Perahu Wisata", "Homestay", "Pemandu Lokal"],
  aktivitas: ["Snorkeling", "Diving", "Fotografi"],
  tips: "Datang saat musim kemarau untuk visibilitas laut terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 262,
  name: "Pulau Bokori",
  location: "Konawe",
  province: "Sulawesi Tenggara",
  category: "pantai",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Pulau Bokori")}.jpg`,
  gallery: [`/images/${slugify("Pulau Bokori")}.jpg`],
  videoUrl: null,

  description: "Pulau Bokori merupakan pulau pasir putih dengan air laut dangkal dan jernih yang cocok untuk wisata keluarga.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Dermaga", "Gazebo", "Toilet"],
  aktivitas: ["Berenang", "Santai", "Fotografi"],
  tips: "Gunakan sunblock karena cuaca cukup terik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 263,
  name: "Pantai Nambo",
  location: "Kendari",
  province: "Sulawesi Tenggara",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Nambo")}.jpg`,
  gallery: [`/images/${slugify("Pantai Nambo")}.jpg`],
  videoUrl: null,

  description: "Pantai Nambo adalah destinasi favorit warga Kendari dengan pasir putih dan ombak yang tenang.",
  jamOperasional: "06.00 - 18.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Warung"],
  aktivitas: ["Berenang", "Santai", "Fotografi"],
  tips: "Sore hari adalah waktu terbaik untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 264,
  name: "Air Terjun Moramo",
  location: "Konawe Selatan",
  province: "Sulawesi Tenggara",
  category: "alam",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Air Terjun Moramo")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Moramo")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Moramo memiliki undakan batu alami yang unik dan aliran air yang jernih.",
  jamOperasional: "08.00 - 16.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Jalur Trekking"],
  aktivitas: ["Wisata Alam", "Fotografi", "Main Air"],
  tips: "Gunakan alas kaki anti licin karena bebatuan basah.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 265,
  name: "Benteng Keraton Buton",
  location: "Baubau",
  province: "Sulawesi Tenggara",
  category: "budaya",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Benteng Keraton Buton")}.jpg`,
  gallery: [`/images/${slugify("Benteng Keraton Buton")}.jpg`],
  videoUrl: null,

  description: "Benteng Keraton Buton merupakan benteng terluas di dunia yang menjadi saksi sejarah Kesultanan Buton.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Pusat Informasi"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "Gunakan topi atau payung saat berkeliling area benteng.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SULAWESI UTARA (316–320)
  // =====================
  {
  id: 266,
  name: "Taman Nasional Bunaken",
  location: "Manado",
  province: "Sulawesi Utara",
  category: "alam",

  price: "Rp 50.000",
  priceNum: 50000,
  htmLokal: "Rp 50.000",
  htmTuris: "Rp 50.000",

  image: `/images/${slugify("Taman Nasional Bunaken")}.jpg`,
  gallery: [`/images/${slugify("Taman Nasional Bunaken")}.jpg`],
  videoUrl: null,

  description: "Taman Nasional Bunaken merupakan destinasi wisata bahari kelas dunia dengan keindahan terumbu karang dan keanekaragaman hayati laut.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Perahu Wisata", "Pusat Informasi", "Pemandu Selam"],
  aktivitas: ["Diving", "Snorkeling", "Fotografi Bawah Laut"],
  tips: "Gunakan perlengkapan diving standar dan jaga kelestarian terumbu karang.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 267,
  name: "Pantai Malalayang",
  location: "Manado",
  province: "Sulawesi Utara",
  category: "pantai",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Pantai Malalayang")}.jpg`,
  gallery: [`/images/${slugify("Pantai Malalayang")}.jpg`],
  videoUrl: null,

  description: "Pantai Malalayang adalah pantai favorit di Manado untuk menikmati sunset dan wisata kuliner laut.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Warung Makan", "Toilet"],
  aktivitas: ["Santai", "Kuliner", "Fotografi"],
  tips: "Datang sore hari untuk pemandangan matahari terbenam terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 268,
  name: "Danau Tondano",
  location: "Minahasa",
  province: "Sulawesi Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Tondano")}.jpg`,
  gallery: [`/images/${slugify("Danau Tondano")}.jpg`],
  videoUrl: null,

  description: "Danau Tondano merupakan danau terbesar di Sulawesi Utara yang dikelilingi pegunungan dan persawahan.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Warung Apung", "Spot Foto"],
  aktivitas: ["Wisata Alam", "Kuliner", "Fotografi"],
  tips: "Cocok dikunjungi pagi hari untuk udara yang sejuk.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 269,
  name: "Bukit Kasih Kanonang",
  location: "Minahasa",
  province: "Sulawesi Utara",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Bukit Kasih Kanonang")}.jpg`,
  gallery: [`/images/${slugify("Bukit Kasih Kanonang")}.jpg`],
  videoUrl: null,

  description: "Bukit Kasih Kanonang merupakan simbol kerukunan umat beragama dengan panorama alam perbukitan.",
  jamOperasional: "08.00 - 17.00 WITA",
  fasilitas: ["Area Parkir", "Toilet", "Tangga Wisata"],
  aktivitas: ["Wisata Religi", "Fotografi", "Jalan Santai"],
  tips: "Gunakan alas kaki nyaman karena banyak anak tangga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 270,
  name: "Pulau Siladen",
  location: "Manado",
  province: "Sulawesi Utara",
  category: "pantai",

  price: "Rp 25.000",
  priceNum: 25000,
  htmLokal: "Rp 25.000",
  htmTuris: "Rp 25.000",

  image: `/images/${slugify("Pulau Siladen")}.jpg`,
  gallery: [`/images/${slugify("Pulau Siladen")}.jpg`],
  videoUrl: null,

  description: "Pulau Siladen menawarkan pasir putih halus dan spot snorkeling dengan air laut yang sangat jernih.",
  jamOperasional: "07.00 - 18.00 WITA",
  fasilitas: ["Perahu Wisata", "Resort", "Penyewaan Alat Snorkeling"],
  aktivitas: ["Snorkeling", "Berenang", "Fotografi"],
  tips: "Bawa perlengkapan pribadi karena fasilitas terbatas.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SUMATERA SELATAN (321–325)
  // =====================
  {
  id: 271,
  name: "Jembatan Ampera",
  location: "Palembang",
  province: "Sumatera Selatan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Jembatan Ampera")}.jpg`,
  gallery: [`/images/${slugify("Jembatan Ampera")}.jpg`],
  videoUrl: null,

  description: "Jembatan Ampera merupakan ikon Kota Palembang yang membentang di atas Sungai Musi dan menjadi simbol sejarah serta kebanggaan masyarakat Sumatera Selatan.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Spot Foto", "Wisata Sungai"],
  aktivitas: ["Fotografi", "Wisata Kota", "Jalan Santai"],
  tips: "Datang malam hari untuk menikmati pemandangan lampu kota.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 272,
  name: "Benteng Kuto Besak",
  location: "Palembang",
  province: "Sumatera Selatan",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Benteng Kuto Besak")}.jpg`,
  gallery: [`/images/${slugify("Benteng Kuto Besak")}.jpg`],
  videoUrl: null,

  description: "Benteng Kuto Besak adalah bangunan bersejarah peninggalan Kesultanan Palembang yang berada di tepi Sungai Musi.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Area Wisata"],
  aktivitas: ["Wisata Sejarah", "Fotografi", "Edukasi"],
  tips: "Padukan kunjungan dengan wisata Sungai Musi.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 273,
  name: "Pulau Kemaro",
  location: "Palembang",
  province: "Sumatera Selatan",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Kemaro")}.jpg`,
  gallery: [`/images/${slugify("Pulau Kemaro")}.jpg`],
  videoUrl: null,

  description: "Pulau Kemaro merupakan pulau kecil di Sungai Musi yang terkenal dengan klenteng dan legenda cinta Tan Bun An dan Siti Fatimah.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Perahu Wisata", "Toilet", "Area Ibadah"],
  aktivitas: ["Wisata Budaya", "Religi", "Fotografi"],
  tips: "Gunakan perahu resmi untuk keselamatan.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 274,
  name: "Danau Ranau",
  location: "OKU Selatan",
  province: "Sumatera Selatan",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Ranau")}.jpg`,
  gallery: [`/images/${slugify("Danau Ranau")}.jpg`],
  videoUrl: null,

  description: "Danau Ranau adalah danau terbesar kedua di Sumatera yang menawarkan panorama alam pegunungan dan udara sejuk.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Penginapan", "Warung Makan"],
  aktivitas: ["Wisata Alam", "Camping", "Fotografi"],
  tips: "Bawa jaket karena suhu cukup dingin di malam hari.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 275,
  name: "Air Terjun Bidadari",
  location: "Lahat",
  province: "Sumatera Selatan",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Air Terjun Bidadari")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Bidadari")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Bidadari menyuguhkan keindahan alam dengan air jernih dan suasana hutan yang masih alami.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Jalur Trekking"],
  aktivitas: ["Trekking", "Berenang", "Fotografi"],
  tips: "Gunakan alas kaki anti licin saat musim hujan.",

  coordinates: null,
  hotelTerdekat: []
},

  // =====================
  // SUMATERA UTARA (326–330)
  // =====================
  {
  id: 276,
  name: "Danau Toba",
  location: "Samosir",
  province: "Sumatera Utara",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Toba")}.jpg`,
  gallery: [`/images/${slugify("Danau Toba")}.jpg`],
  videoUrl: null,

  description: "Danau Toba merupakan danau vulkanik terbesar di Asia Tenggara yang menawarkan panorama alam megah dengan Pulau Samosir di tengahnya.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Penginapan", "Warung Makan", "Perahu Wisata"],
  aktivitas: ["Wisata Alam", "Fotografi", "Bersantai"],
  tips: "Datang pagi hari untuk menikmati udara segar dan pemandangan terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 277,
  name: "Pulau Samosir",
  location: "Samosir",
  province: "Sumatera Utara",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pulau Samosir")}.jpg`,
  gallery: [`/images/${slugify("Pulau Samosir")}.jpg`],
  videoUrl: null,

  description: "Pulau Samosir adalah pusat budaya Batak Toba dengan desa adat, tarian tradisional, dan panorama Danau Toba yang memukau.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Restoran", "Transportasi Air"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Kunjungi desa adat untuk pengalaman budaya yang lebih autentik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 278,
  name: "Air Terjun Sipiso-piso",
  location: "Karo",
  province: "Sumatera Utara",
  category: "alam",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Air Terjun Sipiso-piso")}.jpg`,
  gallery: [`/images/${slugify("Air Terjun Sipiso-piso")}.jpg`],
  videoUrl: null,

  description: "Air Terjun Sipiso-piso merupakan salah satu air terjun tertinggi di Indonesia dengan pemandangan Danau Toba dari ketinggian.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Jalur Tangga"],
  aktivitas: ["Trekking", "Fotografi", "Wisata Alam"],
  tips: "Gunakan alas kaki nyaman karena banyak anak tangga.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 279,
  name: "Istana Maimun",
  location: "Medan",
  province: "Sumatera Utara",
  category: "budaya",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Istana Maimun")}.jpg`,
  gallery: [`/images/${slugify("Istana Maimun")}.jpg`],
  videoUrl: null,

  description: "Istana Maimun adalah peninggalan Kesultanan Deli dengan arsitektur khas Melayu yang menjadi ikon wisata sejarah Kota Medan.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata"],
  aktivitas: ["Wisata Sejarah", "Edukasi", "Fotografi"],
  tips: "Datang pagi agar lebih leluasa berkeliling istana.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 280,
  name: "Pantai Pandan",
  location: "Tapanuli Tengah",
  province: "Sumatera Utara",
  category: "pantai",

  price: "Rp 5.000",
  priceNum: 5000,
  htmLokal: "Rp 5.000",
  htmTuris: "Rp 5.000",

  image: `/images/${slugify("Pantai Pandan")}.jpg`,
  gallery: [`/images/${slugify("Pantai Pandan")}.jpg`],
  videoUrl: null,

  description: "Pantai Pandan terkenal dengan pasir putih dan air laut yang jernih, cocok untuk wisata keluarga dan bersantai.",
  jamOperasional: "08.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Gazebo", "Warung Makan"],
  aktivitas: ["Bermain Air", "Fotografi", "Wisata Pantai"],
  tips: "Datang sore hari untuk menikmati sunset.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 281,
  name: "Jam Gadang",
  location: "Bukittinggi",
  province: "Sumatera Barat",
  category: "budaya",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Jam Gadang")}.jpg`,
  gallery: [`/images/${slugify("Jam Gadang")}.jpg`],
  videoUrl: null,

  description: "Jam Gadang merupakan ikon Kota Bukittinggi dan simbol sejarah Minangkabau yang selalu ramai dikunjungi wisatawan.",
  jamOperasional: "24 Jam",
  fasilitas: ["Area Parkir", "Toilet", "Pedagang UMKM"],
  aktivitas: ["Fotografi", "Wisata Kota", "Kuliner"],
  tips: "Datang sore hingga malam hari untuk suasana yang lebih hidup.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 282,
  name: "Ngarai Sianok",
  location: "Bukittinggi",
  province: "Sumatera Barat",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Ngarai Sianok")}.jpg`,
  gallery: [`/images/${slugify("Ngarai Sianok")}.jpg`],
  videoUrl: null,

  description: "Ngarai Sianok menyajikan panorama lembah hijau dengan tebing curam yang membentang indah di perbatasan Bukittinggi.",
  jamOperasional: "06.00 - 18.00 WIB",
  fasilitas: ["Gardu Pandang", "Area Parkir"],
  aktivitas: ["Fotografi", "Wisata Alam", "Jalan Santai"],
  tips: "Datang pagi hari untuk kabut tipis dan cahaya terbaik.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 283,
  name: "Danau Maninjau",
  location: "Agam",
  province: "Sumatera Barat",
  category: "alam",

  price: "Gratis",
  priceNum: 0,
  htmLokal: "Gratis",
  htmTuris: "Gratis",

  image: `/images/${slugify("Danau Maninjau")}.jpg`,
  gallery: [`/images/${slugify("Danau Maninjau")}.jpg`],
  videoUrl: null,

  description: "Danau Maninjau adalah danau vulkanik dengan panorama perbukitan dan kelok 44 yang ikonik.",
  jamOperasional: "24 Jam",
  fasilitas: ["Penginapan", "Warung Makan", "Area Parkir"],
  aktivitas: ["Wisata Alam", "Fotografi", "Bersantai"],
  tips: "Gunakan kendaraan prima saat melewati Kelok 44.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 284,
  name: "Pantai Air Manis",
  location: "Padang",
  province: "Sumatera Barat",
  category: "pantai",

  price: "Rp 10.000",
  priceNum: 10000,
  htmLokal: "Rp 10.000",
  htmTuris: "Rp 10.000",

  image: `/images/${slugify("Pantai Air Manis")}.jpg`,
  gallery: [`/images/${slugify("Pantai Air Manis")}.jpg`],
  videoUrl: null,

  description: "Pantai Air Manis terkenal dengan legenda Batu Malin Kundang dan pemandangan laut yang khas.",
  jamOperasional: "07.00 - 18.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Warung Makan"],
  aktivitas: ["Wisata Pantai", "Edukasi Budaya", "Fotografi"],
  tips: "Hindari datang saat ombak tinggi.",

  coordinates: null,
  hotelTerdekat: []
},
{
  id: 285,
  name: "Istano Basa Pagaruyung",
  location: "Tanah Datar",
  province: "Sumatera Barat",
  category: "budaya",

  price: "Rp 15.000",
  priceNum: 15000,
  htmLokal: "Rp 15.000",
  htmTuris: "Rp 15.000",

  image: `/images/${slugify("Istano Basa Pagaruyung")}.jpg`,
  gallery: [`/images/${slugify("Istano Basa Pagaruyung")}.jpg`],
  videoUrl: null,

  description: "Istano Basa Pagaruyung merupakan replika istana kerajaan Minangkabau dengan arsitektur rumah gadang megah.",
  jamOperasional: "08.00 - 17.00 WIB",
  fasilitas: ["Area Parkir", "Toilet", "Pemandu Wisata"],
  aktivitas: ["Wisata Budaya", "Edukasi", "Fotografi"],
  tips: "Gunakan pakaian sopan dan manfaatkan jasa pemandu.",

  coordinates: null,
  hotelTerdekat: []
}

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