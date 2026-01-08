import React from 'react'

const Menu = () => {
  const menuCategories = [
    {
      name: 'Appetizers',
      items: [
        { name: 'Wings', description: 'Crispy wings with your choice of sauce' },
        { name: 'Loaded Nachos', description: 'Piled high with all the fixings' },
        { name: 'Onion Rings', description: 'Beer-battered and golden fried' },
      ],
    },
    {
      name: 'Entrees',
      items: [
        { name: 'Legion Burger', description: 'Half-pound patty with all the toppings' },
        { name: 'Fish & Chips', description: 'Beer-battered cod with fries and slaw' },
        { name: 'Steak Sandwich', description: 'Grilled to perfection on a hoagie roll' },
      ],
    },
    {
      name: 'Comfort Food',
      items: [
        { name: 'Mac & Cheese', description: 'Creamy, cheesy, and delicious' },
        { name: 'Meatloaf Dinner', description: 'Homestyle with mashed potatoes and gravy' },
        { name: 'Chicken Parmesan', description: 'Breaded cutlet with marinara and melted cheese' },
      ],
    },
    {
      name: 'From the Bar',
      items: [
        { name: 'Draft Beers', description: 'Rotating selection of local and national favorites' },
        { name: 'Cocktails', description: 'Classic mixed drinks made right' },
        { name: 'Wines & Spirits', description: 'Quality selection at fair prices' },
      ],
    },
  ]

  return (
    <div id="menu" className="py-[60px] bg-white">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h2
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[20px] text-[#2C1810]"
          id="faustina-font"
        >
          Our Menu
        </h2>
        <p className="text-center text-[20px] text-[#5D4037] mb-[50px]" id="lato-font">
          Great food at honest prices. Made fresh daily.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {menuCategories.map((category, idx) => (
            <div key={idx} className="bg-[#FDF8F3] p-6 rounded-lg border border-[#D4A574]/30">
              <h3
                className="text-[28px] font-[600] mb-4 text-[#2C1810] border-b-2 border-[#D4A574] pb-2"
                id="lato-font"
              >
                {category.name}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx}>
                    <p className="text-[20px] font-[600] text-[#3D2317]" id="lato-font">
                      {item.name}
                    </p>
                    <p className="text-[16px] text-[#8D7B6B]" id="lato-font">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Menu PDF Download */}
        <div className="text-center bg-[#2C1810] rounded-lg p-8">
          <p className="text-[20px] text-white mb-4" id="lato-font">
            Want to see our full menu with prices?
          </p>
          <a
            href="/documents/Legion-Woods-Menu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#D4A574] hover:bg-[#C49464] text-[#2C1810] px-8 py-4 rounded-full text-[18px] font-[600] transition-colors"
            id="lato-font"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Full Menu (PDF)
          </a>
        </div>

        {/* Special Events Teaser */}
        <div className="mt-12 text-center">
          <p className="text-[18px] text-[#5D4037]" id="lato-font">
            Check out our{' '}
            <a href="#events" className="text-[#2D5A27] font-[600] hover:underline">
              special events
            </a>{' '}
            for themed dinners, fish fry Fridays, and more!
          </p>
        </div>
      </div>

      <div className="w-[95%] mt-[50px] mx-auto border border-[#D4A574]"></div>
    </div>
  )
}

export default Menu
