import { MapPin } from "lucide-react";


const Profile = () => {
    return (
        <section>
            <div className="">
                <div className="flex gap-4">
                    <div className="w-[40%] h-120 bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg border border-zinc-950/5">
                        <img
                            src="data:image/webp;base64,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"
                            alt="Me"
                            className="object-cover w-full h-full"
                        />
                    </div>

                    <div className="border border-zinc-950/5 w-[60%] rounded-md px-10 flex flex-col items-start justify-between">
                        <div className="mt-10">
                            <h1 className="text-3xl font-bold">Jules MUKADI</h1>
                            <p className="mt-5">
                                Experienced web developer in Lubumbashi. With extensive experience in web interface design and development, I specialize in creating high-performance, optimized solutions to meet the needs of users and businesses. My strengths lie in developing innovative projects to solve complex problems, combined with excellent communication skills to collaborate effectively with teams and stakeholders at all levels.
                            </p>
                        </div>
                        <div className="mb-10 flex justify-center">
                            <span className="">CV</span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center justify-center gap-2 border border-zinc-300 rounded-xl px-3 py-1">
                        <span class="relative flex size-3">
                            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
                        </span>
                        <span className="">
                            Available for Work
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-2 border border-zinc-300 rounded-xl px-3 py-1">
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