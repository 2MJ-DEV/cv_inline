import ProjectCard from "./ProjectCard";
import projects from "@/data/projects.json";

const Projects = () => {
    return (
        <div className="flex">
            <div className="w-[30%]">
                <h2>Projects</h2>
            </div>
            <div className="w-[70%]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            github={project.github}
                            demo={project.demo}
                            language={project.language}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;