"use client"

import { useState, useEffect, useRef } from "react"

export default function SearchComponent({ setCurrentPage, setSearchQuery }) {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const searchRef = useRef(null)

  // 模擬搜尋數據
  const mockData = [
    {
      id: 1,
      title: "Tai Ji Men Qigong Benefits",
      content: "Discover the transformative power of Tai Ji Men Qigong",
      type: "page",
      page: "qigong-life",
      category: "qigong",
    },
    {
      id: 2,
      title: "About Tai Ji Men Academy",
      content: "Learn about our ancient menpai of qigong",
      type: "page",
      page: "about",
      category: "about",
    },
    {
      id: 3,
      title: "Health Recovery Workshop",
      content: "Join our upcoming workshop on health recovery",
      type: "event",
      page: "events",
      category: "events",
    },
    {
      id: 4,
      title: "Youth Qigong Program",
      content: "Special qigong programs for children",
      type: "program",
      page: "academy",
      category: "academy",
    },
    {
      id: 5,
      title: "Stress Management Techniques",
      content: "Learn effective stress management through qigong",
      type: "article",
      page: "benefit-practice",
      category: "benefits",
    },
    {
      id: 6,
      title: "Cultural Exchange Event",
      content: "Participate in our international cultural exchange",
      type: "news",
      page: "news",
      category: "news",
    },
    {
      id: 7,
      title: "Latest News Updates",
      content: "Stay updated with our latest announcements",
      type: "news",
      page: "news",
      category: "news",
    },
    {
      id: 8,
      title: "Academy Registration",
      content: "How to register for our academy programs",
      type: "info",
      page: "academy",
      category: "academy",
    },
  ]

  // 處理點擊外部關閉搜尋結果
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // 搜尋功能
  const performSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([])
      setShowResults(false)
      return
    }

    setIsSearching(true)

    // 模擬API調用延遲
    setTimeout(() => {
      const filtered = mockData.filter((item) => {
        return (
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
        )
      })

      setSearchResults(filtered.slice(0, 6)) // 限制顯示6個結果
      setIsSearching(false)
      setShowResults(true)
    }, 300)
  }

  // 處理搜尋表單提交
  const handleSearch = (e) => {
    e.preventDefault()

    if (!searchInput.trim()) return

    // 設置搜尋查詢並導航到搜尋頁面
    setSearchQuery(searchInput)
    setCurrentPage("search")
    setSearchInput("")
    setShowResults(false)
  }

  // 處理輸入變化
  const handleInputChange = (e) => {
    const value = e.target.value
    setSearchInput(value)
    performSearch(value)
  }

  // 處理結果項目點擊
  const handleResultClick = (result) => {
    setCurrentPage(result.page)
    setSearchInput("")
    setShowResults(false)
  }

  // 處理輸入框聚焦
  const handleInputFocus = () => {
    if (searchInput.trim() && searchResults.length > 0) {
      setShowResults(true)
    }
  }

  // 獲取類型圖標
  const getTypeIcon = (type) => {
    switch (type) {
      case "page":
        return "📄"
      case "event":
        return "📅"
      case "program":
        return "🎓"
      case "article":
        return "📝"
      case "news":
        return "📰"
      case "info":
        return "ℹ️"
      default:
        return "📄"
    }
  }

  // 獲取類型顏色
  const getTypeColor = (type) => {
    switch (type) {
      case "page":
        return "bg-blue-100 text-blue-800"
      case "event":
        return "bg-green-100 text-green-800"
      case "program":
        return "bg-purple-100 text-purple-800"
      case "article":
        return "bg-orange-100 text-orange-800"
      case "news":
        return "bg-red-100 text-red-800"
      case "info":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="relative" ref={searchRef}>
      {/* 搜尋輸入框 */}
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          placeholder="Search"
          className="w-32 md:w-40 lg:w-44 xl:w-[176px] h-[44px] px-3 md:px-4 py-2 bg-transparent border-[1.2px] border-black rounded-[30px] text-black placeholder-gray-500 focus:outline-none focus:border-gray-600 text-xs md:text-[13px] font-inter transition duration-300"
        />
        <button
          type="submit"
          className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-black transition duration-300"
        >
          <svg className="h-3 w-3 md:h-4 md:w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </form>

      {/* 搜尋結果下拉選單 */}
      {showResults && (
        <div className="absolute right-0 mt-2 w-72 md:w-80 lg:w-96 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
          <div className="py-2">
            {isSearching ? (
              <div className="px-4 py-3 text-sm text-gray-500 flex items-center">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2"></div>
                搜尋中...
              </div>
            ) : searchResults.length > 0 ? (
              <>
                <div className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-100">
                  搜尋結果 ({searchResults.length})
                </div>
                {searchResults.map((result) => (
                  <div
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <span className="text-lg mt-0.5 flex-shrink-0">{getTypeIcon(result.type)}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${getTypeColor(result.type)}`}>
                            {result.type}
                          </span>
                        </div>
                        <h4 className="text-sm font-medium text-gray-900 truncate">{result.title}</h4>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{result.content}</p>
                      </div>
                      <svg className="h-4 w-4 text-gray-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                ))}
                {searchResults.length === 6 && (
                  <div className="px-4 py-2 text-xs text-gray-500 text-center border-t border-gray-100">
                    顯示前 6 個結果
                  </div>
                )}
              </>
            ) : searchInput ? (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                <div className="text-2xl mb-2">🔍</div>
                沒有找到 "{searchInput}" 的相關結果
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
}
