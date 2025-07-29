"use client"

import { useState } from "react"
import Image from "next/image"
import ContactPopup from "@/layout/contactprop"
import { MapPin } from "lucide-react"

export default function JoinUsPage() {
  const [popupOpen, setPopupOpen] = useState(false)

  const handleOpenPopup = () => setPopupOpen(true)
  const handleClosePopup = () => setPopupOpen(false)

  return (
    <div className="relative w-full min-h-screen bg-white">
      {/* Header removed: global Navbar will be rendered outside */}

      {/* Hero Section (aligned with Qigong Life hero) */}
      <section className="relative pt-16 md:pt-20 lg:pt-24 pb-0 min-h-[600px] xs:min-h-[700px] md:min-h-[950px] lg:min-h-[1200px] overflow-hidden">
        {/* Blue Gradient Background up to Purpose & Vitality text */}
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
                  <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1.5px] xs:tracking-[2px] uppercase text-black">
                    JOIN US
                  </span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16">
                {/* Left Column - Title */}
                <div className="max-w-full lg:max-w-[607px]">
                  <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[120%] font-bold text-black font-roboto mb-4 xs:mb-6 md:mb-8">
                    Step Into a Life of<br />
                    Balance, Purpose<br />
                    and Vitality
                  </h2>
                </div>

                {/* Right Column - Description */}
                <div className="max-w-full lg:max-w-[512px]">
                  <p className="text-xs xs:text-sm md:text-base leading-[160%] text-[#525560] font-roboto">
                    Whether you're seeking personal transformation or looking to share positive energy with others, Tai Ji Men welcomes you with open arms. Discover how you can get involved—through learning, practicing, and participating.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academies Section */}
      <section className="relative py-12 xs:py-16 md:py-20 lg:py-[120px] bg-white">
        <div className="container-desktop">
          {/* Section Header */}
          <div className="mb-12 xs:mb-16 md:mb-20 lg:mb-[80px]">
            <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
              <div className="w-8 xs:w-12 md:w-[60px] h-[1.5px] xs:h-[2px] bg-black"></div>
              <span className="text-xs xs:text-sm md:text-[14px] font-medium tracking-[0.15em] xs:tracking-[0.2em] uppercase text-black">ACADEMIES</span>
            </div>
            <div>
              <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-[1.2] mb-4 xs:mb-6">
                A Welcoming Home for <br/>Growth and Transformation
              </h2>
              <p className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xs xs:text-sm md:text-[16px] text-black leading-[1.6] max-w-none lg:max-w-[1032px]">
                Across the U.S. and Canada, Tai Ji Men Academies provide a peaceful sanctuary to explore the ancient
                wisdom of Qigong and self-cultivation. Each academy offers tailored programs to improve physical health,
                mental clarity, and spiritual growth—no matter your age or background. <br />
                <br />
                More than just a place to learn, each Tai Ji Men Academy is like a second home, where people of all ages come together as one big family.
                Through gentle Qigong practices and heart-to-heart guidance, you'll find healing, joy, and lifelong
                friendships on a shared journey of balance and self-discovery. <br />
                <br />
                Come visit your local academy and feel the warmth for yourself →
              </p>
            </div>
          </div>

          {/* Academy Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6 mb-6 xs:mb-8">
            {/* Pasadena */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden group">
              <Image src="/images/icons/pasadena.png" alt="Pasadena Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6 text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Pasadena</h3>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <MapPin className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span className="text-sm xs:text-base md:text-lg lg:text-[20px] font-bold">CA, U.S.A</span>
                </div>
                <button onClick={handleOpenPopup} className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 xs:py-3 rounded text-xs xs:text-sm md:text-[16px] font-medium">Contact Us</button>
              </div>
            </div>

            {/* Walnut */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden group">
              <Image src="/images/icons/walnut.png" alt="Walnut Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6 text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Walnut</h3>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <MapPin className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span className="text-sm xs:text-base md:text-lg lg:text-[20px] font-bold">CA, U.S.A</span>
                </div>
                <button onClick={handleOpenPopup} className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 xs:py-3 rounded text-xs xs:text-sm md:text-[16px] font-medium">Contact Us</button>
              </div>
            </div>

            {/* Cupertino */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden group">
              <Image src="/images/icons/cupertino.png" alt="Cupertino Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6 text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Cupertino</h3>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <MapPin className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span className="text-sm xs:text-base md:text-lg lg:text-[20px] font-bold">CA, U.S.A</span>
                </div>
                <button onClick={handleOpenPopup} className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 xs:py-3 rounded text-xs xs:text-sm md:text-[16px] font-medium">Contact Us</button>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-6">
            {/* Santa Clara */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden group">
              <Image src="/images/icons/santa.png" alt="Santa Clara Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6 text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Santa Clara</h3>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <MapPin className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span className="text-sm xs:text-base md:text-lg lg:text-[20px] font-bold">CA, U.S.A</span>
                </div>
                <button onClick={handleOpenPopup} className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 xs:py-3 rounded text-xs xs:text-sm md:text-[16px] font-medium">Contact Us</button>
              </div>
            </div>

            {/* Toronto */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] overflow-hidden group">
              <Image src="/images/icons/toronto.png" alt="Toronto Academy" fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-4 xs:bottom-6 left-4 xs:left-6 right-4 xs:right-6 text-white opacity-0 group-hover:opacity-100 transition">
                <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-2">Toronto</h3>
                <div className="flex items-center gap-2 mb-3 xs:mb-4">
                  <MapPin className="w-4 xs:w-5 h-4 xs:h-5" />
                  <span className="text-sm xs:text-base md:text-lg lg:text-[20px] font-bold">ON, Canada</span>
                </div>
                <button onClick={handleOpenPopup} className="bg-white text-black px-4 xs:px-6 md:px-8 py-2 xs:py-3 rounded text-xs xs:text-sm md:text-[16px] font-medium">Contact Us</button>
              </div>
            </div>

            {/* Coming Soon */}
            <div className="relative w-full h-[280px] xs:h-[320px] md:h-[380px] lg:h-[421px] rounded-[15px] xs:rounded-[20px] bg-[#FF725E] flex flex-col justify-center items-center p-6 xs:p-8 text-white text-center">
              <h3 className="text-lg xs:text-xl md:text-2xl lg:text-[28px] font-bold mb-4">Coming Soon!</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="relative pt-12 xs:pt-16 md:pt-20 lg:pt-[120px] pb-0 bg-white">
        <div className="container-desktop">
          {/* Section Header */}
          <div className="mb-12 xs:mb-16 md:mb-20 lg:mb-[80px]">
            <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
              <div className="w-8 xs:w-12 md:w-[60px] h-[1.5px] xs:h-[2px] bg-black"></div>
              <span className="text-xs xs:text-sm md:text-[14px] font-medium tracking-[0.15em] xs:tracking-[0.2em] uppercase text-black">EVENTS</span>
            </div>
            <div>
              <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-[1.2] mb-4 xs:mb-6">Join the Journey. Make a Difference.</h2>
              <p className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xs xs:text-sm md:text-[16px] text-black leading-[1.6] max-w-none lg:max-w-2xl">
                Tai Ji Men's events are more than gatherings—they're heart-centered opportunities to uplift yourself and
                the world around you. From local community wellness sharings to international cultural festivals, your
                participation helps spread healing, harmony, and hope.
              </p>
            </div>
          </div>

          {/* Event Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6">
            {/* Event 1 */}
            <div className="bg-[#FF725E] rounded-[15px] xs:rounded-[20px] p-4 xs:p-6 md:p-8 text-white">
              <div className="flex items-start gap-3 xs:gap-4 md:gap-6">
                <div className="text-center min-w-[40px] xs:min-w-[50px] md:min-w-[60px]">
                  <div className="text-2xl xs:text-3xl md:text-[48px] font-medium leading-none mb-1">28</div>
                  <div className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">JUN</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                    <span className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">NEXT EVENTS</span>
                    <div className="w-6 xs:w-8 md:w-[44px] h-[1.5px] xs:h-[2px] bg-white"></div>
                  </div>
                  <h3 className="text-sm xs:text-base md:text-lg lg:text-[28px] font-bold leading-tight">A day with our wonderful children</h3>
                </div>
                <button className="bg-white text-[#FF725E] w-10 xs:w-12 md:w-[56px] h-10 xs:h-12 md:h-[56px] rounded-[12px] xs:rounded-[15px] md:rounded-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm xs:text-base md:text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Event 2 */}
            <div className="bg-[#FF725E] rounded-[15px] xs:rounded-[20px] p-4 xs:p-6 md:p-8 text-white">
              <div className="flex items-start gap-3 xs:gap-4 md:gap-6">
                <div className="text-center min-w-[40px] xs:min-w-[50px] md:min-w-[60px]">
                  <div className="text-2xl xs:text-3xl md:text-[48px] font-medium leading-none mb-1">7</div>
                  <div className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">JUL</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                    <span className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">NEXT EVENTS</span>
                    <div className="w-6 xs:w-8 md:w-[44px] h-[1.5px] xs:h-[2px] bg-white"></div>
                  </div>
                  <h3 className="text-sm xs:text-base md:text-lg lg:text-[28px] font-bold leading-tight">A day with our wonderful children</h3>
                </div>
                <button className="bg-white text-[#FF725E] w-10 xs:w-12 md:w-[56px] h-10 xs:h-12 md:h-[56px] rounded-[12px] xs:rounded-[15px] md:rounded-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm xs:text-base md:text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Event 3 */}
            <div className="bg-[#FF725E] rounded-[15px] xs:rounded-[20px] p-4 xs:p-6 md:p-8 text-white">
              <div className="flex items-start gap-3 xs:gap-4 md:gap-6">
                <div className="text-center min-w-[40px] xs:min-w-[50px] md:min-w-[60px]">
                  <div className="text-2xl xs:text-3xl md:text-[48px] font-medium leading-none mb-1">3</div>
                  <div className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">AUG</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                    <span className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">NEXT EVENTS</span>
                    <div className="w-6 xs:w-8 md:w-[44px] h-[1.5px] xs:h-[2px] bg-white"></div>
                  </div>
                  <h3 className="text-sm xs:text-base md:text-lg lg:text-[28px] font-bold leading-tight">A day with our wonderful children</h3>
                </div>
                <button className="bg-white text-[#FF725E] w-10 xs:w-12 md:w-[56px] h-10 xs:h-12 md:h-[56px] rounded-[12px] xs:rounded-[15px] md:rounded-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm xs:text-base md:text-xl">→</span>
                </button>
              </div>
            </div>

            {/* Event 4 */}
            <div className="bg-[#FF725E] rounded-[15px] xs:rounded-[20px] p-4 xs:p-6 md:p-8 text-white">
              <div className="flex items-start gap-3 xs:gap-4 md:gap-6">
                <div className="text-center min-w-[40px] xs:min-w-[50px] md:min-w-[60px]">
                  <div className="text-2xl xs:text-3xl md:text-[48px] font-medium leading-none mb-1">19</div>
                  <div className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">SEP</div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
                    <span className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">NEXT EVENTS</span>
                    <div className="w-6 xs:w-8 md:w-[44px] h-[1.5px] xs:h-[2px] bg-white"></div>
                  </div>
                  <h3 className="text-sm xs:text-base md:text-lg lg:text-[28px] font-bold leading-tight">Seminar: Caring for children with autism</h3>
                </div>
                <button className="bg-white text-[#FF725E] w-10 xs:w-12 md:w-[56px] h-10 xs:h-12 md:h-[56px] rounded-[12px] xs:rounded-[15px] md:rounded-[20px] flex items-center justify-center flex-shrink-0">
                  <span className="text-sm xs:text-base md:text-xl">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background image under Event cards - responsive full width */}
        <div className="relative w-full mt-8 xs:mt-12 overflow-hidden">
          <img
            src="/images/content/joinus6.png"
            alt="Join Us Performance"
            className="w-full h-[200px] xs:h-[300px] md:h-[400px] lg:h-auto object-cover"
          />
        </div>
      </section>

      {popupOpen && <ContactPopup isOpen={popupOpen} onClose={handleClosePopup} />}
    </div>
  )
}
