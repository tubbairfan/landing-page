import mobile from "../../assets/mobile.png"
import vector from "../../assets/Vector.svg"
import Group from "../../assets/Group.svg"
import Group1 from "../../assets/Group1.svg"
import Group2 from "../../assets/Group2.svg"
import Group3 from "../../assets/Group3.svg"
import Group4 from "../../assets/Group4.svg"
import arrowup from "../../assets/arrowup.svg"
import arrowdown from "../../assets/arrowdown.svg"
import location from "../../assets/location.svg"
import {Card} from "../../components/UI/Cards"
import {Chip} from "../../components/UI/Chip"
export const HeroSection: React.FC = () => {

    return (
        <div className="overflow-x-hidden px-4 md:px-8 py-10 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">

                {/* LEFT CARDS */}
                <div className="order-2 md:order-0 flex flex-col gap-6 items-center md:items-end">

                    <Card className="w-35">
                        <img src={vector} alt="..." className="h-8 w-8 mb-2" />
                        <p className="text-xl font-bold">12K</p>
                        <p className="text-gray-600">Customers</p>
                    </Card>


                    <Card className="w-60">
                        <p className="text-xl font-bold">Hi, Sara Smith</p>
                        <p className="text-gray-600">
                            What would you like to explore today?
                        </p>

                        <div className="mt-3 flex items-center gap-3">
                            <img src={Group4} className="h-10 w-10 rounded-full" />
                            <div>
                                <p className="font-medium">Sara Smith</p>
                                <p className="text-sm text-gray-500">July 27, 2023</p>
                            </div>
                        </div>

                        <hr className="border-b border-gray-200 my-4" />

                        <div className="flex gap-2">
                            <img src={location} />
                            <p>Sydney, Australia, 2000</p>
                        </div>
                    </Card>

                </div>

                {/* CENTER CONTENT */}
                <div className="order-1 md:order-0 text-center">
                    <p className=" font-semibold mb-2" style={{ color: "#6E51E0" }}>
                        Our Framer Template
                    </p>

                    <p className="text-3xl lg:text-3xl font-bold  leading-relaxed">
                        Save time and build better with{' '}
                        <Chip text="Stellar" />

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
                    <Card className="w-37 whitespace-nowrap">
                            <p className="text-md font-bold">Sales Meeting</p>
                            <p className="text-gray-600">11:00 - 1:30</p>

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

                        
                    </Card>

                    <Card className="w-65">
                            <p className="text-xl font-bold">
                                Stellar Highlights
                            </p>
                            <hr className="border-b border-gray-200 my-4" />
                            <div className="flex flex-col gap-5">
                                <div className="flex gap-6">
                                    <p className="text-gray-600 whitespace-nowrap">Avg Client Rating</p>
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
                        
                    </Card>
                </div>

            </div>
        </div>
    )
}



