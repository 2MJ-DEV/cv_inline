import { MapPin } from "lucide-react";


const Profile = () => {
    return (
        <section>
            <div className="">
                <div className="flex gap-4">
                    <div className="w-[40%] h-110 bg-gray-100 flex items-center justify-center overflow-hidden rounded-xl border border-zinc-950/5">
                        <img
                            src="src/assets/Img-1.jpg"
                            alt="Me"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className=" w-[60%] rounded-xl border border-zinc-950/5 px-10 flex flex-col items-start justify-center">
                        <div className="">
                            <h1 className="text-3xl font-bold">Jules MUKADI</h1>
                            <div className="">
                                <p className="mt-5 font-light ">
                                Experienced web developer in Lubumbashi. With extensive experience in web interface design and development, I specialize in creating high-performance, optimized solutions to meet the needs of users and businesses.
                            </p><br />
                            <p>
                                My strengths lie in developing innovative projects to solve complex problems, combined with excellent communication skills to collaborate effectively with teams and stakeholders at all levels.
                            </p>
                            </div>
                        </div>
                        {/* <div className="mb-10 flex justify-center">
                            <span className="">CV</span>
                        </div> */}
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