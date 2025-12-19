import React, { CSSProperties, IframeHTMLAttributes } from 'react'
import Image from 'next/image'

interface ExtendedIframeProps extends IframeHTMLAttributes<HTMLIFrameElement> {
  allowpaymentrequest?: string
  allowtransparency?: string
}

const Index = () => {
  const donationFormStyle: CSSProperties = {
    position: 'absolute',
    border: '0',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
  }

  const donationFormProps: ExtendedIframeProps = {
    title: 'Donation form powered by Zeffy',
    style: donationFormStyle,
    src: 'https://www.zeffy.com/embed/donation-form/free-for-charity-endowment-fund',
    allowpaymentrequest: '',
    allowtransparency: 'true',
  }

  return (
    <div id="contact">
      <div className="w-[90%] mx-auto py-[27px] mb-[60px] px-[20px] max-w-[1280px]">
        <h1
          className="font-[400] text-[40px] lg:text-[48px] leading-[100%] tracking-[0] text-center mx-auto mb-[60px]"
          id="faustina-font"
        >
          Support Our Post
        </h1>

        <div className="flex items-center flex-col lg:flex-row gap-[40px] lg:gap-[20px]">
          {/* Left side: Description */}
          <div className="flex flex-col w-full lg:w-[50%]">
            <p
              className="mb-[20px] font-[400] text-[25px] leading-[150%] tracking-[0] text-center lg:text-left"
              id="lato-font"
            >
              Your donations help us continue serving veterans, supporting youth programs, and
              giving back to our community. Every contribution makes a difference in the lives of
              those who served our country.
            </p>
            <p
              className="mb-[20px] font-[400] text-[20px] leading-[150%] tracking-[0] text-center lg:text-left"
              id="lato-font"
            >
              Contact us to learn about donation opportunities, sponsorships, and ways to support
              American Legion Post 209.
            </p>
            <div className="text-center lg:text-left mt-[20px]">
              <a
                href="#contact"
                className="inline-block px-8 py-3 bg-[#002D62] text-white rounded-[27px] text-[20px] font-[500] hover:bg-[#BF0D3E] transition-colors"
                id="lato-font"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right side: Support Information */}
          <div className="w-full lg:w-[50%] flex justify-center">
            <div className="w-full max-w-[500px] bg-[#f5f5f5] rounded-lg p-8">
              <h3 className="text-[28px] font-[600] mb-4 text-[#002D62]" id="lato-font">
                Ways to Support
              </h3>
              <ul className="space-y-4 text-[18px]" id="lato-font">
                <li className="flex items-start gap-3">
                  <span className="text-[#BF0D3E] font-bold">•</span>
                  <span>General donations to support post operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BF0D3E] font-bold">•</span>
                  <span>Youth program sponsorships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BF0D3E] font-bold">•</span>
                  <span>Scholarship fund contributions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BF0D3E] font-bold">•</span>
                  <span>Honor Guard equipment and uniforms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#BF0D3E] font-bold">•</span>
                  <span>Veteran assistance programs</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-white rounded">
                <p className="text-[16px] text-gray-700" id="lato-font">
                  American Legion Post 209 is a 501(c)(19) veterans organization. Contact us for
                  information about tax-deductible giving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index
