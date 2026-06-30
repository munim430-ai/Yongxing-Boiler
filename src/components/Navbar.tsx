"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Products", href: "#products" },
    { label: "Why Yongxing", href: "#why" },
    { label: "Compliance", href: "#compliance" },
    { label: "After-Sales", href: "#aftersales" },
    { label: "Get Quote", href: "#quote" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#top" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Yongxing Boiler"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              unoptimized
            />
            <span className="hidden sm:block text-sm font-bold text-blue-900 leading-tight">
              Bangladesh<br />
              <span className="text-orange-500 font-semibold text-xs">Authorized Representative</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-gray-700 hover:text-orange-500 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.522 5.852L.057 23.428a.5.5 0 0 0 .606.63l5.674-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.895 9.895 0 0 1-5.031-1.37l-.36-.214-3.734.976.999-3.634-.235-.374A9.86 9.86 0 0 1 2.118 12c0-5.447 4.435-9.882 9.882-9.882 5.448 0 9.882 4.435 9.882 9.882 0 5.448-4.434 9.882-9.882 9.882z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 space-y-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm font-medium text-gray-700 hover:text-orange-500"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/8801941646278"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full w-fit"
          >
            WhatsApp Us
          </a>
        </div>
      )}
    </nav>
  );
}
