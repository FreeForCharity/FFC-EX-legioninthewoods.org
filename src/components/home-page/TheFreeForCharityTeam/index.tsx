import React from 'react'

const Team = () => {
  const boardMembers = [
    { name: 'Mitch DeLong', title: 'President' },
    { name: 'Tom Palchak', title: '1st Vice President' },
    { name: 'Rich Jackson', title: '2nd Vice President' },
    { name: 'Chris Solo', title: 'Treasurer' },
    { name: 'Tom Hoy', title: 'Director at Large' },
    { name: 'Bob Beadle', title: 'Director at Large' },
    { name: 'Tom Hammond', title: 'Director at Large' },
  ]

  return (
    <div id="team" className="py-[60px] bg-white">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h2
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[20px] text-[#2C1810]"
          id="faustina-font"
        >
          Leadership & Staff
        </h2>

        {/* Board of Directors */}
        <div className="mb-12">
          <h3 className="text-[30px] text-center text-[#D4A574] mb-8 font-[500]" id="faustina-font">
            Board of Directors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {boardMembers.map((member, idx) => (
              <div
                key={idx}
                className="w-[300px] p-4 bg-[#FDF8F3] rounded-lg border border-[#D4A574]/20 text-center"
              >
                <h4 className="text-[22px] font-[600] text-[#2C1810]" id="lato-font">
                  {member.name}
                </h4>
                <p className="text-[16px] text-[#5D4037]" id="lato-font">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Appreciation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="text-center p-6 bg-[#2C1810] text-white rounded-lg">
            <div className="text-[40px] mb-2">🍳</div>
            <h3 className="text-[24px] font-[600] mb-2" id="lato-font">
              The Great Cooks
            </h3>
            <p className="text-white/80" id="lato-font">
              Thank you to our dedicated kitchen staff and volunteer cooks who make every meal
              special.
            </p>
          </div>

          <div className="text-center p-6 bg-[#2C1810] text-white rounded-lg">
            <div className="text-[40px] mb-2">🍺</div>
            <h3 className="text-[24px] font-[600] mb-2" id="lato-font">
              Bar Staff
            </h3>
            <p className="text-white/80" id="lato-font">
              Cheers to the team that keeps the drinks flowing and the atmosphere welcoming.
            </p>
          </div>

          <div className="text-center p-6 bg-[#2C1810] text-white rounded-lg">
            <div className="text-[40px] mb-2">🤝</div>
            <h3 className="text-[24px] font-[600] mb-2" id="lato-font">
              Support Team
            </h3>
            <p className="text-white/80" id="lato-font">
              Grateful for the behind-the-scenes support that keeps our social club running
              smoothly.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#D4A574]"></div>
    </div>
  )
}

export default Team
