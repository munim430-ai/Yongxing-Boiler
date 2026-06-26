const services = [
  {
    icon: "🔧",
    title: "24-Hour Emergency Repair",
    desc: "Our engineers are on-call around the clock. Boiler emergency? We respond within hours.",
  },
  {
    icon: "📦",
    title: "Local Spare Parts Stock",
    desc: "No China shipping delays. Critical spare parts kept in Gazipur for same-day availability.",
  },
  {
    icon: "💧",
    title: "Annual Maintenance & Water Testing",
    desc: "Scheduled maintenance and boiler water quality testing to maximize lifespan and efficiency.",
  },
  {
    icon: "🎓",
    title: "Operator Licensing Support",
    desc: "We train and certify your boiler operators to Grade-1, 2, and 3 standards as required by law.",
  },
  {
    icon: "🌿",
    title: "Biomass Fuel Pellet Delivery",
    desc: "Regular supply of quality biomass fuel pellets delivered directly to your factory.",
  },
  {
    icon: "⚡",
    title: "Electrical Standards Compliance",
    desc: "Our qualified electrical engineer ensures all installations meet Bangladesh BSTI standards.",
  },
];

export default function AfterSales() {
  return (
    <section id="aftersales" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-100 text-green-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            After-Sales Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Local Service Team in{" "}
            <span className="text-green-600">Gazipur, Bangladesh</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            We don&apos;t disappear after the sale. Keystone Consultancy provides full lifecycle
            support so your boiler runs at peak performance, year after year.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="border border-gray-100 rounded-2xl p-6 hover:border-green-200 hover:bg-green-50 transition-all card-hover"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Operated by Keystone */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="text-orange-400 font-bold text-sm uppercase tracking-widest mb-3">
                Operated by
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                Keystone Consultancy
              </h3>
              <p className="text-blue-200 leading-relaxed mb-6">
                Yongxing&apos;s authorized representative in Bangladesh — handling the complete chain
                from import approval through installation, registration, and ongoing maintenance.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:+8801941646278"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  📞 +880 1941-646278
                </a>
                <a
                  href="https://wa.me/8801941646278"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 hover:bg-green-400 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Response Time", value: "< 4 Hours" },
                { label: "Coverage", value: "All Bangladesh" },
                { label: "Engineers", value: "Qualified Team" },
                { label: "Parts Stock", value: "Gazipur, Dhaka" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white/10 rounded-xl p-4 border border-white/10"
                >
                  <div className="text-xl font-extrabold text-orange-300">{item.value}</div>
                  <div className="text-blue-300 text-sm">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
