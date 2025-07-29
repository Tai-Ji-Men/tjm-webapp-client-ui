"use client"

import { useState, useEffect } from "react"

export default function Search({ searchQuery }) {
  const [searchInput, setSearchInput] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  // 模擬搜尋數據
  const mockData = [
    {
      id: 1,
      title: "Tai Ji Men Qigong Benefits",
      content: "Discover the transformative power of Tai Ji Men Qigong for physical, mental, and spiritual health.",
      category: "qigong",
      type: "page",
    },
    {
      id: 2,
      title: "About Tai Ji Men Academy",
      content: "Learn about our ancient menpai of qigong, martial arts and self-cultivation.",
      category: "about",
      type: "page",
    },
    {
      id: 3,
      title: "Health Recovery Workshop",
      content: "Join our upcoming workshop on health recovery through qigong practice.",
      category: "events",
      type: "event",
    },
    {
      id: 4,
      title: "Youth Qigong Program",
      content: "Special qigong programs designed for children and young adults.",
      category: "academy",
      type: "program",
    },
    {
      id: 5,
      title: "Stress Management Techniques",
      content: "Learn effective stress management through traditional qigong methods.",
      category: "benefits",
      type: "article",
    },
    {
      id: 6,
      title: "Cultural Exchange Event",
      content: "Participate in our international cultural exchange program.",
      category: "news",
      type: "news",
    },
  ]

  const categories = [
    { value: "all", label: "All Categories" },
    { value: "qigong", label: "Qigong & Life" },
    { value: "benefits", label: "Benefits & Practice" },
    { value: "about", label: "About Us" },
    { value: "academy", label: "Academy" },
    { value: "events", label: "Events" },
    { value: "news", label: "News" },
  ]

  useEffect(() => {
    if (searchQuery) {
      setSearchInput(searchQuery)
      performSearch(searchQuery)
    }
  }, [searchQuery])

  const performSearch = (query) => {
    setIsLoading(true)

    // 模擬搜尋延遲
    setTimeout(() => {
      if (!query.trim()) {
        setSearchResults([])
        setIsLoading(false)
        return
      }

      const filtered = mockData.filter((item) => {
        const matchesQuery =
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.content.toLowerCase().includes(query.toLowerCase())

        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory

        return matchesQuery && matchesCategory
      })

      setSearchResults(filtered)
      setIsLoading(false)
    }, 500)
  }

  const handleSearch = (e) => {
    e.preventDefault()
    performSearch(searchInput)
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    if (searchInput) {
      performSearch(searchInput)
    }
  }

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
      default:
        return "📄"
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white"></div>

        <div className="container-1180 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-8">
              <div className="w-18 h-0.5 bg-black mr-4"></div>
              <span className="text-sm font-medium tracking-widest uppercase text-black">Search</span>
              <div className="w-18 h-0.5 bg-black ml-4"></div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 leading-tight">
              Find What You're Looking For
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              Search through our content, events, programs, and resources to discover the wisdom of Tai Ji Men.
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search for content, events, programs..."
                  className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-full focus:border-orange-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-2 bottom-2 px-8 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Search Results Section */}
      <section className="py-20 bg-white">
        <div className="container-1180">
          {/* Filter Categories */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4">Filter by Category:</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => handleCategoryChange(category.value)}
                  className={`px-6 py-2 rounded-full border-2 transition duration-300 ${
                    selectedCategory === category.value
                      ? "bg-orange-500 text-white border-orange-500"
                      : "bg-white text-gray-700 border-gray-200 hover:border-orange-500"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Search Results */}
          {isLoading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
              <p className="mt-4 text-gray-600">Searching...</p>
            </div>
          ) : searchInput ? (
            <div>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-2">Search Results for "{searchInput}"</h2>
                <p className="text-gray-600">
                  Found {searchResults.length} result{searchResults.length !== 1 ? "s" : ""}
                </p>
              </div>

              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className="bg-white border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition duration-300"
                    >
                      <div className="flex items-center mb-4">
                        <span className="text-2xl mr-3">{getTypeIcon(result.type)}</span>
                        <span className="text-sm font-medium text-orange-500 uppercase tracking-wider">
                          {result.type}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-black mb-3 leading-tight">{result.title}</h3>

                      <p className="text-gray-600 leading-relaxed mb-4">{result.content}</p>

                      <button className="text-orange-500 font-medium hover:text-orange-600 transition duration-300">
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">🔍</div>
                  <h3 className="text-2xl font-bold text-black mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search terms or browse our categories.</p>
                  <button
                    onClick={() => {
                      setSearchInput("")
                      setSearchResults([])
                      setSelectedCategory("all")
                    }}
                    className="px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition duration-300"
                  >
                    Clear Search
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-black mb-2">Start Your Search</h3>
              <p className="text-gray-600">Enter a search term above to find content, events, and programs.</p>
            </div>
          )}
        </div>
      </section>


    </>
  )
}
