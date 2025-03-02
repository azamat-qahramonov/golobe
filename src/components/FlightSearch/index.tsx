import React, { useState } from "react";
import Flight from "../../assets/flight.svg";
import Bed from "../../assets/bed.svg";
import Plane from "../../assets/plane.svg";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("One Way");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("Mar 02, 2025 - Pick a date");
  const [passengers, setPassengers] = useState("1 person, Economy");

  return (
    <div className="w-full max-w-4xl mx-auto bg-white rounded-lg p-6 mt-10 shadow-lg">
      <div className="flex justify-between border-b pb-4">
        {["Flights", "Stays"].map((tab, index) => (
          <button
            key={index}
            className="group flex flex-col items-center px-4 py-2 cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <img src={tab === "Flights" ? Flight : Bed} alt={tab} />
              <p
                className={`font-semibold text-sm ${
                  tab === "Flights" ? "text-[#112211]" : "text-gray-500"
                } group-hover:text-[#112211]`}
              >
                {tab}
              </p>
            </div>
            <div className="w-[107px] h-[5px] bg-[#8DD3BB] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out"></div>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-medium text-gray-600">
            From * - to *
          </label>
          <div className="flex gap-2 mt-1">
            <input
              type="text"
              placeholder="Select airport"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded-md p-2 text-sm"
            />
            <input
              type="text"
              placeholder="Select airport"
              className="w-full border rounded-md p-2 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Trip *
          </label>
          <select
            value={tripType}
            onChange={(e) => setTripType(e.target.value)}
            className="w-full border rounded-md p-2 text-sm"
          >
            <option value="One Way">One Way</option>
            <option value="Return">Return</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Depart * - Return *
          </label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded-md p-2 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600">
            Passenger * - Class *
          </label>
          <input
            type="text"
            value={passengers}
            onChange={(e) => setPassengers(e.target.value)}
            className="w-full border rounded-md p-2 text-sm"
          />
        </div>
      </div>

      <div className="flex justify-between items-center mt-6">
        <button className="text-sm font-medium text-[#112211]">
          + Add Promo Code
        </button>
        <button className="flex items-center gap-2 bg-[#8DD3BB] text-[#112211] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#74c3a1] transition">
          <img src={Plane} alt="Plane" />
          Show Flights
        </button>
      </div>
    </div>
  );
};

export default FlightSearch;
