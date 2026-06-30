import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Strip */}
      <div className="bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-extrabold text-xl">Ready to Cut Your Fuel Costs by 60%?</p>
            <p className="text-orange-100 text-sm mt-0.5">Get a free savings calculation today.</p>
          </div>
          <a
            href="#quote"
            className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors flex-shrink-0"
          >
            Request Free Quote
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            {/* Logo on white pill so colours show clearly on dark bg */}
            <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-4 py-3 mb-5">
              <Image
                src="/logo.png"
                alt="Yongxing Boiler"
                width={52}
                height={52}
                className="w-12 h-12 object-contain"
              />
              <div className="leading-tight">
                <span className="block text-sm font-extrabold text-blue-900">YONGXING BOILER</span>
                <span className="block text-xs font-semibold text-orange-500">Bangladesh</span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 mb-5">
              Yongxing Boiler — Bangladesh Authorized Representative.
              Operated by <span className="text-white font-semibold">Keystone Consultancy</span>,
              Gazipur, Dhaka Division, Bangladesh.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-900/60 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded-full">ISO 9001</span>
              <span className="bg-green-900/60 text-green-300 text-xs font-semibold px-2.5 py-1 rounded-full">50+ Countries</span>
              <span className="bg-orange-900/60 text-orange-300 text-xs font-semibold px-2.5 py-1 rounded-full">Boiler Act 2022 Compliant</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Products", href: "#products" },
                { label: "Why Yongxing", href: "#why" },
                { label: "Compliance", href: "#compliance" },
                { label: "After-Sales", href: "#aftersales" },
                { label: "Savings Calculator", href: "#calculator" },
                { label: "Request Quote", href: "#quote" },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">📍</span>
                <span className="text-gray-400">Gazipur, Dhaka Division, Bangladesh</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">📞</span>
                <a href="tel:+8801941646278" className="text-gray-400 hover:text-white transition-colors">
                  +880 1941-646278
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">✉️</span>
                <a href="mailto:hasibulmunim@gmail.com" className="text-gray-400 hover:text-white transition-colors break-all">
                  hasibulmunim@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">💬</span>
                <span className="text-gray-400">WeChat: hasibul_munim</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-400 mt-0.5 flex-shrink-0">🕐</span>
                <span className="text-gray-400">Sat–Thu, 9 AM – 6 PM BST</span>
              </li>
            </ul>

            <a
              href="https://wa.me/8801941646278"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-xl w-fit transition-colors"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.522 5.852L.057 23.428a.5.5 0 0 0 .606.63l5.674-1.484A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.895 9.895 0 0 1-5.031-1.37l-.36-.214-3.734.976.999-3.634-.235-.374A9.86 9.86 0 0 1 2.118 12c0-5.447 4.435-9.882 9.882-9.882 5.448 0 9.882 4.435 9.882 9.882 0 5.448-4.434 9.882-9.882 9.882z"/>
              </svg>
              WhatsApp Now
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
          <p>© {year} Yongxing Boiler Bangladesh · Operated by Keystone Consultancy</p>
          <p>Compliant with Boiler Act 2022 &amp; Boiler Rules 2025</p>
        </div>
      </div>
    </footer>
  );
}
