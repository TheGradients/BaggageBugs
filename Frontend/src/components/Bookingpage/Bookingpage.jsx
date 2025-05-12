import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/Bookingpage.css";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Bookingpage = () => {
  const navigate = useNavigate();
  const [map, setMap] = useState(null);
  const [center, setCenter] = useState({ lat: 41.3851, lng: 2.1734 });
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [markerPosition, setMarkerPosition] = useState(null);

  const [destination, setDestination] = useState("");
  const [numberofbag, setnumberofbag] = useState(0);
  const [dropOffDate, setDropOffDate] = useState(new Date());
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [showDropOffCalendar, setShowDropOffCalendar] = useState(false);
  const [showPickUpCalendar, setShowPickUpCalendar] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [clicked, setClicked] = useState(false);

  const containerStyle = { width: "100%", height: "700px" ,};

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setCenter({ lat: latitude, lng: longitude });
        setLat(latitude);
        setLng(longitude);
      });
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
        setLat(location.lat);
        setLng(location.lng);

        try {
          const facilityRes = await axios.post(
            "https://baggagebugs-81tp.onrender.com/api/v1/map/facilitiesBySearch",
            { userCoordinates: [location.lng, location.lat] },
            { withCredentials: true }
          );
          const coords = facilityRes.data.message[0].geolocation.coordinates;
          setMarkerPosition({ lat: coords[1], lng: coords[0] });
        } catch (error) {
          console.error("API error:", error);
        }

        if (map) {
          map.panTo(location);
          map.setZoom(14);
        }
      } else {
        alert("Location not found.");
      }
    } catch (err) {
      console.error("Search error:", err);
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
  ];

  const sliderSettings = {
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

  const handleDetails = async () => {
    try {
      const response = await axios.get(
        "https://baggagebugs-81tp.onrender.com/api/v1/facility/",
        {
          withCredentials: true,
        }
      );
      console.log("details : ", response.data);
    } catch (error) {
      console.log("error : ", error);
    }
  };
  useEffect(() => {
    handleDetails(); // Call once when the component mounts
  }, []);
  
  return (
    <div className="main h-screen w-full">
      {/* Navbar */}
      <div className="navbar flex p-2 pl-16 m-4 justify-between text-2xl">
        <div className="flex">
          <div className="logo-bag" />
          <div className="logo" />
        </div>

        {/* Destination Input */}
        <div className="relative m-2 w-[300px]">
          <input
            className="border-2 rounded-4xl border-[#63C5DA] p-2 w-full text-[#FA8128] shadow-md pr-12 h-12"
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

        {/* Drop-off and Pickup */}
        {[
          [
            "Drop-off",
            dropOffDate,
            showDropOffCalendar,
            setShowDropOffCalendar,
            setDropOffDate,
          ],
          [
            "Pick-up",
            pickUpDate,
            showPickUpCalendar,
            setShowPickUpCalendar,
            setPickUpDate,
          ],
        ].map(([label, date, showCal, setShowCal, setDate], idx) => (
          <div className="relative" key={label}>
            <input
              className="border-2 mt-2 rounded-4xl border-[#63C5DA] p-2 text-[#FA8128] shadow-md pr-12 h-12"
              placeholder={label}
              readOnly
              value={formatDate(date)}
              onClick={() => setShowCal(!showCal)}
            />
            {showCal && (
              <div className="absolute z-10">
                <Calendar
                  onChange={(d) => {
                    setDate(d);
                    setShowCal(false);
                  }}
                  value={date}
                />
              </div>
            )}
          </div>
        ))}

        {/* Bag Counter */}
        <div className="box mt-2 flex h-[50px] w-[200px] items-center justify-center text-white">
          <button onClick={() => setnumberofbag(numberofbag - 1)}>-</button>
          <span className="mx-3">{numberofbag}</span>
          <button onClick={() => setnumberofbag(numberofbag + 1)}>+</button>
        </div>

        {/* Language Dropdown */}
        <div className="relative mt-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
          >
            <IoIosArrowDown
              size={15}
              color="#FA8128"
              className="w-15 h-12 mr-5 rounded-2xl border border-[#FA8128]"
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

      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {markerPosition && <Marker position={markerPosition} />}

          <div className="w-full flex justify-center mt-2">
            {clicked ? (
              <div className="absolute mt-44   flex -ml-96 mr-96 items-center   justify-items-start h-[40%] bg-gray-50 bg-opacity-80 backdrop-blur-sm">
                <div className="border-2 border-[#63C5DA] p-4 overflow-hidden shadow-lg bg-white transition-all hover:shadow-xl flex flex-col gap-y-4 divide-y divide-gray-300 max-w-md w-full">
                  {/* Image */}
                  <div className="w-full h-48 bg-gray-100 rounded overflow-hidden">
                    <img
                      src="/BookingPhoto.svg"
                      alt="Storage"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="pt-2">
                    <div className="text-[#FA8128] text-xl font-semibold">
                      Luggage Storage 1
                    </div>
                    <div className="text-[#FA8128] text-sm font-light">
                      Queen Street, Melbourne
                    </div>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <img
                          key={i}
                          src="/Rating.svg"
                          alt="Star"
                          className="w-5 h-5"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Availability */}
                  <div className="pt-2 text-sm">
                    <div className="text-green-700">Open - Closes 11:00PM</div>
                    <div className="text-[#63C5DA]">
                      3 min away from your location
                    </div>
                  </div>

                  {/* Facilities */}
                  <div className="pt-2 flex gap-2 flex-wrap">
                    {["Wifi", "Restroom", "CCtv"].map((facility) => (
                      <button
                        key={facility}
                        className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm"
                      >
                        {facility}
                      </button>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="pt-2 text-center">
                    <p className="text-[#FA8128] text-lg font-medium">
                      At 2.5 EUR per bag/day
                    </p>
                    <div className="flex gap-2 justify-center my-2 flex-wrap">
                      {["6:30 PM", "8:30 PM", "9:30 PM", "10:00 PM"].map(
                        (time) => (
                          <button
                            key={time}
                            className="border-2 border-[#63C5DA] rounded px-3 py-1 text-[#FA8128] text-sm"
                          >
                            {time}
                          </button>
                        )
                      )}
                    </div>
                    <button className="bg-[#FA8128] text-white px-5 py-2 rounded-3xl mt-2">
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Slider {...sliderSettings} className="w-[85%] mt-96 max-w-7xl">
                {reviewsArr.map((review, index) => (
                  <div
                    key={index}
                    className="p-4 flex justify-center  items-center"
                  >
                    <div className="flex flex-row border-2 border-[#63C5DA] rounded-xl shadow-lg p-4 w-full max-h-[350px] overflow-hidden bg-white">
                      <div className="w-[35%]">
                        <img
                          src={review.img}
                          alt="Storage"
                          className="h-48 w-72 object-cover rounded-lg shadow-md"
                        />
                      </div>
                      <div className="w-[60%] flex flex-col justify-between items-start pl-4">
                        <div>
                          <div className="text-[#FA8128] text-xl font-semibold">
                            {review.name}
                          </div>
                          <div className="text-[#FA8128] text-sm font-light">
                            {review.address}
                          </div>
                          <div className="flex items-center mt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <img
                                key={i}
                                src="/Rating.svg"
                                alt="Star"
                                className="w-5 h-5"
                              />
                            ))}
                          </div>
                        </div>
                        <div className="text-sm">
                          <div className="text-green-700">{review.time}</div>
                          <div className="text-[#63C5DA]">
                            {review.distance}
                          </div>
                        </div>
                        <button
                          className="bg-[#FA8128] text-white px-3 py-2 rounded-3xl"
                          onClick={() => setClicked(true)}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </GoogleMap>
      )}
    </div>
  );
};

export default Bookingpage;
