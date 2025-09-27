import { MapPin } from "lucide-react";


const Profile = () => {
    return (
        <section>
            <div className="">
                <div className="flex gap-4">
                    <div className="w-[40%] h-110 bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl border border-zinc-950/5">
                        <img
                            src="https://avatars.githubusercontent.com/u/146131402?v=4"
                            alt="Me"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className=" w-[60%] rounded-xl border border-zinc-950/5 px-10 flex flex-col items-start justify-center">
                        <div className="">
                            <h1 className="text-3xl font-bold">Jules MUKADI</h1>
                            <div className="">
                                <p className="mt-5 font-light">
                                    Experienced web developer in Lubumbashi. With extensive experience in web interface design and development, I specialize in creating high-performance, optimized solutions to meet the needs of users and businesses.
                                </p><br />
                                <p className="font-light">
                                    My strengths lie in developing innovative projects to solve complex problems, combined with excellent communication skills to collaborate effectively with teams and stakeholders at all levels.
                                </p>
                            </div>
                        </div>
                        {/* <div className="mb-10 flex justify-center">
                            <div className="flex items-center justify-center gap-4 mt-5">
                                <span>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path></svg>
                                    </a>
                                </span>
                                <span>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z"></path>
                                        </svg>
                                    </a>
                                </span>
                                <span>
                                    <a href="">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#000000" viewBox="0 0 256 256">
                                            <path d="M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>*/}
                    </div>
                </div>
                <div className="flex items-center justify-between mt-5">
                    <div className="flex items-center justify-center gap-2 border border-zinc-950/5 rounded-xl px-3 py-1">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                        </span>
                        <span className="">
                            Available for Work
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 border border-zinc-950/5 rounded-xl px-3 py-1">
                        <MapPin className="text-zinc-500 size-5" />
                        <span className="">
                            Lubumbashi
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;