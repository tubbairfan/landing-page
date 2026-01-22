import React from 'react'
import Container from "../../assets/Container.svg";
import right from "../../assets/right.svg"
export const CTAsection: React.FC = () => {
    return (
        <div className="mb-30 mt-30 relative overflow-hidden">
            <div className="absolute inset-0 bg-gray-100">
                <div
                    className="relative h-full bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url(${Container})` }}
                />
            </div>
            <div className="relative z-10 px-14 py-14">

                <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* column1 */}
                    <div className="text-center lg:text-left">
                        <p className="text-sm text-purple-600 mb-4">Our Customers</p>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                            Start your 7-day free trial
                        </h2>

                        <p className="text-gray-600 max-w-md mx-auto lg:mx-0">
                            Experience the Stellar difference and unlock the true potential of your product today.
                        </p>
                    </div>


                    {/* column2 */}
                    <div className="flex flex-col gap-5 items-center lg:items-start">

                        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
                            <input
                                type="text"
                                placeholder="name@email.com"
                                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />

                            <button className="w-full sm:w-auto px-8 py-3 bg-[#6E51E0] text-white rounded-full font-semibold">
                                Subscribe
                            </button>
                        </div>
                        <div className='flex flex-col gap-5 md:flex-row'>
                            <div className="flex items-start gap-3">
                                <img src={right} className="h-5 w-5 mt-1" />
                                <p className="text-gray-600 text-sm">Free 7-day trial</p>
                            </div>

                            <div className="flex items-start gap-3">
                                <img src={right} className="h-5 w-5 mt-1" />
                                <p className="text-gray-600 text-sm">No credit card required</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>


        </div>
    )
}

