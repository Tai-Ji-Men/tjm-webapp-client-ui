"use client"

import { X, MessageSquare, Clock, ChevronDown } from "lucide-react"
import { useState } from "react"

export default function ContactPopup({ isOpen, onClose }) {
  const [showMessageForm, setShowMessageForm] = useState(false)
  const [showScheduleForm, setShowScheduleForm] = useState(false)
  const [selectedDate, setSelectedDate] = useState(22)
  const [selectedTime, setSelectedTime] = useState("12:30 PM")

  const openMessageForm = () => {
    setShowMessageForm(true)
  }

  const closeMessageForm = () => {
    setShowMessageForm(false)
  }

  const openScheduleForm = () => {
    setShowScheduleForm(true)
  }

  const closeScheduleForm = () => {
    setShowScheduleForm(false)
  }

  const handleClose = () => {
    setShowMessageForm(false)
    setShowScheduleForm(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Contact Selection Popup */}
      {!showMessageForm && !showScheduleForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-[702px] h-[430px] bg-white rounded-[20px] p-12">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 w-[32px] h-[32px] bg-[#1D2130] rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Content */}
            <div>
              <h2 className="text-[35px] font-bold text-[#1D2130] leading-[1.4] mb-4">
                Reach Out to Your Local Academy
              </h2>
              <p className="text-[14px] text-[#525560] leading-[1.6] mb-12 max-w-[544px]">
                We're here to listen, guide, and support your journey. Which contact method would you prefer?
              </p>

              {/* Contact Options */}
              <div className="flex items-center justify-center gap-16 mt-16">
                {/* Message Option */}
                <div
                  className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={openMessageForm}
                >
                  <div className="w-[74px] h-[74px] bg-[#FF725E] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-[#1D2130]">Send Message</span>
                </div>

                {/* Schedule Option */}
                <div
                  className="text-center cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={openScheduleForm}
                >
                  <div className="w-[74px] h-[74px] bg-[#151A2D] rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Clock className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-[16px] font-medium text-[#1D2130]">Schedule Visit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Message Form Popup */}
      {showMessageForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-[702px] h-[692px] bg-white rounded-[20px] p-12">
            {/* Close Button */}
            <button
              onClick={closeMessageForm}
              className="absolute top-6 right-6 w-[32px] h-[32px] bg-[#1D2130] rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Content */}
            <div>
              <h2 className="text-[35px] font-bold text-[#1D2130] leading-[1.4] mb-4">
                Have a Question? We're Here for You
              </h2>
              <p className="text-[14px] text-[#525560] leading-[1.6] mb-12 max-w-[544px]">
                We're here to listen, guide, and support your journey.
              </p>

              {/* Form */}
              <form className="space-y-6">
                {/* First Row - First Name and Last Name */}
                <div className="flex gap-6">
                  <div className="flex-1">
                    <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full border-b border-black bg-transparent pb-2 focus:outline-none focus:border-[#FF725E] transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full border-b border-black bg-transparent pb-2 focus:outline-none focus:border-[#FF725E] transition-colors"
                    />
                  </div>
                </div>

                {/* Second Row - Contact Method and City */}
                <div className="flex gap-6">
                  <div className="flex-1 relative">
                    <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-2">
                      Preferred Contact Method
                    </label>
                    <select className="w-full border-b border-black bg-transparent pb-2 focus:outline-none focus:border-[#FF725E] transition-colors appearance-none">
                      <option value="">Select method</option>
                      <option value="email">Email</option>
                      <option value="phone">Phone</option>
                      <option value="text">Text Message</option>
                    </select>
                    <ChevronDown className="absolute right-0 bottom-2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-2">
                      City/Region (to route to nearest academy)
                    </label>
                    <input
                      type="text"
                      className="w-full border-b border-black bg-transparent pb-2 focus:outline-none focus:border-[#FF725E] transition-colors"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-4">Message</label>
                  <textarea
                    rows={6}
                    placeholder="Type your Message What would you like to ask or share?"
                    className="w-full border border-black rounded p-4 focus:outline-none focus:border-[#FF725E] transition-colors placeholder-[#1D2130] placeholder-opacity-30 text-[16px]"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="bg-[#FF725E] text-white px-8 py-4 rounded text-[16px] font-medium hover:bg-opacity-90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Form Popup */}
      {showScheduleForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative w-[702px] h-[692px] bg-white rounded-[20px] p-12">
            {/* Close Button */}
            <button
              onClick={closeScheduleForm}
              className="absolute top-6 right-6 w-[32px] h-[32px] bg-[#1D2130] rounded flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              <X className="w-3 h-3 text-white" />
            </button>

            {/* Content */}
            <div>
              <h2 className="text-[36px] font-bold text-[#1D2130] leading-[1.4] mb-4">Schedule a Friendly Call</h2>
              <p className="text-[14px] text-[#525560] leading-[1.6] mb-12 max-w-[544px]">
                We're here to listen, guide, and support your journey.
              </p>

              {/* Select Date */}
              <div className="mb-8">
                <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-4">Select Date</label>

                {/* Month Header */}
                <div className="flex items-center justify-between mb-4 max-w-[200px]">
                  <button className="p-1">
                    <ChevronDown className="w-4 h-4 text-[#ACABB1] rotate-90" />
                  </button>
                  <span className="text-[16px] font-semibold text-[#FF725E]">July, 2020</span>
                  <button className="p-1">
                    <ChevronDown className="w-4 h-4 text-[#ACABB1] -rotate-90" />
                  </button>
                </div>

                {/* Date Selection */}
                <div className="flex gap-4 mb-8">
                  {[
                    { date: 13, day: "MON" },
                    { date: 26, day: "TUE" },
                    { date: 22, day: "WED" },
                    { date: 23, day: "THU" },
                    { date: 24, day: "FRI" },
                    { date: 25, day: "SAT" },
                    { date: 27, day: "SUN" },
                  ].map((item) => (
                    <button
                      key={item.date}
                      onClick={() => setSelectedDate(item.date)}
                      className={`w-[69px] h-[72px] rounded-[12px] border flex flex-col items-center justify-center gap-2 transition-colors ${
                        selectedDate === item.date
                          ? "bg-[#FF725E] border-[#FF725E] text-white"
                          : "bg-white border-gray-200 text-[#6B779A] hover:border-[#FF725E]"
                      }`}
                    >
                      <span className="text-[20px] font-medium">{item.date}</span>
                      <span className="text-[12px]">{item.day}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Available Time */}
              <div className="mb-8">
                <label className="block text-[12px] font-bold text-[#1D2130] opacity-60 mb-4">Available Time</label>

                {/* Time Slots - First Row */}
                <div className="flex gap-[10px] mb-4">
                  {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-[100px] h-[42px] rounded-[10px] border text-[14px] transition-colors ${
                        selectedTime === time
                          ? "bg-[#FF725E] border-[#FF725E] text-white"
                          : "bg-white border-gray-200 text-[#6B779A] hover:border-[#FF725E]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {/* Time Slots - Second Row */}
                <div className="flex gap-[10px]">
                  {["12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-[100px] h-[42px] rounded-[10px] border text-[14px] transition-colors ${
                        selectedTime === time
                          ? "bg-[#FF725E] border-[#FF725E] text-white"
                          : "bg-white border-gray-200 text-[#6B779A] hover:border-[#FF725E]"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-[#151A2D] text-white px-8 py-4 rounded text-[16px] font-medium hover:bg-opacity-90 transition-colors"
              >
                Schedule Call
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
