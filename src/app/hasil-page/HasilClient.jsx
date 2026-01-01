"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getWisataData } from "@/lib/data/WisataData";

const provincesData = [
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

function formatRupiah(number) {
  if (number === "" || number === null || number === undefined) return "";
  const num = Number(number);
  if (isNaN(num)) return "";
  return new Intl.NumberFormat("id-ID").format(num);
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2 relative z-50">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
          </svg>
          <h1 className="text-xl font-bold text-white">GoWisata</h1>
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-white">
          <li className="hover:text-gray-200 transition-colors">
            <Link href="/">Beranda</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors border-b-2 border-white pb-1">
            Destinasi
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/learn-more">Mulai Jelajah</Link>
          </li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative p-2" aria-label="Toggle menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </nav>

      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 md:hidden shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors" aria-label="Close menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col justify-center h-full px-8 space-y-1">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300">Beranda</Link>
          <Link href="/hasil-page" onClick={() => setIsOpen(false)} className="text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300">Destinasi</Link>
          <Link href="/learn-more" onClick={() => setIsOpen(false)} className="text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300">Mulai Jelajah</Link>
        </div>
      </div>
    </>
  );
}

function FilterSidebar({ initialFilters, onFilterChange }) {
  const [kotaOpen, setKotaOpen] = useState(false);
  const [durasi, setDurasi] = useState(initialFilters.durasi);
  const [kota, setKota] = useState(initialFilters.provinsi);
  const [searchKota, setSearchKota] = useState("");
  const [orang, setOrang] = useState(initialFilters.orang);
  const [budget, setBudget] = useState(initialFilters.budget);
  const [budgetInput, setBudgetInput] = useState(formatRupiah(initialFilters.budget));
  const [kategori, setKategori] = useState(initialFilters.kategori);

  const filteredKota = provincesData
    .filter((prov) => prov.name.toLowerCase().includes(searchKota.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (kotaOpen && !e.target.closest(".provinsi-dropdown")) {
        setKotaOpen(false);
        setSearchKota("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [kotaOpen]);

  const handleDurasiChange = (value) => {
    if (value === "" || value === null) {
      setDurasi("");
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      if (numValue < 1) {
        setDurasi(1);
      } else if (numValue > 30) {
        setDurasi(30);
      } else {
        setDurasi(numValue);
      }
    }
  };

  const handleOrangChange = (value) => {
    if (value === "" || value === null) {
      setOrang("");
      return;
    }

    const numValue = parseInt(value);
    if (!isNaN(numValue)) {
      if (numValue < 1) {
        setOrang(1);
      } else if (numValue > 50) {
        setOrang(50);
      } else {
        setOrang(numValue);
      }
    }
  };

  const handleBudgetChange = (value) => {
    const rawValue = value.replace(/\D/g, "");

    if (rawValue === "") {
      setBudgetInput("");
      setBudget(0);
      return;
    }

    const numValue = parseInt(rawValue);

    if (!isNaN(numValue)) {
      const finalValue = numValue > 1000000000 ? 1000000000 : numValue;
      setBudget(finalValue);
      setBudgetInput(formatRupiah(finalValue));
    }
  };

  const handleBudgetBlur = () => {
    if (budget === 0 || budget === null || budget === "") {
      setBudget(0);
      setBudgetInput("0");
    }
  };

  const handleApplyFilter = () => {
    onFilterChange({ durasi, provinsi: kota, orang, budget, kategori });
  };

  return (
    <aside className="w-full md:w-80 bg-white rounded-2xl shadow-2xl p-6 sticky top-6 h-fit font-['Inter',_'Poppins',_sans-serif]">
      <h2 className="text-2xl font-black mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
        🔍 Filter Pencarian
      </h2>

      <div className="space-y-4">
        {/* DURASI LIBURAN */}
        <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
          <label className="block text-white font-bold text-sm mb-3 tracking-wide">Durasi Liburan</label>
          <div className="flex items-center gap-3 bg-white rounded-xl p-2">
            <button
              onClick={() => handleDurasiChange(durasi - 1)}
              disabled={durasi <= 1}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0 ${durasi <= 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            </button>

            <input
              type="number"
              value={durasi}
              onChange={(e) => handleDurasiChange(e.target.value)}
              onBlur={() => {
                if (durasi === "" || durasi < 1) setDurasi(1);
                if (durasi > 30) setDurasi(30);
              }}
              min="1"
              max="30"
              className="flex-1 text-center text-xl font-bold text-purple-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-purple-300 rounded-lg py-1"
            />

            <button
              onClick={() => handleDurasiChange(durasi + 1)}
              disabled={durasi >= 30}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0 ${durasi >= 30
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700 active:scale-95"
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <p className="text-white text-xs mt-2 text-center font-semibold">1 - 30 hari</p>
        </div>

        {/* PROVINSI */}
        <div className="relative provinsi-dropdown">
          <div onClick={() => setKotaOpen(!kotaOpen)} className="p-4 rounded-xl cursor-pointer transition-all hover:shadow-lg" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
            <label className="block text-white font-bold text-sm mb-2 tracking-wide">Provinsi</label>
            <div className="bg-white rounded-lg px-3 py-2">
              <p className="text-gray-800 font-bold text-center truncate">{kota}</p>
            </div>
          </div>

          {kotaOpen && (
            <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl z-20 border-2 border-pink-300 max-h-64 overflow-hidden animate-fadeIn">
              <div className="p-3 border-b border-gray-200 sticky top-0 bg-white">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Cari provinsi..."
                    value={searchKota}
                    onChange={(e) => setSearchKota(e.target.value)}
                    className="w-full px-3 py-2 pl-10 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 text-sm text-gray-800"
                    autoFocus
                  />
                  <svg className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {filteredKota.map((prov) => (
                  <div
                    key={prov.id}
                    onClick={() => {
                      setKota(prov.name);
                      setKotaOpen(false);
                      setSearchKota("");
                    }}
                    className={`p-3 cursor-pointer hover:bg-pink-50 transition-all text-gray-800 ${kota === prov.name ? "bg-pink-100 font-bold text-pink-700" : ""
                      }`}
                  >
                    <span className="text-sm">{prov.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* JUMLAH ORANG */}
        <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" }}>
          <label className="block text-white font-bold text-sm mb-3 tracking-wide">Jumlah Orang</label>
          <div className="flex items-center gap-3 bg-white rounded-xl p-2">
            <button
              onClick={() => handleOrangChange(orang - 1)}
              disabled={orang <= 1}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0 ${orang <= 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95"
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
              </svg>
            </button>

            <input
              type="number"
              value={orang}
              onChange={(e) => handleOrangChange(e.target.value)}
              onBlur={() => {
                if (orang === "" || orang < 1) setOrang(1);
                if (orang > 50) setOrang(50);
              }}
              min="1"
              max="50"
              className="flex-1 text-center text-xl font-bold text-cyan-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-cyan-300 rounded-lg py-1"
            />

            <button
              onClick={() => handleOrangChange(orang + 1)}
              disabled={orang >= 50}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 flex-shrink-0 ${orang >= 50
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-cyan-600 text-white hover:bg-cyan-700 active:scale-95"
                }`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
          <p className="text-white text-xs mt-2 text-center font-semibold">1 - 50 orang</p>
        </div>

        {/* BUDGET */}
        <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)" }}>
          <label className="block text-white font-bold text-sm mb-3 tracking-wide">Budget Max Per Destinasi</label>
          <div className="bg-white rounded-xl px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-orange-600 font-bold text-base flex-shrink-0">Rp</span>
              <input
                type="text"
                inputMode="numeric"
                value={budgetInput}
                onChange={(e) => handleBudgetChange(e.target.value)}
                onBlur={handleBudgetBlur}
                placeholder="0"
                className="flex-1 text-center text-base font-bold text-orange-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-orange-300 rounded-lg py-1"
              />
            </div>
          </div>
          <p className="text-white text-xs mt-2 text-center font-semibold">
            {budget === 0 ? "Semua harga (termasuk gratis)" : `Hanya destinasi ≤ Rp ${formatRupiah(budget)}`}
          </p>
        </div>

        {/* KATEGORI */}
        <div className="p-4 rounded-xl" style={{ background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)" }}>
          <label className="block text-gray-800 font-bold text-sm mb-3 tracking-wide">Kategori Wisata</label>
          <div className="space-y-2">
            {Object.keys(kategori).map((key) => (
              <label key={key} className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-2 rounded-lg transition-all">
                <input
                  type="checkbox"
                  checked={kategori[key]}
                  onChange={() => setKategori({ ...kategori, [key]: !kategori[key] })}
                  className="w-5 h-5 accent-teal-600 cursor-pointer"
                />
                <span className="text-gray-800 capitalize font-semibold text-sm">{key}</span>
              </label>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleApplyFilter}
          className="w-full text-white font-bold py-3 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
          style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}
        >
          Terapkan Filter ✨
        </button>
      </div>

      <style jsx>{`
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </aside>
  );
}

function DestinationGrid({ filters, allDestinations }) {
  const [isVisible, setIsVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (gridRef.current) observer.observe(gridRef.current);
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current);
    };
  }, []);

  // FILTERING LOGIC
  const filteredDestinations = allDestinations.filter((dest) => {
    const provinceMatch = dest.province.toLowerCase() === filters.provinsi.toLowerCase();
    const budgetMatch = filters.budget === 0 ? true : dest.priceNum <= filters.budget;
    const activeCategories = Object.keys(filters.kategori).filter((k) => filters.kategori[k]);
    const categoryMatch = activeCategories.length === 0 || activeCategories.includes(dest.category);

    return provinceMatch && budgetMatch && categoryMatch;
  });

  return (
    <div ref={gridRef} className="flex-1 font-['Inter',_'Poppins',_sans-serif]">
      <div className={`mb-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent tracking-tight">
            🏖️ Hasil Pencarian
          </h2>
          <p className="text-gray-600 font-semibold">{filteredDestinations.length} destinasi</p>
        </div>
        <p className="text-gray-600 font-medium">
          {filters.provinsi} • Budget: {filters.budget === 0 ? "Semua" : `≤ Rp ${formatRupiah(filters.budget)}`} • {filters.durasi} hari • {filters.orang} orang
        </p>
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-2xl shadow-xl">
          <div className="text-6xl mb-4">😢</div>
          <h3 className="text-2xl font-bold text-gray-700 mb-2">Tidak Ada Destinasi Ditemukan</h3>
          <p className="text-gray-600 mb-6">Coba ubah filter pencarian Anda</p>
          <button
            onClick={() => window.location.href = "/learn-more"}
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-xl hover:scale-105 transition-all"
          >
            Kembali ke Pencarian
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDestinations.map((dest, index) => {
            const delayStyle = { transitionDelay: `${index * 50}ms` };
            return (
              <div
                key={dest.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                style={delayStyle}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={dest.image && dest.image !== '' ? dest.image : 'https://via.placeholder.com/400x300?text=No+Image'}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      console.error('❌ Failed to load image:', dest.name, dest.image);
                      e.target.src = 'https://via.placeholder.com/400x300?text=No+Image';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  <div
                    className="absolute top-4 right-4 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg backdrop-blur-sm"
                    style={{
                      background: dest.priceNum === 0 ? "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)" : "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                    }}
                  >
                    {dest.price}
                  </div>

                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1 rounded-full font-semibold text-xs shadow-lg capitalize">
                    {dest.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-1 tracking-wide">
                    {dest.name}
                  </h3>
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="font-medium">{dest.location}</span>
                  </div>

                  <Link href={`/wisata/${dest.id}`}>
                    <button className="w-full text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg flex items-center justify-center gap-2" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
                      Lihat Detail
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}

function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-6 md:px-12 py-16 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div
            className={`transition-all duration-1000 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform hover:scale-110 hover:rotate-6 transition-all duration-300">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18"
                  />
                </svg>
              </div>
              <h2 className="font-bold text-2xl text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                GoWisata
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Platform wisata terpercaya untuk petualangan tak terlupakan di
              seluruh Indonesia.
            </p>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z" />
                  <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-200 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="font-bold mb-4 text-white uppercase text-sm tracking-wider relative inline-block group">
              Layanan
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  Sewa Destinasi
                </span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  Halaman Bantu
                </span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  Panduan Wisata
                </span>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="font-bold mb-4 text-white uppercase text-sm tracking-wider relative inline-block group">
              Dukungan
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  Informasi Layanan
                </span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  Kontak Dukungan Pelanggan
                </span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">
                  →
                </span>
                <span className="group-hover:ml-5 transition-all duration-300">
                  FAQ
                </span>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-1000 delay-600 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
              }`}
          >
            <h3 className="font-bold mb-4 text-white uppercase text-sm tracking-wider relative inline-block group">
              Newsletter
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Dapatkan update destinasi wisata terbaru!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email kamu"
                className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-800 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 GoWisata. All rights reserved. Made with ❤ in Indonesia
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HasilPage() {
  const [mounted, setMounted] = useState(false);
  const [allDestinations, setAllDestinations] = useState([]);
  const searchParams = useSearchParams();

  // Load data from WisataData
  useEffect(() => {
    setAllDestinations(getWisataData());
  }, []);

  const initialFilters = {
    durasi: Math.max(1, Math.min(30, parseInt(searchParams.get("durasi")) || 2)),
    provinsi: searchParams.get("provinsi") || "Bali",
    orang: Math.max(1, Math.min(50, parseInt(searchParams.get("orang")) || 2)),
    budget: Math.max(0, Math.min(1000000000, parseInt(searchParams.get("budget")) || 5000000)),
    kategori: {
      budaya: searchParams.get("budaya") === "true",
      pantai: searchParams.get("pantai") === "true",
      alam: searchParams.get("alam") === "true",
    },
  };

  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    const params = new URLSearchParams({
      durasi: newFilters.durasi.toString(),
      provinsi: newFilters.provinsi,
      orang: newFilters.orang.toString(),
      budget: newFilters.budget.toString(),
      budaya: newFilters.kategori.budaya.toString(),
      pantai: newFilters.kategori.pantai.toString(),
      alam: newFilters.kategori.alam.toString(),
    });

    window.history.pushState({}, "", `?${params.toString()}`);
  };

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-gray-50 overflow-hidden font-['Inter',_'Poppins',_sans-serif]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80)" }} />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-50"></div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full opacity-10 blur-3xl animate-float" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", top: "10%", left: "5%", animationDelay: "0s" }} />
          <div className="absolute w-80 h-80 rounded-full opacity-10 blur-3xl animate-float" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", top: "30%", right: "10%", animationDelay: "2s" }} />
          <div className="absolute w-72 h-72 rounded-full opacity-10 blur-3xl animate-float" style={{ background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)", bottom: "20%", left: "40%", animationDelay: "4s" }} />
        </div>

        <div className="relative z-10 pt-32 px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className={`text-center mb-12 transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <h1 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">🎯 Destinasi Pilihan Anda</h1>
              <p className="text-xl text-gray-200 font-medium drop-shadow-lg">Temukan petualangan tak terlupakan di Indonesia</p>
            </div>

            <div className={`flex flex-col lg:flex-row gap-8 transition-all duration-1000 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
              <FilterSidebar initialFilters={initialFilters} onFilterChange={handleFilterChange} />
              <DestinationGrid filters={filters} allDestinations={allDestinations} />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap");

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}