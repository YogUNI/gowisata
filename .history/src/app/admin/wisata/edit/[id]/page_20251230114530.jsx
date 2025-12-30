"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getWisataById, updateWisata, provincesData } from "@/lib/data/WisataData";

export default function EditWisataPage() {
  const router = useRouter();
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  
  // Form state dengan SEMUA field baru
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    province: "",
    category: "",
    
    // PRICING
    price: "",
    priceNum: 0,
    htmLokal: "",
    htmTuris: "",
    
    // MEDIA
    image: "",
    gallery: [""],
    videoUrl: "",
    
    // DETAILS
    description: "",
    jamOperasional: "",
    fasilitas: [""],
    aktivitas: [""],
    tips: "",
    
    // LOCATION
    coordinates: {
      lat: "",
      lng: ""
    },
    
    // ACCOMMODATION
    hotelTerdekat: []
  });

  const [errors, setErrors] = useState({});
  
  // Temporary inputs
  const [newHotel, setNewHotel] = useState({
    nama: "",
    jarak: "",
    harga: "",
    rating: "",
    link: ""
  });

  // Load existing data
  useEffect(() => {
    const id = parseInt(params.id);
    const data = getWisataById(id);
    
    if (!data) {
      alert("❌ Wisata tidak ditemukan!");
      router.push("/admin/wisata");
      return;
    }

    // Pre-fill form dengan data existing
    setFormData({
      name: data.name || "",
      location: data.location || "",
      province: data.province || "",
      category: data.category || "",
      
      price: data.price || "",
      priceNum: data.priceNum || 0,
      htmLokal: data.htmLokal || "",
      htmTuris: data.htmTuris || "",
      
      image: data.image || "",
      gallery: (data.gallery && data.gallery.length > 0) ? data.gallery : [""],
      videoUrl: data.videoUrl || "",
      
      description: data.description || "",
      jamOperasional: data.jamOperasional || "",
      fasilitas: (data.fasilitas && data.fasilitas.length > 0) ? data.fasilitas : [""],
      aktivitas: (data.aktivitas && data.aktivitas.length > 0) ? data.aktivitas : [""],
      tips: data.tips || "",
      
      coordinates: {
        lat: data.coordinates?.lat || "",
        lng: data.coordinates?.lng || ""
      },
      
      hotelTerdekat: data.hotelTerdekat || []
    });

    setLoading(false);
  }, [params.id, router]);

  // Format Rupiah
  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    if (number === "" || number === "0") return "";
    return new Intl.NumberFormat("id-ID").format(number);
  };

  // Handle basic input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "priceNum") {
      const numValue = value.replace(/\D/g, "");
      const formatted = numValue === "0" || numValue === "" ? "Gratis" : `Rp ${formatRupiah(numValue)}`;
      
      setFormData({
        ...formData,
        price: formatted,
        priceNum: parseInt(numValue) || 0,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  // Handle nested coordinates
  const handleCoordinateChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      coordinates: {
        ...formData.coordinates,
        [name]: value
      }
    });
  };

  // Handle array fields (gallery, fasilitas, aktivitas)
  const handleArrayChange = (index, field, value) => {
    const newArray = [...formData[field]];
    newArray[index] = value;
    setFormData({ ...formData, [field]: newArray });
  };

  const addArrayItem = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""]
    });
  };

  const removeArrayItem = (field, index) => {
    if (formData[field].length > 1) {
      setFormData({
        ...formData,
        [field]: formData[field].filter((_, i) => i !== index)
      });
    }
  };

  // Handle hotel terdekat
  const addHotel = () => {
    if (newHotel.nama.trim() && newHotel.jarak.trim()) {
      setFormData({
        ...formData,
        hotelTerdekat: [...formData.hotelTerdekat, { ...newHotel }]
      });
      setNewHotel({ nama: "", jarak: "", harga: "", rating: "", link: "" });
    }
  };

  const removeHotel = (index) => {
    setFormData({
      ...formData,
      hotelTerdekat: formData.hotelTerdekat.filter((_, i) => i !== index)
    });
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Nama wisata wajib diisi";
    if (!formData.location.trim()) newErrors.location = "Lokasi wajib diisi";
    if (!formData.category) newErrors.category = "Kategori wajib dipilih";
    if (!formData.province) newErrors.province = "Provinsi wajib dipilih";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert("Mohon lengkapi semua field yang wajib diisi!");
      return;
    }

    setSaving(true);

    try {
      const id = parseInt(params.id);
      
      // Clean data sebelum save
      const cleanData = {
        ...formData,
        gallery: formData.gallery.filter(img => img.trim() !== ""),
        fasilitas: formData.fasilitas.filter(f => f.trim() !== ""),
        aktivitas: formData.aktivitas.filter(a => a.trim() !== ""),
        htmLokal: formData.htmLokal || formData.price,
        htmTuris: formData.htmTuris || formData.price,
        coordinates: (formData.coordinates.lat && formData.coordinates.lng) ? {
          lat: parseFloat(formData.coordinates.lat) || null,
          lng: parseFloat(formData.coordinates.lng) || null
        } : null,
      };

      const result = updateWisata(id, cleanData);
      
      if (result) {
        alert("✅ Data wisata berhasil diupdate!");
        router.push("/admin/wisata");
      } else {
        alert("❌ Gagal mengupdate data wisata!");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("❌ Terjadi kesalahan: " + error.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white">Loading data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Navbar */}
      <nav className="bg-white/10 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin/dashboard" className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
                </svg>
              </div>
              <h1 className="text-xl font-bold text-white">GoWisata Admin</h1>
            </Link>

            <div className="flex items-center gap-6">
              <Link href="/admin/dashboard" className="text-gray-300 hover:text-white transition-colors">
                Dashboard
              </Link>
              <Link href="/admin/wisata" className="text-gray-300 hover:text-white transition-colors">
                Kelola Wisata
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin/wisata" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Wisata
          </Link>
          <h2 className="text-3xl font-bold text-white mb-2">Edit Wisata</h2>
          <p className="text-gray-300">Update informasi destinasi wisata</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* ===== SECTION 1: INFORMASI DASAR ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Informasi Dasar</h3>
            </div>

            <div className="space-y-4">
              {/* Nama Wisata */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Nama Wisata <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Contoh: Pantai Kuta"
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.name ? "border-red-500" : "border-white/20"} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors`}
                />
                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Lokasi & Provinsi */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">
                    Lokasi <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Contoh: Badung"
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.location ? "border-red-500" : "border-white/20"} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500`}
                  />
                  {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    Provinsi <span className="text-red-400">*</span>
                  </label>
                  <select
                    name="province"
                    value={formData.province}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${errors.province ? "border-red-500" : "border-white/20"} rounded-lg text-white focus:outline-none focus:border-blue-500`}
                  >
                    <option value="" className="bg-slate-800">Pilih Provinsi</option>
                    {provincesData.map((prov) => (
                      <option key={prov.id} value={prov.name} className="bg-slate-800">
                        {prov.name}
                      </option>
                    ))}
                  </select>
                  {errors.province && <p className="text-red-400 text-sm mt-1">{errors.province}</p>}
                </div>
              </div>

              {/* Kategori */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Kategori <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${errors.category ? "border-red-500" : "border-white/20"} rounded-lg text-white focus:outline-none focus:border-blue-500`}
                >
                  <option value="" className="bg-slate-800">Pilih Kategori</option>
                  <option value="alam" className="bg-slate-800">Alam</option>
                  <option value="pantai" className="bg-slate-800">Pantai</option>
                  <option value="budaya" className="bg-slate-800">Budaya</option>
                </select>
                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
              </div>
            </div>
          </div>

          {/* ===== SECTION 2: PRICING ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Harga Tiket Masuk</h3>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-white font-medium mb-2">Harga Tiket (Angka)</label>
                <input
                  type="text"
                  name="priceNum"
                  value={formData.priceNum === 0 ? "" : formData.priceNum}
                  onChange={handleChange}
                  placeholder="Ketik 0 untuk gratis atau angka harga"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <p className="text-gray-400 text-sm mt-1">
                  Preview: <span className="text-blue-400 font-semibold">{formData.price || "Rp 0"}</span>
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">HTM Lokal (Opsional)</label>
                  <input
                    type="text"
                    name="htmLokal"
                    value={formData.htmLokal}
                    onChange={handleChange}
                    placeholder="Kosongkan jika sama dengan harga utama"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">HTM Turis (Opsional)</label>
                  <input
                    type="text"
                    name="htmTuris"
                    value={formData.htmTuris}
                    onChange={handleChange}
                    placeholder="Kosongkan jika sama dengan harga utama"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===== SECTION 3: MEDIA ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Media & Gambar</h3>
            </div>

            <div className="space-y-4">
              {/* Main Image */}
              <div>
                <label className="block text-white font-medium mb-2">Gambar Utama</label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="/images/nama-wisata.jpg"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                {formData.image && (
                  <div className="mt-3">
                    <img
                      src={formData.image}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-lg"
                      onError={(e) => e.target.style.display = "none"}
                    />
                  </div>
                )}
              </div>

              {/* Gallery */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Gallery (Multiple Images)
                  <span className="text-gray-400 text-sm ml-2">Opsional</span>
                </label>
                {formData.gallery.map((img, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => handleArrayChange(index, "gallery", e.target.value)}
                      placeholder="URL gambar gallery"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {formData.gallery.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("gallery", index)}
                        className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("gallery")}
                  className="mt-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Tambah Gambar
                </button>
              </div>

              {/* Video URL */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Video URL (YouTube)
                  <span className="text-gray-400 text-sm ml-2">Opsional</span>
                </label>
                <input
                  type="text"
                  name="videoUrl"
                  value={formData.videoUrl}
                  onChange={handleChange}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* ===== SECTION 4: DETAIL INFORMASI ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Detail Informasi</h3>
            </div>

            <div className="space-y-4">
              {/* Description */}
              <div>
                <label className="block text-white font-medium mb-2">Deskripsi Lengkap</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tulis deskripsi lengkap tentang destinasi wisata..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Jam Operasional */}
              <div>
                <label className="block text-white font-medium mb-2">Jam Operasional</label>
                <input
                  type="text"
                  name="jamOperasional"
                  value={formData.jamOperasional}
                  onChange={handleChange}
                  placeholder="Contoh: 08.00 - 17.00 WIB"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Fasilitas */}
              <div>
                <label className="block text-white font-medium mb-2">Fasilitas</label>
                {formData.fasilitas.map((fas, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={fas}
                      onChange={(e) => handleArrayChange(index, "fasilitas", e.target.value)}
                      placeholder="Contoh: Area Parkir"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {formData.fasilitas.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("fasilitas", index)}
                        className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("fasilitas")}
                  className="mt-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Tambah Fasilitas
                </button>
              </div>

              {/* Aktivitas */}
              <div>
                <label className="block text-white font-medium mb-2">Aktivitas</label>
                {formData.aktivitas.map((akt, index) => (
                  <div key={index} className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={akt}
                      onChange={(e) => handleArrayChange(index, "aktivitas", e.target.value)}
                      placeholder="Contoh: Fotografi"
                      className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                    />
                    {formData.aktivitas.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeArrayItem("aktivitas", index)}
                        className="px-4 py-3 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => addArrayItem("aktivitas")}
                  className="mt-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 rounded-lg transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Tambah Aktivitas
                </button>
              </div>

              {/* Tips */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Tips Berkunjung
                  <span className="text-gray-400 text-sm ml-2">Opsional</span>
                </label>
                <textarea
                  name="tips"
                  value={formData.tips}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tips untuk wisatawan yang berkunjung..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* ===== SECTION 5: LOKASI ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Koordinat GPS</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-white font-medium mb-2">
                  Latitude
                  <span className="text-gray-400 text-sm ml-2">Opsional</span>
                </label>
                <input
                  type="text"
                  name="lat"
                  value={formData.coordinates.lat}
                  onChange={handleCoordinateChange}
                  placeholder="-7.1661"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-white font-medium mb-2">
                  Longitude
                  <span className="text-gray-400 text-sm ml-2">Opsional</span>
                </label>
                <input
                  type="text"
                  name="lng"
                  value={formData.coordinates.lng}
                  onChange={handleCoordinateChange}
                  placeholder="107.4025"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* ===== SECTION 6: HOTEL TERDEKAT ===== */}
          <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white">Hotel Terdekat</h3>
            </div>

            {/* Add Hotel Form */}
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                <input
                  type="text"
                  placeholder="Nama Hotel"
                  value={newHotel.nama}
                  onChange={(e) => setNewHotel({...newHotel, nama: e.target.value})}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Jarak (contoh: 5 km)"
                  value={newHotel.jarak}
                  onChange={(e) => setNewHotel({...newHotel, jarak: e.target.value})}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Harga (contoh: Rp 500.000)"
                  value={newHotel.harga}
                  onChange={(e) => setNewHotel({...newHotel, harga: e.target.value})}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="text"
                  placeholder="Rating (contoh: 4.5)"
                  value={newHotel.rating}
                  onChange={(e) => setNewHotel({...newHotel, rating: e.target.value})}
                  className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <input
                type="text"
                placeholder="Link (opsional)"
                value={newHotel.link}
                onChange={(e) => setNewHotel({...newHotel, link: e.target.value})}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 mb-3"
              />
              <button
                type="button"
                onClick={addHotel}
                className="w-full px-4 py-2 bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Tambah Hotel
              </button>
            </div>

            {/* Hotels List */}
            {formData.hotelTerdekat.length > 0 ? (
              <div className="space-y-3">
                {formData.hotelTerdekat.map((hotel, index) => (
                  <div key={index} className="bg-white/5 rounded-lg p-4 flex justify-between items-start">
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{hotel.nama}</h4>
                      <div className="text-gray-400 text-sm mt-1 space-y-1">
                        <p>📍 Jarak: {hotel.jarak}</p>
                        <p>💰 {hotel.harga}</p>
                        <p>⭐ Rating: {hotel.rating}</p>
                        {hotel.link && <p className="truncate">🔗 {hotel.link}</p>}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeHotel(index)}
                      className="ml-4 p-2 bg-red-500/20 hover:bg-red-500/30 text-red-300 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 border-2 border-dashed border-white/20 rounded-lg">
                <svg className="w-12 h-12 text-gray-500 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="text-gray-400 text-sm">Belum ada hotel. Tambahkan hotel di form atas.</p>
              </div>
            )}
          </div>

          {/* ===== ACTION BUTTONS ===== */}
          <div className="flex gap-4 pt-4">
            <Link
              href="/admin/wisata"
              className="flex-1 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all text-center"
            >
              Batal
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
            >
              {saving ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Menyimpan...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                  Update Wisata
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}