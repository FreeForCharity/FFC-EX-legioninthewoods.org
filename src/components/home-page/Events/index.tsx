import React from 'react'

const Events = () => {
  const brunches2026 = [
    { date: 'Sunday, January 25, 2026', theme: '' },
    { date: 'Sunday, February 22, 2026', theme: '' },
    { date: 'Sunday, March 29, 2026', theme: '' },
    { date: 'Sunday, April 26, 2026', theme: '' },
    { date: 'Sunday, May 10, 2026', theme: "Mother's Day" },
    { date: 'Sunday, June 21, 2026', theme: "Father's Day" },
    { date: 'July 2026', theme: 'No Brunch' },
    { date: 'August 2026', theme: 'No Brunch' },
    { date: 'Sunday, September 27, 2026', theme: '' },
    { date: 'Sunday, October 25, 2026', theme: '' },
    { date: 'Sunday, November 22, 2026', theme: '' },
    { date: 'December 2026', theme: 'No Brunch' },
  ]

  const eveningMeals2026 = [
    { date: 'Thursday, January 22, 2026', theme: 'Cabin Fever - Comfort Food - Music' },
    { date: 'Saturday, February 14, 2026', theme: "Valentine's Dinner - Music" },
    { date: 'Saturday, March 14, 2026', theme: "St Patrick's Style Meal - Music" },
    { date: 'Wednesday, April 15, 2026', theme: 'Steak Bake - Grilled Outdoors' },
  ]

  const otherEvents = [
    { date: 'Sunday, February 8, 2026', theme: 'Super Bowl - Chili Contest' },
    { date: 'Tuesday, March 3, 2026', theme: "Wild Bill's Trivia - Appetizer Specials" },
    { date: 'Tuesday, March 10, 2026', theme: "Wild Bill's Trivia - Appetizer Specials" },
    { date: 'Tuesday, March 17, 2026', theme: "Wild Bill's Trivia - Appetizer Specials" },
    { date: 'Tuesday, March 24, 2026', theme: "Wild Bill's Trivia - Appetizer Specials" },
    { date: 'Tuesday, March 31, 2026', theme: "Wild Bill's Trivia - Appetizer Specials" },
    { date: 'Saturday, May 16, 2026', theme: 'Rib Cookoff' },
    { date: 'October 2026 (Bye Week)', theme: 'Okto-BEE-fest, October Fest' },
  ]

  const lentEvents = [
    { date: 'Friday, February 20, 2026', theme: 'Fish/Mac&Cheese/Slaw/Stewed Tomatoes' },
    { date: 'Friday, February 27, 2026', theme: 'Seafood Gumbo/Rice/Corn Bread' },
    { date: 'Friday, March 6, 2026', theme: 'Fish/Mac&Cheese/Slaw/Stewed Tomatoes' },
    { date: 'Friday, March 13, 2026', theme: 'Seafood Mac&Cheese/Onion Rings' },
    { date: 'Friday, March 20, 2026', theme: 'Fish/Mac&Cheese/Slaw/Stewed Tomatoes' },
    { date: 'Friday, March 27, 2026', theme: "Fish Taco's/Mex Rice/Lime Wedge" },
    { date: 'Friday, April 3, 2026', theme: 'Fish/Mac&Cheese/Stewed Tomatoes' },
  ]

  return (
    <div id="events" className="py-[60px] bg-[#2C1810]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h2
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[20px] text-white"
          id="faustina-font"
        >
          2026 Events Calendar
        </h2>
        <p className="text-center text-[20px] text-[#D4A574] mb-[50px]" id="lato-font">
          Special dinners, trivia nights, and community gatherings
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Evening Meals */}
          <div className="bg-[#3D2317] p-6 rounded-lg">
            <h3
              className="text-[24px] font-[600] mb-4 text-[#D4A574] flex items-center gap-2"
              id="lato-font"
            >
              <span className="text-2xl">🍽️</span> Evening Meals 2026
            </h3>
            <p className="text-[14px] text-white/70 mb-4">Hosted by Legion in the Woods</p>
            <ul className="space-y-3">
              {eveningMeals2026.map((event, idx) => (
                <li key={idx} className="border-b border-[#D4A574]/20 pb-3">
                  <p className="text-[16px] font-[600] text-white">{event.date}</p>
                  <p className="text-[14px] text-[#D4A574]">{event.theme}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Lent Fish Fry */}
          <div className="bg-[#3D2317] p-6 rounded-lg">
            <h3
              className="text-[24px] font-[600] mb-4 text-[#D4A574] flex items-center gap-2"
              id="lato-font"
            >
              <span className="text-2xl">🐟</span> Lent Fish Fry Fridays
            </h3>
            <p className="text-[14px] text-white/70 mb-4">Hosted by Legion in the Woods</p>
            <ul className="space-y-3">
              {lentEvents.map((event, idx) => (
                <li key={idx} className="border-b border-[#D4A574]/20 pb-3">
                  <p className="text-[16px] font-[600] text-white">{event.date}</p>
                  <p className="text-[14px] text-[#D4A574]">{event.theme}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Events */}
          <div className="bg-[#3D2317] p-6 rounded-lg">
            <h3
              className="text-[24px] font-[600] mb-4 text-[#D4A574] flex items-center gap-2"
              id="lato-font"
            >
              <span className="text-2xl">🎉</span> Special Events
            </h3>
            <p className="text-[14px] text-white/70 mb-4">Hosted by Legion in the Woods</p>
            <ul className="space-y-3">
              {otherEvents.map((event, idx) => (
                <li key={idx} className="border-b border-[#D4A574]/20 pb-3">
                  <p className="text-[16px] font-[600] text-white">{event.date}</p>
                  <p className="text-[14px] text-[#D4A574]">{event.theme}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Sunday Brunches */}
          <div className="bg-[#3D2317] p-6 rounded-lg">
            <h3
              className="text-[24px] font-[600] mb-4 text-[#D4A574] flex items-center gap-2"
              id="lato-font"
            >
              <span className="text-2xl">🥞</span> Sunday Brunches 2026
            </h3>
            <p className="text-[14px] text-white/70 mb-4">Hosted by Post 245</p>
            <ul className="space-y-2">
              {brunches2026.map((event, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center border-b border-[#D4A574]/20 pb-2"
                >
                  <span className="text-[14px] text-white">{event.date}</span>
                  {event.theme && (
                    <span className="text-[12px] text-[#D4A574] bg-[#2C1810] px-2 py-1 rounded">
                      {event.theme}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] px-8 py-4 rounded-full text-[18px] font-[600] transition-colors"
            id="lato-font"
          >
            Join Us for an Event
          </a>
          <p className="text-[14px] text-white/60 mt-4" id="lato-font">
            Follow us on{' '}
            <a
              href="https://www.facebook.com/people/American-Legion-Post-245/100064092967036/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A574] hover:underline"
            >
              Facebook
            </a>{' '}
            for updates and announcements
          </p>
        </div>
      </div>
    </div>
  )
}

export default Events
