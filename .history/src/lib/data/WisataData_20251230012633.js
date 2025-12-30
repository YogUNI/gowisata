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
    price: "Rp 50.000",
    priceNum: 50000,
    htmLokal: "Rp 25.000",
    htmTuris: "Rp 50.000",
    
    // MEDIA
    image: `/images/${slugify("Kawah Putih")}.jpg`,
    gallery: [
      `/images/${slugify("Kawah Putih")}.jpg`,
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598"
    ],
    videoUrl: "https://www.youtube.com/watch?v=oe3_7YIGrT0
    
    // DETAILS
    description: "Kawah Putih adalah danau kawah dengan air berwarna putih kehijauan yang terletak di Gunung Patuha, Ciwidey. Tempat ini menawarkan pemandangan alam yang eksotis dengan suhu udara yang sejuk berkisar 8-22°C. Kawah Putih terbentuk dari letusan Gunung Patuha dan menjadi salah satu destinasi wisata paling populer di Jawa Barat.",
    jamOperasional: "07.00 - 17.00 WIB",
    fasilitas: ["Area Parkir Luas", "Toilet Bersih", "Musholla", "Warung Makan", "Spot Foto Instagramable", "Area Istirahat"],
    aktivitas: ["Fotografi", "Trekking Ringan", "Menikmati Pemandangan", "Wisata Edukasi"],
    tips: "Bawa jaket tebal karena suhu di kawasan sangat dingin. Datang pagi hari untuk menghindari kabut tebal dan mendapatkan foto terbaik. Gunakan masker jika sensitif dengan bau belerang.",
    
    // LOCATION (OPTIONAL)
    coordinates: {
      lat: -7.1661,
      lng: 107.4025
    },
    
    // ACCOMMODATION (OPTIONAL)
    hotelTerdekat: [
      {
        nama: "Hotel Santika Bandung",
        jarak: "25 km",
        harga: "Rp 500.000 / malam",
        rating: 4.5,
        link: "https://www.google.com"
      },
      {
        nama: "Grand Serela Ciwidey",
        jarak: "5 km",
        harga: "Rp 350.000 / malam",
        rating: 4.2,
        link: "https://www.google.com"
      }
    ]
  },
  
  // DATA LAINNYA (format lama masih compatible)
  { id: 2, name: "Tangkuban Perahu", location: "Bandung Barat", price: "Rp 75.000", priceNum: 75000, image: `/images/${slugify("Tangkuban Perahu")}.jpg`, category: "alam", province: "Jawa Barat" },
  { id: 3, name: "Pantai Pangandaran", location: "Pangandaran", price: "Rp 30.000", priceNum: 30000, image: `/images/${slugify("Pantai Pangandaran")}.jpg`, category: "pantai", province: "Jawa Barat" },
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