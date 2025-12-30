"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getWisataById, updateWisata } from "@/lib/data/WisataData";
import { provincesData } from "@/lib/data/WisataData";

export default function EditWisataPage() {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    province: "",
    category: "",
    price: "",
    priceNum: 0,
    image: "",
    // Detail page fields
    description: "",
    fasilitas: [],
    operatingHours: "",
    bestTime: "",
    accessibility: "",
    gallery: [],
    videoUrl: "",
    htmLokal: "",
    htmTuris: "",
    jamOperasional: "",
    fasilitas: [],
    aktivitas: [],
    tips: "",
    
  });
  
  const [facilityInput, setFacilityInput] = useState("");

  // Load wisata data
  useEffect(() => {
    const id = parseInt(params.id);
    const data = getWisataById(id);
    
    if (!data) {
      router.push("/admin/wisata");
      return;
    }
    
    setFormData({
      name: data.name || "",
      location: data.location || "",
      province: data.province || "",
      category: data.category || "",
      price: data.price || "",
      priceNum: data.priceNum || 0,
      image: data.image || "",
      description: data.description || "",
      facilities: data.facilities || [],
      operatingHours: data.operatingHours || "",
      bestTime: data.bestTime || "",
      accessibility: data.accessibility || ""
    });
    
    setLoading(false);
  }, [params.id, router]);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Auto-update priceNum when price changes
      ...(name === "price" && { priceNum: parsePriceToNumber(value) })
    }));
  };

  // Parse price string to number
  const parsePriceToNumber = (priceStr) => {
    if (priceStr.toLowerCase() === "gratis") return 0;
    const numbers = priceStr.replace(/\D/g, "");
    return parseInt(numbers) || 0;
  };

  // Add facility
  const addFacility = () => {
    if (facilityInput.trim()) {
      setFormData(prev => ({
        ...prev,
        facilities: [...prev.facilities, facilityInput.trim()]
      }));
      setFacilityInput("");
    }
  };

  // Remove facility
  const removeFacility = (index) => {
    setFormData(prev => ({
      ...prev,
      facilities: prev.facilities.filter((_, i) => i !== index)
    }));
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });

    try {
      const id = parseInt(params.id);
      const result = updateWisata(id, formData);
      
      if (result) {
        setMessage({ type: "success", text: "✅ Data wisata berhasil diupdate!" });
        setTimeout(() => {
          router.push("/admin/wisata");
        }, 1500);
      } else {
        setMessage({ type: "error", text: "❌ Gagal mengupdate data wisata!" });
      }
    } catch (error) {
      setMessage({ type: "error", text: "❌ Terjadi kesalahan: " + error.message });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="bg-white shadow-md px-6 py-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
            </svg>
            <span className="text-2xl font-bold text-purple-600">GoWisata Admin</span>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/admin/wisata" className="text-gray-600 hover:text-purple-600 transition-colors flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Kembali
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* PAGE HEADER */}
        <div className="mb-8">
          <h1 className="text-4xl font-black text-gray-800 mb-2">Edit Wisata</h1>
          <p className="text-gray-600">Update informasi dan detail wisata</p>
        </div>

        {/* MESSAGE */}
        {message.text && (
          <div className={`mb-6 p-4 rounded-xl ${
            message.type === "success" ? "bg-green-50 text-green-800 border border-green-200" : "bg-red-50 text-red-800 border border-red-200"
          }`}>
            {message.text}
          </div>
        )}

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* BASIC INFO CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-100 rounded-xl">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Informasi Dasar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nama Wisata */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Nama Wisata <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Kawah Putih"
                />
              </div>

              {/* Lokasi */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Lokasi <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Bandung"
                />
              </div>

              {/* Provinsi */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Provinsi <span className="text-red-500">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Pilih Provinsi</option>
                  {provincesData.map(prov => (
                    <option key={prov.id} value={prov.name}>{prov.name}</option>
                  ))}
                </select>
              </div>

              {/* Kategori */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Kategori <span className="text-red-500">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                >
                  <option value="">Pilih Kategori</option>
                  <option value="alam">Alam</option>
                  <option value="pantai">Pantai</option>
                  <option value="budaya">Budaya</option>
                </select>
              </div>

              {/* Harga */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Harga <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Rp 50.000 atau Gratis"
                />
                <p className="text-sm text-gray-500 mt-1">Format: Rp 50.000 atau Gratis</p>
              </div>

              {/* Image URL */}
              <div className="md:col-span-2">
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  URL Gambar <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: /images/kawah-putih.jpg"
                />
                {formData.image && (
                  <div className="mt-3">
                    <img 
                      src={formData.image} 
                      alt="Preview" 
                      className="w-full h-48 object-cover rounded-xl"
                      onError={(e) => e.target.src = 'https://via.placeholder.com/400x200?text=Invalid+Image'}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* DETAIL CONTENT CARD */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-100 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-800">Konten Detail Halaman</h2>
            </div>

            <div className="space-y-6">
              {/* Description */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Deskripsi Lengkap
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Tulis deskripsi lengkap tentang destinasi wisata..."
                />
                <p className="text-sm text-gray-500 mt-1">Deskripsi yang menarik akan ditampilkan di halaman detail</p>
              </div>

              {/* Operating Hours */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Jam Operasional
                </label>
                <input
                  type="text"
                  name="operatingHours"
                  value={formData.operatingHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: 08.00 - 17.00 WIB"
                />
              </div>

              {/* Best Time */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Waktu Terbaik Berkunjung
                </label>
                <input
                  type="text"
                  name="bestTime"
                  value={formData.bestTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Pagi hari (07.00-10.00) untuk pemandangan terbaik"
                />
              </div>

              {/* Accessibility */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Aksesibilitas
                </label>
                <textarea
                  name="accessibility"
                  value={formData.accessibility}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Contoh: Akses jalan bagus, tersedia kendaraan ojek/angkot dari pintu masuk"
                />
              </div>

              {/* Facilities */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Fasilitas
                </label>
                
                {/* Add Facility Input */}
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={facilityInput}
                    onChange={(e) => setFacilityInput(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && (e.preventDefault(), addFacility())}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Contoh: Area Parkir"
                  />
                  <button
                    type="button"
                    onClick={addFacility}
                    className="px-6 py-3 bg-purple-600 text-white font-bold rounded-xl hover:bg-purple-700 transition-colors"
                  >
                    Tambah
                  </button>
                </div>

                {/* Facilities List */}
                {formData.facilities.length > 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {formData.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-gray-700 text-sm">{facility}</span>
                        <button
                          type="button"
                          onClick={() => removeFacility(index)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm py-3 text-center border-2 border-dashed border-gray-300 rounded-xl">
                    Belum ada fasilitas. Tambahkan fasilitas di atas.
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 justify-end">
            <Link
              href="/admin/wisata"
              className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"
            >
              Batal
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {saving ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Menyimpan...
                </span>
              ) : (
                "💾 Simpan Perubahan"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}