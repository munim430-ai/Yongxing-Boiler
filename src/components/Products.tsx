const products = [
  {
    name: "WNS Oil/Gas Steam Boiler",
    series: "WNS Series",
    capacity: "0.5 – 20 ton/hour",
    pressure: "0.7 – 1.6 MPa",
    fuel: "Natural Gas, LPG, Diesel",
    efficiency: "Up to 98%",
    image: "https://yongxing-boiler.com/files/topics/17797668487636.png",
    badge: "Most Popular",
    badgeColor: "bg-orange-500",
    description: "Horizontal fire-tube boiler with 3-pass wet-back design. Low NOx burner, PLC intelligent control. Ideal for RMG, food, chemical, and pharmaceutical factories.",
  },
  {
    name: "SZL Biomass/Coal Steam Boiler",
    series: "SZL Series",
    capacity: "6 – 30 ton/hour",
    pressure: "1.25 – 2.5 MPa",
    fuel: "Biomass Pellets, Coal, Rice Husk",
    efficiency: "88 – 92%",
    image: "https://yongxing-boiler.com/files/topics/17797658726601.png",
    badge: "Best for Biomass",
    badgeColor: "bg-green-600",
    description: "Double-drum water-tube boiler with traveling grate stoker. Perfect for large RMG factories switching from diesel to biomass — save 60% on fuel costs.",
  },
  {
    name: "DZL Chain Grate Biomass Boiler",
    series: "DZL Series",
    capacity: "1 – 10 ton/hour",
    pressure: "0.7 – 1.6 MPa",
    fuel: "Biomass Pellets, Wood Chips, Coal",
    efficiency: "85 – 90%",
    image: "https://yongxing-boiler.com/files/topics/17784855755591.png",
    badge: "Automatic Feeding",
    badgeColor: "bg-blue-700",
    description: "Horizontal package boiler with automatic chain grate stoker and fuel feeding. Low operating cost, easy maintenance — popular with medium-sized factories.",
  },
  {
    name: "LSH Vertical Biomass Boiler",
    series: "LSH Series",
    capacity: "0.3 – 2 ton/hour",
    pressure: "0.7 – 1.0 MPa",
    fuel: "Biomass Pellets, Coal, Wood",
    efficiency: "82 – 88%",
    image: "https://yongxing-boiler.com/files/topics/17788150224382.png",
    badge: "Compact Size",
    badgeColor: "bg-purple-600",
    description: "Vertical fixed-grate boiler for small factories with limited space. Simple operation, minimal maintenance. Ideal entry-level biomass solution.",
  },
  {
    name: "DZH Horizontal Steam Boiler",
    series: "DZH Series",
    capacity: "0.5 – 6 ton/hour",
    pressure: "0.7 – 1.6 MPa",
    fuel: "Coal, Biomass, Wood",
    efficiency: "80 – 85%",
    image: "https://yongxing-boiler.com/files/topics/17782281628057.png",
    badge: "Budget Friendly",
    badgeColor: "bg-gray-700",
    description: "Single-drum horizontal hand-burning boiler. Lowest upfront cost with reliable performance. Great for factories with experienced operators.",
  },
  {
    name: "Thermal Oil Heater",
    series: "YY(Q)W Series",
    capacity: "240 – 3,500 kW",
    pressure: "0.5 MPa (max 350°C)",
    fuel: "Natural Gas, Diesel, Oil",
    efficiency: "Over 90%",
    image: "https://yongxing-boiler.com/files/topics/17797013541847.png",
    badge: "High Temperature",
    badgeColor: "bg-red-600",
    description: "Horizontal thermal oil heater for processes requiring high temperatures up to 350°C without high pressure. Ideal for textile dyeing and chemical processing.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Product Range
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Industrial Boiler Solutions
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            240+ models across 6 product families — every boiler ships with complete Bangladesh
            registration documentation.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl overflow-hidden shadow-md card-hover border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-52 bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
                <div
                  className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}
                >
                  {product.badge}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-1">
                  {product.series}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{product.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{product.description}</p>

                {/* Specs */}
                <div className="space-y-2 mb-4">
                  {[
                    { label: "Capacity", value: product.capacity },
                    { label: "Pressure", value: product.pressure },
                    { label: "Fuel", value: product.fuel },
                    { label: "Efficiency", value: product.efficiency },
                  ].map((spec) => (
                    <div key={spec.label} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-gray-700 font-medium text-right max-w-[60%]">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    ✓ ISO Certified
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
                    ✓ BD Reg Docs Included
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="#quote"
                  className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-xl transition-colors"
                >
                  Request Quote
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Can&apos;t find your capacity? We custom-build boilers from 0.3 to 100 ton/hour.{" "}
          <a href="#quote" className="text-orange-500 font-semibold hover:underline">
            Contact us →
          </a>
        </p>
      </div>
    </section>
  );
}
