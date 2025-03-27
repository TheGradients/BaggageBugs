
import React, { useState } from "react";
import "../../styles/Login.css"
import { useNavigate } from "react-router-dom";
// Placeholder social icons (Replace with actual components)
const GoogleIcon = () => <span className="googleimg"></span>;
const FacebookIcon = () => <span className="fbimg"></span>;
const StoreIcon = () => <span className="bimg"></span>;

const SocialButton = ({ icon, text }) => (
  <button className="flex items-center gap-10 p-3 w-full bg-white max-w-xs border border-gray-300 rounded-lg text-[#FA8128] transition">
    {icon} {text}
  </button>
);

const Login = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/register"); // Adjust the route based on your app's routing structure
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="main h-screen flex w-full">
      {/* Left Section */}
      <div className="left w-[40%] h-screen bg-[#FA8128] flex items-center justify-center">
        <div className="logoimg"></div>
        <div className="globeimg opacity-45"></div>
      </div>

      {/* Right Section */}
      <div className="right w-[60%] flex items-center justify-center">
        <div className="map">
          <form onSubmit={handleLogin}>
            <div className="up flex justify-between">
              <div className="cont flex gap-3 m-10">
                <h1 className="text-[#FA8128] font-medium text-4xl">Hello,</h1>

              </div>
              <div className="crossimg m-10"></div>
            </div>

            <div className="cont flex-col">
            

              <div className="flex flex-col ml-10">
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full max-w-xs mt-6 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full max-w-xs mt-6 p-3 border-2 border-[#5DCAD1] focus:outline-none focus:ring-2 focus:ring-[#F8934A] text-gray-600 placeholder-[#F8934A]/70"
                />
              </div>
              <h2 className="ml-9 underline font-extralight mt-4 text-[#5DCAD1] cursor-pointer">Forgot password?</h2>

              <button
                type="submit"
                className="h-[50px] ml-28 border-[#FFA480] border-[6px] text-white rounded-3xl w-[200px] flex justify-center items-center bg-[#FA8128] mt-8 hover:bg-[#f77a20] transition"
              >
                Login
              </button>

              <div className="cont flex -ml-112 justify-center items-center mt-3 ">
                <h2 className="font-extralight text-[#000000]">no account?</h2>
                <h2 onClick={handleRegister} className="font-extralight underline text-[#FA8128] cursor-pointer">Register</h2>
              </div>

              <div className="otherlinks ml-11 mt-10 space-y-3">
                <SocialButton  icon={<GoogleIcon />} text="Continue with Google" />
                <SocialButton icon={<FacebookIcon />} text="Continue with Facebook" />
                <SocialButton icon={<StoreIcon />} text="Store Baggage" />
              </div>
            </div>
          </form>
          <div className="cop ml-200">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
