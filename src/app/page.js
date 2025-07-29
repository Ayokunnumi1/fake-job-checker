"use client";
import { use, useState } from "react";

const fakeLocations = [
  " Plot 5, Voda Paint plc, University Press House, Fumec Bus stop off Adeniyi Jones Ogba Lagos",

  "3rd floor, 8 Thomas Salako Street, Ogba Bus Stop, Ikeja Lagos",

  "No 2, Sunday Street, off Ikorodu , Palmgrove, Lagos",

  "65c Opebi Road, Opposite glass house by salvation Bus stop, Opebi, Ikeja, Lagos",

  "HYINSCO Office. No. 4, 2nd floor, upward sanitas outlet, Alara sStreet, off commercial avenue, Onike, Sabo Yaba, Lagos",

  "Plot 5, university press building, along industrial road, Ogba, Lagos",

  "4B, Ogungbeye street Oppt African Shrine by Cadbury bus stop, Agidingbi Ikeja, Lagos",

  "Plot 14, Block A, Voda Paint, Surulere House, off Fumec bus stop, Surulre industrial road, Ogba, Lagos",

  "No 4, Ahl Ogungbeye Street off Amaraolu road, Opp Mega chicken bus stop by first gate,    Agidingbi, Ikeja, Lagos",

  "1, Olabisi Close, Mende, Maryland (Lagos Resident only) HR 08074645567",

  "32, Olufemi Road, off Ogunlana Drive, Surulere Lagos, YDNJI",

  "Ajumobi Street, Off Acme Road, Mega Chicken bus stop, Ikeja, Lagos",

  "6, Deji Oyenuga Street, opp Kehinde Odusote Estate, Anthony Village",

  "WESTCORP SERVICES LTD. 6, Deji Oyenuga Street, Opposite Kehinde Odusote Estate, Anthony bus stop, Lagos",

  "SOAR GROUP, Suite 2, Ikosi Road, Oluyole bus stop, Oregun ikeja, Lagos",

  "Boat House, 21, Ogunnusi Road axis bus stop, Ogba, Ikeja, Lagos",

  "8, Bisi Ogabi Street, Balogun Awolowo Way, Ikeja. or 8 Bisi Ogabi St, off Allen Busstop  behind watercress hotel,Ikeja, Lagos",

  "BSM premise, No 4, Kareem Ogungbeye Estate Agidingbi first gate bus stop",

  "Oremeji Street Isolo, Heathstream Alliance and Wellness Homes, Beside Sunrise Microfinance Bank, Gbagada",

  "PSIS HR BOARD, L’monarch Towers, 65, Opebi road opp Glass House by Salvation Bus stop Ikeja, Lagos. 07010616106",

  "6, Remilekun Street Off Falolu Road, by Akerele Road Surulere. HR Matrixglove 07080403158",

  "UBIAJA CRESCENT GARKI 2, ABUJA, 08159694497",

  "Global Resources, 19 Bode Thomas Road, Awoyokun/Onipanu bus stop",

  "Dream Land Enterprises Limited, No 114, Ijiolu Close, Elekahia Road Portharcourt, River State. REF NO(GS/SD/70)",

  "Ground floor, No 2, Akin Osiyemi Street 0pp sterling bank bus stop, Allen Avenue, Ikeja, Lagos",

  "LS-RESOURCE, 3rd floor Crownet LPaza Idris Gidado Street  Wuye, Abuja",

  "129, Okota Rd, Atinuke Plaza, beside Rainoil filling station, Cele bus stop, off Oshodi-Apapa Exp. Lagos. 08130902820",

  "23 ogunleti street, off Ogudu road Ojota Lagos",

  "Schleez  Nigeria  Limited, first floor, left wing, No 49, Olowu Street, Off Mobolaji Bank, Anthony Way, Ikeja, Lagos",

  "1st floor Xpress House, Beside Ostra Hotel and Halls off Otunba Jobifele way, Central Business District (CBD) Alausa Ikeja, Lagos",

  "13 Ajumobi Olorounje Street, off acme road, firstgate bus stop, Agidingbi Ikeja",

  "7, Obasa road, Chemline building, behind forte oil filling station, Oba Akran, Ikeja",

  "M.H.S, 4b Toyin Street, opposite victory Home School before unity b/stop, Ikeja, Lagos",

  "3rd Floor,  240 Herbert Macaulay Street, besides Sweet Sensation, Alagomeji Bus stop,  Yaba,  Lagos",

  "150b Oba Oguniyi road, Ifako-Agege Pencinema beside Pythagoras College",

  "3, Orishigun str Iyana-school b/s Ketu Lagos",

  "34, Abeokuta Street, off Anifowoshe Community, Ikeja",

  "Building 25, Ajayi Road, besides Olatunbosun street, Oke-ira Ogba. Lagos State",

  "1 Olatunbosun close, beside Adidde supermarket, Ajayi road, Ogba",

  "4 Toyin Street, Ikeja",

  "No. 3, Orishigun street (Lapo Bank Building 2nd Floor) Opposite The Apostolic church grammar school Kosofe Ketu Lagos",

  "Abeokuta road by Prognosy pharmacy opposite Lagos cooperation, scheme 1 bus/top oko-oba, agege",

  "36 Yaya Abatan Ogba besides nationwide filing station or 36, Yaya Abatan Road, Ogba, Lagos",

  "03, Francis Aghebo Close Ojodu Berger Bustop, beside Rainoil Filling Station",

  "3, Orishigun street (Lapo Bank Building 2nd Floor) Opposite The Apostolic church grammar school Kosofe Ketu Lagos",
];

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = fakeLocations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="vanilla-bg">
      <style>{`
        html, body {
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        .vanilla-bg {
          min-height: 100vh;
          min-width: 100vw;
          background: linear-gradient(135deg, #18181b 0%, #312e81 40%, #581c87 70%, #111827 100%);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .glass-card {
          backdrop-filter: blur(16px);
          background: rgba(30, 41, 59, 0.7);
          border-radius: 2rem;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          padding: 2rem;
          width: 100%;
          max-width: 600px;
          border: 1px solid rgba(255,255,255,0.12);
          margin: 2rem 0;
          box-sizing: border-box;
        }
        .main-title {
          font-family: 'Poppins', 'Segoe UI', 'Montserrat', 'Roboto', Arial, sans-serif;
          font-size: 2.7rem;
          font-weight: 900;
          letter-spacing: -0.01em;
          text-align: center;
          margin-bottom: 1.2rem;
          background: linear-gradient(90deg, #fbbf24 0%, #f472b6 40%, #a21caf 70%, #6366f1 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
          text-shadow: 0 4px 18px rgba(0,0,0,0.18), 0 1px 0 #fff2;
          transition: font-size 0.2s;
        }
        .subtitle {
          font-family: 'Poppins', 'Segoe UI', 'Montserrat', 'Roboto', Arial, sans-serif;
          font-size: 1.25rem;
          font-weight: 500;
          color: #e0e7ff;
          text-align: center;
          margin-bottom: 2.2rem;
          text-shadow: 0 2px 8px rgba(0,0,0,0.10);
          letter-spacing: 0.01em;
          transition: font-size 0.2s;
        }
        .search-input {
          width: 100%;
          min-width: 0;
          max-width: 100%;
          padding: 1rem;
          margin-bottom: 2rem;
          border-radius: 1rem;
          border: none;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          background: rgba(255,255,255,0.85);
          font-size: 1.1rem;
          color: #222;
          box-sizing: border-box;
          display: block;
        }
        .search-input:focus {
          outline: 2px solid #a21caf;
          background: #fff;
        }
        .locations-list {
          width: 100%;
          max-height: 400px;
          overflow-y: auto;
          padding: 0;
          margin: 0;
          list-style: none;
        }
        .location-item {
          background: linear-gradient(90deg, rgba(30,41,59,0.85), #a21caf 100%);
          padding: 1rem;
          border-radius: 1rem;
          margin-bottom: 1rem;
          border-left: 8px solid #f472b6;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          color: #f3f4f6;
          font-weight: 500;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .location-item:hover {
          transform: scale(1.02);
          box-shadow: 0 4px 16px rgba(0,0,0,0.22);
        }
        .no-match {
          color: #a1a1aa;
          text-align: center;
          padding: 2rem 0;
          font-size: 1.1rem;
        }
        .footer {
          text-align: center;
          font-size: 1.1rem;
          color: #e5e7eb;
          margin-top: 2.5rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          word-break: break-word;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          box-sizing: border-box;
        }
        .footer .youth {
          color: #f472b6;
          font-weight: bold;
        }
        .footer .safe {
          color: #f59e42;
          font-weight: bold;
        }
        .blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(48px);
          opacity: 0.18;
          animation: pulse 2s infinite alternate;
        }
        .blob.pink {
          top: 0; left: 0; width: 18rem; height: 18rem; background: #a21caf;
          pointer-events: none;
          max-width: 100%;
          max-height: 100%;
        }
        .blob.yellow {
          bottom: 0; right: 0; width: 18rem; height: 18rem; background: #f59e42;
          pointer-events: none;
          max-width: 100%;
          max-height: 100%;
        }
        .blob.purple {
          top: 50%; left: 0; width: 10rem; height: 10rem; background: #312e81; opacity: 0.18;
          pointer-events: none;
          max-width: 100%;
          max-height: 100%;
        }
        @media (max-width: 900px) {
          .glass-card {
            padding: 1.2rem;
            max-width: 98vw;
          }
          .main-title {
            font-size: 1.7rem;
          }
          .subtitle {
            font-size: 1.05rem;
          }
        }
        @media (max-width: 600px) {
          .glass-card {
            padding: 0.7rem;
            max-width: 100vw;
          }
          .main-title {
            font-size: 1.15rem;
          }
          .subtitle {
            font-size: 0.93rem;
          }
          .search-input {
            font-size: 0.95rem;
            padding: 0.7rem;
          }
          .location-item {
            font-size: 0.95rem;
            padding: 0.7rem;
          }
          .footer {
            font-size: 0.95rem;
            padding-left: 0.2rem;
            padding-right: 0.2rem;
          }
        }
        @keyframes pulse {
          0% { opacity: 0.18; }
          100% { opacity: 0.32; }
        }
      `}</style>
      <div className="glass-card">
        <h1 className="main-title">🚨 Fake Job Alert</h1>
        <p className="subtitle">
          Search known scam job venues to avoid job fraud in Nigeria.
        </p>
        <input
          type="text"
          placeholder="Search location or name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <ul className="locations-list">
          {filtered.length > 0 ? (
            filtered.map((loc, index) => (
              <li key={index} className="location-item">
                {loc}
              </li>
            ))
          ) : (
            <li className="no-match">No matching locations found.</li>
          )}
        </ul>
        <footer className="footer">
          Built for <span className="youth">Nigerian youths 💪</span> |{" "}
          <span className="safe">Stay safe from job scams 🚫</span>
        </footer>
      </div>
      {/* Decorative Blobs */}
      <div className="blob pink" />
      <div className="blob yellow" />
      <div className="blob purple" />
    </div>
  );
}
