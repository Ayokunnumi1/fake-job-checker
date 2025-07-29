import { useState } from 'react'

const fakeLocations = [
  "123 Scam Street, Lagos",
  "456 Fraud Avenue, Abuja",
  "No. 7 Yahoo Way, Port Harcourt",
  "11 Ojoro Crescent, Ikeja",
  "Fraudsters Hub, Lekki Phase 1",
  // You can add as many as needed
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = fakeLocations.filter(loc =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-2xl md:text-3xl font-bold text-red-600 text-center mb-6">
        🚨 Fake Job Locations in Nigeria
      </h1>
      <input
        type="text"
        placeholder="Search location or name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full max-w-md p-3 border border-gray-300 rounded-md mb-6"
      />
      <ul className="w-full max-w-md">
        {filtered.length > 0 ? (
          filtered.map((loc, index) => (
            <li key={index} className="bg-white p-4 rounded-md mb-3 border-l-4 border-red-600 shadow">
              {loc}
            </li>
          ))
        ) : (
          <li className="text-gray-500">No matching locations found.</li>
        )}
      </ul>
      <footer className="text-center text-sm text-gray-500 mt-10">
        Built for Nigerian youths 💪 | Stay safe from job scams 🚫
      </footer>
    </div>
  )
}
