import { useState } from "react";
import { Button } from "./UI/Button"
import logo from "../assets/logo.svg";

export const Navbar: React.FC = () => {
    const links: string[] = ["Product", "About", "Pricing", "Contact", "Blog"];
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white shadow-md rounded-full mx-3 lg:mx-8 mt-5 px-2 py-2">
            <div className="border border-gray-100 p-5 rounded-full lg:p-5  ">
                <div className="flex items-center justify-between">
                    <img
                        src={logo}
                        alt="Stellar Logo"
                        className="h-8 lg:h-10 w-auto cursor-pointer"
                    />

                    <ul className="hidden lg:flex items-center gap-9 text-gray-500 font-medium">
                        {links.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-purple-600 transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden lg:flex items-center gap-3 ">
                        <Button label="Sign In" variant="ghost" />

                        <Button
                            label="Sign Up for free"
                            variant="outline"
                            className="font-semibold"
                        />
                    </div>


                    <button
                        className="lg:hidden text-2xl"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 lg:hidden
                ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
                >
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <span className="font-bold text-lg"></span>
                        <button
                            className="text-2xl"
                            onClick={() => setMenuOpen(false)}
                        >
                            ✕
                        </button>
                    </div>

                    <ul className="flex flex-col gap-5 px-6 py-6 text-gray-700 font-medium">
                        {links.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-blue-600"
                                onClick={() => setMenuOpen(false)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="flex flex-col gap-3 px-6 mt-auto">
                        <Button
                            label="Sign In"
                            variant="outline"
                            className="rounded-md"
                        />

                        <Button
                            label="Sign Up"
                            variant="primary"
                            className="rounded-md"
                        />
                    </div>

                </div>
            </div>
        </nav>
    );
};
