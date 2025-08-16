"use client"

import {useEffect, useState} from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
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
  const [searchQuery, setSearchQuery] = useState("");
  const [pendingAnchor, setPendingAnchor] = useState(null);

  const handleNavigate = (page, anchorId) => {
    setCurrentPage(page);
    setPendingAnchor(anchorId ?? null);
  }

  useEffect(() => {
    if (pendingAnchor) {
      const el = document.getElementById(pendingAnchor)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        setPendingAnchor(null)
      }
    }
  }, [currentPage, pendingAnchor])

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
        handleNavigate={handleNavigate}
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
