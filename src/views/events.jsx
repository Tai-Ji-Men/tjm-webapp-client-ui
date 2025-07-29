export default function Events() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">活動</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* 活動項目 - 這些只是示例，您可以根據需要修改或替換 */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">工作坊</span>
              <span className="text-sm text-gray-500">2024年7月15日</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">活動標題</h2>
            <p className="text-gray-600 mb-4">這裡是活動描述，簡短介紹活動的主要內容和目的...</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">地點：台北市</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">報名參加</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">講座</span>
              <span className="text-sm text-gray-500">2024年8月5日</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">活動標題</h2>
            <p className="text-gray-600 mb-4">這裡是活動描述，簡短介紹活動的主要內容和目的...</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">地點：台中市</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">報名參加</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium bg-purple-100 text-purple-800 px-2 py-1 rounded">研討會</span>
              <span className="text-sm text-gray-500">2024年9月10日</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">活動標題</h2>
            <p className="text-gray-600 mb-4">這裡是活動描述，簡短介紹活動的主要內容和目的...</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">地點：高雄市</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">報名參加</button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-gray-200"></div>
          <div className="p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium bg-yellow-100 text-yellow-800 px-2 py-1 rounded">體驗營</span>
              <span className="text-sm text-gray-500">2024年10月20日</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">活動標題</h2>
            <p className="text-gray-600 mb-4">這裡是活動描述，簡短介紹活動的主要內容和目的...</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-500">地點：台南市</span>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">報名參加</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
