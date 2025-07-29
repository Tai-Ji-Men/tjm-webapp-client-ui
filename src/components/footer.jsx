"use client"

import { useState } from "react"
import ContactPopup from "@/components/contactprop"

export default function Footer() {
  const [popupOpen, setPopupOpen] = useState(false)

  return (
    <footer className="mt-auto">
      {/* Bottom Section - CTA */}
      <div className="w-full bg-[#FF725E] py-6 xs:py-8 md:py-12 lg:py-16">
        <div className="container-desktop">
          {/* "Join Us! Change Your Destiny" */}
          <h2 className="max-w-full text-center text-white text-xl xs:text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-roboto italic leading-[120%] spacing-responsive-sm">
            "Join Us! Change Your Destiny"
          </h2>

          {/* Join Now Button */}
          <div className="flex justify-center spacing-responsive-md">
            <button
              onClick={() => setPopupOpen(true)}
              className="px-4 py-2 xs:px-6 xs:py-2 md:px-8 md:py-3 border border-white rounded-[30px] text-white font-inter font-semibold text-responsive-sm hover:bg-white hover:text-[#FF725E] transition duration-300"
            >
              Join Now!
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-3 xs:space-x-4 md:space-x-6 lg:space-x-8">
            {/* Instagram */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 mb-1 xs:mb-2 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 3.43c5.4 0 6.04.02 8.17.12 1.97.09 3.04.42 3.75.7.94.36 1.62.8 2.33 1.5.7.71 1.14 1.39 1.5 2.33.28.71.61 1.78.7 3.75.1 2.13.12 2.77.12 8.17s-.02 6.04-.12 8.17c-.09 1.97-.42 3.04-.7 3.75-.36.94-.8 1.62-1.5 2.33-.71.7-1.39 1.14-2.33 1.5-.71.28-1.78.61-3.75.7-2.13.1-2.77.12-8.17.12s-6.04-.02-8.17-.12c-1.97-.09-3.04-.42-3.75-.7-.94-.36-1.62-.8-2.33-1.5-.7-.71-1.14-1.39-1.5-2.33-.28-.71-.61-1.78-.7-3.75-.1-2.13-.12-2.77-.12-8.17s.02-6.04.12-8.17c.09-1.97.42-3.04.7-3.75.36-.94.8-1.62 1.5-2.33.71-.7 1.39-1.14 2.33-1.5.71-.28 1.78-.61 3.75-.7 2.13-.1 2.77-.12 8.17-.12M20 0c-5.5 0-6.19.02-8.35.12-2.16.1-3.63.44-4.92.94-1.33.52-2.46 1.21-3.59 2.34-1.13 1.13-1.82 2.26-2.34 3.59-.5 1.29-.84 2.76-.94 4.92C-.04 13.81 0 14.5 0 20c0 5.5.02 6.19.12 8.35.1 2.16.44 3.63.94 4.92.52 1.33 1.21 2.46 2.34 3.59 1.13 1.13 2.26 1.82 3.59 2.34 1.29.5 2.76.84 4.92.94 2.16.1 2.85.12 8.35.12 5.5 0 6.19-.02 8.35-.12 2.16-.1 3.63-.44 4.92-.94 1.33-.52 2.46-1.21 3.59-2.34 1.13-1.13 1.82-2.26 2.34-3.59.5-1.29.84-2.76.94-4.92.1-2.16.12-2.85.12-8.35 0-5.5-.02-6.19-.12-8.35-.1-2.16-.44-3.63-.94-4.92-.52-1.33-1.21-2.46-2.34-3.59-1.13-1.13-2.26-1.82-3.59-2.34-1.29-.5-2.76-.84-4.92-.94C26.19.02 25.5 0 20 0zm0 9.73c-5.67 0-10.27 4.6-10.27 10.27 0 5.67 4.6 10.27 10.27 10.27 5.67 0 10.27-4.6 10.27-10.27 0-5.67-4.6-10.27-10.27-10.27zm0 16.94c-3.68 0-6.67-2.99-6.67-6.67s2.99-6.67 6.67-6.67 6.67 2.99 6.67 6.67-2.99 6.67-6.67 6.67zm13.07-17.34c0 1.33-1.08 2.4-2.4 2.4-1.33 0-2.4-1.08-2.4-2.4 0-1.33 1.08-2.4 2.4-2.4 1.33 0 2.4 1.08 2.4 2.4z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <span className="text-xs text-white font-inter">Instagram</span>
            </div>

            {/* Facebook */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 mb-1 xs:mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 xs:w-6 xs:h-6 md:w-7 md:h-7" viewBox="0 0 19 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M18.3 0h-4.2C8.9 0 5.5 3.4 5.5 7.6v3.5H1.3c-.3 0-.6.3-.6.6v5.1c0 .3.3.6.6.6h4.2v12.9c0 .3.3.6.6.6h5.5c.3 0 .6-.3.6-.6V17.4h4.9c.3 0 .6-.3.6-.6l2-5.1c.1-.4-.1-.7-.5-.7h-7v-3c0-1.5 1.2-2.7 2.7-2.7h3.4c.3 0 .6-.3.6-.6V.6c0-.3-.3-.6-.6-.6z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <span className="text-xs text-white font-inter">Facebook</span>
            </div>

            {/* TikTok */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 mb-1 xs:mb-2 flex items-center justify-center">
                <svg className="w-4 h-4 xs:w-6 xs:h-6 md:w-7 md:h-7" viewBox="0 0 31 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M16.3 0C18.1 0 19.9 0 21.7.1c1.6 2.1 3.9 3.4 6.5 3.5v5.7c-2.2-.1-4.3-.8-6.1-2v9c0 9.1-9.3 15.9-18.4 12.2C-.8 26.2-1 19.3 3 15.3c4.1-4.1 11.1-3.8 14.7.6V16c-4.7-3-10.8-.8-11.9 4.4-.9 4.3 2.5 8.2 6.8 8.2 3.8 0 7.2-2.4 7.2-7.6V0h-3.5z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <span className="text-xs text-white font-inter">TikTok</span>
            </div>

            {/* Discord */}
            <div className="flex flex-col items-center">
              <div className="w-6 h-6 xs:w-8 xs:h-8 md:w-10 md:h-10 mb-1 xs:mb-2 flex items-center justify-center">
                <svg className="w-5 h-5 xs:w-7 xs:h-7 md:w-8 md:h-8" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M39 3C36.1.8 32.9 0 29.6 0l-.5.6c3.1.8 5.8 2.3 8.3 4.3-3.5-1.9-7.4-3.2-11.4-3.9-2.7-.5-5.4-.5-8.1 0-4 .7-7.9 2-11.4 3.9C9 2.9 11.7 1.4 14.8.6L14.3 0c-3.3 0-6.5.8-9.4 3C1.7 7.8 0 13.6 0 19.5c0 .2.1.3.2.4 3.3 4.4 8.5 6.9 14 7.1h.2l1.3-1.8c-3.2-.8-6.1-2.4-8.5-4.6.9.6 1.8 1.1 2.8 1.6 3.3 1.5 6.8 2.3 10.4 2.3 3.6 0 7.2-2.4 7.2-7.6V0h-3.5zM15.3 16c0-1.9 1.5-3.5 3.4-3.5 1.9 0 3.4 1.6 3.4 3.5s-1.5 3.5-3.4 3.5c-1.9 0-3.4-1.6-3.4-3.5zm12.8 0c0-1.9 1.5-3.5 3.4-3.5 1.9 0 3.4 1.6 3.4 3.5s-1.5 3.5-3.4 3.5c-1.9 0-3.4-1.6-3.4-3.5z"
                    fill="#FFFFFF"
                  />
                </svg>
              </div>
              <span className="text-xs text-white font-inter">Discord</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full bg-black py-4 xs:py-6 md:py-8">
        <div className="container-desktop">
          <div className="flex justify-center items-center">
            {/* Logo Image */}
            <div className="h-6 w-6 xs:h-8 xs:w-8 md:h-10 md:w-10 mr-2 md:mr-3 flex items-center justify-center">
              <img src="/images/icons/logo.png" alt="logo" className="h-full w-full object-contain" />
            </div>

            {/* Logo Text */}
            <span className="text-white font-sedan font-normal text-sm xs:text-base md:text-xl lg:text-2xl leading-none flex items-center">Tai Ji Men Qigong</span>
          </div>
        </div>
      </div>

      {popupOpen && (
        <ContactPopup isOpen={popupOpen} onClose={() => setPopupOpen(false)} />
      )}
    </footer>
  )
}
