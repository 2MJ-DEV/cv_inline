import { Github, ViewIcon } from "lucide-react";

export default function ProjectCard({ image, logo, title, description, github, demo, language }) {
    return (
        <div className="rounded-xl border border-zinc-950/5 overflow-hidden bg-white transition">
            {/* Image */}
            <div className="h-48 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
            </div>

            {/* Content */}
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h2>
                <p className="text-sm text-gray-500 line-clamp-2 font-light">{description}</p>

                {/* Icons */}
                <div className="flex items-center justify-between gap-4 mt-4">
                    <span>
                        {language && (
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                                {language}
                            </span>
                        )}
                    </span>
                    <div className="flex gap-4">
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-black"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                        )}
                        {demo && (
                            <a
                                href={demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-700 hover:text-blue-600"
                            >
                                <ViewIcon className="w-5 h-5" />
                            </a>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}