import { ChatbotWidget } from "./chatbot"
import {getPageContent} from "@/lib/apiUtils";
import {useEffect, useState} from "react";

export default function Home() {

  const [pageContent, setPageContent] = useState({ testimonials: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPageContent("home");
        console.log("data: " + res);
        setPageContent(res.data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section - 改進響應式設計 */}
      <section className="relative w-full h-[60vh] md:h-[70vh] lg:h-[884px] overflow-hidden">
        {/* 1. 背景圖片 */}
        <img 
          src="/images/hero/home.png" 
          alt="Tai Ji Men Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* 2. 白色漸層遮罩（從 Figma 設計稿還原） */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40"></div>

        {/* 4. 內容層 - 使用新的容器系統 */}
        <div className="container-desktop relative z-10 h-full flex items-center justify-center pt-20 xs:pt-16 md:pt-12 lg:pt-0">
          <div className="text-center">
            {/* Chinese Characters - Vertical Layout */}
            <div className="flex flex-col items-center">
              {/* Top character - 氣 */}
              <img src="/images/icons/qi.png" alt="qi" className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-[175px] h-auto mb-3 md:mb-4" />

              {/* Tagline */}
              <div className="w-full max-w-[347px] h-auto flex items-center justify-center mb-3 md:mb-4 rounded px-4">
                <span className="text-black text-sm xs:text-base md:text-lg lg:text-xl font-medium font-sedan leading-relaxed">
                  The Wisdom of Yin & Yang TEST
                </span>
              </div>

              {/* Bottom character - 功 */}
              <img src="/images/icons/gong.png" alt="gong" className="w-24 xs:w-28 sm:w-32 md:w-40 lg:w-[166px] h-auto mb-8 md:mb-12" />
            </div>

            {/* Learn More Button */}
            <button className="w-[160px] xs:w-[180px] md:w-[200px] h-[36px] md:h-[41px] border border-white rounded-[30px] flex items-center justify-center text-white font-medium hover:bg-white hover:text-black transition duration-300 mx-auto">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Orange Background Section - 改進容器系統 */}
      <section className="relative min-h-screen">
        {/* Orange Gradient Background */}
        <div 
          className="absolute inset-0 w-full"
          style={{
            height: 'min(1800px, 180vh)',
            background: 'linear-gradient(180deg, #FF725E 0%, #FF725E 60%, rgba(255, 114, 94, 0.8) 70%, rgba(255, 114, 94, 0.4) 80%, rgba(255, 255, 255, 0) 85%, rgba(255, 255, 255, 0) 100%)'
          }}
        ></div>

        {/* Features White Card - 使用新的響應式容器 */}
        <div className="absolute top-0 left-0 right-0 z-20 -mt-6 xs:-mt-8 md:-mt-12 lg:-mt-16">
          <div className="container-desktop">
          <div className="max-w-desktop mx-auto bg-white rounded-2xl xs:rounded-3xl p-6 xs:p-8 md:p-12 lg:p-16 mb-8 md:mb-12" 
               style={{
                 boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.15), 0px 20px 60px rgba(0, 0, 0, 0.1)'
               }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xs:gap-10 md:gap-12 lg:gap-16">
              {/* Health */}
              <div className="text-center">
                <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#F3BA2F] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl md:text-2xl font-normal mb-3 md:mb-4 font-sedan text-black leading-tight">Health</h3>
                <p className="text-[#515151] leading-relaxed font-inter text-sm xs:text-base">
                  Tai Ji Men Qigong is deeply rooted in Tao wisdom. Through different qigong practice techniques and self-cultivation, you will strengthen your physical, mental, and spiritual health.
                </p>
              </div>

              {/* Energy */}
              <div className="text-center">
                <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#F3BA2F] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl md:text-2xl font-normal mb-3 md:mb-4 font-sedan text-black leading-tight">Energy</h3>
                <p className="text-[#515151] leading-relaxed font-inter text-sm xs:text-base">
                  Tai Ji Men is a treasure trove of traditional Tai Ji Men culture. By practicing the philosophy of yin and yang and the wisdom of life, you will find yourself surrounded by positive energy.
                </p>
              </div>

              {/* Positivity */}
              <div className="text-center">
                <div className="w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 bg-[#F3BA2F] rounded-full flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <svg className="w-6 md:w-7 lg:w-8 h-6 md:h-7 lg:h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <h3 className="text-lg xs:text-xl md:text-2xl font-normal mb-3 md:mb-4 font-sedan text-black leading-tight">Positivity</h3>
                <p className="text-[#515151] leading-relaxed font-inter text-sm xs:text-base">
                  Tai JI Men dizi learn to reach the highest state of unity between heart and qi, harmony between heaven and man, finding the true self and returning to original purity.
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="relative z-10 pt-20 xs:pt-24 md:pt-28 lg:pt-32">
          {/* Know About Us Section - 改進響應式設計 */}
          <div className="container-desktop mb-12 xs:mb-16 md:mb-20">
            <div className="max-w-desktop mx-auto">
              <div className="flex items-center mb-6 xs:mb-8 md:mb-10">
                <div className="w-8 xs:w-12 md:w-16 lg:w-[72px] h-0.5 bg-white mr-3 xs:mr-4"></div>
                <span className="text-white font-sedan font-normal text-xs xs:text-sm tracking-[2px] uppercase">Know About us</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 md:gap-12 lg:gap-16">
                <div>
                  <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] leading-tight font-bold text-white mb-4 md:mb-6 font-roboto">
                    We provide Qigong techniques for health
                  </h2>
                </div>
                <div>
                  <p className="text-white font-inter text-sm xs:text-base leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                    tristique posuere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Video Section - 改進響應式設計 */}
          <div className="container-desktop mb-12 xs:mb-16 md:mb-20">
            <div className="max-w-desktop mx-auto">
              <div 
                className="w-full h-[200px] xs:h-[250px] md:h-[350px] lg:h-[411px] rounded-xl xs:rounded-2xl md:rounded-3xl relative overflow-hidden"
                style={{
                  background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("/images/content/home1.png")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: '0px -2px 20px rgba(0, 0, 0, 0.11)'
                }}
              >
                <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 xs:w-12 md:w-16 lg:w-[62px] h-10 xs:h-12 md:h-16 lg:h-[62px] bg-white rounded-full flex items-center justify-center hover:scale-110 transition">
                  <svg className="w-3 xs:w-4 md:w-5 lg:w-6 h-3 xs:h-4 md:h-5 lg:h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* What is Tai Ji Men Qigong Section - 改進響應式設計 */}
          <div className="container-desktop mb-12 xs:mb-16 md:mb-20">
            <div className="max-w-desktop mx-auto">
              <div className="flex items-center mb-6 xs:mb-8 md:mb-10">
                <div className="w-8 xs:w-12 md:w-16 lg:w-[72px] h-0.5 bg-white mr-3 xs:mr-4"></div>
                <span className="text-white font-sedan font-normal text-xs xs:text-sm tracking-[2px] uppercase">
                  What IS TAI Ji MEN Qigong
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 md:gap-12 lg:gap-16">
                <div>
                  <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] leading-tight font-bold text-white mb-4 md:mb-6 font-roboto">
                    A Balance of Physical, Mental and Spiritual Health
                  </h2>
                </div>
                <div>
                  <p className="text-white font-inter text-sm xs:text-base leading-relaxed">
                    11111Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero
                    vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                    tristique posuere.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Large Group Photo Section */}
      <section className="relative w-full h-[50vh] md:h-[70vh] lg:h-[1058px] overflow-hidden">
        <img 
          src="/images/content/home2.png" 
          alt="Large Group Practice" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/50"></div>
      </section>

      {/* Recommendations Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-white">
        <div className="container-desktop">
          <div className="max-w-desktop mx-auto">
            <div className="flex items-center mb-6 xs:mb-8 md:mb-10">
              <div className="w-8 xs:w-12 md:w-16 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
              <span className="text-black font-sedan font-normal text-xs xs:text-sm tracking-[2px] uppercase">Recommendations</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 md:gap-12 lg:gap-16 mb-8 xs:mb-12 md:mb-16">
              <div>
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-[48px] leading-tight font-bold text-black mb-4 md:mb-6 font-roboto">
                  What Happy People Has to Say
                </h2>
              </div>
              <div>
                <p className="text-gray-600 font-inter text-sm xs:text-base leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                  tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae
                  erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique
                  posuere.
                </p>
              </div>
            </div>

            {/* Testimonials - Horizontal Scroll */}
            <div className="overflow-x-auto pb-4">
              <div className="flex space-x-4 xs:space-x-6 md:space-x-8">
                {pageContent.testimonials.map((testimonial, index) => (
                  <div key={index} className="relative min-w-[200px] xs:min-w-[260px] md:min-w-[320px] lg:min-w-[403px] h-48 xs:h-64 md:h-80 lg:h-[495px] rounded-xl xs:rounded-2xl md:rounded-3xl overflow-hidden group">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-3 xs:bottom-4 md:bottom-6 left-3 xs:left-4 md:left-6 right-3 xs:right-4 md:right-6">
                      <h3 className={`text-lg xs:text-xl md:text-2xl lg:text-[32px] font-normal mb-1 md:mb-2 font-sedan leading-tight ${testimonial.textColor}`}>{testimonial.name}</h3>
                      <p className={`text-xs xs:text-sm md:text-base font-inter leading-relaxed ${testimonial.textColor}`}>{testimonial.title}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Widget */}
      <ChatbotWidget />
    </div>
  )
}
