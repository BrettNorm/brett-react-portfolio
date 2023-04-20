import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-yellow">MY</span><span className="text-red"> DEFINING</span>
            <span className="text-blue"> FEATURES</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-6 mb-7">
            My defining features go beyond my technical skills and experience; 
            they are the personal attributes and qualities that make me stand 
            out as a unique and valuable addition to any team. 
          </p>
        </motion.div>

        <div className="mt-8 md:mt-0 md:mb-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-10 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10 w-full md:w-auto max-w-[600px] mx-auto"
                src="assets/nerd.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10 w-full md:w-auto max-w-[500px] mx-auto" src="assets/nerd.jpg" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-5 lg:mt-10 xl:mt-16 gap-32">
        {/* Attention to detail */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Attention to detail
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I pride myself on being meticulous in my work and strive for perfection in every 
            aspect of software development. It ensures that my code is clean, 
            efficient, and easily maintainable. This is crucial in creating software that not only 
            functions flawlessly but also meets the needs and expectations of users.
          </p>

        </motion.div>

        {/* COMMUNICATION */}
        <motion.div
          className="md:w-1/3 mt-10 "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Communication
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>

          <p className="mt-5">
            Communication is key to success in any project, and I take it seriously. I have 
            strong verbal and written skills, which allow me to explain technical concepts and 
            collaborate effectively with diverse teams.
          </p>
        </motion.div>
        {/* persistence */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Persistence
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I am persistent and tenacious in my pursuit of solutions to complex problems. 
            I am not easily discouraged and am willing to put in the time and effort required 
            to overcome obstacles and achieve project goals. My persistence ensures that I am 
            committed to delivering high-quality work, even in challenging circumstances. 
          </p>
         
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;