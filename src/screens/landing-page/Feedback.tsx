import React from 'react'
import { Card } from "../../components/UI/Cards"
import Container from "../../assets/Container.svg";
import Group from "../../assets/Group.svg"
import i1 from "../../assets/i1.svg"
import i2 from "../../assets/i2.svg"
import Group1 from "../../assets/Group1.svg"
import Group2 from "../../assets/Group2.svg"

export const Feedback: React.FC = () => {
  return (
    <div className='mb-30 mt-40 relative h-500 overflow-hidden md:h-280 lg:h-200 xl:h-190'>
      <div className="absolute inset-0 bg-gray-100 h-500  md:h-280 lg:h-200  xl:h-190">
        <div
          className="relative h-500 bg-no-repeat bg-cover md:h-280 lg:h-200  xl:h-190"
          style={{ backgroundImage: `url(${Container})` }} >
        </div>
      </div>
      <div className="relative z-10 p-10">
        <div className="max-w-6xl mx-auto text-center mt-30 mb-10">
          <p className="text-sm text-purple-600 mb-2">Our Customers</p>
          <h2 className="text-4xl font-bold mb-12">
            See what our <br /> customers are saying
          </h2>

        </div>
        <div className='relative'>
          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3  ">

            {/* <!--1  Card --> */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i1} className="w-3 h-3 " />
                </div>
              </div>

            </Card>



            {/* <!--2  Card --> */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group1} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i2} className="w-6 h-6 " />
                </div>
              </div>

            </Card>
            {/* <!-- 3 Card --> */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group2} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i2} className="w-6 h-6 " />
                </div>
              </div>

            </Card>

            {/* <!-- 4 Card --> */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i2} className="w-6 h-6 " />
                </div>
              </div>

            </Card>



            {/* <!-- 5 Card --> */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group1} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i2} className="w-6 h-6 " />
                </div>
              </div>

            </Card>
            {/* 6 card  */}
            <Card className='max-w-sm'>
              <h4 className="font-semibold mb-2">Incredibly useful product</h4>
              <p className="text-gray-500 text-sm mb-6">
                Stellar has truly transformed our online
                presence. With its powerful analytics and
                seamless integration, we've gained
                invaluable insights.
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={Group1} className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="text-sm font-semibold">Fig Nelson</p>
                    <p className="text-xs text-purple-600">@fignel_sooon</p>
                  </div>
                </div>

                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={i2} className="w-6 h-6 " />
                </div>
              </div>

            </Card>
          </div>


          <div className="
            pointer-events-none
            absolute bottom-0 left-0 w-full h-38 bg-linear-to-t  from-white  via-white/70  to-transparent  z-20"></div>


          {/* Center Button */}
          <div className="absolute inset-x-0 bottom-9 flex justify-center z-30">
            <button className="px-6 py-3 bg-[#6E51E0] text-white rounded-full shadow-lg">
              Follow us on Social Media
            </button>
          </div>
        </div>




      </div>
    </div>
  )
}

