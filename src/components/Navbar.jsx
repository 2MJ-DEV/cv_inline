import { Link } from "rasengan";

const Navbar = () => {
    return (
        <header>
            <nav className="flex items-center justify-between py-2 px-3 mt-2 border border-zinc-950/5 rounded-2xl">
                {/* Logo */}
                <div className="">
                    <Link to="/" className="flex items-center">
                        <img src="/public/rasengan.svg" alt="Me" width={50} height={50} className="rounded-md border border-zinc-950/5" />
                    </Link>
                </div>

                {/* Liens */}
                <ul className="flex gap-5">
                    <li className="hover:text-blue-700 underline-offset-4 hover:underline duration-300">
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className="hover:text-blue-700 underline-offset-4 hover:underline duration-300">
                        <Link to="/Experience">Experience</Link>
                    </li>
                    <li className="hover:text-blue-700 underline-offset-4 hover:underline duration-300">
                        <Link to="/Education">Education</Link>
                    </li>
                </ul>

                {/* Bouton ou actions */}
                <div className="navbar-actions">
                    <button className="bg-blue-700 text-white py-2 px-5 rounded-md hover:bg-blue-600 duration-300 cursor-pointer">Contact Me</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;