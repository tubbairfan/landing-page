import logo from "../assets/logo.svg";

export const Navbar: React.FC = () => {
    const links = ["Product", "About", "Pricing", "Contact", "Blog"];
    return (
        <>
            <nav className="flex items-center justify-between px-8 py-4 bg-white shadow-md rounded-xl mx-6 mt-5 ">

                <img
                    src={logo}
                    alt="Stellar Logo"
                    className="h-10 w-auto cursor-pointer"
                />
                <ul className="flex items-center gap-6 text-gray-700 font-medium">
                    {links.map((item) => (
                        <li
                            key={item}
                            className="cursor-pointer hover:text-blue-600 transition-colors"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-3">
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition">
                        Sign In
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                        Sign Up
                    </button>
                </div>

            </nav>
        </>
    );

};

