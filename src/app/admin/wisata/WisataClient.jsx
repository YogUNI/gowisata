"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getWisataData, bulkDeleteWisata, deleteWisata, provincesData } from "@/lib/data/WisataData";

export default function WisataClient() {
  const router = useRouter();
  
  // States
  const [wisataList, setWisataList] = useState([]);
  const [filteredWisata, setFilteredWisata] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterProvince, setFilterProvince] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const itemsPerPage = 10;

  useEffect(() => {
  const data = getWisataData();
  setWisataList(data);
  setFilteredWisata(data);
}, []);

  useEffect(() => {
    // Apply filters
    let filtered = [...wisataList];

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (w) =>
          w.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          w.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          w.province.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Province filter
    if (filterProvince) {
      filtered = filtered.filter((w) => w.province === filterProvince);
    }

    // Category filter
    if (filterCategory) {
      filtered = filtered.filter((w) => w.category === filterCategory);
    }

    setFilteredWisata(filtered);
    setCurrentPage(1); // Reset to first page
  }, [searchQuery, filterProvince, filterCategory, wisataList]);

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredWisata.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredWisata.length / itemsPerPage);

  // Select All
  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedIds(currentItems.map((item) => item.id));
    } else {
      setSelectedIds([]);
    }
  };

  // Select Single
  const handleSelectSingle = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  // Delete Single
  const handleDeleteSingle = (id) => {
    setDeleteTarget({ type: "single", ids: [id] });
    setShowDeleteModal(true);
  };

  // Bulk Delete
  const handleBulkDelete = () => {
    if (selectedIds.length === 0) {
      alert("Pilih minimal 1 item untuk dihapus!");
      return;
    }
    setDeleteTarget({ type: "bulk", ids: selectedIds });
    setShowDeleteModal(true);
  };

  // Confirm Delete
  const confirmDelete = () => {
  if (deleteTarget.type === 'bulk') {
    bulkDeleteWisata(deleteTarget.ids);
  } else {
    deleteWisata(deleteTarget.ids[0]);
  }
  
  const updatedData = getWisataData();
  setWisataList(updatedData);
  setSelectedIds([]);
  setShowDeleteModal(false);
  setDeleteTarget(null);
  alert(`${deleteTarget.ids.length} wisata berhasil dihapus!`);
};

  // Export CSV
  const handleExportCSV = () => {
    const headers = ["ID", "Nama", "Lokasi", "Harga", "Kategori", "Provinsi"];
    const csvData = filteredWisata.map((item) => [
      item.id,
      item.name,
      item.location,
      item.price,
      item.category,
      item.province,
    ]);

    let csvContent = headers.join(",") + "\n";
    csvData.forEach((row) => {
      csvContent += row.map((cell) => `"${cell}"`).join(",") + "\n";
    });

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `wisata_data_${Date.now()}.csv`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export Excel (Simple CSV with .xls extension)
  const handleExportExcel = () => {
    const headers = ["ID", "Nama", "Lokasi", "Harga", "Kategori", "Provinsi"];
    const csvData = filteredWisata.map((item) => [
      item.id,
      item.name,
      item.location,
      item.price,
      item.category,
      item.province,
    ]);

    let csvContent = headers.join("\t") + "\n";
    csvData.forEach((row) => {
      csvContent += row.join("\t") + "\n";
    });

    const blob = new Blob([csvContent], { type: "application/vnd.ms-excel" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `wisata_data_${Date.now()}.xls`);
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
              <Link href="/admin/dashboard" className="text-gray-300 hover:text-white transition-colors font-medium">
                Dashboard
              </Link>
              <Link href="/admin/wisata" className="text-white hover:text-blue-400 transition-colors font-medium border-b-2 border-white pb-1">
                Kelola Wisata
              </Link>
              <button
                onClick={() => {
                  localStorage.removeItem("admin_token");
                  router.push("/admin/login");
                }}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Kelola Wisata</h2>
            <p className="text-gray-300">Manage semua destinasi wisata</p>
          </div>
          <Link
            href="/admin/wisata/tambah"
            className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-bold rounded-lg hover:scale-105 transition-all flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Tambah Wisata
          </Link>
        </div>

        {/* Filters & Actions */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 p-6 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Cari wisata..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filter Province */}
            <select
              value={filterProvince}
              onChange={(e) => setFilterProvince(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">Semua Provinsi</option>
              {provincesData.map((prov) => (
                <option key={prov.id} value={prov.name} className="bg-slate-800">
                  {prov.name}
                </option>
              ))}
            </select>

            {/* Filter Category */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">Semua Kategori</option>
              <option value="alam" className="bg-slate-800">Alam</option>
              <option value="pantai" className="bg-slate-800">Pantai</option>
              <option value="budaya" className="bg-slate-800">Budaya</option>
            </select>

            {/* Export Buttons */}
            <div className="flex gap-2">
              <button
                onClick={handleExportCSV}
                className="flex-1 px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-200 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                CSV
              </button>
              <button
                onClick={handleExportExcel}
                className="flex-1 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-200 rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
                Excel
              </button>
            </div>
          </div>

          {/* Bulk Actions */}
          {selectedIds.length > 0 && (
            <div className="flex items-center gap-4 p-4 bg-blue-500/20 rounded-lg">
              <span className="text-white font-medium">{selectedIds.length} item dipilih</span>
              <button
                onClick={handleBulkDelete}
                className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-lg transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Hapus Terpilih
              </button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-white/10 backdrop-blur-xl rounded-xl border border-white/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white/5">
                <tr>
                  <th className="px-6 py-4 text-left">
                    <input
                      type="checkbox"
                      checked={selectedIds.length === currentItems.length && currentItems.length > 0}
                      onChange={handleSelectAll}
                      className="w-4 h-4 accent-blue-500 cursor-pointer"
                    />
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">ID</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Nama</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Lokasi</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Harga</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Kategori</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Provinsi</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-300 uppercase">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {currentItems.length === 0 ? (
                  <tr>
                    <td colSpan="8" className="px-6 py-12 text-center text-gray-400">
                      Tidak ada data wisata ditemukan
                    </td>
                  </tr>
                ) : (
                  currentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4">
                        <input
                          type="checkbox"
                          checked={selectedIds.includes(item.id)}
                          onChange={() => handleSelectSingle(item.id)}
                          className="w-4 h-4 accent-blue-500 cursor-pointer"
                        />
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{item.id}</td>
                      <td className="px-6 py-4 text-white font-medium">{item.name}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{item.location}</td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{item.price}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-blue-500/20 text-blue-200 rounded text-xs capitalize">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-300 text-sm">{item.province}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Link
                            href={`/admin/wisata/edit/${item.id}`}
                            className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-200 rounded-lg transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                          </Link>
                          <button
                            onClick={() => handleDeleteSingle(item.id)}
                            className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-200 rounded-lg transition-all"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="px-6 py-4 border-t border-white/10 flex items-center justify-between">
              <p className="text-gray-400 text-sm">
                Menampilkan {indexOfFirstItem + 1} - {Math.min(indexOfLastItem, filteredWisata.length)} dari {filteredWisata.length} data
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Prev
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded ${
                      currentPage === page
                        ? "bg-blue-500 text-white"
                        : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 bg-white/10 hover:bg-white/20 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl border border-white/20 p-6 max-w-md w-full">
            <h3 className="text-xl font-bold text-white mb-4">Konfirmasi Hapus</h3>
            <p className="text-gray-300 mb-6">
              Yakin ingin menghapus {deleteTarget.ids.length} wisata? Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => {
                  setShowDeleteModal(false);
                  setDeleteTarget(null);
                }}
                className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
              >
                Batal
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-all"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}