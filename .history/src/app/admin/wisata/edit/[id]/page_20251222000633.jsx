"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import { getWisataById, updateWisata, deleteWisata, provincesData } from "@/lib/data/WisataData";

export default function EditWisataPage() {
  const router = useRouter();
  const params = useParams();
  const wisataId = parseInt(params.id);

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    price: "",
    priceNum: 0,
    image: "",
    category: "",
    province: "",
  });
  const [errors, setErrors] = useState({});
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
  const wisata = getWisataById(wisataId); // ✅ LOAD FROM LOCALSTORAGE

  if (wisata) {
    setFormData({
      name: wisata.name,
      location: wisata.location,
      price: wisata.price,
      priceNum: wisata.priceNum,
      image: wisata.image || "",
      category: wisata.category,
      province: wisata.province,
    });
  } else {
    setNotFound(true);
  }

  setLoading(false);
}, [wisataId]);

  // Format Rupiah
  const formatRupiah = (value) => {
    const number = value.replace(/\D/g, "");
    return new Intl.NumberFormat("id-ID").format(number);
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "price") {
      const numValue = value.replace(/\D/g, "");
      setFormData({
        ...formData,
        price: numValue === "0" ? "Gratis" : `Rp ${formatRupiah(numValue)}`,
        priceNum: parseInt(numValue) || 0,
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
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
    const updated = updateWisata(wisataId, formData); // ✅ REAL UPDATE!
    console.log("Updated Wisata:", updated);

    alert("Wisata berhasil diupdate!");
    router.push("/admin/wisata");
  } catch (error) {
    console.error("Error:", error);
    alert("Gagal mengupdate wisata!");
  } finally {
    setSaving(false);
  }
};

  // Handle delete
  const handleDelete = () => {
  if (confirm(`Yakin ingin menghapus "${formData.name}"?`)) {
    deleteWisata(wisataId); // ✅ REAL DELETE!
    alert("Wisata berhasil dihapus!");
    router.push("/admin/wisata");
  }
};

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-white mb-2">Wisata Tidak Ditemukan</h2>
          <p className="text-gray-400 mb-6">Wisata dengan ID {wisataId} tidak ada</p>
          <Link
            href="/admin/wisata"
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg inline-block"
          >
            Kembali ke Daftar Wisata
          </Link>
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
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
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
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/admin/wisata" className="text-blue-400 hover:text-blue-300 flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Daftar Wisata
          </Link>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Edit Wisata</h2>
              <p className="text-gray-300">ID: {wisataId} - {formData.name}</p>
            </div>
            <button
              onClick={handleDelete}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-lg transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
              Hapus
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6">
          <div className="space-y-6">
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
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.name ? "border-red-500" : "border-white/20"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500`}
              />
              {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Lokasi */}
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
                className={`w-full px-4 py-3 bg-white/10 border ${
                  errors.location ? "border-red-500" : "border-white/20"
                } rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500`}
              />
              {errors.location && <p className="text-red-400 text-sm mt-1">{errors.location}</p>}
            </div>

            {/* Harga */}
            <div>
              <label className="block text-white font-medium mb-2">Harga Tiket</label>
              <div className="relative">
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Ketik 0 untuk gratis"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
              </div>
              <p className="text-gray-400 text-sm mt-1">
                {formData.priceNum === 0 ? "Wisata ini gratis" : `Harga: Rp ${formatRupiah(formData.priceNum.toString())}`}
              </p>
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-white font-medium mb-2">URL Gambar</label>
              <input
                type="text"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <p className="text-gray-400 text-sm mt-1">Opsional - Bisa dikosongkan</p>

              {/* Image Preview */}
              {formData.image && (
                <div className="mt-4">
                  <p className="text-white text-sm mb-2">Preview:</p>
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-48 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Kategori & Provinsi */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kategori */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Kategori <span className="text-red-400">*</span>
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.category ? "border-red-500" : "border-white/20"
                  } rounded-lg text-white focus:outline-none focus:border-blue-500`}
                >
                  <option value="" className="bg-slate-800">Pilih Kategori</option>
                  <option value="alam" className="bg-slate-800">Alam</option>
                  <option value="pantai" className="bg-slate-800">Pantai</option>
                  <option value="budaya" className="bg-slate-800">Budaya</option>
                </select>
                {errors.category && <p className="text-red-400 text-sm mt-1">{errors.category}</p>}
              </div>

              {/* Provinsi */}
              <div>
                <label className="block text-white font-medium mb-2">
                  Provinsi <span className="text-red-400">*</span>
                </label>
                <select
                  name="province"
                  value={formData.province}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-white/10 border ${
                    errors.province ? "border-red-500" : "border-white/20"
                  } rounded-lg text-white focus:outline-none focus:border-blue-500`}
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

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Link
                href="/admin/wisata"
                className="flex-1 px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition-all text-center"
              >
                Batal
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Update Wisata
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}