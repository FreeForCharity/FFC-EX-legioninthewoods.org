import React from 'react'
import FrequentlyAskedQuestions from '@/components/ui/Frequently-Asked-Questions'

const index = () => {
  return (
    <div id="faq" className="py-[50px]">
      <div className="w-[90%] mx-auto lg:px-[20px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px]  tracking-[0] text-center mx-auto mb-[50px]"
          id="faustina-font"
        >
          Frequently Asked Questions
        </h1>
        <div>
          <FrequentlyAskedQuestions title="Who can join American Legion Post 209?">
            <p className="mb-[20px]">
              Membership is open to all honorably discharged veterans who served on active duty
              during wartime periods as defined by Congress. This includes veterans from all
              branches of the U.S. Armed Forces: Army, Navy, Marine Corps, Air Force, Space Force,
              Coast Guard, and Merchant Marines who served during WWII.
            </p>
            <p>
              For specific eligibility dates and requirements, please visit the{' '}
              <a
                href="https://www.legion.org/membership/eligibility"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
                target="_blank"
                rel="noopener noreferrer"
              >
                American Legion eligibility page
              </a>{' '}
              or contact our post directly.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What is the mission of American Legion Post 209?">
            <p className="mb-[20px]">
              Our mission is rooted in the Four Pillars of the American Legion: Veterans Affairs &
              Rehabilitation, National Security, Americanism, and Children & Youth. We serve
              veterans, active military, and their families through mutual helpfulness and community
              service.
            </p>
            <p>
              We honor the legacy of Neal Thomas Jr., a Korean and Vietnam War veteran who dedicated
              his life to helping fellow veterans find employment, housing, and rehabilitation
              services.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What programs does Post 209 offer?">
            <p>We offer a wide range of programs including:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Final Honors and Honor Guard services for veterans</li>
              <li>Veterans benefits assistance and advocacy</li>
              <li>Youth programs: Boys State, American Legion Baseball, Junior Shooting Sports</li>
              <li>Scholarship opportunities</li>
              <li>Community service and patriotic ceremonies</li>
              <li>Support for homeless veterans</li>
              <li>Hospital visits and blood drives</li>
            </ul>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="When does Post 209 meet?">
            <p>
              Post meetings are held monthly. For the current meeting schedule, please contact the
              post at{' '}
              <a href="tel:7195910839" className="text-[#002D62] underline hover:text-[#BF0D3E]">
                (719) 591-0839
              </a>{' '}
              or{' '}
              <a
                href="mailto:info@legion209.org"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
              >
                info@legion209.org
              </a>
              .
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I request Honor Guard services?">
            <p className="mb-[20px]">
              Our Honor Guard provides dignified military funeral honors for veterans. We
              participate in Final Honors ceremonies, community parades, and patriotic events
              throughout the year.
            </p>
            <p>
              To request Honor Guard services for a veteran&apos;s funeral or memorial service,
              please contact our post as soon as possible. We strive to honor every veteran with the
              respect and recognition they deserve.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="What is the history of Post 209?">
            <p className="mb-[20px]">
              American Legion Post 209 was founded in 1975 and chartered in 1976 as Templeton Gap
              Post 209, honoring the U.S. Bicentennial and Colorado Centennial. We are now the
              largest American Legion post in Colorado.
            </p>
            <p>
              In 2016, the post was renamed to honor Neal Thomas Jr., an Air Force veteran of the
              Korean and Vietnam Wars. Neal served as Post Commander, Department Commander, and
              National Executive Committeeman, dedicating his life to serving fellow veterans.
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="How can I support Post 209?">
            <p>There are many ways to support our post and its mission:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Become a member and actively participate in post activities</li>
              <li>Make a donation to support post operations and programs</li>
              <li>Sponsor youth programs or scholarships</li>
              <li>Volunteer for community service events</li>
              <li>Support our Honor Guard with equipment donations</li>
              <li>Attend post meetings and events</li>
            </ul>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Where is Post 209 located?">
            <p>
              American Legion Post 209 is located at:
              <br />
              <strong>5220 N Nevada Ave, Colorado Springs, CO 80918</strong>
              <br />
              <br />
              Phone:{' '}
              <a href="tel:7195910839" className="text-[#002D62] underline hover:text-[#BF0D3E]">
                (719) 591-0839
              </a>
              <br />
              Email:{' '}
              <a
                href="mailto:info@legion209.org"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
              >
                info@legion209.org
              </a>
            </p>
          </FrequentlyAskedQuestions>

          <FrequentlyAskedQuestions title="Does the American Legion have a national organization?">
            <p>
              Yes, American Legion Post 209 is part of the national American Legion organization,
              which was founded in 1919 and is the nation&apos;s largest wartime veterans service
              organization. The American Legion has nearly 2 million members across more than 12,000
              posts worldwide.
              <br />
              <br />
              For more information about the national organization, visit{' '}
              <a
                href="https://www.legion.org"
                className="text-[#002D62] underline hover:text-[#BF0D3E]"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.legion.org
              </a>
              .
            </p>
          </FrequentlyAskedQuestions>
        </div>
      </div>
    </div>
  )
}

export default index
