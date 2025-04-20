import React, { useState } from "react";
import "../../styles/DashboardDetails.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlinePlusCircle } from "react-icons/ai";
const DashboardDetails = () => {
  const menuItems = [
    "Details",
    "Parameters",
    "Availabilities",
    "Bank Account",
    "Income",
  ];

  const [selectedItem, setSelectedItem] = useState("Details");
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const [isFristEditClickled, setIsFirstEditClicked] = useState(false);
  const handleFirstEditClick = () => {
    setIsFirstEditClicked(!isFristEditClickled);
  };
  const handleSave1 = () => {
    setIsFirstEditClicked(false);
  };

  const handleCancel1 = () => {
    setIsFirstEditClicked(false);
  };
  const [isFirstYesClicked, setIsFirstYesClicked] = useState(false);
  const handleYes1 = () => {
    setIsFirstYesClicked(!isFirstYesClicked);
  };
  const handleSave2 = () => {
    setIsFirstYesClicked(false);
  };
  const handleCancel2 = () => {
    setIsFirstYesClicked(false);
  };
  const [isYes3Clicked, setIsYes3Clicked] = useState(false);
  const handleYes3 = () => {
    setIsYes3Clicked(!isYes3Clicked);
  };
  const handleSave3 = () => {
    setIsYes3Clicked(false);
  };
  const handleCancel3 = () => {
    setIsYes3Clicked(false);
  };

  const [isBankClicked, setIsBankClicked] = useState(false);
  const handleBankClick = () => {
    setIsBankClicked(!isBankClicked);
  };
  const handleBankSave = () => {
    setIsBankClicked(false);
  }
  const handleBankCancel = () => {
    setIsBankClicked(false);
  }
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

        {/* MAIN SECTION */}
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

          {/* RIGHT SECTION */}
          <div className="right-section w-full lg:w-[80%]">
            {/* DETAILS SECTION */}
            {selectedItem === "Details" && (
              <div className="details-div flex flex-col justify-between px-5 md:px-10 pt-10 text-[20px] md:text-[24px] h-full text-[#FA8128] font-bold">
                <div className="row-1 flex">
                  <div className="row-1-detail flex-[30%]">Facility Name</div>
                  <input
                    className="content-input flex-[35%] border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Lorem ipsum"
                  />
                  <div
                    className="edit text-[#63C5DA] flex-[25%] text-right"
                    onClick={() => handleFirstEditClick}
                  >
                    <div className="edit text-[#63C5DA] flex-[25%] text-right">
                      {isFristEditClickled ? (
                        <div className="space-x-2">
                          <button
                            className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl"
                            onClick={handleSave1}
                          >
                            Save
                          </button>
                          <button
                            className="bg-[#FA8128]  text-white px-3 py-1 rounded-3xl  "
                            onClick={handleCancel1}
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <span
                          className="cursor-pointer hover:underline items-center"
                          onClick={handleFirstEditClick}
                        >
                          Edit
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="row-2 flex">
                  <div className="row-2-detail flex-[30%]">
                    Contact Information of the Partner
                  </div>

                  <div className="edit text-[#63C5DA] flex-[25%] text-right">
                    Edit
                  </div>
                </div>
                <div className="row-3 flex gap-52">
                  <div className="row-3-detail ">Email Address</div>
                  <input
                    className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div className="row-4 flex gap-62">
                  <div className="row-4-detail ">Telephone</div>
                  <input
                    className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Lorem ipsum"
                  />
                </div>
                <div className="row-5 flex">
                  <div className="row-5-detail flex-[30%]">
                    Type of Luggage Storage
                  </div>
                  <select className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]">
                    <option>Airport Luggage</option>
                  </select>

                  <div className="edit text-[#63C5DA] flex-[25%] text-right">
                    Edit
                  </div>
                </div>
                <div className="row-6 flex">
                  <div className="row-6-detail flex-[30%]">Address</div>
                  <input
                    className="content-input flex-[35%] border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                    placeholder="Lorem ipsum"
                  />
                  <div className="edit text-[#63C5DA] flex-[25%] text-right">
                    Edit
                  </div>
                </div>
                <div className="row-7 flex">
                  <div className="content flex-[30%]">Bagpacker Services</div>
                  <div className="flex justify-between flex-[35%] gap-2 ">
                    <button className="wifi border-2 border-[#63C5DA]  flex-1/3 rounded px-2 py-1">
                      Wifi
                    </button>
                    <button className="restroom border-2 border-[#63C5DA]  flex-1/3 rounded px-2 py-1">
                      Restroom
                    </button>
                    <button className="CCtv border-2 border-[#63C5DA] rounded flex-1/3 px-2 py-1">
                      CCtv
                    </button>
                  </div>
                  <div className="content-edit text-[#63C5DA] flex-[25%] text-right">
                    Edit
                  </div>
                </div>
              </div>
            )}

            {/* PARAMETERS SECTION */}
            {selectedItem === "Parameters" && (
              <div className="parameters-div px-5 md:px-10 pt-10 text-[20px] md:text-[24px] flex flex-col gap-8 h-full text-[#FA8128] font-bold">
                <div className="params-right-item1 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="storage">
                    <div className="storage-capacity">Storage Capacity</div>
                    <div className="storage-capacity-text text-[#63C5DA] text-[18px] md:text-[20px]">
                      Storage capacity allows to limit the number of luggage
                      kept daily.
                    </div>
                  </div>
                  <div className="edit text-[#63C5DA]">Edit</div>
                </div>

                <div className="param-right-item2 flex flex-col justify-between items-start">
                  <div className="param-right-item2  ">
                    <div className="Limited-storage">Limited Storage?</div>
                    {isFirstYesClicked ? (
                      <div className="options-div flex w-full  gap-96 items-center">
                        {/* Left Side - Yes/No */}
                        <div className="yes-no-options flex   gap-2">
                          <button className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2">
                            Yes
                          </button>
                          <button
                            className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2"
                            onClick={handleCancel2}
                          >
                            No
                          </button>
                        </div>

                        {/* Right Side - Save/Cancel */}
                        <div className="yes-no-options flex gap-2">
                          <button
                            className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl"
                            onClick={handleSave2}
                          >
                            Save
                          </button>
                          <button
                            className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl"
                            onClick={handleCancel2}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2"
                        onClick={handleYes1}
                      >
                        Yes
                      </button>
                    )}
                  </div>
                </div>

                <div className="params-right-item3 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                  <div className="storage">
                    <div className="change-email">Alternate Email Address</div>
                    <div className="storage-capacity-text text-[#63C5DA] text-[18px] md:text-[20px]">
                      Receive a copy of reservation emails on an additional
                      email address.
                    </div>
                    <div className="add-email">
                      <input
                        className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full max-w-[400px] text-[18px] md:text-[20px]"
                        placeholder="enter email"
                      />
                    </div>
                  </div>
                  <div className="edit text-[#63C5DA]">Edit</div>
                </div>
              </div>
            )}

            {/* AVAILABILITIES SECTION */}
            {selectedItem === "Availabilities" && (
              <div className="available-div px-5 md:px-10 pt-10 text-[20px] md:text-[24px] flex flex-col justify-between h-full text-[#FA8128] font-bold">
                <div className="available-right-item1">
                  <div className="opening-hours">Opening Hours</div>
                  <div className="opening-hours-text text-[#63C5DA] text-[18px] md:text-[20px]">
                    Open 24 hours a day and 7 days a week
                  </div>

                  {isYes3Clicked ? (
                    <div className="options-div flex w-full  gap-96 items-center">
                      {/* Left Side - Yes/No */}
                      <div className="yes-no-options flex   gap-2">
                        <button className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2">
                          Yes
                        </button>
                        <button
                          className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2"
                          onClick={handleCancel3}
                        >
                          No
                        </button>
                      </div>

                      {/* Right Side - Save/Cancel */}
                      <div className="yes-no-options flex gap-2">
                        <button
                          className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl"
                          onClick={handleSave3}
                        >
                          Save
                        </button>
                        <button
                          className="bg-[#FA8128] text-white px-3 py-1  rounded-3xl"
                          onClick={handleCancel3}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <button
                      className="border-[#63C5DA] border-2 text-white bg-[#FA8128] px-3 py-2"
                      onClick={handleYes3}
                    >
                      Yes
                    </button>
                  )}

                  {isYes3Clicked && (
                    <div className="flex flex-col gap-1 mt-3">
                      {[
                        "Monday",
                        "Tuesday",
                        "Wednesday",
                        "Thursday",
                        "Friday",
                        "Saturday",
                        "Sunday",
                      ].map((day) => (
                        <div
                          key={day}
                          className="flex justify-between items-center text-[18px]"
                        >
                          <div className="text-[#FA8128]">
                            Are you open on {day}s?
                          </div>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2   rounded-full peer peer-checked:bg-[#FA8128] transition-all duration-300"></div>
                            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full"></div>
                          </label>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="">
                  <div className="available-right-item2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                    <div className="closing">
                      <div className="closing-hours">Closing Hours</div>
                      <div className="storage-capacity-text text-[#63C5DA] text-[18px] md:text-[20px]">
                        Indicate your closing periods to avoid receiving
                        reservations
                      </div>
                    </div>
                    <div className="edit text-[#63C5DA]">Edit</div>
                  </div>
                  <div className="available-right-item3 flex flex-col gap-2 text-[18px] md:text-[20px]">
                    <div className="storage-capacity-text text-[#FA8128]">
                      From Apr 18, 2025 to Apr 18, 2025 - Closed
                    </div>
                    <div className="storage-capacity-text text-[#FA8128]">
                      From Jan 1, 2026 to Jan 1, 2026 - Closed
                    </div>
                    <div className="storage-capacity-text text-[#FA8128]">
                      From Jan 26, 2026 to Jan 26, 2026 - Closed
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* BANK ACCOUNT SECTION */}
            {selectedItem === "Bank Account" && (
              <div className="bank-div px-5 md:px-10 pt-10 text-[20px] md:text-[24px] flex flex-col gap-8 h-full text-[#FA8128] font-bold">
                <div className="bank-acc">Bank Account</div>
                {!isBankClicked ? (
                  <div
                    className="bank-acc p-3 border-[#63C5DA] border-2 w-fit flex items-center gap-2 cursor-pointer"
                    onClick={handleBankClick}
                  >
                    Add payment method
                    <AiOutlinePlusCircle className="text-2xl" />
                  </div>
                ) : (
                  <div>
                    <div className="bank-yes-div flex flex-col gap-4 text-[#FA8128] font-bold">
                      <div className="bank-row-1 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-1-detail md:w-1/2">
                          Account Holder Name
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-2 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-2-detail md:w-1/2">Email</div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-3 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-3-detail md:w-1/2">BSB</div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-4 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-4-detail md:w-1/2">
                          Account Number
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-5 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-5-detail md:w-1/2">
                          Account Holder's Address
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-6 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-6-detail md:w-1/2">
                          Account Holder's Post Code
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-7 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-7-detail md:w-1/2">
                          Account Holder's Town/City
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-8 flex flex-col md:flex-row gap-2">
                        <div className="bank-row-8-detail md:w-1/2">
                          State Code
                        </div>
                        <input
                          className="content-input border-2 border-[#63C5DA] rounded px-2 py-2 w-full text-[18px] md:text-[20px]"
                          placeholder="Lorem ipsum"
                        />
                      </div>
                      <div className="bank-row-9 flex flex-col sm:flex-row gap-4 mt-4">
                        <button
                          className="bg-[#FA8128] text-white px-4 py-2 rounded-3xl w-full sm:w-auto"
                          onClick={handleBankSave}
                        >
                          Save
                        </button>
                        <button
                          className="bg-[#FA8128] text-white px-4 py-2 rounded-3xl w-full sm:w-auto"
                          onClick={handleBankCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* INCOME SECTION */}
            {selectedItem === "Income" && (
              <div className="income-div px-5 md:px-10 pt-10 text-[20px] md:text-[24px] flex flex-col gap-8 h-full text-[#FA8128] font-bold">
                <div className="income-right-item1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div className="total">Total Earnings</div>
                  <div className="opening-hours-text text-[#63C5DA] text-[18px] md:text-[20px] flex">
                    <div className="amount px-3 py-1 border border-[#63C5DA]">
                      100000
                    </div>
                    <div className="currency px-5 py-1 bg-[#FA8128] text-white">
                      EUR
                    </div>
                  </div>
                  <div className="relative">
                    <select
                      className="appearance-none border-2 border-[#FA8128] rounded-lg px-2 pr-10 bg-white font-light"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Sort by
                      </option>
                      <option value="month">Month</option>
                      <option value="earning">Earning</option>
                      <option value="status">Status</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                      <img src="/Dropdown.svg" alt="" className="w-7 h-7" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-between font-light flex-wrap gap-6">
                  <div>
                    <div className="font-bold">Month</div>
                    <hr className="border-b border-[#63C5DA] my-1" />
                    <div>January</div>
                    <div>February</div>
                    <div>March</div>
                    <div>April</div>
                    <div>May</div>
                    <div>June</div>
                  </div>
                  <div>
                    <div className="font-bold">Earning</div>
                    <hr className="border-b border-[#63C5DA] my-1" />
                    <div>€10,000</div>
                    <div>€8,500</div>
                    <div>€12,200</div>
                    <div>€9,800</div>
                    <div>€11,300</div>
                    <div>€13,700</div>
                  </div>
                  <div className="text-[#63C5DA]">
                    <div className="font-bold text-[#FA8128]">Status</div>
                    <hr className="border-b border-[#63C5DA] my-1" />
                    <div>Paid</div>
                    <div>Pending</div>
                    <div>Failed</div>
                    <div>Paid</div>
                    <div>Pending</div>
                    <div>Paid</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardDetails;
