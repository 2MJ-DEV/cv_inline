import About from "@/components/About";
import Awards from "@/components/Awards";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Languages from "@/components/Languages";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import Projects from "@/components/Projects";

const Page = () => {
  return (
    <>
      <div className="w-[50%] mx-auto">
        <Navbar />
        <main className="mt-18 flex flex-col gap-10">
          <Profile />
          <About />
          <Projects />
          <Experience />
          <Education />
          <Awards />
          <Languages />
          <Contact />
        </main>
        <Footer />

      </div>
    </>
  );
};

Page.metadata = {
  title: 'Jules | Portfolio',
  description: 'Welcome to Jules\'s Portfolio',
};

export default Page;
