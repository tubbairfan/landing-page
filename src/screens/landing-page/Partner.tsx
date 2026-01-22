import React from "react";
import { Button } from "../../components/UI/Button"
import background from "../../assets/Background.svg";
import background1 from "../../assets/Background1.svg";
import background2 from "../../assets/Background2.svg";
import background3 from "../../assets/Background3.svg";
import background4 from "../../assets/Background4.svg";

export const Partner: React.FC = () => {
    const partners = [
        background,
        background1,
        background2,
        background3,
        background4,
        background1
    ];

    return (
        <div className="text-center mt-20 mb-30">
            <p className=" mb-15 text-lg">
                <b>The world's best companies trust Stellar.</b>
            </p>

            <ul className=" flex flex-wrap  justify-center items-center gap-10 md:gap-10 lg:gap-2 xl:gap-20 ">
                {partners.map((logo, index) => (
                    <li key={index}  className="flex items-center pr-10 border-r border-gray-200 last:border-none">
                        <img
                            src={logo}
                            alt={"..."}
                            className="h-5 w-26 md:h-10 lg:h-5 xl:h-10 "
                        />
                    </li>
                ))}
            </ul>
            <p className=" mt-8 text-xs">Stellar is used by over 55,000+ companies across the globe</p>
            <Button
                label="Start your Stellar journey"
                variant="outline"
                className="font-semibold mt-8"
            />
        </div>
    );
};
