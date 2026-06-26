"use client";
import { useState, FormEvent } from "react";

const capacities = [
  "Under 1 ton/hour",
  "1–3 ton/hour",
  "3–6 ton/hour",
  "6–10 ton/hour",
  "10–20 ton/hour",
  "20–30 ton/hour",
  "Above 30 ton/hour",
  "Not Sure",
];

const applications = [
  "RMG / Garments",
  "Textile & Dyeing",
  "Food & Beverage",
  "Pharmaceutical",
  "Chemical Industry",
  "Paper & Printing",
  "Rubber & Plastics",
  "Brick / Ceramics",
  "Hotel / Hospital",
  "Other",
];

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({
    factory: "",
    currentBoiler: "",
    capacity: "",
    application: "",
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("sent");
      setForm({ factory: "", currentBoiler: "", capacity: "", application: "", name: "", phone: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Free Consultation
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Request Free Quote &
            <span className="text-orange-500"> Savings Calculation</span>
          </h2>
          <p className="text-gray-500 text-lg">
            Tell us about your factory. We&apos;ll respond within 24 hours with a tailored proposal.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {status === "sent" ? (
            <div className="p-16 text-center">
              <div className="text-6xl mb-4">✅</div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Quote Request Received!</h3>
              <p className="text-gray-500 mb-6">
                Thank you. We&apos;ll contact you within 24 hours with a tailored proposal and savings calculation.
              </p>
              <p className="text-sm text-gray-400">
                For urgent enquiries:{" "}
                <a href="https://wa.me/8801941646278" className="text-green-600 font-semibold">
                  WhatsApp +880 1941-646278
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Factory Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Factory Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="factory"
                    type="text"
                    required
                    value={form.factory}
                    onChange={handleChange}
                    placeholder="e.g. ABC Garments Ltd."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                {/* Current Boiler */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Current Boiler Type
                  </label>
                  <select
                    name="currentBoiler"
                    value={form.currentBoiler}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select current fuel...</option>
                    {["Gas", "Diesel", "Coal", "Biomass", "No Boiler Yet"].map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>

                {/* Capacity */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Capacity Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="capacity"
                    required
                    value={form.capacity}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select capacity...</option>
                    {capacities.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* Application */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Factory Application <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="application"
                    required
                    value={form.application}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white"
                  >
                    <option value="">Select application...</option>
                    {applications.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                {/* Contact Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Contact Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+880 1xxx-xxxxxx"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your requirements — steam pressure, operating hours, special conditions..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm text-center">
                  Something went wrong. Please WhatsApp us directly at +880 1941-646278.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl text-lg transition-colors flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Request Free Quote & Savings Calculation"
                )}
              </button>

              <p className="text-center text-xs text-gray-400">
                Or reach us directly:{" "}
                <a href="https://wa.me/8801941646278" className="text-green-600 font-semibold">
                  WhatsApp
                </a>{" "}
                ·{" "}
                <a href="mailto:hasibulmunim@gmail.com" className="text-blue-600 font-semibold">
                  hasibulmunim@gmail.com
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
