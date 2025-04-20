import React from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Partner.css";

// Dummy Icon Components (replace with actual icons or images)
const GoogleIcon = () => <span className="p1"></span>;
const FacebookIcon = () => <span className="p2"></span>;
const StoreIcon = () => <span className="p3"></span>;
const StarIcon = () => <span className="star"></span>;

// Reusable Button with onClick
const SocialButton = ({ icon, text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center border-2 border-[#28d3fa] gap-4 px-6 py-3 w-full bg-white text-[#FA8128] transition hover:shadow-md"
  >
    {icon}
    <span className="font-medium">{text}</span>
  </button>
);

const PartnerOverview = () => {
  const navigate = useNavigate();

  // Optional functions for actions
  const handleProfileClick = () => {
  
    navigate("/profile");
  };

  const handleSettingsClick = () => {
    console.log("Account Settings clicked");
    navigate("/settings");
  };

  const handleBookingsClick = () => {
    console.log("Bookings clicked");
    navigate("/bookings");
  };

  const handleReviewsClick = () => {
    console.log("Reviews clicked");
    navigate("/reviews");
  };

  const handleAssistanceClick = () => {
    console.log("Assistance clicked");
    navigate("/assistance");
  };

  const handleLogoutClick = () => {
    console.log("Logging out...");
    // Optional: clear local storage/session, redirect to login
    navigate("/login");
  };

  return (
    <div className="main flex h-screen w-full">
      {/* Left Section */}
      <div className="left w-[40%] h-full bg-[#FA8128] relative flex items-center justify-center">
        <div className="logoimg absolute top-10 left-10"></div>
        <div className="globeimg opacity-45 w-full h-full"></div>
      </div>

      {/* Right Section */}
      <div className="right w-[60%] h-full flex items-center justify-center">
        <div className="map w-full px-10">
          <div className="flex justify-between items-start">
            <div className="cont flex gap-3 mt-10">
              <h1 className="text-[#FA8128] font-semibold text-4xl">Hello,</h1>
              <h1 className="text-[#28d3fa] font-semibold text-4xl">Partner</h1>
            </div>
            <div className="crossimg mt-10 cursor-pointer"onClick={()=>navigate("/landingpage")}></div>
          </div>

          {/* 2x3 Button Grid */}
          <div className="grid grid-cols-2 gap-7 text-xl mt-16 max-w-xl">
            <SocialButton icon={<GoogleIcon />} text="My Profile" onClick={handleProfileClick} />
            <SocialButton icon={<FacebookIcon />} text="Account Settings" onClick={handleSettingsClick} />
            <SocialButton icon={<StoreIcon />} text="My Bookings" onClick={handleBookingsClick} />
            <SocialButton icon={<StarIcon />} text="My Reviews" onClick={handleReviewsClick} />
            <SocialButton icon={<StarIcon />} text="Assistance" onClick={handleAssistanceClick} />
            <SocialButton icon={<StarIcon />} text="Logout" onClick={handleLogoutClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerOverview;
