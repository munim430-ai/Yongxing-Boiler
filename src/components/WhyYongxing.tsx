const reasons = [
  {
    number: "01",
    title: "Best Value Proposition",
    description:
      "Not the cheapest. Not the most expensive. The smartest choice. Yongxing boilers offer 20–30% savings over premium brands while maintaining ISO quality standards and full Bangladesh compliance.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    highlight: "20–30% Savings",
  },
  {
    number: "02",
    title: "Fast Market Entry",
    description:
      "We move fast. From your first inquiry to boiler delivery, we coordinate every step: Chief Inspector approval, shipping, customs clearance, installation, and registration. Your factory stays operational.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    highlight: "End-to-End Service",
  },
  {
    number: "03",
    title: "Growth Partner",
    description:
      "We don't want to sell you one boiler. We want to grow with you. As your factory expands, we provide larger capacity boilers, biomass conversions, and fuel supply contracts. Your growth is our growth.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    highlight: "Long-term Partnership",
  },
  {
    number: "04",
    title: "Bangladesh-Ready Documentation",
    description:
      "Every boiler ships with complete registration documentation: construction drawings, strength calculations, P&ID diagrams, steam pipe plans, and testing certificates. Zero delays at Chattogram port.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    highlight: "Zero Port Delays",
  },
  {
    number: "05",
    title: "Local Service Network",
    description:
      "Our Bangladesh partner, Keystone Consultancy, provides import approval coordination, installation & commissioning, government registration support, operator training & licensing, annual maintenance & spare parts, and biomass fuel supply.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    highlight: "Gazipur, Bangladesh",
  },
];

export default function WhyYongxing() {
  return (
    <section id="why" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Why Yongxing in Bangladesh?
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Five reasons Bangladesh&apos;s leading factories choose Yongxing over the competition.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {reasons.map((reason, i) => (
            <div
              key={reason.number}
              className={`flex flex-col md:flex-row gap-6 p-6 rounded-2xl border transition-all card-hover ${
                i % 2 === 0 ? "bg-blue-50 border-blue-100" : "bg-orange-50 border-orange-100"
              }`}
            >
              {/* Number + Icon */}
              <div className="flex items-start gap-4 md:w-72 flex-shrink-0">
                <div
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center ${
                    i % 2 === 0
                      ? "bg-blue-700 text-white"
                      : "bg-orange-500 text-white"
                  }`}
                >
                  {reason.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    {reason.number}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{reason.title}</h3>
                  <span
                    className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      i % 2 === 0
                        ? "bg-blue-200 text-blue-800"
                        : "bg-orange-200 text-orange-800"
                    }`}
                  >
                    {reason.highlight}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1 flex items-center">
                <p className="text-gray-700 leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
