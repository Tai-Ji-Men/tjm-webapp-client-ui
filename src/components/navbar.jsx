"use client"

import { useState, useEffect } from "react"
import SearchComponent from "./search.js"

export default function Navbar({ currentPage, setCurrentPage, setSearchQuery }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // 滾動檢測效果
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // 檢測是否在頂部（決定背景透明度）
      setIsAtTop(currentScrollY < 50)

      // 控制navbar顯示/隱藏
      if (currentScrollY < 100) {
        // 接近頂部時總是顯示
        setIsVisible(true)
      } else {
        // 根據滾動方向決定顯示/隱藏
        if (currentScrollY > lastScrollY) {
          setIsVisible(false) // 往下滾動，隱藏navbar
        } else {
          setIsVisible(true)  // 往上滾動，顯示navbar
        }
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [lastScrollY])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavClick = (page) => {
    console.log("Navigating to:", page)
    setCurrentPage(page)
    setIsDropdownOpen(false)
    setIsMobileMenuOpen(false)
  }

  // Helper function to get nav item classes
  const getNavItemClass = (page) => {
    const baseClass = "cursor-pointer font-inter font-normal text-xs xl:text-[13px] text-center transition duration-300 whitespace-nowrap flex items-center h-full border-b-2 border-transparent"
    if (currentPage === page) {
      return `${baseClass} text-[#FF725E] !border-[#FF725E]`
    }
    return `${baseClass} text-black hover:text-gray-600 hover:border-[#FF725E]`
  }

  // Helper function for mobile nav items
  const getMobileNavItemClass = (page) => {
    const baseClass = "cursor-pointer block w-full text-left px-3 py-2 rounded"
    if (currentPage === page) {
      return `${baseClass} text-[#FF725E] border-b-2 border-[#FF725E] pb-1 self-start`
    }
    return `${baseClass} text-black hover:text-gray-600 hover:bg-gray-50`
  }

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${
        isAtTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md shadow-sm'
      }`} 
      style={{position: 'sticky', top: 0, left: 0, width: '100%', height: '94px', zIndex: 50, 'background-color': 'white'}}
    >
      <div className="w-full max-w-[1440px] mx-auto relative h-full">
        <div className="flex justify-between items-center px-4 lg:px-[60px]" style={{height: '94px'}}>
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <button onClick={() => handleNavClick("home")} className="flex items-center space-x-3">
              <img src="/images/icons/logo.png" alt="Tai Ji Men Qigong Logo" className="h-10 w-10 md:h-12 md:w-12 object-contain" />
              <span className="hidden md:block font-sedan font-normal text-[22px] leading-[44px] text-black">
              Tai Ji Men Qigong
              </span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-6 2xl:space-x-8 flex-1 px-4">
            <button
              onClick={() => handleNavClick("home")}
              className={getNavItemClass("home")}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick("about")}
              className={getNavItemClass("about")}
            >
              About TJM
            </button>
            <button
              onClick={() => handleNavClick("qigong-life")}
              className={getNavItemClass("qigong-life")}
            >
              Qigong & Life
            </button>

            {/*Hide two unfinished tabs for now. */}

            {/*<button*/}
            {/*  onClick={() => handleNavClick("benefit-practice")}*/}
            {/*  className={getNavItemClass("benefit-practice")}*/}
            {/*>*/}
            {/*  Benefits of Practice*/}
            {/*</button>*/}

            {/*<button*/}
            {/*  onClick={() => handleNavClick("news")}*/}
            {/*  className={getNavItemClass("news")}*/}
            {/*>*/}
            {/*  News*/}
            {/*</button>*/}

            {/* Join Us Nav Item with separate dropdown toggle */}
            <div className="relative inline-flex items-center space-x-1">
              {/* Main link navigates to Join Us page */}
              <button
                onClick={() => handleNavClick("join-us")}
                className={getNavItemClass("join-us")}
              >
                Join Us
              </button>

              {/* Arrow icon toggles dropdown */}
              <button
                onClick={toggleDropdown}
                className={`cursor-pointer text-black hover:text-gray-600 transition-transform duration-200 h-full flex items-center ${isDropdownOpen ? 'rotate-180' : ''}`}
                aria-label="Toggle Join Us submenu"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Submenu */}
              {/*{isDropdownOpen && (
                <div className="absolute top-full right-0 mt-1 min-w-max z-10 bg-white shadow-lg border border-gray-200 rounded-md py-1">
                  <ul role="menu" aria-label="Join Us submenu">
                    <li>
                      <button
                        onClick={() => handleNavClick("academy")}
                        role="menuitem"
                        className={`block w-full text-left px-4 py-2 text-sm whitespace-nowrap ${currentPage === "academy" ? "text-[#FF725E]" : "text-gray-700 hover:text-[#FF725E]"}`}
                      >
                        Academy
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={() => handleNavClick("events")}
                        role="menuitem"
                        className={`block w-full text-left px-4 py-2 text-sm whitespace-nowrap ${currentPage === "events" ? "text-[#FF725E]" : "text-gray-700 hover:text-[#FF725E]"}`}
                      >
                        Events
                      </button>
                    </li>
                  </ul>
                </div>
              )}*/}
            </div>
          </div>

          {/* Search Component & Mobile Menu */}
          <div className="flex items-center flex-shrink-0">
            <SearchComponent setCurrentPage={setCurrentPage} setSearchQuery={setSearchQuery} />

            {/* Mobile menu button */}
            <div className="lg:hidden ml-2 md:ml-4">
              <button onClick={toggleMobileMenu} className="text-black hover:text-gray-600 focus:outline-none">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-t border-gray-200 z-20 shadow-lg">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavClick("home")}
                className={getMobileNavItemClass("home")}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("about")}
                className={getMobileNavItemClass("about")}
              >
                About TJM
              </button>
              <button
                onClick={() => handleNavClick("qigong-life")}
                className={getMobileNavItemClass("qigong-life")}
              >
                Qigong & Life
              </button>
              <button
                onClick={() => handleNavClick("benefit-practice")}
                className={getMobileNavItemClass("benefit-practice")}
              >
                Benefits of Practice
              </button>
              <button
                onClick={() => handleNavClick("news")}
                className={getMobileNavItemClass("news")}
              >
                News
              </button>

              {/* Join Us main page link */}
              <button
                onClick={() => handleNavClick("join-us")}
                className={getMobileNavItemClass("join-us")}
              >
                Join Us
              </button>
              {/* Mobile Join Us submenu - commented out
              <div className="px-3 py-2">
                <div className="text-black font-medium mb-2">Join Us</div>
                <button
                  onClick={() => handleNavClick("academy")}
                  className={`cursor-pointer block w-full text-left px-3 py-1 text-sm rounded ${
                    currentPage === "academy" 
                      ? "text-[#FF725E] bg-gray-50" 
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  Academy
                </button>
                <button
                  onClick={() => handleNavClick("events")}
                  className={`cursor-pointer block w-full text-left px-3 py-1 text-sm rounded ${
                    currentPage === "events" 
                      ? "text-[#FF725E] bg-gray-50" 
                      : "text-gray-600 hover:text-black hover:bg-gray-50"
                  }`}
                >
                  Events
                </button>
              </div>
              */}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}