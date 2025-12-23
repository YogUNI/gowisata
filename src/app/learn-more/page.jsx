"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Dataset Provinsi Indonesia (38 provinsi)
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
  if (number === "" || number === null || number === undefined) return "0";
  const num = Number(number);
  if (isNaN(num)) return "0";
  return new Intl.NumberFormat("id-ID").format(num);
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
        {/* Logo & Brand */}
        <div className="flex items-center gap-2 relative z-50">
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
          <h1 className="text-xl font-bold text-white">GoWisata</h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm text-white">
          <li className="hover:text-gray-200 transition-colors">
            <Link href="/" className="cursor-pointer">
              Beranda
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/hasil-page" className="cursor-pointer">
              Destinasi
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors border-b-2 border-white pb-1">
            Mulai Jelajah
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white z-50 relative p-2"
          aria-label="Toggle menu"
        >
          {/* Animated Hamburger Icon */}
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                isOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </nav>

      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 md:hidden shadow-2xl transform transition-transform duration-500 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors"
          aria-label="Close menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Menu Content */}
        <div className="flex flex-col justify-center h-full px-8 space-y-1">
          <a
            href="/"
            onClick={toggleMenu}
            className={`text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "100ms" : "0ms" }}
          >
            Beranda
          </a>
          <a
            href="/hasil-page"
            onClick={toggleMenu}
            className={`text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "200ms" : "0ms" }}
          >
            Destinasi
          </a>
          <a
            href=""
            onClick={toggleMenu}
            className={`text-white text-xl font-light py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all duration-300 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "300ms" : "0ms" }}
          >
            Mulai Jelajah
          </a>

          {/* Additional Info */}
          <div
            className={`pt-8 transition-all duration-300 ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
            style={{ transitionDelay: isOpen ? "400ms" : "0ms" }}
          >
            <p className="text-gray-400 text-sm mb-2">Ikuti Kami</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
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
                className="text-gray-400 hover:text-white transition-colors"
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
        </div>
      </div>
    </>
  );
}

function HeroFilterSection() {
  const [mounted, setMounted] = useState(false);
  const [kotaOpen, setKotaOpen] = useState(false);

  const [durasi, setDurasi] = useState(2);
  const [kota, setKota] = useState("Bali");
  const [searchKota, setSearchKota] = useState("");
  const [orang, setOrang] = useState(2);
  const [budget, setBudget] = useState(5000000);

  const [kategori, setKategori] = useState({
    budaya: true,
    pantai: true,
    alam: true,
  });

  // Helper function untuk format rupiah
  const formatRupiah = (angka) => {
    if (angka === "" || angka === null || angka === undefined) return "";
    return new Intl.NumberFormat("id-ID").format(angka);
  };

  const filteredKota = provincesData
    .filter((prov) =>
      prov.name.toLowerCase().includes(searchKota.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <section className="relative min-h-screen bg-cover bg-center overflow-hidden font-['Inter',_'Poppins',_sans-serif]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80)",
        }}
      />

      {/* Overlay Gelap */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Filter Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 py-24">
        <div
          className={`max-w-6xl w-full rounded-2xl shadow-2xl p-8 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{
            background: "rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(0px)",
            WebkitBackdropFilter: "blur(0px)",
            boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
          }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-white drop-shadow-2xl tracking-tight">
            Tentukan Opsi Liburan Sesuai Keinginanmu
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-sm mb-6">
            {/* Durasi Liburan */}
            <div className="relative">
              <div
                className="rounded-xl p-5 text-center hover:shadow-2xl transition-all duration-300 group h-[240px] flex flex-col justify-between overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  boxShadow: "0 10px 40px rgba(102, 126, 234, 0.4)",
                }}
              >
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <img
                    src="/images/waktu-liburan.png"
                    alt="Estimasi Budget"
                    className="w-14 h-14 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                  <p className="font-bold text-white text-lg tracking-wide">
                    Durasi Liburan
                  </p>

                  {/* Input dengan Increment/Decrement */}
                  <div className="flex items-center gap-3 mt-3">
                    {/* Tombol Minus */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (durasi > 1) {
                          setDurasi(durasi - 1);
                        }
                      }}
                      disabled={durasi <= 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                        durasi <= 1
                          ? "bg-white/20 text-white/40 cursor-not-allowed"
                          : "bg-white text-purple-600 hover:bg-purple-50 active:scale-95 shadow-md"
                      }`}
                      aria-label="Kurangi durasi"
                    >
                      <svg
                        className="w-5 h-5 font-bold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    </button>

                    {/* Input Field */}
                    <input
                      type="number"
                      value={durasi}
                      onChange={(e) => {
                        const value = e.target.value;

                        if (value === "") {
                          setDurasi("");
                          return;
                        }

                        const numValue = parseInt(value);

                        if (
                          !isNaN(numValue) &&
                          numValue >= 1 &&
                          numValue <= 30
                        ) {
                          setDurasi(numValue);
                        } else if (!isNaN(numValue) && numValue > 30) {
                          setDurasi(30);
                        }
                      }}
                      onBlur={() => {
                        if (durasi === "" || durasi < 1) {
                          setDurasi(1);
                        }
                      }}
                      min="1"
                      max="30"
                      className="w-20 text-center text-2xl font-bold text-purple-700 bg-white rounded-xl px-2 py-2 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    />

                    {/* Tombol Plus */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (durasi < 30) {
                          setDurasi(durasi + 1);
                        }
                      }}
                      disabled={durasi >= 30}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                        durasi >= 30
                          ? "bg-white/20 text-white/40 cursor-not-allowed"
                          : "bg-white text-purple-600 hover:bg-purple-50 active:scale-95 shadow-md"
                      }`}
                      aria-label="Tambah durasi"
                    >
                      <svg
                        className="w-5 h-5 font-bold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="text-sm text-white/90 mt-2 font-semibold tracking-wide">
                    hari
                  </p>
                </div>

                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Provinsi */}
            <div className="relative provinsi-dropdown">
              <div
                onClick={() => {
                  setKotaOpen(!kotaOpen);
                }}
                className="rounded-xl p-5 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer group h-[240px] flex flex-col justify-center overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  boxShadow: "0 10px 40px rgba(240, 147, 251, 0.4)",
                }}
              >
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <img
                    src="/images/Provinsi.png"
                    alt="Estimasi Budget"
                    className="w-14 h-14 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                  <p className="font-bold text-white text-lg tracking-wide">
                    Provinsi
                  </p>
                  <p className="mt-2 text-white font-bold text-lg truncate w-full px-2 bg-white/20 rounded-lg py-2 backdrop-blur-sm">
                    {kota}
                  </p>
                </div>

                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {kotaOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-2xl z-20 animate-fadeIn border-2 border-pink-300">
                  {/* Search Input */}
                  <div className="p-3 border-b border-gray-200 sticky top-0 bg-white rounded-t-xl">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Cari provinsi..."
                        value={searchKota}
                        onChange={(e) => setSearchKota(e.target.value)}
                        className="w-full px-3 py-2 pl-10 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200 text-sm text-gray-900 placeholder:text-gray-400 font-medium"
                        onClick={(e) => e.stopPropagation()}
                        autoFocus
                      />
                      <svg
                        className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-pink-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Scrollable List */}
                  <div className="max-h-64 overflow-y-auto">
                    {filteredKota.length > 0 ? (
                      filteredKota.map((prov) => (
                        <div
                          key={prov.id}
                          onClick={() => {
                            setKota(prov.name);
                            setKotaOpen(false);
                            setSearchKota("");
                          }}
                          className={`p-3 hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 cursor-pointer transition-all duration-200 border-b border-gray-100 last:border-b-0 ${
                            kota === prov.name
                              ? "bg-gradient-to-r from-pink-100 to-purple-100 font-bold text-pink-700"
                              : "text-gray-700 font-medium"
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-sm">{prov.name}</span>
                            <span className="text-xs text-gray-500">
                              {prov.capital}
                            </span>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="p-4 text-center text-gray-500 text-sm font-medium">
                        Provinsi tidak ditemukan
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Jumlah Orang */}
            <div className="relative">
              <div
                className="rounded-xl p-5 text-center hover:shadow-2xl transition-all duration-300 group h-[240px] flex flex-col justify-between overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  boxShadow: "0 10px 40px rgba(79, 172, 254, 0.4)",
                }}
              >
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <img
                    src="/images/jumlah-orang.png"
                    alt="Estimasi Budget"
                    className="w-14 h-14 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                  <p className="font-bold text-white text-lg tracking-wide">
                    Jumlah Orang
                  </p>

                  {/* Input dengan Increment/Decrement */}
                  <div className="flex items-center gap-3 mt-3">
                    {/* Tombol Minus */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (orang > 1) {
                          setOrang(orang - 1);
                        }
                      }}
                      disabled={orang <= 1}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                        orang <= 1
                          ? "bg-white/20 text-white/40 cursor-not-allowed"
                          : "bg-white text-cyan-600 hover:bg-cyan-50 active:scale-95 shadow-md"
                      }`}
                      aria-label="Kurangi jumlah orang"
                    >
                      <svg
                        className="w-5 h-5 font-bold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M20 12H4"
                        />
                      </svg>
                    </button>

                    {/* Input Field */}
                    <input
                      type="number"
                      value={orang}
                      onChange={(e) => {
                        const value = e.target.value;

                        if (value === "") {
                          setOrang("");
                          return;
                        }

                        const numValue = parseInt(value);

                        if (
                          !isNaN(numValue) &&
                          numValue >= 1 &&
                          numValue <= 50
                        ) {
                          setOrang(numValue);
                        } else if (!isNaN(numValue) && numValue > 50) {
                          setOrang(50);
                        }
                      }}
                      onBlur={() => {
                        if (orang === "" || orang < 1) {
                          setOrang(1);
                        }
                      }}
                      min="1"
                      max="50"
                      className="w-20 text-center text-2xl font-bold text-cyan-700 bg-white rounded-xl px-2 py-2 focus:outline-none focus:ring-4 focus:ring-white/50 transition-all duration-200 shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    />

                    {/* Tombol Plus */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (orang < 50) {
                          setOrang(orang + 1);
                        }
                      }}
                      disabled={orang >= 50}
                      className={`w-10 h-10 flex items-center justify-center rounded-full transition-all duration-200 ${
                        orang >= 50
                          ? "bg-white/20 text-white/40 cursor-not-allowed"
                          : "bg-white text-cyan-600 hover:bg-cyan-50 active:scale-95 shadow-md"
                      }`}
                      aria-label="Tambah jumlah orang"
                    >
                      <svg
                        className="w-5 h-5 font-bold"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={3}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </div>

                  <p className="text-sm text-white/90 mt-2 font-semibold tracking-wide">
                    orang
                  </p>
                </div>

                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Estimasi Budget */}
            <div className="relative">
              <div
                className="rounded-xl p-5 text-center hover:shadow-2xl transition-all duration-300 group h-[240px] flex flex-col justify-between overflow-hidden relative"
                style={{
                  background:
                    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  boxShadow: "0 10px 40px rgba(250, 112, 154, 0.4)",
                }}
              >
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <img
                    src="/images/estimasi-budget.png"
                    alt="Estimasi Budget"
                    className="w-14 h-14 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                  />
                  <p className="font-bold text-white text-lg tracking-wide">
                    Estimasi Budget
                  </p>

                  {/* Input Rupiah */}
                  <div className="flex flex-col items-center gap-2 mt-1 w-full px-2">
                    <div className="flex items-center gap-1 bg-white rounded-xl px-3 py-2 shadow-lg">
                      <span className="text-orange-600 font-bold text-base">
                        Rp
                      </span>

                      <input
                        type="text"
                        inputMode="numeric"
                        value={formatRupiah(budget)}
                        onChange={(e) => {
                          const rawValue = e.target.value.replace(/\D/g, "");

                          if (rawValue === "") {
                            setBudget("");
                            return;
                          }

                          const numericValue = parseInt(rawValue);

                          if (
                            !isNaN(numericValue) &&
                            numericValue <= 1000000000
                          ) {
                            setBudget(numericValue);
                          }
                        }}
                        onBlur={() => {
                          if (budget === "" || budget < 0) {
                            setBudget(0);
                          }
                        }}
                        placeholder="0"
                        className="flex-1 text-center text-base font-bold text-orange-700 bg-transparent focus:outline-none"
                      />
                    </div>

                    <p className="text-xs text-white/95 text-center leading-tight px-1 font-semibold">
                      Min Rp 100K • Max Rp 1M
                    </p>
                  </div>
                </div>

                {/* Gradient Overlay Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Pilih Kategori */}
            <div
              className="rounded-xl p-5 hover:shadow-2xl transition-all duration-300 h-[240px] flex flex-col overflow-hidden relative group"
              style={{
                background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                boxShadow: "0 10px 40px rgba(168, 237, 234, 0.4)",
              }}
            >
              <p className="font-bold mb-3 text-gray-800 text-center text-lg tracking-wide relative z-10">
                Pilih Kategori Wisata
              </p>
              <div className="space-y-3 flex-1 flex flex-col justify-center relative z-10">
                {Object.keys(kategori).map((key) => (
                  <label
                    key={key}
                    className="flex items-center gap-3 cursor-pointer hover:bg-white/40 p-2 rounded-lg transition-all duration-200 group/item backdrop-blur-sm"
                  >
                    <input
                      type="checkbox"
                      checked={kategori[key]}
                      onChange={() =>
                        setKategori({ ...kategori, [key]: !kategori[key] })
                      }
                      className="w-5 h-5 accent-teal-600 cursor-pointer"
                    />
                    <span className="text-gray-800 capitalize group-hover/item:text-teal-700 transition-colors duration-200 font-bold text-sm tracking-wide">
                      ✓ {key}
                    </span>
                  </label>
                ))}
              </div>

              {/* Gradient Overlay Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* TOMBOL LIHAT HASIL - INI YANG PENTING! */}
          <div className="text-right">
            <Link
              href={`/hasil-page?durasi=${durasi || 2}&provinsi=${kota}&orang=${orang || 2}&budget=${budget || 100000}&budaya=${kategori.budaya}&pantai=${kategori.pantai}&alam=${kategori.alam}`}
              className="inline-block"
            >
              <button className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-xl transition-all duration-300 font-bold text-lg shadow-2xl hover:shadow-blue-500/50 hover:scale-105 overflow-hidden">
                <span className="relative z-10 tracking-wide">
                  Lihat Hasil ✨
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap");

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

        /* Hide number input arrows */
        input[type="number"]::-webkit-inner-spin-button,
        input[type="number"]::-webkit-outer-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
        input[type="number"] {
          -moz-appearance: textfield;
        }
      `}</style>
    </section>
  );
}

function PopularPlaces() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const popularPlaces = [
    {
      name: "Pura Tanah Lot",
      price: "Rp 20.000",
      location: "Tabanan, Bali",
      image: "/images/pura-tanah-lot.jpg",
    },
    {
      name: "Kebun Raya Bedugul",
      price: "Rp 20.000",
      location: "Bedugul, Bali",
      image: "/images/kebun-raya-bedugul.png",
    },
    {
      name: "Tegalalang Rice Terrace",
      price: "Rp 15.000",
      location: "Ubud, Bali",
      image:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=500&h=400&fit=crop&q=80",
    },
    {
      name: "Monkey Forest Ubud",
      price: "Rp 80.000",
      location: "Ubud, Bali",
      image: "/images/monkey-forest.jpg",
    },
    {
      name: "Pantai Kuta",
      price: "Gratis",
      location: "Kuta, Bali",
      image: "/images/pantai-kuta.png",
    },
    {
      name: "Pura Uluwatu",
      price: "Rp 30.000",
      location: "Uluwatu, Bali",
      image:
        "https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?w=500&h=400&fit=crop&q=80",
    },
    {
      name: "Pantai Nusa Dua",
      price: "Gratis",
      location: "Nusa Dua, Bali",
      image:
        "https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=500&h=400&fit=crop&q=80",
    },
    {
      name: "Gunung Batur Sunrise",
      price: "Rp 250.000",
      location: "Kintamani, Bali",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=400&fit=crop&q=80",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 320,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto overflow-hidden relative font-['Inter',_'Poppins',_sans-serif]"
    >
      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            top: "10%",
            left: "-5%",
            animationDelay: "0s",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            top: "50%",
            right: "-10%",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute w-64 h-64 rounded-full opacity-20 blur-3xl animate-float"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            bottom: "10%",
            left: "30%",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12">
        <h3
          className={`font-black text-4xl md:text-5xl mb-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 tracking-tight ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          🏝️ Tempat Wisata Populer
        </h3>
        <p
          className={`text-gray-600 text-lg font-medium transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Destinasi favorit yang wajib kamu kunjungi
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{
            transitionDelay: "300ms",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-hide transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {popularPlaces.map((place, i) => (
            <div
              key={i}
              className="min-w-[300px] rounded-2xl overflow-hidden snap-start group cursor-pointer transform hover:scale-105 transition-all duration-500 relative"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                boxShadow: "0 10px 40px rgba(102, 126, 234, 0.3)",
              }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-purple-700 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  {place.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 bg-white">
                <h4 className="font-bold text-xl mb-2 text-gray-900 group-hover:text-purple-600 transition-colors duration-300 tracking-wide">
                  {place.name}
                </h4>
                <div className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="font-medium">{place.location}</span>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  }}
                >
                  Lihat Detail →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{
            transitionDelay: "300ms",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
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

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}

function Articles() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const articles = [
    {
      title: "Panduan Lengkap Liburan ke Bali 2025: Tips & Trik",
      image:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=700&h=500&fit=crop&q=80",
      date: "20 Des 2024",
      category: "Travel Guide",
      readTime: "5 min",
    },
    {
      title: "10 Destinasi Tersembunyi di Bali yang Jarang Dikunjungi",
      image:
        "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=700&h=500&fit=crop&q=80",
      date: "18 Des 2024",
      category: "Destination",
      readTime: "7 min",
    },
    {
      title: "Kuliner Bali: 15 Makanan Khas yang Wajib Dicoba",
      image:
        "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&h=500&fit=crop&q=80",
      date: "15 Des 2024",
      category: "Culinary",
      readTime: "6 min",
    },
    {
      title: "Tips Traveling Hemat Tanpa Mengurangi Keseruan",
      image:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&h=500&fit=crop&q=80",
      date: "12 Des 2024",
      category: "Tips",
      readTime: "4 min",
    },
    {
      title: "Pantai Terbaik di Bali untuk Surfing dan Snorkeling",
      image:
        "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=700&h=500&fit=crop&q=80",
      date: "10 Des 2024",
      category: "Beach",
      readTime: "8 min",
    },
    {
      title: "Budaya dan Tradisi Bali yang Perlu Kamu Ketahui",
      image:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=700&h=500&fit=crop&q=80",
      date: "8 Des 2024",
      category: "Culture",
      readTime: "6 min",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -420,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 420,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 max-w-7xl mx-auto overflow-hidden relative font-['Inter',_'Poppins',_sans-serif]"
    >
      {/* Animated Floating Shapes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl animate-float-reverse"
          style={{
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
            top: "20%",
            right: "-5%",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-72 h-72 rounded-full opacity-20 blur-3xl animate-float-reverse"
          style={{
            background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
            bottom: "20%",
            left: "-8%",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-float-reverse"
          style={{
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            top: "40%",
            left: "40%",
            animationDelay: "5s",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative z-10 mb-12">
        <h3
          className={`font-black text-4xl md:text-5xl mb-3 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent transition-all duration-1000 tracking-tight ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          📰 Artikel & Berita
        </h3>
        <p
          className={`text-gray-600 text-lg font-medium transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Temukan tips, panduan, dan inspirasi perjalanan terbaru
        </p>
      </div>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
          style={{
            transitionDelay: "300ms",
            background: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
          }}
          aria-label="Scroll left"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Scroll Container */}
        <div
          ref={scrollContainerRef}
          className={`flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-hide transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {articles.map((article, i) => (
            <div
              key={i}
              className="min-w-[400px] bg-white rounded-2xl overflow-hidden snap-start group cursor-pointer transform hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Category Badge */}
                <div
                  className="absolute top-4 left-4 text-white px-4 py-1.5 rounded-full font-bold text-xs shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  }}
                >
                  {article.category}
                </div>

                {/* Read Time Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-gray-800 px-3 py-1.5 rounded-full font-semibold text-xs shadow-lg flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {article.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h4 className="font-bold text-xl mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2 leading-tight tracking-wide">
                  {article.title}
                </h4>

                {/* Date */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="font-medium">{article.date}</span>
                </div>

                {/* CTA Button */}
                <button
                  className="w-full text-white font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  }}
                >
                  Baca Selengkapnya
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
          style={{
            transitionDelay: "300ms",
            background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
          }}
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      <style jsx>{`
        @keyframes float-reverse {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        .animate-float-reverse {
          animation: float-reverse 7s ease-in-out infinite;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
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
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Brand */}
          <div
            className={`transition-all duration-1000 ${
              isVisible
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

            {/* Social Media Icons */}
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

          {/* Layanan */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
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

          {/* Dukungan */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
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

          {/* Newsletter */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible
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

        {/* Bottom Copyright */}
        <div
          className={`mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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

export default function LearnMorePage() {
  return (
    <>
      <Navbar />
      <HeroFilterSection />
      <PopularPlaces />
      <Articles />
      <Footer />
    </>
  );
}
