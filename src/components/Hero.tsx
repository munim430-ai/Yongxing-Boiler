"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-center pt-16 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #1d4ed8 100%)" }}
    >
      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div className="fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse flex-shrink-0" />
              <span className="text-orange-300 text-sm font-semibold">
                Bangladesh&apos;s Smartest Boiler Choice
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              Yongxing Boiler
              <span className="block text-orange-400 mt-1">Smart Choice for</span>
              <span className="block">Bangladesh Industry</span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              <span className="text-yellow-300 font-bold">20–30% Below Premium Brands.</span>{" "}
              ISO Certified. Exported to 50+ Countries. Complete Bangladesh Registration Docs Included.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#calculator"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all shadow-lg shadow-orange-500/30 pulse-border"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Calculate Your Savings
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Request Free Quote
              </a>
            </div>
          </div>

          {/* Right: Logo + Stats */}
          <div className="fade-in-up flex flex-col items-center gap-8" style={{ animationDelay: "0.2s" }}>
            {/* Logo prominently displayed */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 inline-flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Yongxing Boiler"
                width={200}
                height={200}
                className="w-40 h-40 object-contain"
                priority
              />
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full">
              {[
                { value: "50+", label: "Countries Served", icon: "🌍" },
                { value: "1981", label: "Established", icon: "🏭" },
                { value: "240+", label: "Boiler Models", icon: "⚙️" },
                { value: "98%", label: "Thermal Efficiency", icon: "🔥" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center hover:bg-white/15 transition-colors"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-blue-200 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 border-t border-white/10 pt-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { icon: "✅", text: "ISO 9001 Certified" },
              { icon: "🌐", text: "Exported to 50+ Countries" },
              { icon: "📋", text: "Bangladesh Registration Docs" },
              { icon: "📍", text: "Local Service in Gazipur" },
            ].map((item) => (
              <div
                key={item.text}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl px-4 py-3"
              >
                <span className="text-lg flex-shrink-0">{item.icon}</span>
                <span className="text-blue-100 text-xs sm:text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
