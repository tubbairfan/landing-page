import React from 'react'
import { Chip } from "../../components/UI/Chip"
import { Card } from "../../components/UI/Cards"
import date from "../../assets/Date.svg"
import mail from "../../assets/mail.svg"
import vector3 from "../../assets/vector3.svg"
import vector4 from "../../assets/vector4.svg"
import vector5 from "../../assets/vector5.svg"
import vector6 from "../../assets/vector6.svg"
import cloud from "../../assets/cloud.svg"
import console from "../../assets/console.svg"
import Container from "../../assets/Container.svg";

export const Products: React.FC = () => {
  return (
    <div className='mb-30 relative h-370 overflow-hidden lg:h-250'>
      <div className="absolute inset-0 bg-gray-100 h-370  lg:h-250">
        <div
          className="relative h-370 bg-no-repeat bg-cover lg:h-250"
          style={{ backgroundImage: `url(${Container})` }}
        >
        </div>

      </div>

      <div className="relative z-10 p-10">
        <div className="mt-20 mb-40 text-center md:px-35">
          <p className=" font-semibold mb-2" style={{ color: "#6E51E0" }}>
            Powerful Features
          </p>
          <p className="text-4xl md:text-5xl leading-relaxed">
            Our product has  these big{' '}
            <Chip text="Features" />
          </p>
        </div>
        <div className='flex flex-col gap-5 justify-center lg:flex-row'>
          <Card className="max-w-sm ">
            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Dashboard</p>
                <span className="text-gray-400">⋮</span>
              </div>

              <hr className="border-b border-gray-200 my-4" />
              <div className='flex  gap-2 '>
                <div className="flex items-center justify-center w-20 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={date} className="w-3 h-3 " />
                  <p className='ml-2'>Date</p>
                </div>
                <div className="flex items-center justify-center w-20 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={mail} className="w-3 h-3 " />
                  <p className='ml-2'>Mail</p>
                </div>
                <div className="flex items-center justify-center w-25 h-10 rounded-full border border-width: 1px border-gray-200">
                  <img src={console} className="w-3 h-3 " />
                  <p className='ml-2'>Console</p>
                </div>
              </div>

            </div>

            <div className='bg-gray-100 mt-10 p-4 rounded-md border-2 border-b-0 border-dashed border-gray-200  '>
              <p>Import CSV</p>
              <p className='text-sm mt-3'>Lorem Ipsum dolor sit amit </p>
            </div>


          </Card>

          <Card className="max-w-sm ">

            <div>
              <div className="flex items-center justify-between">
                <p className="font-semibold">Stellar Filters</p>
                <span className="text-gray-400">⋮</span>
              </div>

              <hr className="border-b border-gray-200 my-4" />
            </div>
            <div className=" mt-12 flex  px-10">
              <div className="relative w-full flex items-center">
              
                <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-[#6E51E0] -translate-y-1/2 z-0"></div>
                <div className="flex items-center relative space-x-4 w-full z-10">
                
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white">
                    <div className="absolute inset-0 rounded-full border border-t-[#6E51E0] border-l-[#6E51E0] border-b-gray-100 border-r-gray-100"></div>
                    <img src={cloud} className="w-7 h-7 relative z-20" />
                  </div>

              
                  <div className="relative flex-1 h-2">
                    <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-300 -translate-y-1/2"></div>
                  </div>

                
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center bg-white">
                    <div className="absolute inset-0 rounded-full border border-r-[#6E51E0] border-b-[#6E51E0] border-t-gray-100 border-l-gray-100"></div>
                    <img src={vector3} className="w-7 h-7 relative z-20" />
                  </div>

                </div>
              </div>
            </div>
          </Card>

          <Card className="max-w-sm ">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Project,Data & Analytics</p>
              <span className="text-gray-400">⋮</span>
            </div>

            <hr className="border-b border-gray-200 my-4" />

            <div className='flex flex-col gap-3'>
              <div className="flex p-4 w-80 h-10 rounded-full border border-width: 1px border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-sm">Sector</span>
                  <div className="w-40 h-2 bg-gray-200 rounded-md ">
                    <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "94%" }}></div>
                  </div>

                  <span className="text-sm">96%</span>
                </div>
              </div>
              <div className="flex p-4 w-80 h-10 rounded-full border border-width: 1px border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-sm">Industry</span>
                  <div className="w-40 h-2 bg-gray-200 rounded-md ">
                    <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "32%" }}></div>
                  </div>

                  <span className="text-sm">32%</span>
                </div>
              </div>
              <div className="flex p-4 w-80 h-10 rounded-full border border-width: 1px border-gray-200">
                <div className="flex items-center gap-3">
                  <span className="text-sm">AAPL</span>
                  <div className="w-40 h-2 bg-gray-200 rounded-md ">
                    <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "72%" }}></div>
                  </div>

                  <span className="text-sm">72%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div className='flex py-5 gap-5 mr-10 xl:px-80  '>
          <div >
            <div className='flex'>
              <img src={vector4} />
              <p className='font-semibold'>Beautiful Design</p>
            </div>
            <div className='px-3' >
              <p>Gain a competitive edge with our SEO
                optimization tools, ensuring your website ranks</p>
            </div>
          </div>
          <div>
            <div className='flex'>
              <img src={vector5} />
              <p className='font-semibold'>Clean Development</p>
            </div>
            <div className='px-3' >
              <p>Gain a competitive edge with our SEO
                optimization tools, ensuring your website ranks</p>
            </div>
          </div>
          <div >
            <div className='flex'>
              <img src={vector6} />
              <p className='font-semibold'>Easily Customized</p>
            </div>
            <div className='px-3' >
              <p>Gain a competitive edge with our SEO
                optimization tools, ensuring your website ranks</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}
