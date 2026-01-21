import React from 'react'
import Overlay from "../../assets/Overlay.svg"
import { Button } from "../../components/UI/Button"
import Overlay1 from "../../assets/Overlay1.svg"
import Overlay2 from "../../assets/Overlay2.svg"
export const Blog: React.FC = () => {
    return (
        <div className="mt-40 mb-40 px-4 md:px-10 lg:px-20">

          
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-14">

                <div>
                    <p className="text-sm font-semibold text-[#6E51E0]">Our Blog</p>

                    <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
                        Blog & Articles
                    </p>
                </div>

                <div className="max-w-xl text-gray-500 text-sm px-15">
                    <p>
                        Unlock the power of data analytics and gain actionable insights to make
                        informed business decisions. Enhance your website's visibility.
                    </p>
                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl">

                    <div className="inline-block p-1 border-2 border-gray-200 rounded-md">
                        <img
                            src={Overlay}
                            className="w-full h-56 object-cover rounded-md"
                        />
                    </div>

                    <div className="p-6 space-y-4">
                        <p className="font-semibold text-lg">
                            The Art of Designing Timeless Masterpieces
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dive into the realm of limitless creativity as we explore the techniques
                            and inspirations behind crafting visually stunning and timeless designs
                            that captivate hearts and minds.
                        </p>

                        <Button
                            label="Read More"
                            variant="outline"
                            className="font-semibold mt-4"
                        />
                    </div>

                </div>
                <div className="bg-white rounded-xl">

                    <div className="inline-block p-1 border-2 border-gray-200 rounded-md">
                        <img
                            src={Overlay1}
                            className="w-full h-56 object-cover rounded-md"
                        />
                    </div>

                    <div className="p-6 space-y-4">
                        <p className="font-semibold text-lg">
                            The Art of Designing Timeless Masterpieces
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dive into the realm of limitless creativity as we explore the techniques
                            and inspirations behind crafting visually stunning and timeless designs
                            that captivate hearts and minds.
                        </p>

                        <Button
                            label="Read More"
                            variant="outline"
                            className="font-semibold mt-4"
                        />
                    </div>

                </div>
                <div className="bg-white rounded-xl">

                    <div className="inline-block p-1 border-2 border-gray-200 rounded-md">
                        <img
                            src={Overlay2}
                            className="w-full h-56 object-cover rounded-md"
                        />
                    </div>



                    <div className="p-6 space-y-4">
                        <p className="font-semibold text-lg">
                            The Art of Designing Timeless Masterpieces
                        </p>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            Dive into the realm of limitless creativity as we explore the techniques
                            and inspirations behind crafting visually stunning and timeless designs
                            that captivate hearts and minds.
                        </p>

                        <Button
                            label="Read More"
                            variant="outline"
                            className="font-semibold mt-4"
                        />
                    </div>

                </div>

            </div>

        </div>

    )
}

