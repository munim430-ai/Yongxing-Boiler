"use client";
import { useState } from "react";

const DIESEL_PRICE_PER_LITER = 110; // BDT
const BIOMASS_PRICE_PER_KG = 8;     // BDT

const DIESEL_LITERS_PER_TON_STEAM = 75;   // liters diesel to produce 1 ton steam
const BIOMASS_KG_PER_TON_STEAM = 200;     // kg biomass pellets to produce 1 ton steam

export default function SavingsCalculator() {
  const [steamPerDay, setSteamPerDay] = useState(5);
  const [operatingDays, setOperatingDays] = useState(300);
  const [currentFuel, setCurrentFuel] = useState<"diesel" | "gas" | "coal">("diesel");

  const steamPerYear = steamPerDay * operatingDays;

  // Diesel cost
  const dieselCostPerYear = steamPerYear * DIESEL_LITERS_PER_TON_STEAM * DIESEL_PRICE_PER_LITER;
  // Biomass cost
  const biomassCostPerYear = steamPerYear * BIOMASS_KG_PER_TON_STEAM * BIOMASS_PRICE_PER_KG;

  const savings = dieselCostPerYear - biomassCostPerYear;
  const savingsPercent = Math.round((savings / dieselCostPerYear) * 100);

  const formatBDT = (n: number) =>
    "৳ " + n.toLocaleString("en-BD", { maximumFractionDigits: 0 });

  return (
    <section id="calculator" className="py-20 bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-block bg-orange-100 text-orange-700 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Fuel Cost Calculator
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Calculate Your Annual Savings
          </h2>
          <p className="text-gray-500 text-lg">
            See exactly how much your factory can save by switching to biomass.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl border border-orange-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Inputs */}
            <div className="p-8 border-b md:border-b-0 md:border-r border-gray-100">
              <h3 className="font-bold text-gray-900 text-lg mb-6">Your Factory Details</h3>

              <div className="space-y-6">
                {/* Current fuel */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Current Fuel Type
                  </label>
                  <div className="flex gap-2">
                    {(["diesel", "gas", "coal"] as const).map((f) => (
                      <button
                        key={f}
                        onClick={() => setCurrentFuel(f)}
                        className={`flex-1 py-2.5 rounded-xl text-sm font-semibold border transition-all ${
                          currentFuel === f
                            ? "bg-orange-500 text-white border-orange-500"
                            : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"
                        }`}
                      >
                        {f.charAt(0).toUpperCase() + f.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Steam per day */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Steam Required per Day:{" "}
                    <span className="text-orange-500">{steamPerDay} ton/day</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    value={steamPerDay}
                    onChange={(e) => setSteamPerDay(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>1 ton</span>
                    <span>50 ton</span>
                  </div>
                </div>

                {/* Operating days */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Operating Days per Year:{" "}
                    <span className="text-orange-500">{operatingDays} days</span>
                  </label>
                  <input
                    type="range"
                    min={100}
                    max={365}
                    value={operatingDays}
                    onChange={(e) => setOperatingDays(Number(e.target.value))}
                    className="w-full accent-orange-500"
                  />
                  <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>100 days</span>
                    <span>365 days</span>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4 text-sm text-gray-500">
                  <strong className="text-gray-700">Assumptions:</strong> Diesel @ ৳{DIESEL_PRICE_PER_LITER}/L,
                  Biomass pellets @ ৳{BIOMASS_PRICE_PER_KG}/kg. Actual costs may vary.
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="p-8 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
              <h3 className="font-bold text-lg mb-6 text-blue-200">Annual Cost Comparison</h3>

              <div className="space-y-4 mb-8">
                <div className="bg-white/10 rounded-2xl p-5">
                  <div className="text-blue-300 text-sm mb-1">
                    Current Cost ({currentFuel})
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {formatBDT(dieselCostPerYear)}
                  </div>
                  <div className="text-blue-300 text-xs mt-1">per year</div>
                </div>

                <div className="bg-green-600/30 border border-green-500/30 rounded-2xl p-5">
                  <div className="text-green-300 text-sm mb-1">
                    Yongxing Biomass Boiler Cost
                  </div>
                  <div className="text-3xl font-extrabold text-white">
                    {formatBDT(biomassCostPerYear)}
                  </div>
                  <div className="text-green-300 text-xs mt-1">per year</div>
                </div>

                <div className="bg-orange-500 rounded-2xl p-5 shadow-lg">
                  <div className="text-orange-100 text-sm mb-1">Your Annual Savings</div>
                  <div className="text-4xl font-extrabold text-white">
                    {formatBDT(savings)}
                  </div>
                  <div className="text-orange-200 text-sm mt-1">
                    Save{" "}
                    <span className="font-bold text-white">{savingsPercent}%</span> on fuel costs
                  </div>
                </div>
              </div>

              <a
                href="#quote"
                className="block w-full text-center bg-white text-blue-900 font-bold py-4 rounded-xl hover:bg-blue-50 transition-colors"
              >
                Get Custom Savings Report →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
