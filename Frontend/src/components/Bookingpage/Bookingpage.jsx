import React, { useState, useEffect, useCallback } from "react";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Bookingpage.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { BsArrowLeftCircle } from "react-icons/bs";
import { BsArrowRightCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Storage from "./Storage";
const Bookingpage = () => {
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });
  const [markerPosition, setMarkerPosition] = useState(null);
  const containerStyle = {
    width: "100%",
    height: "500px",
  };

  const [numberofbag, setnumberofbag] = useState(0);
  const [destination, setDestination] = useState("");
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [showDropOffCalendar, setShowDropOffCalendar] = useState(false);
  const [showPickUpCalendar, setShowPickUpCalendar] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const incrementor = () => setnumberofbag(numberofbag + 1);
  const decrementor = () => setnumberofbag(numberofbag - 1);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        () => {
          console.warn("Geolocation not allowed. Using default location.");
        }
      );
    }
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAEOzozYCsDelJTwhv-pOJtxNk69SPgEzo",
  });

  const onLoad = useCallback(
    (mapInstance) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      mapInstance.fitBounds(bounds);
      setMap(mapInstance);
    },
    [center]
  );

  const onUnmount = useCallback(() => setMap(null), []);

  const formatDate = (date) =>
    date instanceof Date ? date.toISOString().split("T")[0] : "";

  const handleSearchDestination = async () => {
    if (!destination) return;
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          destination
        )}&key=AIzaSyAEOzozYCsDelJTwhv-pOJtxNk69SPgEzo`
      );
      const data = await response.json();
      if (data.results.length) {
        const location = data.results[0].geometry.location;
        setCenter(location);
        setMarkerPosition(location);
        if (map) {
          map.panTo(location);
          map.setZoom(14);
        }
      } else {
        alert("Location not found.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  const reviewsArr = [
    {
      name: "Luggage Storage 1",
      address: "Queen Street, Melbourne",
      img: "/BookingPhoto.svg",
      time: "Open - Closes 11:00PM",
      distance: "3 min away from your location",
    },
    {
      name: "Luggage Storage 2",
      address: "Queen Street, Melbourne",
      img: "/BookingPhoto.svg",
      time: "Open - Closes 11:00PM",
      distance: "3 min away from your location",
    },
    {
      name: "Luggage Storage 3",
      address: "Queen Street, Melbourne",
      img: "/BookingPhoto.svg",
      time: "Open - Closes 11:00PM",
      distance: "3 min away from your location",
    },
    {
      name: "Luggage Storage 4",
      address: "Queen Street, Melbourne",
      img: "/BookingPhoto.svg",
      time: "Open - Closes 11:00PM",
      distance: "3 min away from your location",
    },
    {
      name: "Luggage Storage 5",
      address: "Queen Street, Melbourne",
      img: "/BookingPhoto.svg",
      time: "Open - Closes 11:00PM",
      distance: "3 min away from your location",
    },
  ];
  const settings2 = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: (
      <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <BsArrowLeftCircle className="text-[#63C5DA] text-4xl" />
      </div>
    ),
    nextArrow: (
      <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer">
        <BsArrowRightCircle className="text-[#63C5DA] text-4xl mr-10" />
      </div>
    ),
  };

  const [showStorage, setShowStorage] = useState(false);
  const handleClick = () => {
    setShowStorage(true);
  };
  return (
    <div className="main h-screen w-full">
      <div className="navbar flex p-2 pl-16 m-4 justify-between text-2xl">
        <div className="flex">
          <div className="logo-bag"></div>
          <div className="logo"></div>
        </div>

        {/* Destination Input */}
        <div className="relative m-2 w-[300px]">
          <input
            className="border-2 rounded-4xl border-[#63C5DA] p-2 w-full mb-2 text-[#FA8128] shadow-md pr-12 h-12"
            placeholder="Destination"
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearchDestination()}
          />
          <span
            className="absolute right-4 top-1/2 transform -translate-y-4 text-[#63C5DA] cursor-pointer"
            onClick={handleSearchDestination}
          >
            <IoIosSearch size={24} />
          </span>
        </div>

        {/* Drop-off Date */}
        <div className="relative">
          <input
            className="border-2 mt-2 rounded-4xl border-[#63C5DA] p-2 w-full mb-2 text-[#FA8128] shadow-md pr-12 h-12"
            placeholder="Drop-off"
            readOnly
            value={formatDate(dropOffDate)}
            onClick={() => setShowDropOffCalendar(!showDropOffCalendar)}
          />
          {showDropOffCalendar && (
            <div className="absolute z-10">
              <Calendar
                onChange={(date) => {
                  setDropOffDate(date);
                  setShowDropOffCalendar(false);
                }}
                value={dropOffDate}
              />
            </div>
          )}
        </div>

        {/* Pick-up Date */}
        <div className="relative">
          <input
            className="border-2 mt-2 rounded-4xl border-[#63C5DA] p-2 w-full mb-2 text-[#FA8128] shadow-md pr-12 h-12"
            placeholder="Pick-up"
            readOnly
            value={formatDate(pickUpDate)}
            onClick={() => setShowPickUpCalendar(!showPickUpCalendar)}
          />
          {showPickUpCalendar && (
            <div className="absolute z-10">
              <Calendar
                onChange={(date) => {
                  setPickUpDate(date);
                  setShowPickUpCalendar(false);
                }}
                value={pickUpDate}
              />
            </div>
          )}
        </div>

        {/* Number of Bags */}
        <div className="box mt-2 flex h-[50px] w-[200px]">
          <div className="left border-1 border-[#63C5DA]"></div>
          <div className="right flex text-white justify-center items-center">
            <div className="uparrow mr-2" onClick={decrementor}></div>
            <div className="number mr-2">{numberofbag}</div>
            <div className="downarrow" onClick={incrementor}></div>
          </div>
        </div>

        {/* Hamburger Menu with Language Dropdown */}
        <div className="relative mt-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <IoIosArrowDown
              size={15}
              color="#FA8128"
              className="w-15 h-12 mr-5 rounded-2xl border-1 border-[#FA8128]"
            />
          </div>
          {showLanguageDropdown && (
            <div className="absolute right-0 mt-2 w-[150px] bg-white border border-[#63C5DA] rounded-lg shadow-md">
              <ul className="text-[#FA8128]">
                {["English", "Spanish", "French", "German"].map((lang) => (
                  <li
                    key={lang}
                    className="p-2 hover:bg-[#FA8128] hover:text-white cursor-pointer"
                    onClick={() => console.log(`${lang} selected`)}
                  >
                    {lang}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="relative mt-3">
          <GiHamburgerMenu size={40} color="#FA8128" />
        </div>
      </div>

      <div>
        {isLoaded && (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {markerPosition && (
              <Marker
                position={markerPosition}
                label={{
                  text: "📍 My Spot",
                  color: "#FA8128",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              />
            )}
          </GoogleMap>
        )}
      </div>
      {/* Slider Section */}
      <div className="w-full flex justify-center mt-8">
        <Slider {...settings2} className="w-[85%] max-w-7xl">
          {reviewsArr.map((review, index) => (
            <div key={index} className="p-4 flex justify-center items-center">
              <div className="flex flex-row border-2 border-[#63C5DA] rounded-xl shadow-lg p-4 w-full max-h-[350px] overflow-hidden bg-white">
                {/* Photo Section */}
                <div className="w-[35%]">
                  <img
                    src={review.img}
                    alt="Person"
                    className="h-48 w-72 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Text Section aligned to top right */}
                <div className="w-[60%] flex flex-col justify-between items-start pl-4">
                  <div className="name-address ">
                    <div className="text-[#FA8128] text-xl font-semibold">
                      {review.name}
                    </div>
                    <div className="text-[#FA8128] text-sm font-light">
                      {review.address}
                    </div>
                    <div className="flex items-center mt-1">
                      <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
                      <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
                      <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
                      <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
                      <img src="/Rating.svg" alt="Star" className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="time-details text-sm ">
                    <div className="text-green-700">{review.time}</div>
                    <div className="text-[#63C5DA]">{review.distance}</div>
                  </div>
                  <button
                    className="bg-[#FA8128] text-white px-3 py-2  rounded-3xl"
                    onClick={<handleClick />}
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
         
      </div>
    </div>
  );
};

export default Bookingpage;
