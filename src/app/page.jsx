"use client"

import { useState } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import RWDHelper from "@/components/layout/rwd-helper"
import Home from "@/views/home"
import About from "@/views/about"
import QigongLife from "@/views/qigong-life"
import BenefitPractice from "@/views/benefit-practice"
import News from "@/views/news"
import Search from "@/views/search"
import JoinUs from "@/views/join-us"
import Academy from "@/views/academy"
import Events from "@/views/events"

export default function App() {
  const [currentPage, setCurrentPage] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home />
      case "about":
        return <About />
      case "qigong-life":
        return <QigongLife />
      case "benefit-practice":
        return <BenefitPractice />
      case "news":
        return <News />
      case "search":
        return <Search searchQuery={searchQuery} />
      case "join-us":
        return <JoinUs />
      case "academy":
        return <Academy />
      case "events":
        return <Events />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setSearchQuery={setSearchQuery}
      />

      <main className="flex-1">
        {renderPage()}
      </main>

      <Footer />
      
      {/* RWD 檢查工具 - 僅在開發環境顯示 */}
      {/* <RWDHelper /> */}
    </div>
  )
}
