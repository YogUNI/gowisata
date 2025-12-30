"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getWisataById } from "@/lib/data/WisataData";

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
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/hasil-page">Destinasi</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/learn-more">Mulai Jelajah</Link>
          </li>
        </ul>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative p-2">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block h-0.5 w-full bg-white transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
          </div>
        </button>
      </nav>

      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />

      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 md:hidden transform transition-transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col justify-center h-full px-8 space-y-1">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-white text-xl py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all">Beranda</Link>
          <Link href="/hasil-page" onClick={() => setIsOpen(false)} className="text-white text-xl py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all">Destinasi</Link>
          <Link href="/learn-more" onClick={() => setIsOpen(false)} className="text-white text-xl py-4 border-b border-gray-700 hover:text-blue-400 hover:pl-2 transition-all">Mulai Jelajah</Link>
        </div>
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
                </svg>
              </div>
              <h2 className="font-bold text-2xl text-white">GoWisata</h2>
            </div>
            <p className="text-gray-400 text-sm">Platform wisata terpercaya untuk petualangan tak terlupakan di seluruh Indonesia.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-sm">Layanan</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Sewa Destinasi</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Halaman Bantu</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Panduan Wisata</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-sm">Dukungan</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Informasi Layanan</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">Kontak Dukungan</li>
              <li className="hover:text-blue-400 transition-colors cursor-pointer">FAQ</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-white uppercase text-sm">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Dapatkan update destinasi wisata terbaru!</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Email kamu" className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400" />
              <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2024 GoWisata. All rights reserved. Made with ❤ in Indonesia</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function WisataDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [wisata, setWisata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const id = parseInt(params.id);
    const data = getWisataById(id);
    
    if (!data) {
      router.push('/hasil-page');
      return;
    }
    
    setWisata(data);
    setLoading(false);
  }, [params.id, router]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (!wisata) return null;

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={wisata.image} 
            alt={wisata.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
        </div>

        <div className="relative z-10 h-full flex items-end pb-16 px-6 md:px-12">
          <div className={`max-w-7xl mx-auto w-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="mb-4">
              <Link href="/hasil-page" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Kembali ke Destinasi
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold capitalize">
                {wisata.category}
              </span>
              <span className="px-4 py-2 bg-blue-500/20 backdrop-blur-sm text-blue-200 rounded-full text-sm font-semibold">
                {wisata.province}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-2xl">
              {wisata.name}
            </h1>

            <div className="flex items-center gap-6 text-white/90 text-lg">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="font-semibold">{wisata.location}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-bold text-xl">{wisata.price}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detail Content */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className={`bg-white rounded-2xl shadow-xl p-8 mb-8 transition-all duration-1000 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-blue-500">
                  Tentang Destinasi
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <strong>{wisata.name}</strong> adalah salah satu destinasi wisata unggulan di {wisata.location}, {wisata.province}. 
                    Tempat ini menawarkan pengalaman wisata {wisata.category} yang tak terlupakan dengan keindahan alam dan budaya yang memukau.
                  </p>
                  <p className="mb-4">
                    Dengan harga tiket masuk sebesar <strong>{wisata.price}</strong> per orang, Anda dapat menikmati berbagai fasilitas dan pemandangan yang ditawarkan. 
                    Destinasi ini sangat cocok untuk liburan keluarga, pasangan, maupun solo traveler yang ingin menjelajahi keindahan Indonesia.
                  </p>
                  <p>
                    Lokasinya yang strategis di {wisata.location} membuat destinasi ini mudah diakses dari berbagai arah. 
                    Jangan lewatkan kesempatan untuk mengunjungi salah satu permata wisata {wisata.province}!
                  </p>
                </div>
              </div>

              {/* Facilities */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fasilitas</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z", label: "Area Parkir" },
                    { icon: "M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z", label: "Toilet" },
                    { icon: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z", label: "Kantin" },
                    { icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6", label: "Mushola" },
                    { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", label: "Keamanan" },
                    { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", label: "WiFi Gratis" },
                  ].map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group">
                      <svg className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={facility.icon} />
                      </svg>
                      <span className="text-gray-700 font-medium text-sm">{facility.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Info Card */}
              <div className={`bg-white rounded-2xl shadow-xl p-8 mb-6 sticky top-6 transition-all duration-1000 delay-400 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informasi Wisata</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Harga Tiket</p>
                      <p className="text-lg font-bold text-gray-900">{wisata.price}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Lokasi</p>
                      <p className="font-semibold text-gray-900">{wisata.location}</p>
                      <p className="text-sm text-gray-600">{wisata.province}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 pb-4 border-b border-gray-100">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Kategori</p>
                      <p className="font-semibold text-gray-900 capitalize">{wisata.category}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="text-sm text-gray-500">Jam Operasional</p>
                      <p className="font-semibold text-gray-900">08:00 - 17:00 WIB</p>
                      <p className="text-sm text-gray-600">Setiap hari</p>
                    </div>
                  </div>
                </div>

                <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Booking Sekarang
                </button>

                <div className="mt-4 text-center">
                  <a href={`https://www.google.com/maps/search/${encodeURIComponent(wisata.name + ' ' + wisata.location)}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    Lihat di Google Maps
                  </a>
                </div>
              </div>

              {/* Share Card */}
              <div className={`bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl p-6 text-white transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <h3 className="text-lg font-bold mb-4">Bagikan Destinasi</h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="flex-1 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-all flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10