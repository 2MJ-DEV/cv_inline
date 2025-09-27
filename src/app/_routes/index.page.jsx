import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { Link } from "rasengan";

const Page = () => {
  return (
    <>
      <div className="w-[50%] mx-auto">
        <Navbar />
        <main className="mt-18 flex flex-col gap-10">
          <Profile />
          {/* SECTION ABOUT ME */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">About Me</h2>
              </div>
              <div className="w-[70%]">
                <p>My journey into the world of data science and consulting began with a curiosity to unravel the complexities of data and transform them into actionable insights. Over the years, I've cultivated a diverse skill set, allowing me to tackle even the most intricate problems with finesse.</p><br />
                <p>Driven by a relentless pursuit of excellence, I am always eager to take on new challenges and explore uncharted territories. Whether you're looking to unlock the potential of your data or chart a new course for your business, I'm here to help you navigate the journey with confidence and clarity.</p>
              </div>
            </div>
          </section>

          {/* SECTION PROJECTS */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Projects</h2>
              </div>
              <div className="w-[70%]">
                <div className="flex justify-end mb-3">
                  <Link to="/ProjectsList" className='underline-offset-3 underline decoration-blue-700 hover:text-blue-700 duration-300 transition'>View all</Link>
                </div>
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
          </section>

          {/* SECTION XP */}
          <section>
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold">Experience</h2>
              </div>
              <div className=""></div>
            </div>
          </section>

          {/* SECTION EDUCATION */}
          <section>
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className=""></div>
            </div>
          </section>

          {/* SECTION AWARDS */}
          <section>
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold">Awards</h2>
              </div>
              <div className=""></div>
            </div>
          </section>

          {/* SECTION LANGUAGE */}
          <section>
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold">Languages</h2>
              </div>
              <div className="">
                <div className="">
                  <span>English</span>
                </div>
                <div className="flex gap-2">
                  <img src="src/assets/france-icon.png" alt="" className="h-5" />
                  <span className="font-bold">French</span>
                  <span className="font-light text-zinc-500">Elementary proficiency</span>
                </div>
                <div className="">
                  <span>Lingala</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION CONTACT */}
          <section>
            <div className="">
              <div className="">
                <h2 className="text-xl font-bold">Contact</h2>
              </div>
              <div className=""></div>
            </div>
          </section>

        </main>
        <Footer />

      </div>
    </>
  );
};

Page.metadata = {
  title: 'Jules MUKADI',
  description: 'Welcome to Jules\'s Portfolio',
};

export default Page;
