import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Reservation = () => {
  return (
    <>
      <div className="page-details p-2 sm:px-10">
        {/* NAVBAR */}
        <div className="navbar flex flex-row flex-wrap items-center justify-between p-2 m-4 text-xl sm:text-2xl gap-4">
          <div className="flex items-center gap-2">
            <div className="logo-bag"></div>
            <div className="logo"></div>
          </div>
          <div className="nav-links flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="relative">
              <select className="appearance-none border-2 border-[#FA8128] rounded-lg p-2 pr-10 bg-white w-40">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src="/Dropdown.svg" alt="" className="w-5 h-5" />
              </div>
            </div>
            <div className="burger p-2">
              <GiHamburgerMenu size={35} color="#FA8128" />
            </div>
          </div>
        </div>

        {/* TOP SECTION */}
        <div className="top-div w-full flex flex-col md:flex-row gap-6 items-start md:items-center justify-between px-4 md:px-10">
          <div className="text-div font-bold w-full md:w-auto">
            <div className="text-div-1 text-[#FA8128] text-5xl mb-2">
              Reservations
            </div>
            <div className="text-div-2 text-3xl text-[#63C5DA]">
              No Upcoming Reservations
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <input
              className="content-input border-2 border-[#63C5DA] rounded-[2rem] px-4 py-2 text-[18px] md:text-[20px] w-60"
              placeholder="Search by reference"
            />

            <div className="relative w-40">
              <select className="appearance-none w-full border-2 border-[#FA8128] rounded-lg p-2 pr-10 bg-white text-base">
                <option value="en">Sort By</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src="/Dropdown.svg" alt="Dropdown" className="w-5 h-5" />
              </div>
            </div>

            <div className="relative w-40">
              <select className="appearance-none w-full border-2 border-[#FA8128] rounded-lg p-2 pr-10 bg-white text-base">
                <option value="en">Date</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src="/Dropdown.svg" alt="Dropdown" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="bottom-div w-full max-h-[65vh] px-4 md:px-10 overflow-auto">
          <div className="reviews-div border-2 border-[#63C5DA] p-5">
            <div className="reviews-top flex flex-col md:flex-row justify-between items-start md:items-center p-4 border-b border-gray-200 text-[#FA8128] gap-2">
              <div className="name font-semibold text-lg">
                Pratham Karmarkar
              </div>
              <div className="booking-id text-sm md:text-base">
                Booking Id : 1234
              </div>
            </div>

            <div className="luggage-name text-[#FA8128] font-medium text-lg">
              Luggage 001
            </div>
            <div className="address text-[#FA8128] text-sm md:text-base">
              Queens Maritoon, Melbourne
            </div>

            <div className="reviews-bottom mt-4 flex flex-col lg:flex-row justify-between gap-4 items-start lg:items-center">
              <div className="flex gap-3">
                <div className="drop border-2 border-[#63C5DA] px-4 py-2 rounded-md text-sm text-[#FA8128] shadow-sm">
                  drop off date
                </div>
                <div className="pickup border-2 border-[#63C5DA] px-4 py-2 rounded-md text-sm text-[#FA8128] shadow-sm">
                  pickup date
                </div>
              </div>
              <button className="bg-[#FA8128] text-white px-4 py-2 rounded-3xl self-start md:self-auto">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservation;
