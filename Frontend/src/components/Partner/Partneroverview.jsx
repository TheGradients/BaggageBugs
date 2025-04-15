import React from "react";
import "../../styles/Login.css"

const Partneroverview = () => {
  
  return (
    <>
      <div className="main h-screen flex w-full">
        {/* Left Section */}
        <div className="left w-[40%] h-screen bg-[#FA8128] flex items-center justify-center">
          <div className="logoimg"></div>
          <div className="globeimg opacity-45"></div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Partneroverview;
