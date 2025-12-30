"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { getWisataById } from "@/lib/data/WisataData";

export default function DetailWisataPage() {
  const params = useParams();
  const router = useRouter();
  const [wisata, setWisata] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const id = parseInt(params.id);
    const data = getWisataById(id);

    if (!data) {
      router.push("/hasil-page");
      return;
    }

    setWisata(data);
    setLoading(false);
  }, [params.id, router]);

  // Auto-slide effect
useEffect(() => {
  if (!wisata || !hasGallery || !isAutoPlaying) return;

  const interval = setInterval(() => {
    setCurrentImageIndex((prev) => (prev + 1) % wisata.gallery.length);
  }, 5000); // 5 detik

  return () => clearInterval(interval);
}, [wisata, hasGallery, isAutoPlaying]);

  // Mobile menu control
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

  // Gallery navigation
  const nextImage = () => {
    if (wisata?.gallery && wisata.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev + 1) % wisata.gallery.length);
    }
  };

  const prevImage = () => {
    if (wisata?.gallery && wisata.gallery.length > 0) {
      setCurrentImageIndex((prev) => (prev - 1 + wisata.gallery.length) % wisata.gallery.length);
    }
  };

  // Generate Google Maps embed URL
  const getMapUrl = () => {
    const query = encodeURIComponent(`${wisata?.name} ${wisata?.location} ${wisata?.province}`);
    return `https://maps.google.com/maps?q=${query}&output=embed`;
  };

  // Extract YouTube video ID
  const getYouTubeId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-white mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (!wisata) return null;

  const hasGallery = wisata.gallery && wisata.gallery.length > 1;
  const displayImage = hasGallery ? wisata.gallery[currentImageIndex] : (wisata.image || '');
  const videoId = getYouTubeId(wisata.videoUrl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 font-['Inter',_'Poppins',_sans-serif]">
      {/* NAVBAR - Glass Effect */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 relative z-50">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
              </svg>
              <span className="text-xl font-bold text-white">GoWisata</span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex gap-8 text-sm text-white">
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/">Beranda</Link>
              </li>
              <li className="hover:text-gray-200 transition-colors border-b-2 border-white pb-1">
                <Link href="/hasil-page">Destinasi</Link>
              </li>
              <li className="hover:text-gray-200 transition-colors">
                <Link href="/learn-more">Mulai Jelajah</Link>
              </li>
            </ul>

            {/* Mobile Hamburger */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white z-50 relative p-2">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "opacity-0" : ""}`}></span>
                <span className={`block h-0.5 w-full bg-white transition-all duration-300 ease-out ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-all duration-300 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`} onClick={() => setIsOpen(false)} />

      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-72 bg-gradient-to-br from-gray-900 via-gray-800 to-black z-50 md:hidden shadow-2xl transform transition-transform duration-500 ease-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors">
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

      {/* HERO IMAGE / GALLERY */}
      <div className="relative h-[600px] overflow-hidden mt-16">
        <img
          src={displayImage || 'https://via.placeholder.com/1200x600/667eea/ffffff?text=' + encodeURIComponent(wisata.name)}
          alt={wisata.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/1200x600/667eea/ffffff?text=' + encodeURIComponent(wisata.name);
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

        {/* Gallery Controls */}
        {hasGallery && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/40 transition-all transform hover:scale-110"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex gap-2">
              {wisata.gallery.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === currentImageIndex ? 'bg-white w-10' : 'bg-white/50 w-2'}`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full capitalize font-bold text-sm shadow-lg">
                {wisata.category}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-md rounded-full font-bold text-sm shadow-lg">
                {wisata.price}
              </span>
              {wisata.htmLokal && (
                <span className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 backdrop-blur-md rounded-full font-bold text-sm shadow-lg">
                  Lokal: {wisata.htmLokal}
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 drop-shadow-2xl">{wisata.name}</h1>
            <div className="flex items-center gap-3 text-lg md:text-xl">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="drop-shadow-lg">{wisata.location}, {wisata.province}</span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 py-12 relative">
        {/* Floating Background Effects */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute w-96 h-96 rounded-full opacity-5 blur-3xl" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)", top: "10%", left: "5%" }} />
          <div className="absolute w-80 h-80 rounded-full opacity-5 blur-3xl" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", top: "40%", right: "10%" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">

          {/* MAIN CONTENT */}
          <div className="lg:col-span-2 space-y-6">

            {/* DESKRIPSI */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-purple-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Tentang Destinasi</h2>
              </div>

              <div className="text-gray-200 leading-relaxed text-lg">
                {wisata.description ? (
                  <p>{wisata.description}</p>
                ) : (
                  <p>
                    {wisata.name} adalah destinasi wisata {wisata.category} yang terletak di {wisata.location}, {wisata.province}.
                    Tempat ini menawarkan pengalaman tak terlupakan dengan keindahan alam dan suasana yang mempesona.
                  </p>
                )}
              </div>
            </div>

            {/* VIDEO */}
            {videoId && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-red-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Video Tour</h2>
                </div>
                <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            )}

            {/* INFORMASI PENTING */}
            {(wisata.jamOperasional || wisata.htmLokal || wisata.htmTuris) && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-blue-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Informasi Penting</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wisata.jamOperasional && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold text-white">Jam Operasional</span>
                      </div>
                      <p className="text-gray-300 ml-8">{wisata.jamOperasional}</p>
                    </div>
                  )}

                  {wisata.htmLokal && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-bold text-white">HTM Lokal</span>
                      </div>
                      <p className="text-gray-300 ml-8">{wisata.htmLokal}</p>
                    </div>
                  )}

                  {wisata.htmTuris && (
                    <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
                      <div className="flex items-center gap-3 mb-2">
                        <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-bold text-white">HTM Turis</span>
                      </div>
                      <p className="text-gray-300 ml-8">{wisata.htmTuris}</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* FASILITAS */}
            {wisata.fasilitas && wisata.fasilitas.length > 0 && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-green-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Fasilitas</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {wisata.fasilitas.map((facility, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-200 text-sm">{facility}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AKTIVITAS */}
            {wisata.aktivitas && wisata.aktivitas.length > 0 && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-orange-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Aktivitas</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {wisata.aktivitas.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-orange-500/10 to-orange-600/10 border border-orange-500/20 rounded-lg hover:from-orange-500/20 hover:to-orange-600/20 transition-all">
                      <span className="text-2xl">🎯</span>
                      <span className="text-gray-200 font-medium">{activity}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TIPS */}
            {wisata.tips && (
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border-2 border-yellow-500/30 hover:shadow-yellow-500/30 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">💡 Tips Berkunjung</h2>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">{wisata.tips}</p>
              </div>
            )}

            {/* GOOGLE MAPS */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-red-500/20 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-red-500 to-red-600 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-white">Lokasi</h2>
              </div>

              <div className="aspect-video rounded-xl overflow-hidden shadow-lg">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={getMapUrl()}
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              <p className="text-sm text-gray-300 mt-4 text-center flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {wisata.location}, {wisata.province}
              </p>
            </div>

            {/* HOTEL TERDEKAT */}
            {wisata.hotelTerdekat && wisata.hotelTerdekat.length > 0 && (
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-white/20 hover:shadow-indigo-500/20 transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-white">Hotel Terdekat</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {wisata.hotelTerdekat.map((hotel, index) => (
                    <div key={index} className="bg-white/5 border-2 border-white/10 rounded-xl p-5 hover:border-indigo-400/50 hover:bg-white/10 transition-all">
                      <h3 className="font-bold text-xl text-white mb-3">{hotel.nama}</h3>
                      <div className="space-y-2 text-sm text-gray-300">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          <span>{hotel.jarak} dari lokasi</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="font-bold text-indigo-300">{hotel.harga}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-400">⭐</span>
                          <span className="font-bold text-yellow-300">{hotel.rating}/5</span>
                        </div>
                      </div>
                      {hotel.link && (
                        <a
                          href={hotel.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 block w-full text-center bg-gradient-to-r from-indigo-600 to-indigo-700 text-white py-2.5 rounded-lg hover:from-indigo-700 hover:to-indigo-800 transition-all font-semibold"
                        >
                          Lihat Hotel
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* SIDEBAR */}
          <div className="space-y-6">

            {/* QUICK INFO CARD */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/20 sticky top-24">
              <h3 className="text-xl font-bold mb-4 text-white">Info Singkat</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-gray-300 flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    Kategori
                  </span>
                  <span className="font-bold capitalize text-purple-400">{wisata.category}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-gray-300 flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    Lokasi
                  </span>
                  <span className="font-bold text-white">{wisata.location}</span>
                </div>

                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-gray-300 flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    Provinsi
                  </span>
                  <span className="font-bold text-white">{wisata.province}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-300 flex items-center gap-2 text-sm">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Harga
                  </span>
                  <span className="font-bold text-purple-400 text-lg">{wisata.price}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Hubungi Guide
                </button>

                <button className="w-full bg-white/10 border-2 border-white/30 text-white font-bold py-3 rounded-xl hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Bagikan
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white px-6 md:px-12 py-16 overflow-hidden border-t border-white/10 mt-12">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3l3.057-3L20 16l-3.057 3L5 3z M15 11l4 4M3 21h18" />
            </svg>
            <h3 className="text-2xl font-bold">GoWisata</h3>
          </div>
          <p className="text-gray-400 mb-6">Jelajahi keindahan Indonesia bersama kami</p>
          <p className="text-gray-500 text-sm">© 2024 GoWisata. All rights reserved. Made with ❤ in Indonesia</p>
        </div>
      </footer>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap");
      `}</style>
    </div>
  );
}