"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const SCROLL_THRESHOLD = 50;

export function ScrollNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    handleScroll(); // Check initial position
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-all duration-300 ${
        scrolled
          ? "bg-white/90 border-brand-blue/10"
          : "bg-transparent border-brand-blue/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="ภูสิท โปร"
              width={48}
              height={48}
              className="rounded-xl shadow-md"
            />
            <span
              className={`text-xl font-bold tracking-tight hidden sm:block transition-colors duration-300 ${
                scrolled ? "text-brand-navy" : "text-white"
              }`}
            >
              ภูสิท โปร
            </span>
          </div>
          <div
            className={`hidden md:flex items-center gap-8 font-body text-sm font-medium transition-colors duration-300 ${
              scrolled ? "text-brand-navy" : "text-white"
            }`}
          >
            <a
              href="#services"
              className="hover:text-brand-blue transition-colors"
            >
              บริการ
            </a>
            <a
              href="#why-us"
              className="hover:text-brand-blue transition-colors"
            >
              ทำไมต้องเรา
            </a>
            <a
              href="#contact"
              className="hover:text-brand-blue transition-colors"
            >
              ติดต่อ
            </a>
          </div>
          <a
            href="#contact"
            className="bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg hover:shadow-brand-blue/25 active:scale-95"
          >
            ติดต่อเรา
          </a>
        </div>
      </div>
    </nav>
  );
}
