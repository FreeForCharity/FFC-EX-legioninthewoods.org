import React from 'react'
import TeamMemberCard from '@/components/ui/TeamMemberCard'

const PostLeadership = () => {
  return (
    <div id="team" className="py-[50px]">
      <h1
        className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
        id="faustina-font"
      >
        Post 245 Leadership
      </h1>

      <div className="w-[90%] mx-auto py-[40px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  items-stretch justify-center mb-[50px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member1.webp"
            name="Post Commander"
            title="Contact post for current commander information"
            linkedinUrl="/#contact"
          />
          <TeamMemberCard
            imageUrl="/Images/member2.webp"
            name="First Vice Commander"
            title="Contact post for current 1st vice commander information"
            linkedinUrl="/#contact"
          />
          <TeamMemberCard
            imageUrl="/Images/member3.webp"
            name="Second Vice Commander"
            title="Contact post for current 2nd vice commander information"
            linkedinUrl="/#contact"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-[40px] gap-[30px]">
          <TeamMemberCard
            imageUrl="/Images/member4.webp"
            name="Adjutant"
            title="Contact post for current adjutant information"
            linkedinUrl="/#contact"
          />
          <TeamMemberCard
            imageUrl="/Images/member5.webp"
            name="Finance Officer"
            title="Contact post for current finance officer information"
            linkedinUrl="/#contact"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-[18px] text-gray-600 max-w-3xl mx-auto" id="lato-font">
            <strong>Note to Post Leadership:</strong> These are generic officer positions. Please
            contact post leadership at{' '}
            <a href="mailto:post245@legioninthewoods.org" className="text-blue-600 underline">
              post245@legioninthewoods.org
            </a>{' '}
            or call{' '}
            <a href="tel:+18142380245" className="text-blue-600 underline">
              (814) 238-0245
            </a>{' '}
            for current officer names and contact information. Photos and LinkedIn profiles can be
            added by updating this section.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostLeadership
