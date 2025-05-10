import React from "react";

const Storage = () => {
  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="border-2 rounded-2xl border-[#63C5DA] p-4 overflow-hidden shadow-lg bg-white transition-all hover:shadow-xl flex flex-col gap-y-4 divide-y divide-gray-300">
        {/* Image Section */}
        <div className="w-full h-48 bg-gray-100 rounded-2xl overflow-hidden">
          <img
            src="/BookingPhoto.svg"
            alt="Person"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name and Address */}
        <div className="pt-2 flex items-center">
          <div className="text-left">
            <div className="text-[#FA8128] text-xl font-semibold">
              Luggage Storage 1
            </div>
            <div className="text-[#FA8128] text-sm font-light">
              Queen Street, Melbourne
            </div>
            <div className="flex items-center mt-1">
              <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
              <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
              <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
              <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
              <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Time Details */}
        <div className="pt-2 flex items-center">
          <div className="text-left text-sm">
            <div className="text-green-700">Open - Closes 11:00PM</div>
            <div className="text-[#63C5DA]">3 min away from your location</div>
          </div>
        </div>

        {/* Facility Buttons */}
        <div className="pt-2 flex items-center">
          <div className="flex gap-2">
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              Wifi
            </button>
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              Restroom
            </button>
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              CCtv
            </button>
          </div>
        </div>

        {/* Pricing and Time Buttons */}
        <div className="pt-2">
          <p className="text-[#FA8128] text-lg font-medium text-center">
            At 2.5 EUR per bag/day
          </p>
          <div className="flex gap-2 justify-center my-2">
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              6:30 PM
            </button>
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              8:30 PM
            </button>
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              9:30 PM
            </button>
            <button className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm">
              10:00 PM
            </button>
          </div>
          <div className="flex justify-center mt-2">
            <button className="bg-[#FA8128] text-white px-5 py-2 rounded-3xl">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Storage;
