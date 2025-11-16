
import { useState } from "react"
import { MapPin, Instagram, Facebook, Music, MessageCircle, ChevronDown } from "lucide-react"

export default function Events() {
  const [selectedLocation, setSelectedLocation] = useState("all")

  const locations = [
    { id: "all", name: "All Location" },
    { id: "walnut", name: "Walnut" },
    { id: "pasadena", name: "Pasadena" },
    { id: "santa-clara", name: "Santa Clara" },
    { id: "cupertino", name: "Cupertino" },
    { id: "toronto", name: "Toronto" }
  ]

  const events = [
    {
      date: { day: "28", month: "JUN" },
      title: "Dragon Boat Festival Afternoon Tea - A Legacy of Fatherly Love",
      speaker: "John",
      time: "2:30pm~4:00pm",
      location: "Walnut academy",
      locationId: "walnut",
      image: "/images/content/news1.png"
    },
    {
      date: { day: "12", month: "JUN" },
      title: "When Change Knocks Louder Than the Plan",
      speaker: "Bill Chien (Project Consultant)",
      time: "3:30 PM~4:30 PM",
      location: "Toronto academy",
      locationId: "toronto",
      image: "/images/content/news2.png"
    },
    {
      date: { day: "06", month: "JUN" },
      title: "When Change Knocks Louder Than the Plan",
      speaker: "Bill Chien (Project Consultant)",
      time: "3:30 PM~4:30 PM",
      location: "Cupertino academy",
      locationId: "cupertino",
      image: "/images/content/news3.png"
    },
    {
      date: { day: "01", month: "JUN" },
      title: "When Change Knocks Louder Than the Plan",
      speaker: "Bill Chien (Project Consultant)",
      time: "3:30 PM~4:30 PM",
      location: "Walnut academy",
      locationId: "walnut",
      image: "/images/content/news4.png"
    },
    {
      date: { day: "01", month: "MAY" },
      title: "When Change Knocks Louder Than the Plan",
      speaker: "Bill Chien (Project Consultant)",
      time: "3:30 PM~4:30 PM",
      location: "Toronto academy",
      locationId: "toronto",
      image: "/images/content/news5.png"
    }
  ]

  const filteredEvents = selectedLocation === "all"
      ? events
      : events.filter(event => event.locationId === selectedLocation)

  return (
      <div className="relative w-full bg-white">
        {/* Section 1: Hero Section - Same as Academy */}
        <section className="relative pt-16 md:pt-20 lg:pt-24 pb-0 min-h-[600px] xs:min-h-[700px] md:min-h-[950px] lg:min-h-[1200px] overflow-hidden">
          {/* Blue Gradient Background */}
          <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(180deg, #E4ECFF 62.27%, rgba(255, 255, 255, 0) 76.13%)'
              }}
          ></div>

          {/* Background Image positioned lower */}
          <div className="absolute inset-0 top-[150px] xs:top-[180px] md:top-[300px] lg:top-[400px]">
            <img
                src="/images/hero/joinus.png"
                alt="Join Us Background"
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <div className="container-desktop">
              <div className="relative">
                {/* Section Label and Line */}
                <div className="mb-6 xs:mb-8">
                  <div className="flex items-center mb-4">
                    <div className="w-8 xs:w-12 md:w-16 lg:w-[72px] h-0.5 bg-black mr-3 xs:mr-4"></div>
                    <span className="font-['Sedan_SC'] text-xs xs:text-sm md:text-base tracking-[1.5px] xs:tracking-[2px] uppercase text-black">
                    JOIN US
                  </span>
                  </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16">
                  {/* Left Column - Title */}
                  <div className="max-w-full lg:max-w-[607px]">
                    <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[48px] leading-[120%] font-bold text-black font-roboto mb-4 xs:mb-6 md:mb-8">
                      Step Into a Life of<br />
                      Balance, Purpose,<br />
                      and Vitality
                    </h2>
                  </div>

                  {/* Right Column - Description */}
                  <div className="max-w-full lg:max-w-[512px]">
                    <p className="text-xs xs:text-sm md:text-base leading-[160%] text-[#525560] font-roboto">
                      Whether you're seeking personal transformation or looking to share positive energy with others, Tai Ji Men welcomes you with open arms. Discover how you can get involved—through learning, practicing, and participating.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Events */}
        <section className="relative py-12 xs:py-16 md:py-20 lg:py-[120px] bg-white">
          <div className="container-desktop">
            {/* Section Header */}
            <div className="mb-12 xs:mb-16 md:mb-20 lg:mb-[80px]">
              <div className="flex items-center gap-3 xs:gap-4 mb-6 xs:mb-8">
                <div className="w-8 xs:w-12 md:w-[60px] h-[1.5px] xs:h-[2px] bg-black"></div>
                <span className="text-xs xs:text-sm md:text-[14px] font-medium tracking-[0.15em] xs:tracking-[0.2em] uppercase text-black">EVENTS</span>
              </div>

              {/* Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 lg:gap-16">
                {/* Left Column - Title */}
                <div className="max-w-full lg:max-w-[607px]">
                  <h2 className="pl-8 xs:pl-12 md:pl-16 lg:pl-20 xl:pl-[88px] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-bold text-black leading-[1.2]">
                    Join the Journey.<br />
                    Make a Difference.
                  </h2>
                </div>

                {/* Right Column - Description */}
                <div className="max-w-full lg:max-w-[473px]">
                  <p className="text-xs xs:text-sm md:text-[16px] text-black leading-[1.6]">
                    Tai Ji Men's events are more than gatherings—they're heart-centered opportunities to uplift yourself and the world around you. From local community wellness sharings to international cultural festivals, your participation helps spread healing, harmony, and hope.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Filters */}
            <div className="flex flex-wrap items-center gap-3 xs:gap-4 md:gap-6 mb-8 xs:mb-10 md:mb-12 lg:mb-16">
              {locations.map((location) => (
                  <button
                      key={location.id}
                      onClick={() => setSelectedLocation(location.id)}
                      className={`
                  px-4 xs:px-6 md:px-8 lg:px-10 py-2 xs:py-2.5 md:py-3
                  text-sm xs:text-base md:text-lg lg:text-[27px]
                  rounded-full border-[1.5px] xs:border-[1.7px] transition-all
                  ${
                          location.id === "all" && selectedLocation === "all"
                              ? "bg-[#FF5F57] border-[#404040] text-[#404040]"
                              : selectedLocation === location.id && location.id !== "all"
                                  ? "bg-white border-[#FF725E] text-[#FF725E]"
                                  : "bg-white border-[#FF725E] text-[#FF725E] hover:bg-[#FFF5F3]"
                      }
                `}
                  >
                    {location.name}
                  </button>
              ))}
            </div>

            {/* Events List */}
            <div className="space-y-6 xs:space-y-8 md:space-y-10 lg:space-y-0">
              {filteredEvents.map((event, index) => (
                  <div key={index} className="relative pb-6 xs:pb-8 md:pb-10 lg:pb-[30px] border-b border-[#D9D9D9]">
                    <div className="grid grid-cols-1 lg:grid-cols-[155px_436px_1fr] gap-4 xs:gap-6 md:gap-8 lg:gap-12 xl:gap-[57px] items-start">
                      {/* Date Section */}
                      <div className="flex flex-col items-start gap-3 xs:gap-4">
                        <div className="text-center">
                          <div className="text-4xl xs:text-5xl md:text-6xl lg:text-[90px] font-medium leading-[1.2] text-[#FF725E]">
                            {event.date.day}
                          </div>
                          <div className="text-xl xs:text-2xl md:text-3xl lg:text-[45px] font-medium tracking-[0.08em] text-[#FF725E] uppercase mt-1 xs:mt-2">
                            {event.date.month}
                          </div>
                        </div>
                        <button className="w-full lg:w-[155px] px-6 xs:px-8 md:px-10 py-2 xs:py-2.5 md:py-3 lg:py-[12px] border-[1.5px] border-[#FF725E] rounded-full text-sm xs:text-base md:text-lg lg:text-[24px] text-[#FF725E] hover:bg-[#FFF5F3] transition-colors whitespace-nowrap text-center flex items-center justify-center">
                          More Info
                        </button>
                      </div>

                      {/* Image */}
                      <div className="relative w-full aspect-[436/225] lg:w-[436px] lg:h-[225px] rounded-[15px] xs:rounded-[20px] overflow-hidden">
                        <img
                            src={event.image}
                            alt={event.title}
                            className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Event Details */}
                      <div className="flex flex-col justify-between h-full">
                        <div>
                          <div className="flex items-center gap-2 mb-3 xs:mb-4">
                            <MapPin className="w-4 xs:w-5 h-4 xs:h-5 text-[#595959] flex-shrink-0" />
                            <span className="text-base xs:text-lg md:text-xl lg:text-[24px] font-medium text-[#595959]">
                          {event.location}
                        </span>
                          </div>
                          <h3 className="text-xl xs:text-2xl md:text-3xl lg:text-[32px] font-bold text-[#404040] leading-[1.5] mb-4 xs:mb-6 md:mb-8 lg:mb-12">
                            {event.title}
                          </h3>
                        </div>
                        <div className="text-base xs:text-lg md:text-xl lg:text-[24px] font-medium text-[#8C8C8C] leading-[1.6] space-y-1 xs:space-y-2">
                          <div>Speaker: {event.speaker}</div>
                          <div>Time: {event.time}</div>
                        </div>
                      </div>
                    </div>
                  </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Bottom Image with Rotation Effect */}
        <section className="relative w-full h-[400px] xs:h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">


          {/* Rotated background image */}
          <div className="absolute -left-[5%] xs:-left-[7%] md:-left-[8%] top-0 w-[110%] xs:w-[115%] md:w-[120%] h-full">
            <img
                src="/images/content/joinus6.png"
                alt="Join Us Performance"
                className="w-full h-full object-cover"
                style={{ transform: 'rotate(1.17deg)' }}
            />
          </div>
        </section>


      </div>
  )
}
