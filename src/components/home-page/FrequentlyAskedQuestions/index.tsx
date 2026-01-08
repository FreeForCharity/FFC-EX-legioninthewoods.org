import React from 'react'
import Image from 'next/image'
import OrangeFaqItem from '@/components/ui/OrangeFaqItem'

const FrequentlyAskedQuestions = () => {
  return (
    <div id="faq" className="py-[60px] bg-white">
      <div className="w-[90%] mx-auto max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] tracking-[0] text-center mx-auto mb-[50px] text-[#2C1810]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>

        <div className="lg:pl-[50px]">
          <OrangeFaqItem title="Who can visit Legion in the Woods?">
            <ul className="list-disc list-inside text-[#3D2317]">
              <li>
                <strong>Social Club Members:</strong> Our club is a private social club for members of the American Legion Post 245 and their guests.
              </li>
              <li>
                <strong>Public Events:</strong> Many of our dining events, like Sunday Brunch, are open to the public! Check our event calendar for details.
              </li>
            </ul>
          </OrangeFaqItem>

          <OrangeFaqItem title="How do I become a member?">
            <ul className="list-disc list-inside text-[#3D2317]">
              <li>
                Membership is open to eligible veterans (Legionnaires), male descendants of veterans (Sons of the American Legion), and female relatives of veterans (Auxiliary).
              </li>
              <li>
                Social memberships may also be available. Stop by the club to learn more and pick up an application.
              </li>
            </ul>
          </OrangeFaqItem>

          <OrangeFaqItem title="Do you have food?">
            <ul className="list-disc list-inside text-[#3D2317]">
              <li>
                <strong>Yes!</strong> We have a full menu featuring bar favorites like wings, burgers, and fish & chips, plus homestyle dinners.
              </li>
              <li>
                Check out our Menu section or download the full PDF to see our offerings.
              </li>
            </ul>
          </OrangeFaqItem>

          <OrangeFaqItem title="When is the bar open?">
            <ul className="list-disc list-inside text-[#3D2317]">
              <li>
                We are open daily for members and guests. Please contact us at (814) 237-6880 for current operating hours.
              </li>
            </ul>
          </OrangeFaqItem>
        </div>
      </div>
      <div className="w-[95%] mt-[50px] mx-auto border border-[#D4A574]"></div>
    </div>
  )
}

export default FrequentlyAskedQuestions
