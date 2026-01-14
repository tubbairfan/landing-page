import mobile from "../assets/mobile.png"
import vector from "../assets/Vector.svg"
import Group from "../assets/Group.svg"
import Group1 from "../assets/Group1.svg"
import Group2 from "../assets/Group2.svg"
import Group3 from "../assets/Group3.svg"
export const HeroSection: React.FC = () => {

    return (
        <div className="px-8 py-10">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">

                {/* right */}
                <div className="flex flex-col gap-6 mt-80">
                    {/* Card 1 */}
                    <div className="bg-white rounded-xl p-6 w-40 ml-80 flex flex-col  shadow-md">
                        <img src={vector} alt="..." className="h-8 w-8 mb-2" />
                        <p className="text-xl font-bold">12K</p>
                        <p className="text-gray-600">Customers</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 w-60 ml-60 flex flex-col shadow-md">
                        <p className="text-xl font-bold">Hi, Sara Smith</p>
                        <p className="text-gray-600  ">
                            What would you like to explore today?
                        </p>
                        <div className="mt-3 flex flex-row ">
                            <img src={Group} className="h-10 w-10 rounded-full gap-2 mb-2" />
                            <div >
                                <p className="font-medium">Sara Smith</p>
                                <p className="text-sm text-gray-500">July 27, 2023</p>
                            </div>

                        </div>
                    </div>


                </div>

                {/*center */}
                <div className="text-center ">
                    <p className="text-purple-600 font-semibold mb-2">
                        Our Framer Template
                    </p>

                    <p className="text-4xl md:text-5xl font-bold leading-tight">
                        Save Time and Build Better with Stellar
                    </p>

                    <p className="mt-6 max-w-md mx-auto text-gray-600">
                        Gain unparalleled insights into your data with our robust analytics suite and Stellar
                    </p>

                    <img
                        src={mobile}
                        alt="picture"
                        className="h-80 w-auto mt-10 mx-auto"
                    />
                </div>

                {/* right */}
                <div className="flex flex-col gap-6 mt-80 ">

                    <div className="bg-white rounded-xl p-6  w-40 flex flex-col  shadow-md">
                        <p className="text-md font-bold">Sales Meeting</p>
                        <p className="text-gray-600">11:00 - 1:30</p>
                        <div className="flex mt-3 -space-x-3">
                            <img
                                src={Group}
                                className="h-8 w-8 rounded-full border-2 border-white z-30"
                            />
                            <img
                                src={Group1}
                                className="h-8 w-8 rounded-full border-2 border-white z-20"
                            />
                            <img
                                src={Group2}
                                className="h-8 w-8 rounded-full border-2 border-white z-10"
                            />
                            <div className="relative inline-block h-8 w-8">
                                <img
                                    src={Group3}
                                    className="h-8 w-8 rounded-full border-2 border-white"
                                />
                                <span className="absolute inset-0 flex items-center justify-center text-xs text-black">
                                    +8
                                </span>
                            </div>

                        </div>

                    </div>


                    <div className="bg-white rounded-xl p-6  w-70 shadow-md">
                        <p className="text-xl font-bold text-center">
                            Stellar Highlights
                        </p>
                        <div className="h-1 w-45 bg-gray-100 mx-auto mt-4 mb-4"></div>
                        <p className="text-gray-600">Avg Client Rating</p>
                        <p className="text-gray-600">Avg Quotes</p>
                        <p className="text-gray-600">Avg Agent Earning</p>
                    </div>
                </div>

            </div>
        </div>




    )
}



