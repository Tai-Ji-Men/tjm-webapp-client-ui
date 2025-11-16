"use client"

import {useEffect, useState} from "react"
import Image from "next/image"
import ContactPopup from "@/components/contactprop"
import {MapPin, Navigation, Phone, X} from "lucide-react"
import EventCard from "@/components/EventCard";
import {getEvents, getPageContent} from "@/lib/apiUtils";

export default function JoinUsPage() {

  const [selectedAcademy, setSelectedAcademy] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false)

  const handleOpenPopup = () => setPopupOpen(true)
  const handleClosePopup = () => setPopupOpen(false)

  const [events, setEvents] = useState([]);
  const [error, setError] = useState(null);

  const academies = [
    {
      name: "Pasadena",
      location: "CA, U.S.A",
      tel: "1-626-324-3093",
      address: "570 E. Orange Grove Blvd., Pasadena, CA 91104, USA",
      image: "/images/icons/pasadena.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8234!2d-118.1445!3d34.1478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA4JzUyLjEiTiAxMTjCsDA4JzQwLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
    },
    {
      name: "Walnut",
      location: "CA, U.S.A",
      tel: "1-909-468-1362",
      address: "385 S. Lemon Ave, Suite G, Walnut, CA 91789, USA",
      image: "/images/icons/walnut.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8234!2d-117.8653!3d34.0203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA4JzUyLjEiTiAxMTfCsDA4JzQwLjIiVw!5e0!3m2!1sen!2sus!4v1234567890"
    },
    {
      name: "Cupertino",
      location: "CA, U.S.A",
      tel: "1-408-996-1976",
      address: "10177 S. De Anza Blvd., Cupertino, CA 95014, USA",
      image: "/images/icons/cupertino.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8234!2d-122.0321!3d37.3213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDE5JzE2LjciTiAxMjLCsDAxJzU1LjYiVw!5e0!3m2!1sen!2sus!4v1234567890"
    },
    {
      name: "Santa Clara",
      location: "CA, U.S.A",
      tel: "1-408-916-4919",
      address: "5155 Stevens Creek Blvd., Santa Clara, CA 95051, USA",
      image: "/images/icons/santa.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.8234!2d-121.9552!3d37.3541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDIxJzE0LjgiTiAxMjHCsDU3JzE4LjciVw!5e0!3m2!1sen!2sus!4v1234567890"
    },
    {
      name: "Toronto",
      location: "Ontario, Canada",
      tel: "1-416-887-8788",
      address: "7030 Woodbine Ave, Suite 102, Markham, ON L3R 6G2, Canada",
      image: "/images/icons/toronto.png",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.8234!2d-79.3145!3d43.8471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDUwJzQ5LjYiTiA3OcKwMTgnNTIuMiJXITVlMCEzbTIhMWVuITJ1cyE0djEyMzQ1Njc4OTA"
    }
  ]

  const handleOpenDetail = (academy) => {
    setSelectedAcademy(academy)
  }

  const handleCloseDetail = () => {
    setSelectedAcademy(null)
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await getEvents();
        console.log("data: " + res);
        setEvents(res);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
      <div className="relative w-full bg-white">
        {/* Section 1: Hero Section */}
        <section
            className="relative pt-16 md:pt-20 lg:pt-24 pb-0 min-h-[600px] xs:min-h-[700px] md:min-h-[950px] lg:min-h-[1200px] overflow-hidden">
          {/* Blue Gradient Background */}
          <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #E4ECFF 62.27%, rgba(255, 255, 255, 0) 76.13%)'
              }}
          ></div>

          {/* Background Image positioned lower */}
          <div className="absolute inset-0 top-[150px] xs:top-[180px] md:top-[300px] lg:top-[400px]">
            <img
                src="/images/hero/joinus.png"
                alt="Join Us Background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="container-desktop">
              <div className="relative">
                {/* Section Label and Line */}
                <div className="mb-6 xs:mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 xs:w-12 md:w-16 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
                    <span
                        className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1.5px] xs:tracking-[2px] uppercase text-black">
                    JOIN US
                  </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16">
                  {/* Left Column - Title */}
                  <div className="max-w-full lg:max-w-[607px]">
                    <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[120%] font-bold text-black font-roboto mb-4 xs:mb-6 md:mb-8">
                      Step Into a Life of<br/>
                      Balance, Purpose<br/>
                      and Vitality
                    </h2>
                  </div>

                  {/* Right Column - Description */}
                  <div className="max-w-full lg:max-w-[512px]">
                    <p className="text-xs xs:text-sm md:text-base leading-[160%] text-[#525560] font-roboto">
                      Whether you're seeking personal transformation or looking to share positive energy with others,
                      Tai Ji Men welcomes you with open arms. Discover how you can get involved—through learning,
                      practicing, and participating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Academies */}
        <section id="AcademySection" className="relative py-12 xs:py-16 md:py-20 lg:py-[120px] bg-white">
          <div className="container-desktop">
            {/* Section Header */}
            <div className="mb-12 xs:mb-16 md:mb-20 lg:mb-[80px]">
              <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
                <div className="w-8 xs:w-12 md:w-[60px] h-[1.5px] xs:h-[2px] bg-black"></div>
                <span
                    className="text-xs xs:text-sm md:text-[14px] font-medium tracking-[0.15em] xs:tracking-[0.2em] uppercase text-black">ACADEMIES</span>
              </div>
              <div>
                <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-[1.2] mb-4 xs:mb-6">
                  A Welcoming Home for <br/>Growth and Transformation
                </h2>
                <p className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xs xs:text-sm md:text-[16px] text-black leading-[1.6] max-w-none lg:max-w-[1032px]">
                  Across the U.S. and Canada, Tai Ji Men Academies provide a peaceful sanctuary to explore the ancient
                  wisdom of Qigong and self-cultivation. Each academy offers tailored programs to improve physical
                  health,
                  mental clarity, and spiritual growth—no matter your age or background. <br/>
                  <br/>
                  More than just a place to learn, each Tai Ji Men Academy is like a second home, where people of all
                  ages come together as one big family.
                  Through gentle Qigong practices and heart-to-heart guidance, you'll find healing, joy, and lifelong
                  friendships on a shared journey of balance and self-discovery. <br/>
                  <br/>
                  Come visit your local academy and feel the warmth for yourself →
                </p>
              </div>
            </div>

            {/* Academy Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 md:gap-[26px] mb-6 xs:mb-8">
              {academies.map((academy, index) => (
                  <div
                      key={index}
                      className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden"
                  >
                    {/* Background Image with Blur and Dark Overlay */}
                    <div className="absolute inset-0">
                      <Image
                          src={academy.image}
                          alt={academy.name}
                          fill
                          className="object-cover blur-[3px]"
                      />
                      {/* Dark Tint Overlay */}
                      <div className="absolute inset-0 bg-[#0B0706] opacity-60"/>
                    </div>

                    {/* Content - Always Visible */}
                    <div className="relative z-10 flex h-full flex-col justify-between p-6 xs:p-8 md:p-10 text-white">
                      <div className="flex flex-col gap-2 xs:gap-3">
                        <h3 className="text-xl xs:text-2xl md:text-[28px] font-bold leading-[150%]">
                          {academy.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 xs:w-5 h-4 xs:h-5 flex-shrink-0"/>
                          <span className="text-base xs:text-lg md:text-[20px] font-bold leading-[150%]">
                        {academy.location}
                      </span>
                        </div>
                        <p className="mt-2 xs:mt-4 text-sm xs:text-base md:text-[18px] leading-[160%]">
                          Tel: {academy.tel}<br/>
                          Address: {academy.address}
                        </p>
                      </div>

                      {/* Detail Button */}
                      <button
                          onClick={() => handleOpenDetail(academy)}
                          className="w-[96px] h-[51px] bg-white rounded-[8px] text-[#1D2130] text-[16px] font-medium hover:bg-gray-100 transition-colors"
                      >
                        Detail
                      </button>
                    </div>
                  </div>
              ))}
            </div>
          </div>

          {/* Background image under Academy cards - responsive full width */}
          <div className="relative w-full mt-8 xs:mt-12 overflow-hidden">
            <img
                src="/images/content/joinus6.png"
                alt="Join Us Performance"
                className="w-full h-[200px] xs:h-[300px] md:h-[400px] lg:h-auto object-cover"
            />
          </div>
        </section>

        {/* Detail Modal */}
        {selectedAcademy && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
              <div
                  className="relative w-full max-w-[1400px] h-[90vh] max-h-[800px] bg-white rounded-[20px] overflow-hidden shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={handleCloseDetail}
                    className="absolute top-4 right-4 z-10 w-12 h-12 bg-[#2D2D2D] hover:bg-[#1D1D1D] rounded-lg flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-white"/>
                </button>

                <div className="flex h-full flex-col md:flex-row">
                  {/* Left Side - Map */}
                  <div className="w-full md:w-3/5 h-1/2 md:h-full relative">
                    <iframe
                        src={selectedAcademy.mapUrl}
                        width="100%"
                        height="100%"
                        style={{border: 0}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-full"
                    ></iframe>
                  </div>

                  {/* Right Side - Details */}
                  <div
                      className="w-full md:w-2/5 h-1/2 md:h-full bg-white p-6 md:p-10 flex flex-col justify-between overflow-y-auto">
                    <div>
                      <h2 className="text-3xl md:text-5xl lg:text-[64px] font-bold text-black mb-4 md:mb-6">
                        {selectedAcademy.name}
                      </h2>

                      <div className="flex items-center gap-3 mb-6 md:mb-8">
                        <MapPin className="w-6 h-6 md:w-8 md:h-8 text-black flex-shrink-0"/>
                        <span className="text-xl md:text-2xl lg:text-[28px] font-bold text-black">
                      {selectedAcademy.location}
                    </span>
                      </div>

                      <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
                        <p className="text-base md:text-lg lg:text-[20px] text-black">
                          <span className="font-semibold">Tel:</span> {selectedAcademy.tel}
                        </p>
                        <p className="text-base md:text-lg lg:text-[20px] text-black">
                          <span className="font-semibold">Address:</span> {selectedAcademy.address}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4 md:gap-6">
                      <button
                          className="flex-1 flex flex-col items-center justify-center gap-3 py-6 md:py-8 bg-white border-2 border-[#FF725E] rounded-[20px] hover:bg-[#FFF5F3] transition-colors group">
                        <div
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#FF725E] flex items-center justify-center">
                          <Navigation className="w-6 h-6 md:w-8 md:h-8 text-[#FF725E]"/>
                        </div>
                        <span className="text-base md:text-lg lg:text-xl font-semibold text-[#FF725E]">
                      Direction
                    </span>
                      </button>

                      <button
                          className="flex-1 flex flex-col items-center justify-center gap-3 py-6 md:py-8 bg-white border-2 border-[#FF725E] rounded-[20px] hover:bg-[#FFF5F3] transition-colors group">
                        <div
                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-[#FF725E] flex items-center justify-center">
                          <Phone className="w-6 h-6 md:w-8 md:h-8 text-[#FF725E]"/>
                        </div>
                        <span className="text-base md:text-lg lg:text-xl font-semibold text-[#FF725E]">
                      Call
                    </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        )}
      </div>
  )
}
