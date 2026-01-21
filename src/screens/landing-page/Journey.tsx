import React from 'react'
import { Card } from "../../components/UI/Cards"
import Group from "../../assets/Group.svg"
import Group1 from "../../assets/Group1.svg"
import Group2 from "../../assets/Group2.svg"
import Group3 from "../../assets/Group3.svg"
import { Button } from "../../components/UI/Button"
import vector1 from "../../assets/vector1.svg"
import vector2 from "../../assets/Vector2.svg"
import arrowup from "../../assets/arrowup.svg"
import bg2 from "../../assets/bg2.svg"
import clip from "../../assets/Clip path group.svg"
export const Subscribe: React.FC = () => {
    return (
        <div className="grid grid-cols-1  lg:grid-cols-[500px_1fr] gap-12 px-4 py-16 xl:ml-30 lg:ml-10">
            {/* Column 1 */}
            <div className="relative flex items-center justify-center  min-h-[520px] ">
                <div className="absolute top-4 left-6 md:top-0  z-20">
                    <Card className="w-60">
                        <div className="flex items-center justify-between mb-5">
                            <div>
                                <p className="text-sm font-semibold">Slack Inc.</p>
                                <p className="text-gray-600 text-[9px] mt-1">12 hours ago</p>
                            </div>
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border-1 border-gray-200">
                                <img src={clip} className="w-5 h-5" />
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-[160px] h-2 bg-gray-200 rounded-md ">
                                <div className="h-2 bg-[#6E51E0] rounded-md" style={{ width: "66%" }}></div>
                            </div>

                            <span className="text-sm">66%</span>
                        </div>
                        <div>
                            <p>Stellar Peoples:</p>
                            <div className="flex items-center mt-3 -space-x-2">
                                <img
                                    src={Group}
                                    className="h-8 w-8 rounded-full border-1 border-white z-40 bg-white"
                                />
                                <img
                                    src={Group1}
                                    className=" h-8 w-8 rounded-full border-1 border-white z-30 bg-white"
                                />
                                <img
                                    src={Group2}
                                    className=" h-8 w-8 rounded-full border-1 border-white z-20 bg-white"
                                />

                                <div className="relative h-8 w-8">
                                    <img
                                        src={Group3}
                                        className="h-8 w-8 rounded-full border-1 border-white"
                                    />

                                    <span className="absolute inset-0 mt-2 ml-2 text-[10px]">
                                        +8
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="absolute bottom-6 right-6 md:bottom-4 md:right-10 z-20">
                    <Card className="w-full max-w-sm">
                        <div className="flex flex-row gap-7">
                            <div>
                                <p className="text-md font-bold mb-3">Our Fleet Tonnage</p>
                                <p className="text-gray-600">Total 1,476 vehicles </p>
                            </div>
                            <div>
                                <Button
                                    label="Review Fleet"
                                    variant="outline"
                                    className="px-3 py-1 text-sm"
                                />
                            </div>
                        </div>
                        <hr className="border-b border-gray-200 my-4" />

                        <div className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-gray-50 transition">

                            {/* Left group */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-1 border-gray-200">
                                    <img src={vector1} className="w-3 h-3 " />
                                </div>


                                <div>
                                    <p className="text-sm font-semibold">Stellar template</p>
                                    <p className="text-[11px] text-gray-500">234 components</p>
                                </div>
                            </div>

                            {/* Right group */}
                            <div className="flex items-center gap-3">

                                <img src={arrowup} className="w-2 h-2" />
                                <span className="text-sm font-semibold">$4,500</span>
                            </div>

                        </div>
                        <div className="flex items-center justify-between gap-4 p-3 rounded-lg hover:bg-gray-50 transition">

                            {/* Left group */}
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full border-1 border-gray-200">
                                    <img src={vector2} className="w-3 h-3 " />
                                </div>


                                <div>
                                    <p className="text-sm font-semibold">UI KIt</p>
                                    <p className="text-[11px] text-gray-500">24+ Footer</p>
                                </div>
                            </div>

                            {/* Right group */}
                            <div className="flex items-center gap-3">

                                <img src={arrowup} className="w-2 h-2" />
                                <span className="text-sm font-semibold">$2000</span>
                            </div>

                        </div>

                    </Card>
                </div>



                <div className="relative h-[340px] w-[340px] rounded-full bg-gray-100  flex items-center justify-center">
                    <div
                        className="h-[300px] w-[300px] rounded-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${bg2})` }}
                    ></div>
                </div>
            </div>

            {/* Column 2 */}
            
            <div className="space-y-5 ml-5 xl:ml-25" >
                <p className="text-sm font-semibold text-[#6E51E0]">Get Started</p>

                <p className="text-3xl md:text-4xl font-bold leading-snug">
                    Start your Stellar
                    journey here.
                </p>

                <p className="text-gray-600 max-w-md">
                    Unlock the power of data analytics and gain actionable insights to
                    make informed business decisions.
                </p>
                <div>

                </div>
                <div className="flex flex-col gap-3 w-full max-w-sm">
                    <input
                        type="text"
                        placeholder="name@email.com"
                        className="w-20px px-4 py-2 border border-gray-200 rounded-full"
                    />

                    <button className="w-full px-6 py-2 bg-[#6E51E0] text-white rounded-full font-semibold">
                        Subscribe
                    </button>
                </div>

                <p className="text-grey-200">14 day trial  No credit card required</p>


            </div>

        </div>
    )
}

