import React from 'react'
import v1 from "../../assets/v1.svg"
import v2 from "../../assets/v2.svg"
import v3 from "../../assets/v3.svg"
import v4 from "../../assets/v4.svg"
import mobile from "../../assets/mobile.png"
import mobile1 from "../../assets/mobile1.svg"
export const Features: React.FC = () => {
  return (
    <div className="mt-16 mb-16 px-4 md:px-10 lg:px-20 
                flex flex-col lg:flex-row items-center justify-between gap-14">

      {/* column1 */}
      <div className="w-full lg:w-1/2 space-y-6">

        <p className="text-sm font-semibold text-[#6E51E0]">Our Key features</p>

        <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Build a solution that wins
          you more customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">

          <div className="space-y-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200">
              <img src={v1} className="w-6 h-6" />
            </div>
            <p className="font-semibold">Deploy Faster Growth</p>
            <p className="text-gray-500 text-sm">
              Gain a competitive edge with our SEO optimization tools
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200">
              <img src={v2} className="w-6 h-6" />
            </div>
            <p className="font-semibold">Beautiful No-Code</p>
            <p className="text-gray-500 text-sm">
              Enhance your website's visibility and
              drive targeted traffic
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200">
              <img src={v3} className="w-6 h-6" />
            </div>
            <p className="font-semibold">Good Communication</p>
            <p className="text-gray-500 text-sm">
              Experience the Stellar difference and
              unlock the true potential
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200">
              <img src={v4} className="w-6 h-6" />
            </div>
            <p className="font-semibold">Easily Customised</p>
            <p className="text-gray-500 text-sm">
              From content creation and
              deployment to performance
            </p>
          </div>

        </div>
      </div>


      {/* column2 */}
      <div className="w-full lg:w-1/2 relative flex justify-center items-center py-10">

    
        <img
          src={mobile1}
          className="absolute top-0 right-6  sm:right-16 
           md:right-40 lg:right-5 xl:right-25 w-36  sm:w-44  md:w-52  lg:w-60  z-0 "
        />

     
        <img
          src={mobile}
          className="
           relative w-44  mt-18 sm:w-52 md:w-60 md:top-16lg:w-64 lg:top-27 z-10 "
        />

      </div>



    </div>


  )
}

