export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image / Visual */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://yongxing-boiler.com/files/topics/17797658726601.png"
                alt="Yongxing Boiler Manufacturing"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-sm font-semibold text-orange-300">Henan Province, China</div>
                <div className="text-lg font-bold">Taikang Industrial Zone</div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white rounded-2xl p-4 shadow-xl">
              <div className="text-3xl font-extrabold">45+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              About Yongxing
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
              China&apos;s Leading Boiler Manufacturer,
              <span className="text-blue-700"> Now in Bangladesh</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Yongxing Boiler Manufacturing Co., Ltd. has built a reputation for delivering reliable
              industrial boilers at competitive prices. With exports to over 50 countries, we
              understand that Bangladesh factories need more than just a boiler — they need a
              complete solution that includes compliance, financing, and after-sales support.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Established in 1981 in Taikang, Henan Province, Yongxing holds China&apos;s Class-A
              boiler manufacturing license and produces over 240 models of steam, hot water,
              biomass, and thermal oil boilers — hydro-tested at 10× design pressure.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Manufacturing License", value: "China A-Class" },
                { label: "Annual Capacity", value: "5,000+ Units" },
                { label: "Export Markets", value: "50+ Countries" },
                { label: "Product Models", value: "240+ Variants" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                  <div className="text-blue-700 font-bold text-lg">{item.value}</div>
                  <div className="text-gray-500 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
