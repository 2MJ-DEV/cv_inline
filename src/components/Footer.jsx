const Footer = () => {

    return (
        <footer className="mt-10 py-5 border-t border-zinc-950/5 flex items-center justify-between">
            <div class="-mb-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700">
                Designed by
                <div class="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1">
                    <div class="block">
                        <div class="block pb-2">2MJULES</div>
                        <div class="-mt-5 grow overflow-hidden"><svg aria-hidden="true" class="w-16" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" stroke-width="4"></path><defs><linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse"><stop stop-color="#facc15"></stop><stop offset="1" stop-color="#a855f7"></stop></linearGradient></defs></svg></div>
                    </div>
                </div>
            </div>
            <div className="">
                <span className="text-center text-sm">&copy; {new Date().getFullYear()}. All rights reserved.</span>
            </div>
        </footer>
    );
};

export default Footer;