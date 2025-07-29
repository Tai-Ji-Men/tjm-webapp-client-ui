import Image from "next/image"

export default function About() {
  return (
    <div className="relative bg-white">
      {/* Background Gradients */}
      <div className="absolute inset-0 overflow-hidden">
        {/* White Gradient Overlay for Large Image */}
        <div className="absolute w-full h-[815px] top-[3200px] bg-gradient-to-b from-white via-[rgba(255,255,255,0.57)] to-transparent"></div>
      </div>

      {/* About TJM Section with Background Image */}
      <section className="relative w-full h-[500px] xs:h-[600px] md:h-[700px] lg:h-[1100px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          {/* Image */}
          <img 
            src="/images/hero/about.png" 
            alt="About Tai Ji Men Background" 
            className="w-full h-full object-cover"
            style={{ transform: 'translateY(290px)' }}
          />

          {/* Gradient overlay */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.1) 50%, transparent 70%)'
            }}
          ></div>
        </div>

        {/* Content Overlay - Responsive Design */}
        <div className="absolute inset-0 z-10">
          <div className="container-desktop h-full">
            <div className="flex flex-col justify-start h-full pt-20 xs:pt-24 md:pt-28 lg:pt-32 xl:pt-36">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16 items-start w-full">
                
                {/* Left Column - Title and Label */}
                <div className="relative ml-6 xs:ml-8 md:ml-12 lg:ml-16 xl:ml-20">
                  {/* Section Header */}
                  <div className="flex items-center mb-3 xs:mb-4 md:mb-6">
                    <div className="w-8 xs:w-10 md:w-12 lg:w-16 h-0.5 bg-black mr-2 xs:mr-3 md:mr-4"></div>
                    <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                      ABOUT TJM
                    </span>
                  </div>

                  {/* Main Title */}
                  <div className="ml-4 xs:ml-6 md:ml-8">
                    <h2 className="text-lg xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight text-black mb-0">
                      <span className="whitespace-nowrap">The Origin of Wisdom:</span> <br />Tai Ji Men
                    </h2>
                  </div>
                </div>

                {/* Right Column - Description */}
                <div className="lg:pt-2 xl:pt-2 lg:ml-2 xl:ml-2 px-4 xs:px-0">
                  <p className="text-xs xs:text-sm md:text-base leading-relaxed text-[#525560]">
                    Tai Ji Men is an ancient menpai (similar to school) of qigong, martial arts and self-cultivation. The culture
                    of Tai Ji Men is deeply rooted in Tao wisdom, inheriting one of the highest philosophies of mankind, which has
                    been passed down and practiced in a cloistered tradition since ancient times.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container-desktop relative z-10">

        {/* Main Content Paragraph */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-sm xs:text-base leading-relaxed xs:leading-[160%] text-[#525560] space-y-4 xs:space-y-6">
                Tai Ji Men is a treasure trove of traditional Tai Ji Men culture and holds the key to unlock the origin of
                wisdom. The contemporary Zhang-men-ren (grandmaster) of Tai Ji Men, Dr. Hong Tao Tze, established Tai Ji Men
                Qigong Academy in 1966 in response to a calling to bring both physical and spiritual health to modern society.
                Dr. Hong teaches his dizi (apprentices) the philosophy and wisdom of life; guiding them to cultivate moral
                character and purify hearts while strengthening physical, mental and spiritual health.
                <br /><br />
                Through different qigong practice techniques and self-cultivation, Tai Ji Men dizi learn to reach the highest
                state of unity between heart and qi, harmony between heaven and man, finding the true self and returning to
                original purity. Tai Ji Men Qigong Academy is an international non-profit cultural organization. The central
                doctrine of Tai Ji Men is "Nurturing the positive energy from the universe, following the good examples of
                sages from all times."
                <br /><br />
                The aim of Tai Ji Men Qigong Academy is to promote the traditional essence of Chinese culture, and to advance
                the physical, mental, and spiritual health of world citizens. Tai Ji Men dizi are located around the world and
                come from all kinds of professional fields. Guided by the Zhang-men-ren, the dizi hold in esteem the spirit of
                universal brotherhood, inherit traditional cultures of human relationships, etiquette, and conscience, and
                spread the seeds of love and peace to wherever they touch around the Earth.
                <br /><br />
                Over the years, Dr. Hong and his dizi have visited over 300 cities in 113 countries, devoting more than 2
                million man-hours in cultural performances around the world to promote international friendship and spread the
                beauty of the Chinese culture across the world. Over 300 on-campus educational seminars on love, peace and
                human rights have been held internationally. Tai Ji Men launched the Movement of An Era of Conscience,
                generating positive commitments and actions from people and organizations in 197 countries.
                <br /><br />
                More than 30,000 symposiums for public welfare have been held to share the wisdom of yin and yang. Over 14,000
                articles about Tai Ji Men dizi's life stories have been published in various media to encourage and inspire
                people. Tai Ji Men also has produced more than 1,300 episodes of the TV program "Energy Family" which have
                been broadcast in media worldwide and on the Tai Ji Men website with more than 87 million visits.
                <br /><br />
                Tai Ji Men dizi devote tremendous personal effort to share the good experiences they have learned with the
                world, wishing that everybody can enjoy health, wealth, wisdom, happiness, and wellbeing in their lives.
              </p>
            </div>
          </div>
        </section>

        {/* About Qi Section */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div>
              {/* Section Header */}
              <div className="flex items-center mb-6 xs:mb-8">
                <div className="w-12 xs:w-14 md:w-16 h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  ABOUT QI
                </span>
              </div>

              <div className="ml-8 xs:ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4 xs:mb-6">
                  The Origin of Life: Qi
                </h2>

                <p className="text-sm xs:text-base leading-relaxed text-[#525560]">
                  Qi is the origin of life; it is also the root of health. Those who are kindhearted bear good qi, and thus,
                  good fortune. The interaction of our mind with qi affects our health and also our magnetic field.
                </p>
              </div>
            </div>

            {/* About1 Image */}
            <div className="relative h-48 xs:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <img 
                src="/images/content/about1.png" 
                alt="TJM Outdoor Practice" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Balance of Wellness Section */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div className="order-last lg:order-first">
              {/* Section Header */}
              <div className="flex items-center mb-6 xs:mb-8">
                <div className="w-12 xs:w-14 md:w-16 h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  BALANCE OF WELLNESS
                </span>
              </div>

              <div className="ml-8 xs:ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4 xs:mb-6">
                  Balancing Body and Mind
                </h2>

                <p className="text-sm xs:text-base leading-relaxed text-[#525560]">
                  Genuine health comes from balance of the body, mind, and environment. To attain genuine health, Tai Ji Men
                  emphasizes harmony between the individual and work, family, interpersonal relationships, and nature.
                </p>
              </div>
            </div>

            {/* About2 Image */}
            <div className="relative h-48 xs:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <img 
                src="/images/content/about2.png" 
                alt="TJM Drum Performance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Inherited Philosophy Section */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div>
              {/* Section Header */}
              <div className="flex items-center mb-6 xs:mb-8">
                <div className="w-12 xs:w-14 md:w-16 h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  INHERITED PHILOSOPHY
                </span>
              </div>

              <div className="ml-8 xs:ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4 xs:mb-6">
                  Traditional Menpai
                </h2>

                <p className="text-sm xs:text-base leading-relaxed text-[#525560]">
                  Zhang-men-ren, Dr. Hong Tao Tze, inherited the highest level of qigong and martial arts of great masters of
                  past generations. He teaches dizi (similar to students) to cultivate their minds and practice qi to reach
                  physical, mental and spiritual health.
                </p>
              </div>
            </div>

            {/* About3 Image */}
            <div className="relative h-48 xs:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <img 
                src="/images/content/about3.png" 
                alt="TJM Group Meditation" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* A Family of Kindness Section */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-center">
            <div className="order-last lg:order-first">
              {/* Section Header */}
              <div className="flex items-center mb-6 xs:mb-8">
                <div className="w-12 xs:w-14 md:w-16 h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  A FAMILY OF KINDNESS
                </span>
              </div>

              <div className="ml-8 xs:ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4 xs:mb-6">
                  One Big Family
                </h2>

                <p className="text-sm xs:text-base leading-relaxed text-[#525560]">
                  In the academy, regardless of sex, age, or profession, all dizi are equal. They learn to be natural and good,
                  and do for themselves and others, trying hard to improve themselves and care for one another as a family.
                </p>
              </div>
            </div>

            {/* About4 Image */}
            <div className="relative h-48 xs:h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden order-first lg:order-last">
              <img 
                src="/images/content/about4.png" 
                alt="TJM Stage Performance" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Essence of Chinese Culture Section */}
        <section className="py-12 xs:py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-10 lg:gap-16 items-start">
            <div>
              {/* Section Header */}
              <div className="flex items-center mb-6 xs:mb-8">
                <div className="w-12 xs:w-14 md:w-16 h-0.5 bg-black mr-3 xs:mr-4"></div>
                <span className="font-sedan text-xs xs:text-sm md:text-base tracking-[1px] xs:tracking-[2px] uppercase text-black">
                  ESSENCE OF CHINESE CULTURE
                </span>
              </div>

              <div className="ml-8 xs:ml-12 md:ml-16 lg:ml-20">
                <h2 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-black mb-4 xs:mb-6">
                  A Culture of Love and Peace
                </h2>
              </div>
            </div>

            <div className="lg:pt-16 ml-8 xs:ml-12 md:ml-16 lg:ml-20">
              <p className="text-sm xs:text-base leading-relaxed text-[#525560]">
                Tai Ji Men Qigong covers the cultural essence of medicine, philosophy, martial arts, literature, education and
                the arts. Tai Ji Men Qigong Academy hopes that these performances of martial arts will guide people onto the
                right path and contribute to social harmony.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Large Background Image - About5 */}
      <div className="relative w-full h-[300px] xs:h-[400px] md:h-[600px] lg:h-[800px] xl:h-[1200px] overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: 'url(/images/content/about5.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
    </div>
  )
}
