import { useState } from "react";
import logo from "../assets/logo.svg";

export const Navbar: React.FC = () => {
    const links: string[] = ["Product", "About", "Pricing", "Contact", "Blog"];
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    return (
        <nav className="bg-white shadow-md rounded-xl mx-3 md:mx-6 mt-5 px-2 md:px-2 py-2">
            <div className="border border-gray-100 p-5 rounded-md ">
                <div className="flex items-center justify-between">
                    <img
                        src={logo}
                        alt="Stellar Logo"
                        className="h-8 md:h-10 w-auto cursor-pointer"
                    />

                    <ul className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
                        {links.map((item) => (
                            <li
                                key={item}
                                className="cursor-pointer hover:text-blue-600 transition-colors"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="hidden md:flex items-center gap-3">
                        <button className="md:px-3 px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                            Sign In
                        </button>
                        <button className="md:px-3 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 transition">
                            Sign Up
                        </button>
                    </div>

                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>

                {menuOpen && (
                    <div
                        className="fixed inset-0 bg-black/40 z-40 md:hidden"
                        onClick={() => setMenuOpen(false)}
                    />
                )}
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 md:hidden
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
                        <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700">
                            Sign In
                        </button>
                        <button className="px-4 py-2 bg-purple-600 text-white rounded-md">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};
