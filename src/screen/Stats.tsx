import React from 'react'
import { Button } from "../screen/components/Button"
import right from "../assets/right.svg"
import { Card } from "./components/Cards"
import percentage from "../assets/percentage.svg"
import path from "../assets/path.svg"
import path1 from "../assets/path1.svg"
import bg2 from "../assets/bg2.svg"
import cloud from "../assets/cloud.svg"
export const Stats: React.FC = () => {
    return (

        <div className="grid grid-cols-1  lg:grid-cols-[1fr_500px] gap-12 items-center px-4 py-16">

            {/* column1 */}
            <div className="space-y-5 ml-5 xl:ml-35">
                <p className="text-sm font-semibold text-[#6E51E0]">Meet Stellar</p>

                <p className="text-3xl md:text-4xl font-bold leading-snug">
                    Provide powerful solutions at all times
                </p>

                <p className="text-gray-600 max-w-md">
                    Stellar is more than just a SaaS and technology template—it's a
                    complete digital transformation solution.
                </p>

                <div className="flex items-start gap-3">
                    <img src={right} className="h-5 w-5 mt-1" />
                    <p className="text-gray-600">
                        Share the extra text you want to add as a feature
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    <img src={right} className="h-5 w-5 mt-1" />
                    <p className="text-gray-600">
                        Add your feature text here.
                    </p>
                </div>

                <div className="flex items-start gap-3">
                    <img src={right} className="h-5 w-5 mt-1" />
                    <p className="text-gray-600">
                        Add the text you'd like to include as a feature.
                    </p>
                </div>

                <Button
                    label="Get Free Trial"
                    variant="outline"
                    className="font-semibold mt-6"

                />
            </div>

            {/* column2 */}
            <div className="relative flex items-center justify-center  min-h-[520px] ">
                <div className="absolute top-4 left-6 md:top-0  z-20">


                    <Card className="w-full max-w-sm">

                        <div className="flex items-center justify-between">
                            <p className="text-xl font-bold">Stock Details</p>

                            <div className="flex items-center gap-3 text-sm text-gray-500">
                                <span>10m</span>
                                <span>1h</span>
                                <Button
                                    label="1D"
                                    variant="outline"
                                    className="px-3 py-1 text-sm"
                                />
                            </div>
                        </div>

                        <hr className="border-b border-gray-200 my-4" />
                        <div className="flex flex-col gap-6">

                            {/* Item 1 */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">ASDX</p>
                                        <img src={percentage} className="h-9 w-9" />
                                    </div>

                                    <p className="text-lg font-bold">$101.55</p>
                                </div>

                                <img
                                    src={path1}
                                    className="h-8 sm:h-10 md:h-14 w-auto max-w-full object-contain"
                                />

                            </div>


                            {/* Item 2 */}
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold">TSA</p>
                                        <img src={percentage} className="h-9 w-9" />
                                    </div>
                                    <p className="text-lg font-bold">$64.55</p>
                                </div>

                                <img
                                    src={path}
                                    className="h-7 w-auto max-w-full md:h-10"
                                />

                            </div>

                        </div>
                    </Card>
                </div>

                <div className="absolute bottom-6 right-6 md:bottom-4 md:right-24 z-20">
                    <Card className="w-60">
                        <p className="text-xl font-bold">$1223.33</p>
                        <p className="text-gray-600 text-[9px] mt-4 mb-5">New customers This Month </p>
                        <div className="flex items-center gap-3">
                            <div className="h-[4px] bg-gray-200 w-[90px] rounded-md"></div>
                            <span className="text-sm ">44%</span>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <div className="h-[4px] bg-purple-600 w-[160px] rounded-md "></div>
                            <span className="text-sm ">96%</span>
                        </div>

                    </Card>
                </div>
                {/* Center Circle */}
                <div className="relative h-[340px] w-[340px] rounded-full bg-gray-100  flex items-center justify-center">
                    <div
                        className="h-[300px] w-[300px] rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${bg2})` }}
                    ></div>
                </div>


                <img
                    src={cloud}
                    className="hidden sm:block absolute 
                     bottom-35
                     w-16 
                     bg-white p-3 
                     rounded-full shadow-xl border border-gray-200  
                     md:left-50 
                     lg:left-[90px]"
                />


            </div>
        </div>



    )
}
