import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import SocialMediaIcons from "../components/SocialMediaIcons"

const Landing = ({setSelectedPage}) => {
 const isAboveLarge = useMediaQuery("(min-width: 1060px)");

 return (
    <section id="home" className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10">

      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-25 flex justify-center md:order-2">
         {isAboveLarge ? (
            <div
               className="" >
               <img
               alt="Headshot"
               className="hover:filter hover:grayscale transition duration-500 z-10 w-full max-w-[400px] md:max-w-[500px]"
               src="assets/Headshot.jpeg" />
            </div>
         ) : (
            <img
               alt="Headshot"
               className="z-10 w-full max-w-[400px] md:max-w-[600px]"
               src="assets/Headshot.jpeg"
            />
         )}
      </div>

            {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Brett {""}
            <span
              className="mx-2 xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] pl-7"
            >
             Bax
            </span>
          </p>
          <p class="mt-12 mb-4 text-sm text-center md:text-start">
  B.S. Computer Science - University of Missouri - St. Louis
  January 2020 - May 2022, 3.63 GPA
</p>

<ul class="list-disc ml-8 mt-2 mb-10 text-sm text-center md:text-start">
  <li>Languages: C, C++, Java, Python, CSS, HTML, SQL, JavaScript, Swift</li>
  <li>Web Dev: React.js, CSS, TailwindCSS, NextJS, HTML, SQL </li>
  <li>iOS: UIKit, SwiftUI</li>
  <li>ML: Python</li>
</ul>


        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Let's chat
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Contact Me
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-4 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>

    

   </section>
 )
}

export default Landing;