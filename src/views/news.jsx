import Link from "next/link"
import newsData from "../mock-data/news-page-config.json";
import NewsDetails from "@/views/NewsDetails";
import {useState} from "react";

export default function News() {

  const [selectedSlug, setSelectedSlug] = useState(null);

  if (selectedSlug) {
    console.log("selectedSlug: " + selectedSlug);
    return <NewsDetails slug={selectedSlug} onBack={() => setSelectedSlug(null)} />;
  }

  // several sections in the page.
  // Today's pick. --> 3 cards. left: 1, right: 2
  // Most Recent.
  // Topic 1.
  // Topic 2.
  // Topic 3.
  // Get it dynamically from DB.
  // Can dynamically change from Admin app.

  const { todaysPicks, mostRecent, topics } = newsData;

  return (
      <div className="min-h-screen bg-white">

        <div className="max-w-[1440px] mx-auto px-4 pt-20 pb-8">
          {/* Today's Picks Section */}
          <div className="mb-8">
            <div className="flex items-center mb-6">
              <h2 className="text-xl font-bold mr-4">Today's Picks</h2>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              {/* Main Featured Article - Left Side */}
              <div className="flex-1">
                <div
                    className="bg-gradient-to-br from-blue-100 to-orange-300 rounded-2xl overflow-hidden shadow-lg">
                  {/* Image placeholder - keeping empty as requested */}
                  <div className="h-80 bg-gray-200 flex items-center justify-center">
                    <img src="/images/hero/about.png" alt="Featured Article Image"
                         className="w-full h-full object-cover"/>
                  </div>

                  {/* Content overlay at bottom */}
                  {/* Clickable overlay */}
                  <button
                      type="button"
                      onClick={() => setSelectedSlug(todaysPicks.primary.slug)}
                      className="w-full text-left bg-gradient-to-r from-orange-400 to-pink-500 p-6 text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-white/70"
                  >
                    <h3 className="text-2xl font-bold mb-3">Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and Love</h3>
                    <p className="text-white/90 leading-relaxed">example subtitle</p>
                  </button>
                </div>
              </div>

              {/* Right Side - Two smaller cards */}
              <div className="w-full lg:w-80 flex flex-row lg:flex-col gap-4">
                {/* First small card */}
                <div
                    className="bg-gradient-to-br from-blue-100 to-orange-300 rounded-2xl overflow-hidden shadow-lg">
                  <img
                      src="/images/hero/qigong-life.png"
                      alt="Qigong life practice"
                      className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-sm leading-tight">
                      Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and Love
                    </h4>
                  </div>
                </div>

                {/* Second small card */}
                <div
                    className="bg-gradient-to-br from-blue-100 to-orange-300 rounded-2xl overflow-hidden shadow-lg">
                  <img
                      src="/images/hero/benefit-practice.png"
                      alt="Benefit practice"
                      className="w-full h-32 object-cover"
                  />
                  <div className="p-4 text-white">
                    <h4 className="font-bold text-sm leading-tight">
                      Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and
                      Love
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Today's Picks Section End */}



          {/* Most Recent Section */}
          {/* should render 3 cards. assume will not change this layout */}
          <div className="mb-12">

            {/* Most Recent Section title part */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center flex-1">
                <h2 className="text-xl font-bold mr-4">Most recent</h2>
                <div className="flex-1 h-px bg-gray-300"></div>
              </div>
              <Link href="#" className="text-blue-600 text-sm hover:underline ml-4">
                more...
              </Link>
            </div>


            {/* first card in Most Recent Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/content/about2.png"
                    alt="Cultural performance with people in white and red outfits"
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-base font-medium leading-tight">
                    Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and Love
                  </h4>
                </div>
              </div>

              {/* second card in Most Recent Section */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/content/about3.png"
                    alt="Traditional Chinese temple with purple costume performers"
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-base font-medium leading-tight">
                    Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and Love
                  </h4>
                </div>
              </div>


              {/* Third card in Most Recent Section */}
              <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                <img
                    src="/images/content/about4.png"
                    alt="Group photo of people in white outfits arranged in circle"
                    className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-base font-medium leading-tight">
                    Santorini and Aegean Sunset Witness the Ringing of the Bell of World Peace and Love
                  </h4>
                </div>
              </div>
            </div>

          </div>
          {/* Most Recent Section End */}



          {/* Topic Sections - Full Width Layout with larger spacing */}
          <div className="mt-16 space-y-20">
            {/* First Topic Section - Title & Image Group + Content Group */}
            <div className="w-full flex items-center">
              {/* Left Group: Title & Image */}
              <div className="flex flex-col mr-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-8">Topic A</h3>
                <div className="relative z-20">
                  <img
                      src="/images/content/sunny.png"
                      alt="Tai Ji Men Qigong Academy performance with people in white outfits and red drums"
                      className="w-[520px] h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* News in Topic A */}
              <div
                  className="w-[620px] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 rounded-3xl shadow-lg relative -ml-24 pl-32 pr-12 py-12 z-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
                    <div><h4 className="text-lg font-semibold text-gray-800 mb-1">Topic A FOWPAL spreads love in New York</h4></div>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
                    <h4 className="text-lg font-semibold text-gray-800">FOWPAL spreads love in New York</h4>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                  </div>

                  <div className="text-right mt-10">
                    <Link href="#" className="text-purple-600 font-medium hover:underline text-lg">
                      more...
                    </Link>
                  </div>

                </div>
              </div>
            </div>



            {/* Second Topic Section - Content Group + Title & Image Group */}
            <div className="w-full flex items-center">
              {/* Purple background section (larger with proper spacing) */}
              <div
                  className="w-[620px] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 rounded-3xl shadow-lg relative -mr-24 pr-32 pl-12 py-12 z-10">
                <div className="space-y-8 text-right">

                  <div className="flex items-start gap-6 justify-end">
                    <div className="text-right">
                      <h4 className="text-lg font-semibold text-gray-800 mb-1">FOWPAL spreads love in New York</h4>
                    </div>
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6 justify-end">
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6 justify-end">
                    <h4 className="text-lg font-semibold text-gray-800">FOWPAL spreads love in New York</h4>
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6 justify-end">
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
                  </div>

                  <div className="text-right mt-10">
                    <Link href="#" className="text-purple-600 font-medium hover:underline text-lg">
                      more...
                    </Link>
                  </div>
                </div>
              </div>


              {/* Right Group: Title & Image */}
              <div className="flex flex-col ml-4">
                <h3 className="text-4xl font-bold text-gray-800 mb-8 relative z-30">Topic B</h3>
                <div className="relative z-20">
                  <img
                      src="/images/content/david.png"
                      alt="Cultural exchange meeting with Asian man in suit and African man in traditional clothing"
                      className="w-[520px] h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>


            {/* Third Topic Section - Title & Image Group + Content Group */}
            <div className="w-full flex items-center">
              {/* Left Group: Title & Image */}
              <div className="flex flex-col mr-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-8">Topic C</h3>
                <div className="relative z-20">
                  <img
                      src="/images/content/henry.png"
                      alt="Tai Ji Men Qigong Academy performance with people in white outfits and red drums"
                      className="w-[520px] h-[420px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

              {/* Purple background section (larger with proper spacing) */}
              <div
                  className="w-[620px] bg-gradient-to-br from-purple-300 via-pink-300 to-orange-300 rounded-3xl shadow-lg relative -ml-24 pl-32 pr-12 py-12 z-10">
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">1</span>
                    <div><h4 className="text-lg font-semibold text-gray-800 mb-1">FOWPAL spreads love in New York</h4></div>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">2</span>
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">3</span>
                    <h4 className="text-lg font-semibold text-gray-800">FOWPAL spreads love in New York</h4>
                  </div>

                  <div className="w-full h-px bg-white/30"></div>

                  <div className="flex items-start gap-6">
                    <span className="bg-white/80 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0">4</span>
                    <h4 className="text-lg font-semibold text-gray-800">Love you, love me</h4>
                  </div>

                  <div className="text-right mt-10">
                    <Link href="#" className="text-purple-600 font-medium hover:underline text-lg">
                      more...
                    </Link>
                  </div>

                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
  )
}
