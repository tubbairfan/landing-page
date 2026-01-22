import React from 'react'
import { Chip } from "../../components/UI/Chip"
import { Card } from "../../components/UI/Cards"
import date from "../../assets/Date.svg"
import mail from "../../assets/mail.svg"
import Vector3 from "../../assets/Vector3.svg"
import vector4 from "../../assets/vector4.svg"
import vector5 from "../../assets/vector5.svg"
import vector6 from "../../assets/vector6.svg"
import cloud from "../../assets/cloud.svg"
import console from "../../assets/console.svg"
import Container from "../../assets/Container.svg";

export const Products: React.FC = () => {
  return (
    <div className="mb-30 mt-30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-100">
        <div
          className="relative h-full bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${Container})` }}
        />
      </div>


      <div className="relative z-10 p-10 lg:px-20 py-10">
        <div className="mt-20 mb-15 text-center md:px-35">
          <p className=" font-semibold mb-2" style={{ color: "#6E51E0" }}>
            Powerful Features
          </p>
          <p className="text-4xl md:text-5xl leading-relaxed">
            Our product has  these big{' '}
            <Chip text="Features" />
          </p>
        </div>
        <div className='flex flex-col gap-5 justify-center lg:flex-row'>
          <div className="flex flex-col items-center lg:items-start">
            <Card className="max-w-sm w-full ">
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Dashboard</p>
                  <span className="text-gray-400">⋮</span>
                </div>

                <hr className="border-b border-gray-200 my-4" />
                <div className="flex gap-2 flex-wrap">

                  <div className="flex-1 min-w-[60px] flex items-center justify-center h-10 rounded-full border border-gray-200">
                    <img src={date} className="w-3 h-3" />
                    <p className="ml-2 text-sm">Date</p>
                  </div>


                  <div className="flex-1 min-w-[60px] flex items-center justify-center h-10 rounded-full border border-gray-200">
                    <img src={mail} className="w-3 h-3" />
                    <p className="ml-2 text-sm">Mail</p>
                  </div>


                  <div className="flex-1 min-w-[80px] flex items-center justify-center h-10 rounded-full border border-gray-200">
                    <img src={console} className="w-3 h-3" />
                    <p className="ml-2 text-sm">Console</p>
                  </div>
                </div>


              </div>

              <div className='bg-gray-100 mt-10 p-3 rounded-md border-2 border-b-0 border-dashed border-gray-200  '>
                <p>Import CSV</p>
                <p className='text-sm mt-3'>Lorem Ipsum dolor sit amit </p>
              </div>


            </Card>
            <div className="mt-6 text-center lg:text-left ">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <img src={vector4} />
                <p className="font-semibold">Beautiful Design</p>
              </div>
              <p className="mt-2 text-sm text-gray-600    ">
                Gain a competitive edge with our SEO
                optimization tools, ensuring your website ranks
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Card className="max-w-sm w-full h-65  ">

              <div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold">Stellar Filters</p>
                  <span className="text-gray-400">⋮</span>
                </div>

                <hr className="border-b border-gray-200 my-4" />
              </div>
              <div className="mt-12 flex justify-center px-8 py-8">
                <div className="relative w-full max-w-sm flex items-center justify-center">

                  <div className="relative flex items-center w-full justify-center">

                    <div className="absolute  -left-12 -right-12 h-px 
                     bg-linear-to-r from-[#6E51E0] via-gray-200 to-[#6E51E0] 
                      z-0"></div>

                    <div className="relative w-16 h-16 mx-2 rounded-full flex items-center justify-center bg-white z-10">
                      <div className="absolute inset-0 rounded-full border border-t-[#6E51E0] border-l-[#6E51E0] border-b-gray-100 border-r-gray-100"></div>
                      <img src={cloud} className="w-8 h-8 relative z-20" />
                    </div>

                    <div className="relative w-16 h-16 mx-2 rounded-full flex items-center justify-center bg-white z-10">
                      <div className="absolute inset-0 rounded-full border border-r-[#6E51E0] border-b-[#6E51E0] border-t-gray-100 border-l-gray-100"></div>
                      <img src={Vector3} className="w-4 h-4 relative z-20" />
                    </div>

                  </div>


                </div>
              </div>

            </Card>
            <div className="mt-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <img src={vector5} />
                <p className="font-semibold">Clean Development</p>
              </div>
              <p className="mt-2 text-sm text-gray-600 px-4 lg:px-5 xl:px-2">
                Gain a competitive edge with our SEO optimization tools, ensuring your website ranks
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start">
            <Card className="max-w-sm w-full">
              <div className="flex items-center justify-between">
                <p className="font-semibold">Project,Data & Analytics</p>
                <span className="text-gray-400">⋮</span>
              </div>

              <hr className="border-b border-gray-200 my-4" />

              <div className="flex flex-col gap-3 w-full max-w-sm">

                <div className="flex p-3 w-full rounded-full border border-gray-200">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-sm">Sector</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-md">
                      <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "94%" }}></div>
                    </div>
                    <span className="text-sm">96%</span>
                  </div>
                </div>


                <div className="flex p-3 w-full rounded-full border border-gray-200">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-sm">Industry</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-md">
                      <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "32%" }}></div>
                    </div>
                    <span className="text-sm">32%</span>
                  </div>
                </div>


                <div className="flex p-3 w-full rounded-full border border-gray-200">
                  <div className="flex items-center gap-3 w-full">
                    <span className="text-sm">AAPL</span>
                    <div className="flex-1 h-2 bg-gray-200 rounded-md">
                      <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "72%" }}></div>
                    </div>
                    <span className="text-sm">72%</span>
                  </div>
                </div>
              </div>

            </Card>
            <div className="mt-6 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <img src={vector6} />
                <p className="font-semibold">Easily Customized</p>
              </div>
              <p className="mt-2 text-sm text-gray-600 px-4 lg:px-5 xl:px-2">
                Gain a competitive edge with our SEO optimization tools, ensuring your website ranks
              </p>
            </div>
          </div>

        </div>


      </div>


    </div>
  )
}
