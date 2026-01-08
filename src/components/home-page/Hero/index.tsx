import React from 'react'

const Hero = () => {
  return (
    <div id="hero" className="relative w-full pb-[100px] overflow-hidden">
      {/* 1. Base warm brown layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#2C1810] via-[#3D2317] to-[#1a0f0a]" />

      {/* 2. Subtle wood texture overlay effect */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(212, 165, 116, 0.1) 50px, rgba(212, 165, 116, 0.1) 51px)',
        }}
      />

      {/* 3. Warm amber accent strip */}
      <div
        className="absolute inset-0 bg-[#D4A574]"
        style={{
          clipPath: 'polygon(0% 108%, 100% 32%, 100% 35%, 0% 111%)',
        }}
      />

      {/* 4. Forest green bottom section */}
      <div
        className="absolute inset-0 bg-[#2D5A27]"
        style={{
          clipPath: 'polygon(0% 111%, 100% 35%, 100% 100%, 0% 100%)',
        }}
      />

      <div className="hero-container flex flex-col lg:flex-row gap-[40px] lg:gap-[0px] items-center justify-between relative z-10 text-white pt-[130px] w-[90%] mx-auto max-w-[1280px] lg:px-[20px]">
        <div className="w-full lg:w-[600px]">
          <h1
            className="text-[50px] lg:text-[65px] font-[500] text-[#FFFFFF] leading-[110%] mb-[20px]"
            id="faustina-font"
          >
            Legion in the Woods
          </h1>
          <p
            className="text-[24px] font-[400] leading-[140%] text-[#D4A574] mb-[10px]"
            id="lato-font"
          >
            Restaurant • Bar • Social Club
          </p>
          <p
            className="text-[20px] font-[400] leading-[140%] text-[#FFFFFF] mb-[30px] opacity-90"
            id="lato-font"
          >
            Great food, cold drinks, and good company in State College, PA
          </p>

          {/* Primary CTA - Visit Us */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=1950+Pine+Hall+Road+State+College+PA+16801"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[300px] lg:w-[320px] h-[58px] rounded-[29px] px-[32px] py-[18px] flex items-center justify-center gap-[10px] bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] text-[20px] font-[600] leading-[100%] mb-[15px] whitespace-nowrap transition-colors"
            id="lato-font"
          >
            Come Visit Us
          </a>

          <div className="flex gap-[10px] flex-wrap">
            <a
              href="#menu"
              className="w-[150px] h-[54px] rounded-[27px] px-[24px] py-[16px] flex items-center justify-center bg-white/10 hover:bg-white/20 border-2 border-[#D4A574] text-[#D4A574] text-[18px] font-[500] leading-[100%] whitespace-nowrap transition-colors"
              id="lato-font"
            >
              View Menu
            </a>
            <a
              href="#events"
              className="w-[150px] h-[54px] rounded-[27px] px-[24px] py-[16px] flex items-center justify-center bg-white/10 hover:bg-white/20 border-2 border-[#D4A574] text-[#D4A574] text-[18px] font-[500] leading-[100%] whitespace-nowrap transition-colors"
              id="lato-font"
            >
              Events
            </a>
          </div>
        </div>

        {/* Right side - Logo/Image */}
        <div className="relative w-full max-w-[400px] aspect-square bg-[#FDF8F3] backdrop-blur-sm rounded-full p-8 flex items-center justify-center border-4 border-[#D4A574]/30">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="/Images/legion-woods-logo.png"
              alt="Legion in the Woods Logo"
              className="max-w-[80%] max-h-[80%] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
