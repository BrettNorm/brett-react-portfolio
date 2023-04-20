import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, githubUrl, description }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-7">{description}</p>
        </div>
        <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} className="max-w-[400px] max-h[400px]"/>
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-blue">PRO</span><span className="text-red">JE</span>
            <span className="text-yellow">CTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Check out some of my GitHub projects!
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-2"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          
          {/* ROW 1 */}         
            <Project title="Project 1" githubUrl="https://github.com/BrettNorm/Compiler" description="
            Compiler made with C++ in UNIX" />
            <Project title="Project 2" githubUrl="https://github.com/BrettNorm/Ternary-Tree-Traverser"
            description="Ternary Tree Traverser" /> 
            <Project title="Project 3" githubUrl="https://github.com/BrettNorm/21-Card-Trick"
            description="21 Card Trick" />


          {/* ROW 2 */}
          <Project title="Project 4" githubUrl="https://github.com/BrettNorm/OS-Memory-Manager"
          description="OS Memory Management Simulator"/>
          <Project title="Project 5" githubUrl="https://github.com/BrettNorm/Card-Matching-Game"
          description="iOS Card Memory Matching Game"/>
          <Project title="Project 6" githubUrl="https://github.com/BrettNorm/Stopwatch" 
          description="iOS Stopwatch"/>

          {/* <Project title="Project 7" githubUrl="https://github.com/BrettNorm/Task-App"/> */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

