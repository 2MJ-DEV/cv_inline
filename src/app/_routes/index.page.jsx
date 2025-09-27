import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";
import { CalendarDays } from "lucide-react";
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
                <p className="font-light">My journey into the world of data science and consulting began with a curiosity to unravel the complexities of data and transform them into actionable insights. Over the years, I've cultivated a diverse skill set, allowing me to tackle even the most intricate problems with finesse.</p><br />
                <p className="font-light">Driven by a relentless pursuit of excellence, I am always eager to take on new challenges and explore uncharted territories. Whether you're looking to unlock the potential of your data or chart a new course for your business, I'm here to help you navigate the journey with confidence and clarity.</p>
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
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Experience</h2>
              </div>
              <div className="w-[70%] flex flex-col gap-4">
                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">Tech Innovations Ltd, London</span>
                      <span className="font-light text-sm">UX/UI Intern</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2014 - Aug 2015</span>
                    </div>
                  </div>
                  <p className="font-light text-md">Supported senior UX/UI designers in researching user behaviors, creating wireframes, and prototyping interactive designs for web and mobile applications.</p>
                </div>

                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">Tech Innovations Ltd, London</span>
                      <span className="font-light text-sm">UX/UI Intern</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2014 - Aug 2015</span>
                    </div>
                  </div>
                  <p className="font-light text-md">Supported senior UX/UI designers in researching user behaviors, creating wireframes, and prototyping interactive designs for web and mobile applications.</p>
                </div>

                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">Tech Innovations Ltd, London</span>
                      <span className="font-light text-sm">UX/UI Intern</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2014 - Aug 2015</span>
                    </div>
                  </div>
                  <p className="font-light text-md">Supported senior UX/UI designers in researching user behaviors, creating wireframes, and prototyping interactive designs for web and mobile applications.</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION EDUCATION */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <div className="w-[70%] flex flex-col gap-4">
                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">Royal College of Art, UK</span>
                      <span className="font-light text-sm">Bachelor in Arts</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2010 - June 2013</span>
                    </div>
                  </div>
                  <p className="font-light text-md">
                    Focused on econometrics and quantitative analysis. Conducted independent research on arts.
                  </p>
                </div>

                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">MIT, UK</span>
                      <span className="font-light text-sm">Master in Arts</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2013 - July 2016</span>
                    </div>
                  </div>
                  <p className="font-light text-md">Explored the intersection of design and technology, with a focus on human-centered design principles.</p>
                </div>

                <div className="border border-zinc-950/10 rounded-xl p-5">
                  <div className="flex justify-between mb-2">
                    <div className="flex flex-col">
                      <span className="font-medium">University of Cambridge, UK</span>
                      <span className="font-light text-sm">Ph.D. in Arts</span>
                    </div>
                    <div className="flex items-center justify-center gap-1 border border-zinc-950/20 px-2 text-sm rounded-xl bg-zinc-950/5">
                      <CalendarDays />
                      <span className="font-medium">Sep 2016 - May 2021</span>
                    </div>
                  </div>
                  <p className="font-light text-md">Published several papers in top-tier conferences and journals. Collaborated with industry partners on cutting-edge projects in the field.</p>
                </div>

              </div>
            </div>
          </section>

          {/* SECTION AWARDS */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Awards</h2>
              </div>
              <div className="w-[70%] flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Site of the Day</span>
                  <span className="font-light text-zinc-500">WebAwards</span>
                  <span className="block w-[62%] h-[1px] bg-zinc-950/20"></span>
                  <span className="font-light text-zinc-500">2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Best UX Design</span>
                  <span className="font-light text-zinc-500">CSS Design Awards</span>
                  <span className="block w-[54%] h-[1px] bg-zinc-950/20"></span>
                  <span className="font-light text-zinc-500">2023</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Developer of the Year</span>
                  <span className="font-light text-zinc-500">Tech Innovators</span>
                  <span className="block w-[50%] h-[1px] bg-zinc-950/20"></span>
                  <span className="font-light text-zinc-500">2022</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rising Star Award</span>
                  <span className="font-light text-zinc-500">Code Masters</span>
                  <span className="block w-[57%] h-[1px] bg-zinc-950/20"></span>
                  <span className="font-light text-zinc-500">2021</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION LANGUAGE */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Languages</h2>
              </div>
              <div className="w-[70%] flex flex-col gap-2">
                <div className="flex gap-1">
                  <span>🇫🇷</span>
                  <span className="font-medium">French</span>
                  <p className="font-light text-zinc-800">Mother tongue proficiency</p>
                </div>
                <div className="flex gap-1">
                  <span>🇨🇩</span>
                  <span  className="font-medium">Lingala</span>
                  <p className="font-light text-zinc-800">Elementary proficiency</p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION CONTACT */}
          <section>
            <div className="flex">
              <div className="w-[30%]">
                <h2 className="text-xl font-bold">Contact</h2>
              </div>
              <div className="w-[70%] flex flex-col gap-2">
                <div className="flex gap-1">
                  <span className="font-medium">Email </span>
                  <a href="mailto:julesmukadi.dev@gmail.com" className="font-light text-zinc-800">julesmukadi.dev@gmail.com</a>
                </div>
                <div className="flex gap-1">
                  <span className="font-medium">Phone </span>
                  <a href="tel:+243837449954" className="font-light text-zinc-800">+243 837 449 954</a>
                </div>
              </div>
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
