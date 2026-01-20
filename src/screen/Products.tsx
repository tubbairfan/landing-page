import React from 'react'
import { Chip } from "./components/Chip"
import { Card } from "./components/Cards"
import date from "../assets/Date.svg"
import mail from "../assets/mail.svg"
import console from "../assets/console.svg"
export const Products: React.FC = () => {
  return (
    <div className='mb-30'>

      <div className="mt-20 mb-40 text-center px-35">
        <p className=" font-semibold mb-2" style={{ color: "#6E51E0" }}>
          Powerful Features
        </p>
        <p className="text-4xl md:text-5xl   leading-relaxed">
          Our product has  these big{' '}
          <Chip text="Features" />
        </p>
      </div>
      <div className='flex justify-center'>
        <Card className="max-w-sm">

          <p className='font-semibold'>Dashboard</p>
          <hr className="border-b border-gray-200 my-4" />
          <div className='flex  gap-2'>
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


        </Card>
      </div>

    </div>
  )
}
