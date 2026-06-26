const items = [
  "Chief Inspector of Boilers prior approval (Form-D)",
  "Complete construction drawings & strength calculations",
  "P&ID & steam pipe plans",
  "Manufacturing & testing certificates",
  "Registration application support",
  "Installation supervision by qualified engineers",
  "Operator training (Grade-1, 2, 3 licensed)",
  "Annual maintenance contracts available",
];

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Checklist */}
          <div>
            <div className="inline-block bg-orange-500/20 text-orange-300 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              Bangladesh Compliance
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Yongxing Bangladesh
              <span className="block text-orange-400">Compliance Package</span>
            </h2>
            <p className="text-blue-200 mb-8 leading-relaxed">
              Every Yongxing boiler sold in Bangladesh comes with a complete compliance package.
              We handle all paperwork so your factory stays legal and operational from day one.
            </p>

            <div className="space-y-3">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-blue-100">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 border border-white/20 rounded-xl">
              <p className="text-sm text-blue-200">
                <span className="text-yellow-300 font-bold">Compliant with:</span> Bangladesh Boiler
                Act 2022 and Boiler Rules 2025
              </p>
            </div>
          </div>

          {/* Right: Visual */}
          <div className="space-y-4">
            {/* TDF / Green Fund card */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                  🏦
                </div>
                <div>
                  <div className="font-bold text-white">TDF & Green Fund</div>
                  <div className="text-green-200 text-sm">Bangladesh Bank Soft Loan</div>
                </div>
              </div>
              <p className="text-green-100 text-sm leading-relaxed">
                Bangladesh Bank offers <strong className="text-white">TDF & Green Fund</strong> soft
                loans at <strong className="text-yellow-300">5% interest</strong> for boiler
                modernization. We help your factory apply. Zero upfront options available.
              </p>
              <a
                href="#quote"
                className="mt-4 inline-block bg-white text-green-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-green-50 transition-colors"
              >
                Apply for TDF Loan →
              </a>
            </div>

            {/* 30-year alert */}
            <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-2xl p-6 shadow-xl">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-xl">
                  ⚠️
                </div>
                <div>
                  <div className="font-bold text-white">New Boiler Rules 2025</div>
                  <div className="text-red-200 text-sm">30-Year Lifespan Limit</div>
                </div>
              </div>
              <p className="text-red-100 text-sm leading-relaxed">
                Packaged boilers have a maximum <strong className="text-white">30-year lifespan</strong>.
                After 30 years, replacement is <strong className="text-yellow-300">MANDATORY</strong>.
                Most Bangladesh boilers installed 1995–2005 are approaching this deadline.
              </p>
              <a
                href="#quote"
                className="mt-4 inline-block bg-white text-red-700 font-bold text-sm px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
              >
                Get FREE Lifespan Assessment →
              </a>
            </div>

            {/* Document icons */}
            <div className="grid grid-cols-3 gap-3">
              {["Form-D", "P&ID", "CE Cert"].map((doc) => (
                <div
                  key={doc}
                  className="bg-white/10 border border-white/20 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl mb-1">📄</div>
                  <div className="text-white font-bold text-sm">{doc}</div>
                  <div className="text-blue-300 text-xs">Included</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
