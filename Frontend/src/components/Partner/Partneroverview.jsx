import React from "react";
import "../../styles/Login.css"

const Partneroverview = () => {
  
  return (
    <div className="main flex h-screen w-full">
      {/* Left Section */}
      <div className="left w-[40%] h-full bg-[#FA8128] relative flex items-center justify-center">
        <div className="logoimg absolute top-10 left-10"></div>
        <div className="globeimg opacity-45 w-full h-full"></div>
      </div>

        {/* Right Section */}
        <div className="right w-[60%] flex items-center justify-center">
          <div className="map">
            <div className="up flex justify-between">
              <div className="cont flex gap-3 m-10">
                <h1 className="text-[#FA8128] font-medium text-4xl">Hello,</h1>
                <h1 className="text-[#28d3fa] font-medium text-4xl">Partner</h1>
              </div>
              <div className="crossimg m-10"></div>
              <div className="otherlinks ml-11 mt-10 space-y-3">
                <SocialButton  icon={<GoogleIcon />} text="Continue with Google" />
                <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
                <SocialButton icon={<StoreIcon />} text="Store Baggage" />
              </div>
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
    
  );
};

export default Partneroverview;
