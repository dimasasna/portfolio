import { Github, Linkedin, Mail, Award } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import profile from "../assets/dimas.webp";
import { useState } from "react";
import CVPreviewModal from "../components/CVPreviewModal";

interface HeroProps {
  onNavigate: (page: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  const [isCVOpen, setIsCVOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // const floatingVariants: Variants = {
  //   animate: {
  //     y: [-20, 20, -20],
  //     transition: {
  //       duration: 4,
  //       repeat: Infinity,
  //       ease: 'easeInOut',
  //     },
  //   },
  // };

  const rotatingVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-linear-to-br from-black via-gray-900 to-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        ></motion.div>
      </div>

      <div className="container mx-auto lg:px-20 px-6 relative z-10">
        <div className="flex flex-col items-center gap-10 lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center py-28">
          {/* Teks — order-2 mobile, kolom kiri desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1 w-full flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.div variants={itemVariants} className="mb-6 inline-block">
              {/* <span className="px-4 py-2 bg-green-500/10 border border-green-400/30 rounded-full text-green-400 text-sm font-medium">
                👋 Welcome to my portfolio
              </span> */}
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="text-white">Hi, I'm </span>
              <span className="text-transparent bg-clip-text bg-linear-to-r from-green-400 to-green-600">
                Dimas Asna Nugraha
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-4"
            >
              Software Quality Assurance
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-gray-400 mb-8 max-w-xl"
            >
              Delivering high-quality software through structured testing strategies, defect analysis, and comprehensive documentation.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
              <button
                onClick={() => setIsCVOpen(true)}
                className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
              >
                <Award className="inline-block mr-2" size={20} />
                Download CV
              </button>
              <button
                onClick={() => onNavigate("projects")}
                className="px-8 py-4 cursor-pointer bg-transparent border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <a
                href="https://github.com/dimasasna"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/dimasasna/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:dimas.asna@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Mail size={28} />
              </a>
            </motion.div>
          </motion.div>

          {/* Foto — order-1 mobile (tampil di atas), kolom kanan desktop */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative order-1 lg:order-2 flex items-center justify-center"
          >
            <motion.div
              variants={rotatingVariants}
              animate="animate"
              className="absolute inset-0"
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-500/20 to-green-400/20 rounded-full blur-2xl"></div>
              <div className="absolute inset-2 border-2 border-green-400/30 rounded-full"></div>
            </motion.div>

            <motion.div className="relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-linear-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-2xl shadow-green-500/50">
                <div className="text-6xl md:text-8xl">
                  <img
                    src={profile}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-72 h-72 md:w-96 md:h-96 border border-dashed border-green-400/40 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <CVPreviewModal
        isOpen={isCVOpen}
        onClose={() => setIsCVOpen(false)}
        cvUrl="https://drive.google.com/file/d/1e4SI_MS4ZxaUyL-ukNH1LJOd5ZAUblMD/preview"
      />
    </section>
  );
};

export default Hero;
