import React from 'react'

const About = () => {
  return (
    <div id="about" className="py-[60px] bg-[#FDF8F3]">
      <div className="w-[90%] mx-auto py-[27px] max-w-[1280px]">
        <h2
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center w-full lg:w-[906px] mx-auto mb-[50px] text-[#2C1810]"
          id="faustina-font"
        >
          Welcome to the Woods
        </h2>
        <p
          className="font-[700] text-[22px] lg:text-[25px] leading-[150%] tracking-[0] text-center mb-[30px] text-[#3D2317]"
          id="lato-font"
        >
          Legion in the Woods is your neighborhood gathering place for great food,
          cold drinks, and warm company in State College, Pennsylvania.
        </p>
        <p
          className="font-[500] text-[20px] lg:text-[22px] leading-[150%] tracking-[0] text-center text-[#5D4037] mb-[30px]"
          id="lato-font"
        >
          Whether you&apos;re joining us for a hearty meal, catching the game at the bar,
          throwing darts with friends, or trying your luck at our games of chance —
          there&apos;s always a seat waiting for you at the Legion.
        </p>

        {/* Parent Organization Link */}
        <div className="text-center mt-[40px] p-6 bg-white rounded-lg shadow-sm max-w-[600px] mx-auto">
          <p className="text-[18px] text-[#5D4037] mb-2" id="lato-font">
            Proudly part of
          </p>
          <a
            href="https://nittanypost245.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[22px] font-[600] text-[#2D5A27] hover:text-[#3D7A37] transition-colors"
            id="lato-font"
          >
            Nittany American Legion Post 245 →
          </a>
          <p className="text-[16px] text-[#8D7B6B] mt-2" id="lato-font">
            Serving veterans and community since 1919
          </p>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#D4A574]"></div>
    </div>
  )
}

export default About
