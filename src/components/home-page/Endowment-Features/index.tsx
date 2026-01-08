import React from 'react'
import Image from 'next/image'

const Entertainment = () => {
  return (
    <div id="entertainment" className="py-[60px] bg-[#FDF8F3]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h2
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[20px] text-[#2C1810]"
          id="faustina-font"
        >
          Games & Entertainment
        </h2>
        <p className="text-center text-[20px] text-[#5D4037] mb-[50px]" id="lato-font">
          More than just great food — join in the fun!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Darts */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4A574]/30 text-center">
            <div className="text-[60px] mb-4">🎯</div>
            <h3 className="text-[24px] font-[600] mb-3 text-[#2C1810]" id="lato-font">
              Darts
            </h3>
            <p className="text-[16px] text-[#5D4037]" id="lato-font">
              Join our dart leagues or play a casual game with friends. We have top-quality boards and a friendly competitive atmosphere.
            </p>
          </div>

          {/* Small Games of Chance */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4A574]/30 text-center">
            <div className="text-[60px] mb-4">🎰</div>
            <h3 className="text-[24px] font-[600] mb-3 text-[#2C1810]" id="lato-font">
              Small Games of Chance
            </h3>
            <p className="text-[16px] text-[#5D4037]" id="lato-font">
              Try your luck with our variety of small games of chance. It adds an extra layer of excitement to your visit! (Must be 21+)
            </p>
          </div>

          {/* Trivia & More */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#D4A574]/30 text-center">
            <div className="text-[60px] mb-4">🧠</div>
            <h3 className="text-[24px] font-[600] mb-3 text-[#2C1810]" id="lato-font">
              Trivia & Music
            </h3>
            <p className="text-[16px] text-[#5D4037]" id="lato-font">
              Test your knowledge at Wild Bill's Trivia nights or enjoy live music during our special dinner events.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#D4A574]"></div>

    </div>
  )
}

export default Entertainment
