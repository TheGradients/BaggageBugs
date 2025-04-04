import React from "react";
import "./LandingPage.css";
import { TbArrowBack } from "react-icons/tb";
import { FaLock } from "react-icons/fa";
import { GiWorld } from "react-icons/gi";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { BsArrowLeftCircle } from "react-icons/bs"; import { BsArrowRightCircle } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandLinkedin } from "react-icons/tb";
const LandingPage = () => {
  return (
    <>
      <div className="page p-2 pl-15 pr-15">
        <div className="navbar flex p-2 pl-15 pr-15  m-4 justify-between text-2xl ">
          <div className="flex">
            <div className="logo-bag"></div>
            <div className="logo"></div>
          </div>
          <div className="nav-links flex gap-15">
            <div className="flex items-center gap-2">
              <select className="border-2  border-[#FA8128] rounded-lg p-1 px-5">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
            </div>
            <div className="burger p-2">
              <GiHamburgerMenu size={35} color="#FA8128" />
            </div>
          </div>
        </div>
        <div className="section-1 flex justify-between">
          <div className="section-1-left mt-[-2%] h-[600px] w-[850px]"></div>
          <div className="section-1-right h-[600px] w-[800px] pt-15 pb-10 pr-15  flex-col justify-between text-right">
            <div className="text-[#FA8128] text-[25px]   ">
              Trusted by 200+ bagpackers
            </div>
            <div className=" ">
              <div className="text-[#FA8128] text-[55px] font-bold mb-[-15px] ">
                Keep your Luggage Safe
              </div>
              <div className="text-[#63C5DA] text-[55px] mb-[-15px] ">
                Wherever You Go
              </div>
              <div className="text-[#FA8128] text-[30px] ">
                Starting from 10€ an hour
              </div>
            </div>
            <div className="flex flex-col items-end mt-10">
              <div className="relative w-[500px]">
                <input
                  className="border-2 rounded-4xl p-2 w-full mb-2 text-[#63C5DA] font-extrabold shadow-md pr-12 h-12"
                  placeholder="Barcelona"
                  type="text"
                />
                <span className="absolute right-4 top-1/2 transform -translate-y-4 text-[#63C5DA]">
                  <IoIosSearch size={24} />
                </span>
              </div>

              <button className="pl-12 pr-12 py-2 text-white rounded-4xl bg-[#FA8128] shadow-md">
                Search
              </button>
            </div>

            <div className="mt-10 flex flex-col items-end">
              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <TbArrowBack />
                <span>Free Cancellation</span>
              </div>

              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <FaLock />
                Luggage Protection €10,000
              </div>

              <div className="flex items-center text-[#FA8128] text-[22px] gap-2 justify-end">
                <GiWorld />
                10000+ spots
              </div>
            </div>
          </div>
        </div>
        <div className="section-2 flex justify-between mt-10">
          <div
            className="section-2-left h-[700px] w-[700px] ml-10 pt-44 pb-10 pl-30 flex-col justify-between text-left border-4 rounded-[50%] 
           border-[#FA8128]"
          >
            <div className="flex flex-col gap-1">
              <div className="steps text-[30px] leading-tight">Step 1</div>
              <div className="steps-content text-[#63C5DA] text-[50px] leading-none">
                Book Luggage <span className="text-[#FA8128]">Storage</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-9">
              <div className="steps text-[30px]  leading-tight">Step 2</div>
              <div className="steps-content text-[#63C5DA] text-[50px] leading-none">
                Drop Your <span className="text-[#FA8128]">Luggage</span>
              </div>
            </div>

            <div className="flex flex-col gap-1 mt-9 ">
              <div className="steps text-[30px]  leading-tight">Step 3</div>
              <div className="steps-content text-[#63C5DA] text-[50px] leading-none">
                Enjoy Your <span className="text-[#FA8128]">Stay</span>
              </div>
            </div>
          </div>
          <div className="luggage-man h-[700px] w-[20px] z-50 translate-x-[540px] translate-y-15 absolute"></div>
          <div className="section-2-right h-[600px] w-[550px]   flex flex-col justify-center items-end pr-10 leading-tight">
            <div className="text-[#63C5DA] text-[70px] font-bold">
              How does it
            </div>
            <div className="text-[#FA8128] text-[70px] font-bold">work?</div>
          </div>
        </div>
        <div className="section-3 mt-25">
          <div className="text-[#63C5DA] text-[45px] font-bold text-center">
            We have your back for the{" "}
            <span className="text-[#FA8128] ml-7">Luggage</span>
          </div>
          <div className="relative">
            <div className="w-[50%] ml-[4%] mt-28 p-10 pr-20 border-2 border-[#63C5DA] border-l-0 ">
              <div className="text-[50px] font-bold text-end leading-tight">
                <div className="text-[#FA8128]">Services starting</div>
                <div className="text-[#FA8128]">from just</div>
                <div className="text-[#63C5DA]">€4.5</div>
              </div>

              <div className="text-[#FA8128] text-end text-[22px] leading-tight mt-5">
                <div className="">Available 24/7</div>
                <div className="">Cheaper and Safe</div>
              </div>
            </div>
            <div className="suitcase z-10 absolute translate-x-[770px] -translate-y-[580px]"></div>
          </div>
        </div>
        <div className="section-4 mt-45 ">
          <div className="text-[#63C5DA] text-[45px] font-bold text-center">
            <span className="text-[#FA8128]">Reviews </span>
            from our Backpackers
          </div>
          <div className="reviews h-[400px]   p-5 flex items-center mt-5">
            {/* Left Arrow */}
            <div className="flex justify-center flex-[15%]">
              <BsArrowLeftCircle className="text-5xl text-[#FA8128] cursor-pointer" />
            </div>

            {/* Middle Content */}
            <div className="flex-[70%]  border-2 border-[#63C5DA] p-5 text-center">
              <p className="text-2xl font-bold text-gray-700">
                "This is a random review text. Absolutely amazing service!"
              </p>
              <p className="text-lg text-gray-500 h-70">- A Happy Customer</p>
            </div>

            {/* Right Arrow */}
            <div className="flex justify-center flex-[15%]">
              <BsArrowRightCircle className="text-5xl text-[#FA8128] cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="section-5 mt-2">
          <div className="w-[75%] ml-[4%] mt-28 p-10 pr-20 border-2 border-[#63C5DA] border-l-0 ">
            <div className="text-[50px] font-bold  leading-tight">
              <div className="text-[#FA8128]">
                No more worries about your luggage!
              </div>
              <div className="text-[#63C5DA]">
                We take care of it like its our own
              </div>
            </div>

            <div className="text-[#FA8128]  text-[30px] leading-tight mt-15">
              <div className="">Comprehensive Protection</div>
              <div className="text-[#63C5DA]">
                Your luggage is safeguarded with coverage up to €10,000 for
                damage, loss, or theft.
              </div>
            </div>
            <div className="text-[#FA8128]  text-[30px] leading-tight mt-10">
              <div className="">Reliable storage partners</div>
              <div className="text-[#63C5DA]">
                Our verified partners ensure secure handling through ID checks
                and reservation confirmations
              </div>
            </div>
          </div>
          <div className="luggage z-10 absolute translate-x-[1050px] -translate-y-[580px]"></div>
        </div>
        <div className="section-6 mt-25 ml-[7%]">
          <div className="text-[#FA8128] text-[45px] font-bold  ">
            Accessible Everywhere!
          </div>
          <div className="text-[#63C5DA] text-[45px]   ">
            Safe and reliable luggage storage{" "}
            <span className="text-[#FA8128] font-medium">WORLDWIDE.</span>
          </div>
          <div className="map-image"></div>
        </div>
        <div className="section-7 mt-25 ml-[7%]">
          <div className="text-[#FA8128] text-[45px] font-bold text-center ">
            Frequently <span className="text-[#63C5DA]">Asked Questions</span>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8 text-center">
            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <h3 className="text-lg  text-[#FA8128] font-semibold">
                What is Baggage Bugs storage?
              </h3>
            </div>
            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <h3 className="text-lg text-[#FA8128] font-semibold">
                How to book luggage storage?
              </h3>
            </div>
            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <h3 className="text-lg text-[#FA8128]  font-semibold">
                How much does luggage cost?
              </h3>
            </div>
            <div className="p-4 border border-[#63C5DA] rounded-lg shadow-md bg-white">
              <h3 className="text-lg text-[#FA8128] font-semibold">
                Cost of 2 days of luggage?
              </h3>
            </div>
          </div>
        </div>
        <div className="section-8 mt-40 ml-[7%] flex items-center justify-center gap-2">
          <div className="flex justify-center flex-[10%]">
            <BsArrowLeftCircle className="text-5xl text-[#63C5DA] cursor-pointer" />
          </div>
          <div className="tower p-4 w-[26.66%]   rounded-lg  "></div>
          <div className="tower p-4 w-[26.66%]  rounded-lg  "></div>
          <div className="tower p-4 w-[26.66%]   rounded-lg "></div>
          <div className="flex justify-center flex-[10%]">
            <BsArrowRightCircle className="text-5xl text-[#63C5DA] cursor-pointer" />
          </div>
        </div>
        <div className="section-9 mt-40 w-full pl-[7%]  pr-[4%]  flex h-[500px]">
          <div className="section-9-left w-[50%]   flex flex-col gap-5">
            <div className="leading-tight">
              <div className="text-[#FA8128] text-[70px] font-bold ">About</div>
              <div className="text-[#63C5DA] text-[70px] font-bold  ">
                Baggage Bugs
              </div>
            </div>
            <div className=" text-3xl"> ⭐⭐⭐⭐⭐</div>
            <div className="leading-tight">
              <div className="text-[#63C5DA] text-[25px] ">
                5 star ratings by <span className="text-[#FA8128] ">2345+</span>{" "}
                verified{" "}
              </div>
              <div className="text-[#63C5DA] text-[25px] ">bag packers </div>
            </div>
            <div className=" font-light text-[40px] flex gap-5 ">
              <FaInstagram />
              <RiFacebookCircleLine />
              <BsTwitterX />
              <TbBrandLinkedin />
            </div>
            <div className="">
              <div className="text-[#FA8128] text-[25px]  ">Contact Us</div>
              <div className="text-[#63C5DA] text-[25px]  ">
                baggagebugs123@gmail.com
              </div>
              <div className="text-[#63C5DA] text-[25px]  ">
                +88 8373746498{" "}
              </div>
            </div>
          </div>
          <div className="section-9-right w-[50%]  text-[32px] text-[#63C5DA] flex flex-col justify-between">
            <div className="">
              <span className="text-[#FA8128] font-bold">Baggage Bugs</span> is
              a collaborative luggage storage network, partnering with trusted
              shops worldwide to provide a secure and convenient solution for
              travelers.
            </div>
            <div className="">
              <span className="text-[#FA8128] font-bold">
                Say goodbye to the hassle
              </span>{" "}
              of carrying heavy bags while exploring a new city.
            </div>
            <div className="">
              Your luggage will always have a
              <span className="text-[#FA8128] font-bold">safe place</span>,
              allowing you to enjoy your journey to the fullest!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
