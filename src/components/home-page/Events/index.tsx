import React from 'react'

type EventType = 'Brunch' | 'Meal' | 'Event' | 'FishFry'

interface CalendarEvent {
  date: string
  day: string
  type: EventType
  name: string
  detail?: string
}

interface MonthData {
  name: string
  events: CalendarEvent[]
}

const Events = () => {
  const eventTypes = [
    { type: 'Brunch', icon: '🥞', label: 'Sunday Brunch', host: 'Post 245' },
    { type: 'Meal', icon: '🍽️', label: 'Evening Meal', host: 'Legion in the Woods' },
    { type: 'Event', icon: '🎉', label: 'Special Event', host: 'Legion in the Woods' },
    { type: 'FishFry', icon: '🐟', label: 'Lent Fish Fry', host: 'Legion in the Woods' },
  ] as const

  const calendarData: MonthData[] = [
    {
      name: 'January 2026',
      events: [
        {
          date: 'Jan 22',
          day: 'Thu',
          type: 'Meal',
          name: 'Cabin Fever',
          detail: 'Comfort Food - Music',
        },
        { date: 'Jan 25', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' },
      ],
    },
    {
      name: 'February 2026',
      events: [
        { date: 'Feb 8', day: 'Sun', type: 'Event', name: 'Super Bowl', detail: 'Chili Contest' },
        { date: 'Feb 14', day: 'Sat', type: 'Meal', name: "Valentine's Dinner", detail: 'Music' },
        {
          date: 'Feb 20',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: 'Fish/Mac&Cheese/Slaw',
        },
        { date: 'Feb 22', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' },
        {
          date: 'Feb 27',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: 'Seafood Gumbo/Rice',
        },
      ],
    },
    {
      name: 'March 2026',
      events: [
        {
          date: 'Mar 3',
          day: 'Tue',
          type: 'Event',
          name: "Wild Bill's Trivia",
          detail: 'Appetizer Specials',
        },
        {
          date: 'Mar 6',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: 'Fish/Mac&Cheese/Slaw',
        },
        {
          date: 'Mar 10',
          day: 'Tue',
          type: 'Event',
          name: "Wild Bill's Trivia",
          detail: 'Appetizer Specials',
        },
        {
          date: 'Mar 13',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: 'Seafood Mac&Cheese',
        },
        { date: 'Mar 14', day: 'Sat', type: 'Meal', name: "St Patrick's Meal", detail: 'Music' },
        {
          date: 'Mar 17',
          day: 'Tue',
          type: 'Event',
          name: "Wild Bill's Trivia",
          detail: 'Appetizer Specials',
        },
        {
          date: 'Mar 20',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: 'Fish/Mac&Cheese/Slaw',
        },
        {
          date: 'Mar 24',
          day: 'Tue',
          type: 'Event',
          name: "Wild Bill's Trivia",
          detail: 'Appetizer Specials',
        },
        {
          date: 'Mar 27',
          day: 'Fri',
          type: 'FishFry',
          name: 'Fish Fry',
          detail: "Fish Taco's/Mex Rice",
        },
        { date: 'Mar 29', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' },
        {
          date: 'Mar 31',
          day: 'Tue',
          type: 'Event',
          name: "Wild Bill's Trivia",
          detail: 'Appetizer Specials',
        },
      ],
    },
    {
      name: 'April 2026',
      events: [
        { date: 'Apr 3', day: 'Fri', type: 'FishFry', name: 'Fish Fry', detail: 'Fish/Mac&Cheese' },
        {
          date: 'Apr 15',
          day: 'Wed',
          type: 'Meal',
          name: 'Steak Bake',
          detail: 'Grilled Outdoors',
        },
        { date: 'Apr 26', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' },
      ],
    },
    {
      name: 'May 2026',
      events: [
        { date: 'May 10', day: 'Sun', type: 'Brunch', name: "Mother's Day Brunch" },
        { date: 'May 16', day: 'Sat', type: 'Event', name: 'Rib Cookoff' },
      ],
    },
    {
      name: 'June 2026',
      events: [{ date: 'Jun 21', day: 'Sun', type: 'Brunch', name: "Father's Day Brunch" }],
    },
    {
      name: 'July 2026',
      events: [],
    },
    {
      name: 'August 2026',
      events: [],
    },
    {
      name: 'September 2026',
      events: [{ date: 'Sep 27', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' }],
    },
    {
      name: 'October 2026',
      events: [
        { date: 'Oct TBD', day: '', type: 'Event', name: 'Okto-BEE-fest', detail: 'October Fest' },
        { date: 'Oct 25', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' },
      ],
    },
    {
      name: 'November 2026',
      events: [{ date: 'Nov 22', day: 'Sun', type: 'Brunch', name: 'Regular Sunday Brunch' }],
    },
    {
      name: 'December 2026',
      events: [],
    },
  ]

  const getTypeIcon = (type: EventType) => {
    return eventTypes.find((t) => t.type === type)?.icon || '📅'
  }

  return (
    <div id="events" className="py-[80px] bg-[#FDF8F3]">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        {/* Header */}
        <div className="text-center mb-[60px]">
          <h2
            className="font-[400] text-[40px] lg:text-[56px] leading-[100%] text-[#2C1810] mb-[20px]"
            id="faustina-font"
          >
            2026 Events Calendar
          </h2>
          <p className="text-[20px] text-[#5D4037]" id="lato-font">
            Join the community at Legion in the Woods
          </p>
        </div>

        {/* Legend / Event Types */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-[60px] bg-white p-6 rounded-2xl border border-[#D4A574]/30 shadow-sm">
          {eventTypes.map((type, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="text-3xl mb-2">{type.icon}</span>
              <span className="text-[#D4A574] font-bold text-lg mb-1">{type.label}</span>
              <span className="text-[#5D4037] text-sm">Hosted by {type.host}</span>
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {calendarData.map((month, idx) => {
            if (month.events.length === 0) return null

            return (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden shadow-lg border border-[#D4A574]/20"
              >
                {/* Month Header */}
                <div className="bg-[#5D4037] py-3 px-5 border-b-4 border-[#D4A574]">
                  <h3
                    className="text-white text-xl font-bold uppercase tracking-wider text-center"
                    id="lato-font"
                  >
                    {month.name}
                  </h3>
                </div>

                {/* Events List */}
                <div className="p-4 space-y-3">
                  {month.events.map((event, eIdx) => (
                    <div
                      key={eIdx}
                      className="flex items-start gap-4 p-3 bg-[#FDF8F3] rounded-lg hover:bg-[#FFF3E0] transition-colors border border-transparent hover:border-[#D4A574]/30"
                    >
                      {/* Date Box */}
                      <div className="flex-shrink-0 flex flex-col items-center justify-center bg-[#D4A574] text-[#2C1810] w-[60px] h-[60px] rounded-lg shadow-sm border border-[#2C1810]/10">
                        <span className="text-[12px] uppercase font-black tracking-widest leading-none mb-1 text-[#2C1810]">
                          {event.day}
                        </span>
                        <span className="text-[20px] font-black leading-none">
                          {event.date.split(' ')[1]}
                        </span>
                      </div>

                      {/* Event Info */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-lg" aria-hidden="true">
                            {getTypeIcon(event.type)}
                          </span>
                          <span className="text-[12px] uppercase font-bold text-[#5D4037] bg-white px-2 py-0.5 rounded-full border border-[#D4A574]/20">
                            {eventTypes.find((t) => t.type === event.type)?.label}
                          </span>
                        </div>
                        <h4 className="text-[#2C1810] font-bold text-[16px] leading-tight">
                          {event.name}
                        </h4>
                        {event.detail && (
                          <p className="text-[#5D4037] text-[13px] mt-1 italic">{event.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Footer */}
        <div className="text-center mt-16">
          <a
            href="#contact-footer"
            className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] px-8 py-4 rounded-full text-[18px] font-[600] transition-colors shadow-lg shadow-[#D4A574]/20"
            id="lato-font"
          >
            Contact to Book Tickets
          </a>
        </div>
      </div>
    </div>
  )
}

export default Events
