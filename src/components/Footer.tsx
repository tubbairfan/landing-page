import React from 'react'
import logo from "../assets/logo.svg";
import f1 from "../assets/f1.svg";
import f2 from "../assets/f2.svg";
import f3 from "../assets/f3.svg";
export const Footer: React.FC = () => {
    return (
        <div className=" mt-24 max-w-7xl mx-auto px-6 py-16">
            <div className='lg:flex gap-40 '>
                <div className=" space-y-4 mb-10">
                    <img src={logo} className="w-32" />

                    <p className="text-gray-600 max-w-sm">
                        Experience the Stellar difference and unlock
                        the true potential of your business with powerful analytics.
                    </p>
                </div>

                <div className="grid grid-cols-1  md:grid-cols-4  gap-10 ">

                    {/* column2 */}
                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-400">Pages</h4>
                        <ul className="space-y-3">
                            <li >Home</li>
                            <li >About</li>
                            <li >Pricing</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-400">Product</h4>
                        <ul className="space-y-3 ">
                            <li>Contact</li>
                            <li>Blog</li>
                            <li>Product</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-400">Resources</h4>
                        <ul className="space-y-3 ">
                            <li >Integration</li>
                            <li> Detail</li>
                            <li>Signup</li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h4 className="font-semibold text-gray-400">Company</h4>
                        <ul className="space-y-3 ">
                            <li>Login</li>
                            <li>404</li>
                            <li>Template</li>
                        </ul>
                    </div>

                </div>
            </div>


            <div className="border-t border-gray-200 mt-12 pt-6">

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">


                    <p className="text-center sm:text-left">
                        © 2023 Flowbase.co. All rights reserved.
                    </p>


                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-purple-50 transition">
                            <img src={f1} className="w-5 h-5" />
                        </div>

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-purple-50 transition">
                            <img src={f2} className="w-5 h-5" />
                        </div>

                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-200 hover:bg-purple-50 transition">
                            <img src={f3} className="w-5 h-5" />
                        </div>
                    </div>

                </div>

            </div>


        </div>


    )
}

