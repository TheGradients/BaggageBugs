import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
const Profile = () => {
  const menuItems = [
    "My Profile",
    "Notifications",
    "Payment Methods",
    "Passwords",
  ];
  const [selectedItem, setSelectedItem] = useState("My Profile");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  return (
    <>
      <div className="page-details p-2 sm:px-10">
        {/* NAVBAR */}
        <div className="navbar flex flex-col sm:flex-row items-start sm:items-center p-2 m-4 justify-between text-2xl gap-4">
          <div className="flex items-center gap-2">
            <div className="logo-bag"></div>
            <div className="logo"></div>
          </div>
          <div className="nav-links flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="relative">
              <select className="appearance-none border-2 border-[#FA8128] rounded-lg p-2 pr-10 bg-white">
                <option value="en">English</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
              </select>
              <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                <img src="/Dropdown.svg" alt="" className="w-7 h-7" />
              </div>
            </div>
            <div className="burger p-2">
              <GiHamburgerMenu size={35} color="#FA8128" />
            </div>
          </div>
        </div>
        <div className="main-section flex flex-col lg:flex-row w-full mt-5 gap-4">
          {/* LEFT MENU */}
          <div className="left-section w-full lg:w-[20%] px-8 pt-3 pb-5 flex flex-col gap-10 border-t-4 border-r-0 lg:border-r-4 border-b-4 border-[#63C5DA] shadow-[4px_4px_10px_#FA8128]">
            <div className="file flex-col">
              <div className="heading-left text-[32px] md:text-[50px] text-[#63C5DA] underline font-bold">
                My Ads
              </div>
              <div className="subheading-left text-[#63C5DA]">Hudson Lane</div>
            </div>
            <div className="flex flex-col gap-10 text-[20px] md:text-[22px] text-center font-bold">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className={`left-item rounded-3xl p-2 text-[20px] md:text-[23px] cursor-pointer transition duration-200
                    ${
                      selectedItem === item
                        ? "bg-[#FA8128] text-white"
                        : "bg-white text-[#FA8128]"
                    }`}
                  onClick={() => handleItemClick(item)}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div className="right-section w-full lg:w-[80%]">
            {selectedItem === "My Profile" && (
              <div className="profile-div flex flex-col gap-10 px-5 md:px-10 pt-10 text-[20px] md:text-[24px] h-full text-[#FA8128] font-bold">
                <div className="my-profile"> My Profile</div>
                <div className="flex flex-col gap-14">
                  <div className="row-1 flex justify-between items-center">
                    <input
                      className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                      placeholder="First Name"
                    />
                    <input
                      className="content-input  border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="row-2 flex justify-between items-center">
                    <input
                      type="date"
                      className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                      placeholder="Date of Birth"
                    />
                    <input
                      className="content-input  border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                      placeholder="Email"
                    />
                  </div>
                  <div className="row-3 flex justify-between items-center">
                    <input
                      className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                      placeholder="Phone Number"
                    />
                  </div>

                  <button className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl w-26">
                    Save
                  </button>
                </div>
              </div>
            )}
            {selectedItem === "Notifications" && (
              <div className="notification-div flex flex-col gap-10 px-5 md:px-10 pt-10 text-[20px] md:text-[24px] h-full text-[#FA8128] font-bold">
                <div className="my-notifications"> My Notifications</div>
                <div className="text-[#63C5DA] text-[18px]">
                  {" "}
                  Choose your notification preferences and how you prefer to be
                  contacted.
                </div>
                <div className="text-[#FA8128] text-[18px]">
                  Message/Reminders
                </div>
                <div className="text-[#63C5DA] text-[18px]">
                  Recieve my booking information
                </div>
                <div className="text-[#63C5DA] text-[18px]">Email</div>
              </div>
            )}
            {selectedItem === "Payment Methods" && (
              <div className="payment-div flex flex-col gap-10 px-5 md:px-10 pt-10 text-[20px] md:text-[24px] h-full text-[#FA8128] font-bold">
                <div className="payment"> Payment Methods</div>{" "}
                <div className="bank-acc p-3 border-[#63C5DA] border-2 w-fit flex items-center gap-2 cursor-pointer">
                  Add Credit Card
                  <AiOutlinePlusCircle className="text-2xl" />
                </div>
              </div>
            )}
            {selectedItem === "Passwords" && (
              <div className="password-div flex flex-col gap-10 px-5 md:px-10 pt-10 text-[20px] md:text-[24px] h-full text-[#FA8128] font-bold">
                <div className="passwordAndSecurity">Password nad Security</div>
                <div className="row-1 flex justify-between items-center">
                  <input
                    type="password"
                    className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Current Password"
                  />
                </div>
                <div className="row-2 flex justify-between items-center">
                  <input
                    type="password"
                    className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="New Password"
                  />
                </div>
                <div className="row-2 flex justify-between items-center">
                  <input
                    type="password"
                    className="content-input   border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Re-enter Password"
                  />
                </div>
                <div className="text-[#63C5DA] text-[15px]">
                  Your password must be at least 8 characters long and include
                  at least one letter and one number. Increase its security by
                  including special characters.
                </div>
                <button className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl w-60">
                  Reset Password
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
