"use client";
import "./landing.css"
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
