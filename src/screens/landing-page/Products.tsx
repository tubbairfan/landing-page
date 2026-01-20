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
export const Products: React.FC = () => {
  return (
    <div className='mb-30'>

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
            <p className='font-semibold'>Dashboard</p>
            <hr className="border-b border-gray-200 my-4" />
            <div className='flex  gap-2 '>
              <div className="flex items-center justify-center w-20 h-10 rounded-full border-1 border-gray-200">
                <img src={date} className="w-3 h-3 " />
                <p className='ml-2'>Date</p>
              </div>
              <div className="flex items-center justify-center w-20 h-10 rounded-full border-1 border-gray-200">
                <img src={mail} className="w-3 h-3 " />
                <p className='ml-2'>Mail</p>
              </div>
              <div className="flex items-center justify-center w-25 h-10 rounded-full border-1 border-gray-200">
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
            <p className='font-semibold'>Dashboard</p>
            <hr className="border-b border-gray-200 my-4" />
          </div>
          <div>
            <img src={cloud} className='' />
            <img src={vector3} />
          </div>
        </Card>
        <Card className="max-w-sm ">
          <div>
            <p className='font-semibold'>Project,Data & Analytics</p>
            <hr className="border-b border-gray-200 my-4" />
          </div>
          <div className='flex flex-col gap-3'>
            <div className="flex p-4 w-80 h-10 rounded-full border-1 border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm">Sector</span>
                <div className="w-40 h-2 bg-gray-200 rounded-md ">
                  <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "94%" }}></div>
                </div>

                <span className="text-sm">96%</span>
              </div>
            </div>
            <div className="flex p-4 w-80 h-10 rounded-full border-1 border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-sm">Industry</span>
                <div className="w-40 h-2 bg-gray-200 rounded-md ">
                  <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "32%" }}></div>
                </div>

                <span className="text-sm">32%</span>
              </div>
            </div>
            <div className="flex p-4 w-80 h-10 rounded-full border-1 border-gray-200">
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
      <div>
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
       <div>
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
  )
}
