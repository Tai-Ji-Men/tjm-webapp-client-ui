"use client"

import { useState, useEffect } from "react"

export default function RWDHelper() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const getScreenType = (width) => {
    if (width < 475) return { type: '超小屏', color: 'bg-red-500' }
    if (width < 640) return { type: '小屏 (xs)', color: 'bg-orange-500' }
    if (width < 768) return { type: '平板 (sm)', color: 'bg-yellow-500' }
    if (width < 1024) return { type: '中型 (md)', color: 'bg-green-500' }
    if (width < 1280) return { type: '大型 (lg)', color: 'bg-blue-500' }
    if (width < 1440) return { type: '超大 (xl)', color: 'bg-indigo-500' }
    if (width < 1600) return { type: '桌機 (2xl)', color: 'bg-purple-500' }
    if (width < 1920) return { type: '寬屏 (3xl)', color: 'bg-pink-500' }
    return { type: '超寬 (4xl)', color: 'bg-gray-500' }
  }

  const screenInfo = getScreenType(windowSize.width)

  if (process.env.NODE_ENV === 'production') return null

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 bg-black text-white p-2 rounded-full shadow-lg hover:bg-gray-800 transition"
        title="RWD 檢查工具"
      >
        📐
      </button>

      {/* RWD Info Panel */}
      {isVisible && (
        <div className="fixed bottom-16 right-4 z-50 bg-white border-2 border-gray-300 rounded-lg shadow-lg p-4 min-w-[280px]">
          <div className="text-sm font-mono space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-bold">RWD 檢查工具</span>
              <button
                onClick={() => setIsVisible(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            
            <hr className="border-gray-200" />
            
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${screenInfo.color}`}></div>
                <span className="font-semibold">{screenInfo.type}</span>
              </div>
              
              <div>寬度: {windowSize.width}px</div>
              <div>高度: {windowSize.height}px</div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-xs space-y-1">
              <div className="font-semibold mb-1">斷點參考:</div>
              <div className="grid grid-cols-2 gap-1">
                <div>xs: 475px+</div>
                <div>sm: 640px+</div>
                <div>md: 768px+</div>
                <div>lg: 1024px+</div>
                <div>xl: 1280px+</div>
                <div>2xl: 1440px+</div>
                <div>3xl: 1600px+</div>
                <div>4xl: 1920px+</div>
              </div>
            </div>

            <hr className="border-gray-200" />

            <div className="text-xs space-y-1">
              <div className="font-semibold mb-1">容器規範:</div>
              <div>📱 Mobile: 100% width</div>
              <div>🖥️ Desktop: max-1440px</div>
              <div>📏 Wide: max-1600px</div>
              <div>🖼️ Ultra: 80vw</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
} 