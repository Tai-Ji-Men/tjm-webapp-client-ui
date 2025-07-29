import {useEffect, useState} from "react";
import FeatureCard from "@/components/featureCard";
import {getPageContent} from "@/lib/apiUtils";

export default function BenefitPractice() {

  const [pageContent, setPageContent] = useState({ features: [] });
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await getPageContent("benefitPractice");
        console.log("data: " + res);
        setPageContent(res.data);
      } catch (err) {
        setError(err.message);
      }
    })();
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Background */}
      <section className="relative min-h-[600px] xs:min-h-[700px] md:min-h-[900px] lg:min-h-[1300px] overflow-hidden">
        {/* Purple Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1FF] via-[rgba(245,241,255,0.62)] to-transparent"></div>
        
        {/* Background Image positioned lower */}
        <div className="absolute inset-0 top-[400px] xs:top-[200px] md:top-[300px] lg:top-[400px]">
          <img 
            src="/images/hero/benefit-practice.png" 
            alt="Children with fans performance" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
        </div>

        <div className="relative z-10 pt-16 xs:pt-20 md:pt-24 lg:pt-32">
          <div className="container-desktop">
            <div className="relative w-full max-w-[1182px] mx-auto">
              {/* Section Label and Line */}
              <div className="mb-6 xs:mb-8 md:mb-10">
                <div className="flex items-center mb-3 xs:mb-4">
                  <div className="w-8 xs:w-10 md:w-16 lg:w-[72px] h-0.5 bg-black mr-2 xs:mr-3 md:mr-4"></div>
                  <span className="font-['Sedan_SC'] text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] uppercase text-black">
                    BENEFITS OF PRACTICESss
                  </span>
                </div>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-start">
                {/* Left Column - Title */}
                <div className="max-w-[607px]">
                  <h2 className="pl-6 xs:pl-8 md:pl-16 lg:pl-[88px] text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-[120%] font-bold text-black font-roboto">
                    Discover the<br />
                    <span className="whitespace-nowrap">Transformative Power</span><br />
                    of Tai Ji Men Qigong
                  </h2>
                </div>

                {/* Right Column - Description */}
                <div className="max-w-[512px] flex items-start">
                  <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-base leading-[160%] text-[#525560] font-roboto">
                    Rooted in ancient wisdom and adapted for modern life, Tai Ji Men Qigong is more than just a
                    practice—it's a path to holistic well-being. From helping individuals recover their health naturally, to
                    nurturing emotional strength in children and youth, to managing daily stress with clarity and calm, and
                    ultimately elevating the spirit toward peace and purpose, this time-honored discipline empowers people
                    of all ages to thrive in body, mind, and heart. Whether you're seeking healing, balance, or inner
                    growth, Tai Ji Men offers a gentle yet powerful way forward.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
      <section className="py-12 xs:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-desktop">
          <div className="relative w-full max-w-[1182px] mx-auto">
            {/* Section Label and Line */}
            <div className="mb-6 xs:mb-8 md:mb-10">
              <div className="flex items-center mb-3 xs:mb-4">
                <div className="w-8 xs:w-10 md:w-16 lg:w-[72px] h-0.5 bg-black mr-2 xs:mr-3 md:mr-4"></div>
                <span className="font-['Sedan_SC'] text-[10px] xs:text-xs sm:text-sm md:text-base tracking-[1px] xs:tracking-[1.5px] sm:tracking-[2px] uppercase text-black">
                  SMALL STEPS, PROFOUND SHIFTS
                </span>
              </div>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-start">
              {/* Left Column - Title */}
              <div className="max-w-[607px]">
                <h2 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[48px] leading-[120%] font-bold text-black font-roboto">
                  Real stories.<br />
                  Real people.<br />
                  Real change.
                </h2>
              </div>

              {/* Right Column - Description */}
              <div className="max-w-[555px] flex items-start">
                <p className="text-xs xs:text-sm sm:text-base md:text-base lg:text-base leading-[160%] text-black font-inter">
                  Whether you're searching for physical healing, emotional balance, or a greater connection to your inner
                  self, this holistic path welcomes you. The journey begins with a single breath—and a decision to care
                  for your whole being. Explore how this practice can support you through every chapter of life:
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="pb-12 xs:pb-16 md:pb-20 lg:pb-24">
        <div className="container-desktop">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 md:gap-8">
            {pageContent.features.map(feature => (
                <FeatureCard
                    key={feature.id}
                    title={feature.title}
                    image={feature.image}
                    description={feature.description}
                />
            ))}
          </div>

        </div>
      </section>

      {/* Bottom Large Image Section */}
      <section className="relative h-[300px] xs:h-[400px] md:h-[500px] lg:h-[1000px] overflow-hidden">
        <img
          src="/images/content/benefitpractice1.png"
          alt="Large Group Practice"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-transparent to-white/20"></div>
      </section>
    </div>
  )
}
