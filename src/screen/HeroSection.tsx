import mobile from "../assets/mobile.png"
import vector from "../assets/Vector.svg"
import Group from "../assets/Group.svg"
import Group1 from "../assets/Group1.svg"
import Group2 from "../assets/Group2.svg"
import Group3 from "../assets/Group3.svg"
import arrowup from "../assets/arrowup.svg"
import arrowdown from "../assets/arrowdown.svg"
export const HeroSection: React.FC = () => {

    return (
        <div className="overflow-x-hidden px-4 md:px-8 py-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

                {/* LEFT CARDS */}
                <div className="order-2 md:order-none flex flex-col gap-6 items-center md:items-end">

                    <div className="bg-white rounded-xl p-2 w-48 shadow-md">
                        <div className="border border-gray-100 p-4 rounded-md ">
                            <img src={vector} alt="..." className="h-8 w-8 mb-2" />
                            <p className="text-xl font-bold">12K</p>
                            <p className="text-gray-600">Customers</p></div>

                    </div>

                    <div className="bg-white rounded-xl p-2 w-64 shadow-md">
                        <div className="border border-gray-100 p-4 rounded-md ">
                            <p className="text-xl font-bold">Hi, Sara Smith</p>
                            <p className="text-gray-600">
                                What would you like to explore today?
                            </p>

                            <div className="mt-3 flex items-center gap-3">
                                <img src={Group} className="h-10 w-10 rounded-full" />
                                <div>
                                    <p className="font-medium">Sara Smith</p>
                                    <p className="text-sm text-gray-500">July 27, 2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CENTER CONTENT */}
                <div className="order-1 md:order-none text-center">
                    <p className="text-purple-600 font-semibold mb-2">
                        Our Framer Template
                    </p>

                    <p className="text-3xl md:text-4xl font-bold leading-relaxed">
                        Save Time and Build Better with{' '}
                        <span className="bg-purple-600 text-white px-4 py-1 rounded-full">
                            Stellar
                        </span>
                    </p>


                    <p className="mt-6 max-w-md mx-auto text-gray-600">
                        Gain unparalleled insights into your data with our robust analytics suite and Stellar
                    </p>

                    <img
                        src={mobile}
                        alt="picture"
                        className="h-64 md:h-80 w-auto mt-10 mx-auto"
                    />
                </div>

                {/* RIGHT CARDS */}
                <div className="order-3 md:order-none flex flex-col gap-6 items-center md:items-start">
                    <div className="bg-white rounded-xl p-2 w-48 shadow-md">
                        <div className="border border-gray-100 p-4 rounded-md ">
                            <p className="text-md font-bold">Sales Meeting</p>
                            <p className="text-gray-600">11:00 - 1:30</p>

                            <div className="flex mt-3 -space-x-3">
                                <img src={Group} className="h-8 w-8 rounded-full border-2 border-white" />
                                <img src={Group1} className="h-8 w-8 rounded-full border-2 border-white" />
                                <img src={Group2} className="h-8 w-8 rounded-full border-2 border-white" />
                                <div className="relative h-8 w-8">
                                    <img src={Group3} className="h-8 w-8 rounded-full border-2 border-white" />
                                    <span className="absolute inset-0 flex items-center justify-center text-xs">
                                        +8
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl p-2 w-64 shadow-md">
                        <div className="border border-gray-100 p-4 rounded-md ">
                            <p className="text-xl font-bold text-center">
                                Stellar Highlights
                            </p>
                            <div className="h-1 w-full bg-gray-100 my-4"></div>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600">Avg Client Rating</p>
                                    <div className="flex items-center gap-2">
                                        <img src={arrowup} alt="arrow up" className="h-3 w-3" />
                                        <p>8.8/10</p>
                                    </div>
                                </div>

                            
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600">Avg Quotes</p>
                                    <div className="flex items-center gap-2">
                                        <img src={arrowdown} alt="arrow down" className="h-3 w-3" />
                                        <p>233</p>
                                    </div>
                                </div>

                                
                                <div className="flex items-center justify-between">
                                    <p className="text-gray-600">Avg Agent Earning</p>
                                    <div className="flex items-center gap-2">
                                        <img src={arrowup} alt="arrow up" className="h-3 w-3" />
                                        <p>$4.50</p>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}



