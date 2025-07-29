
export default function EventCard({ eventDateOfMonth, eventMonth, eventTitle, photoLink }) {
    return (
        <div className="bg-[#FF725E] rounded-[15px] xs:rounded-[20px] p-4 xs:p-6 md:p-8 text-white">
            <div className="flex items-start gap-3 xs:gap-4 md:gap-6">
                {/* Date */}
                <div className="text-center min-w-[40px] xs:min-w-[50px] md:min-w-[60px]">
                    <div className="text-2xl xs:text-3xl md:text-[48px] font-medium leading-none mb-1">
                        {eventDateOfMonth}
                    </div>
                    <div className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">
                        {eventMonth}
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 xs:gap-3 mb-3 xs:mb-4">
            <span className="text-xs xs:text-sm md:text-[16px] uppercase tracking-wider font-medium">
              NEXT EVENTS
            </span>
                        <div className="w-6 xs:w-8 md:w-[44px] h-[1.5px] xs:h-[2px] bg-white" />
                    </div>
                    <h3 className="text-sm xs:text-base md:text-lg lg:text-[28px] font-bold leading-tight">
                        {eventTitle}
                    </h3>
                </div>

                {/* Arrow button */}
                <a
                    href={photoLink}
                    className="bg-white text-[#FF725E] w-10 xs:w-12 md:w-[56px] h-10 xs:h-12 md:h-[56px] rounded-[12px] xs:rounded-[15px] md:rounded-[20px] flex items-center justify-center flex-shrink-0"
                >
                    <span className="text-sm xs:text-base md:text-xl">→</span>
                </a>
            </div>
        </div>
    );
}