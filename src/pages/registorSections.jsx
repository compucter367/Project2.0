import React from "react";

export default function CallbackForm() {
  return (
    <div className="w-full min-h-screen bg-[#f2f2f2] flex items-center justify-center p-6">
      <div className="w-full max-w-5xl border-2 border-blue-500 bg-[#f5f5f5]">
        <div className="text-center py-14 px-6 border-b border-gray-300">
          <h1 className="text-5xl font-bold text-[#1d1d1d] leading-tight">
            Leave your number and
            <br />
            we'll call you back
          </h1>

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-8">
            Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu.
            Nam facilisis lacinia ex, eget sollicitudin massa pellentesque in.
            Vivamus mattis eros at sem pulvinar
          </p>
        </div>

        <div className="flex justify-center py-20 px-6">
          <form className="w-full max-w-md space-y-10">
            <div>
              <label className="block text-2xl font-semibold text-[#1d1d1d] mb-4">
                Name
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 outline-none py-2 text-lg"
              />
            </div>

            <div>
              <label className="block text-2xl font-semibold text-[#1d1d1d] mb-4">
                Phone number
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-gray-300 outline-none py-2 text-lg"
              />
            </div>

            <div>
              <label className="block text-2xl font-semibold text-[#1d1d1d] mb-4">
                Description
              </label>
              <select className="w-full bg-transparent border-b border-gray-300 outline-none py-2 text-lg">
                <option>Select</option>
                <option>Support</option>
                <option>Consultation</option>
                <option>Other</option>
              </select>
            </div>

            <div className="text-center pt-4">
              <button className="bg-[#19b67a] hover:bg-[#16a56f] text-white px-14 py-4 rounded-md text-lg font-semibold transition">
                Send
              </button>

              <p className="text-gray-400 text-base mt-6">
                We call back in 10–30 minutes, guaranteed!
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}