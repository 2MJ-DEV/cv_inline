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
                    <li className="hover:text-zinc-600 duration-300">
                        <Link to="/">Profile</Link>
                    </li>
                    <li className="hover:text-zinc-600 duration-300">
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li className="hover:text-zinc-600 duration-300">
                        <Link to="/experience">Experience</Link>
                    </li>
                    <li className="hover:text-zinc-600 duration-300">
                        <Link to="/education">Education</Link>
                    </li>
                </ul>

                {/* Bouton ou actions */}
                <div className="navbar-actions">
                    <button className="bg-black text-white py-2 px-5 rounded-md hover:bg-zinc-700 duration-300 cursor-pointer">Contact Me</button>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;