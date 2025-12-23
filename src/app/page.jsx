"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

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
          <li className="cursor-pointer hover:text-gray-200 transition-colors border-b-2 border-white pb-1">
            <Link href="/" className="cursor-pointer">
              Beranda
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/hasil-page" className="cursor-pointer">
              Destinasi
            </Link>
          </li>
          <li className="cursor-pointer hover:text-gray-200 transition-colors">
            <Link href="/learn-more" className="cursor-pointer">
              Mulai Jelajah
            </Link>
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
            href="/learn-more"
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

function Hero() {
  return (
    <section className="relative h-screen bg-cover bg-center overflow-hidden">
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

      {/* Navbar */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-6">
        <span className="text-xs md:text-sm tracking-[0.3em] mb-3 font-light opacity-90">
          VISIT
        </span>
        <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-wide">
          Go <span className="font-semibold">Wisata</span>
        </h1>
        <p className="max-w-2xl text-sm md:text-base leading-relaxed opacity-90 font-light">
          Jelajahi destinasi wisata alam terbaik dari Sabang sampai Merauke
          dengan mudah dan cepat.
        </p>
      </div>
    </section>
  );
}

function WhyGoWisata() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div
          className={`order-2 md:order-1 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-20"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 leading-tight">
            Kenapa Harus <span className="text-blue-500">GoWisata</span>?
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            GoWisata platform terpercaya untuk wisatawan yang ingin menjelajahi
            keindahan alam Indonesia dengan mudah, aman, dan tanpa ribet.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Go Wisata menawarkan pilihan paket lengkap dari perjalanan cepat,
            dikurasi oleh tim profesional yang siap membantu membuat pengalaman
            liburan lebih menyenangkan.
          </p>

          <Link href="/learn-more">
            <button className="group relative bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-md transition-all duration-300 font-medium shadow-md hover:shadow-xl hover:scale-105 overflow-hidden">
              <span className="relative z-10">Mulai Jelajah</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>
          </Link>
        </div>

        {/* Image */}
        <div
          className={`order-1 md:order-2 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          }`}
        >
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=800&q=80"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              alt="Wisata perahu di danau"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end p-6">
              <p className="text-white font-medium">
                Jelajahi Keindahan Alam Indonesia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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

  return (
    <section
      id="visi-misi"
      ref={sectionRef}
      className="py-16 md:py-24 px-6 md:px-12 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Tentang <span className="text-blue-500">GoWisata</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Visi */}
          <div
            className={`group text-center md:text-left transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative">
              <h3 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                Visi
              </h3>
              {/* Decorative line */}
              <div className="absolute -bottom-2 left-0 md:left-0 w-20 h-1 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-8 group-hover:text-gray-900 transition-colors duration-300">
              Menjadi platform wisata alam nomor satu di Indonesia yang
              menghubungkan jutaan traveler dengan keindahan alam Nusantara,
              sambil mendorong pariwisata berkelanjutan dan pelestarian
              lingkungan.
            </p>
          </div>

          {/* Misi */}
          <div
            className={`group text-center md:text-left transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            }`}
          >
            <div className="relative">
              <h3 className="text-6xl md:text-7xl font-bold mb-6 text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                Misi
              </h3>
              {/* Decorative line */}
              <div className="absolute -bottom-2 left-0 md:left-0 w-20 h-1 bg-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-base md:text-lg mt-8 group-hover:text-gray-900 transition-colors duration-300">
              Memberikan informasi wisata yang akurat dan terpercaya. Memudahkan
              perencanaan perjalanan alam. Mempromosikan destinasi lokal yang
              belum terjamah. Mendukung pariwisata berkelanjutan dan ramah
              lingkungan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Steps() {
  const [visibleSteps, setVisibleSteps] = useState([]);
  const stepRefs = useRef([]);

  const steps = [
    {
      number: "01",
      text: "Tentukan durasi liburan.",
      image:
        "/images/tentukan-destinasi-liburan.png",
      color: "bg-blue-400",
    },
    {
      number: "02",
      text: "Tentukan jumlah orang yang kamu ajak.",
      image:
        "/images/tentukan-jumlah-banyak-orang.png",
      color: "bg-purple-300",
    },
    {
      number: "03",
      text: "Tentukan estimasi budget kamu.",
      image:
        "https://images.unsplash.com/photo-1551244072-5d12893278ab?w=400&q=80",
      color: "bg-purple-200",
    },
    {
      number: "04",
      text: "Pilih kategori liburan yang kamu mau.",
      image:
        "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=400&q=80",
      color: "bg-yellow-200",
    },
    {
      number: "05",
      text: "Go Wisata Akan Merekomendasikan Kamu Tempat Terkeren!",
      image: null,
      color: "bg-orange-200",
    },
  ];

  useEffect(() => {
    const observers = stepRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSteps((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        },
        { threshold: 0.2 }
      );

      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="py-16 md:py-24 px-6 md:px-12 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
          Mudah <span className="text-blue-500">digunakan</span>
        </h2>

        <div className="space-y-16">
          {steps.map((step, i) => {
            const isEven = i % 2 === 0;
            const isVisible = visibleSteps.includes(i);

            return (
              <div
                key={i}
                ref={(el) => (stepRefs.current[i] = el)}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {step.image && (
                  <div
                    className={`w-full md:w-1/3 transition-all duration-1000 ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-lg shadow-lg">
                      <img
                        src={step.image}
                        alt={`Step ${step.number}`}
                        className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                )}

                <div
                  className={`flex items-center gap-6 ${
                    step.image ? "w-full md:w-2/3" : "w-full justify-center"
                  } transition-all duration-1000 delay-200 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <div
                    className={`${step.color} w-24 h-24 rounded-lg flex items-center justify-center flex-shrink-0 shadow-md hover:shadow-xl transform hover:scale-110 hover:rotate-3 transition-all duration-300 cursor-pointer`}
                  >
                    <span className="text-5xl font-bold text-white opacity-40">
                      {step.number}
                    </span>
                  </div>

                  <p className="text-gray-800 text-lg md:text-xl font-medium hover:text-blue-500 transition-colors duration-300">
                    {step.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Logo & Brand */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
              Platform wisata terpercaya untuk petualangan tak terlupakan di seluruh Indonesia.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mt-6">
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Layanan */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-bold mb-4 text-white uppercase text-sm tracking-wider relative inline-block group">
              Layanan
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">Paket Wisata</span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">Hubungi Kami</span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">Panduan Wisata</span>
              </li>
            </ul>
          </div>

          {/* Dukungan */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="font-bold mb-4 text-white uppercase text-sm tracking-wider relative inline-block group">
              Dukungan
              <span className="absolute -bottom-1 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
            </h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">Syarat & Ketentuan</span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">Kebijakan Privasi</span>
              </li>
              <li className="cursor-pointer hover:text-blue-400 hover:pl-3 transition-all duration-300 relative group flex items-center">
                <span className="absolute left-0 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400">→</span>
                <span className="group-hover:ml-5 transition-all duration-300">FAQ</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
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
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Terms</a>
            <a href="#" className="hover:text-blue-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <WhyGoWisata />
      <About />
      <Steps />
      <Footer />
    </>
  );
}
