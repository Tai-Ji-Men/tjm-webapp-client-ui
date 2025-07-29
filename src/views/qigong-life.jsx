export default function QigongLife() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 xs:py-24 md:py-28 lg:py-32 overflow-hidden">
        {/* Blue Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#E5EEF1] from-0% via-[rgba(229,238,241,0.62)] via-40% to-transparent to-70%"></div>

        <div className="container-desktop relative z-10">
          {/* Main Content Section with Title and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 md:gap-12 lg:gap-16 items-start">
            <div className="flex flex-col">
              {/* Header Section within text block */}
              <div className="flex items-center mb-6 xs:mb-8 md:mb-12">
                <div className="w-8 xs:w-10 md:w-12 lg:w-[72px] h-0.5 bg-black mr-2 xs:mr-3 md:mr-4"></div>
                <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  QIGONG & LIFE
                </span>
              </div>

              <h2 className="pl-6 xs:pl-8 md:pl-16 lg:pl-[88px] text-lg xs:text-xl md:text-3xl lg:text-5xl font-bold text-black mb-6 xs:mb-8 leading-tight font-roboto">
                Good Qi.<br />
                Good Fortune.<br />
                Good Life.
              </h2>

              <p className="pl-6 xs:pl-8 md:pl-16 lg:pl-[88px] text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto mb-6 lg:mb-8">
                The relationship between good qi and good fortune is inseparable from having a good life. Through cultivating
                qi with pure intentions, every person can find their life path becomes smoother and filled with
                opportunities.
              </p>

              {/* Image - positioned with content on mobile */}
              <div className="flex justify-center lg:hidden">
                <div className="w-full max-w-[200px] xs:max-w-[250px] md:max-w-[300px] h-auto">
                  <img
                    src="/images/content/qigongtop.png"
                    alt="Tai Ji Men Group Practice"
                    className="w-full h-auto rounded-[12px] xs:rounded-[16px] md:rounded-[20px] shadow-lg"
                    style={{ aspectRatio: '479/344' }}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {/* Image - positioned on desktop */}
              <div className="hidden lg:flex justify-end">
                <div className="w-full max-w-[479px] h-auto">
                  <img
                    src="/images/content/qigongtop.png"
                    alt="Tai Ji Men Group Practice"
                    className="w-full h-auto rounded-[20px] shadow-lg"
                    style={{ aspectRatio: '479/344' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Image Section with White Gradient Overlay */}
      <section className="relative overflow-hidden">
        <div className="w-full">
          <div className="relative w-full h-[400px] xs:h-[500px] md:h-[600px] lg:h-[836px]">
          {/* Background gradient to fill any space above the image */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(180deg, #E5EEF1 62.27%, rgba(255, 255, 255, 0) 76.13%)'
            }}
          ></div>
          <img
            src="/images/hero/qigong-life.png"
            alt="Large Group Practice"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Qi & Gong Combined Section */}
      <section className="relative py-8 xs:py-12 md:py-16 lg:py-20 overflow-hidden min-h-[1800px] xs:min-h-[2000px] md:min-h-[2200px] lg:min-h-[2690px]">
        {/* Background Image - Responsive */}
        <div 
          className="absolute inset-0 w-full"
          style={{
            backgroundImage: 'url(/images/content/qigonglife1.png)',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'right bottom',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>

        {/* Responsive container */}
        <div className="container-desktop relative z-10">
          {/* Qi to Gong Content Area */}
          <div className="px-4 xs:px-6 md:px-8 lg:px-[119px] pt-0">
            {/* Qi Section */}
            <div className="mb-6 xs:mb-8 md:mb-10 lg:mb-12">
              <div className="flex items-center mb-4 xs:mb-6 md:mb-8">
                <div className="w-8 xs:w-10 md:w-12 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">QI</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8 items-center">
                {/* Chinese Character */}
                <div className="flex justify-center lg:justify-start">
                  <img src="/images/icons/qi.png" alt="qi" className="w-20 xs:w-24 md:w-32 lg:w-40 h-auto" />
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <p className="text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto">
                    Qi is the source of a person's life; it exists across the whole universe and in everything within it.
                    The foundation of our wellbeing resides in qi.
                  </p>
                </div>
              </div>

            </div>

            {/* Benefits of Cheerful Qi - Aligned with description text */}
            <div className="mb-6 xs:mb-8 md:mb-10 lg:mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8">
                {/* Empty space to align with description */}
                <div className="hidden lg:block"></div>
                
                {/* White block aligned with description text */}
                <div className="lg:col-span-2 flex justify-start">
                  <div className="bg-gradient-to-r from-[#E5EEF1] to-[#F0F7FA] rounded-2xl xs:rounded-3xl p-4 xs:p-6 md:p-8 lg:p-12 shadow-sm w-full max-w-[935px]">
                    <h2 className="text-lg xs:text-xl md:text-2xl lg:text-3xl font-bold text-[#FF725E] text-center mb-4 xs:mb-6 md:mb-8 font-roboto">
                      Cheerful Qi Enables a Person to
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 xs:gap-6 md:gap-8">
                      <div className="space-y-2 xs:space-y-3 md:space-y-4">
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Relax muscles and<br />ligaments</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Maintain normal blood<br />pressure and a steady pulse</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Have good metabolism</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Have good complexion</p>
                      </div>

                      <div className="space-y-2 xs:space-y-3 md:space-y-4">
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Feel energetic</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Look younger</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Have a robust<br />immune system</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Have better relationship<br />with others</p>
                      </div>

                      <div className="space-y-2 xs:space-y-3 md:space-y-4">
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Have better luck</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Create a peaceful and<br />harmonious atmosphere</p>
                        <p className="text-sm xs:text-base md:text-lg text-[#525560] font-roboto leading-tight">• Be successful in<br />endeavors</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Gong Section */}
            <div>
              <div className="flex items-center mb-4 xs:mb-6 md:mb-8">
                <div className="w-8 xs:w-10 md:w-12 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">GONG</span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-6 lg:gap-8 items-center">
                {/* Chinese Character */}
                <div className="flex justify-center lg:justify-start">
                  <img src="/images/icons/gong.png" alt="gong" className="w-20 xs:w-24 md:w-32 lg:w-40 h-auto" />
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <p className="text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto">
                    When a person practices Tai Ji Men Qigong, the amount of air breathed in or out generally is three to
                    five times that of an average person. Such deep breathing allows the blood to absorb more oxygen and
                    thus elevates oxygen levels in the cells and tissues. For this reason, a person practicing Tai Ji Men
                    Qigong over an extended period of time generally finds improvements in complexion, metabolism,
                    disease-fighting capacity, physical and mental health, energy field, physical strength, energy level,
                    life wisdom, etc.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Holistic Health Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container-desktop">
          <div className="flex items-center mb-6 xs:mb-8 md:mb-10">
            <div className="w-8 xs:w-10 md:w-12 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
            <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
              HOLISTIC HEALTH
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16 items-start">
            <div>
              <h2 className="text-xl xs:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black mb-4 xs:mb-6 leading-tight font-roboto">
                Preventive Medicine:<br />
                Tai Ji Men Qigong
              </h2>
            </div>

            <div className="space-y-4 xs:space-y-6">
              <p className="text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto">
                Tai Ji Men Qigong is simple and easy to learn. Medical experts have confirmed that Tai Ji Men Qigong is
                effective in helping prevent diseases commonly seen in the 20th century, including cancer. Experts have
                noted that cancer cells thrive in low-oxygen environments.
              </p>

              <p className="text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto">
                By promoting better circulation, relaxing both the body and mind, and cultivating a joyful heart, Tai Ji
                Men Qigong naturally supports the body's self-healing mechanisms, helping to prevent the development of
                cancer cells.
              </p>

              <p className="text-sm xs:text-base md:text-lg text-[#525560] leading-relaxed font-roboto">
                In addition to cancer prevention, Tai Ji Men Qigong has also been shown to help prevent modern lifestyle
                diseases such as depression, panic disorders, and anxiety. Through the practice of relaxation,
                stillness, natural breathing, and joyful mindfulness, it nurtures holistic physical, mental, and
                spiritual well-being.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section className="relative h-[400px] md:h-[500px] lg:h-[1000px] overflow-hidden">
        <img
          src="/images/content/qigonglife2.png"
          alt="Tai Ji Men Performance"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FF725E]/20"></div>
      </section>
        </div>
  )
}
