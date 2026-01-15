import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Rajveer</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I do Web Development, user <br className='sm:block hidden' />
            interfaces and mobile applications
          </p>
        </div>
      </div>

      {/* Animated SVG Illustration */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none'>
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className='w-full h-full max-w-4xl opacity-20 sm:opacity-30'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Laptop Base */}
          <motion.path
            d="M150 350 L450 350 L480 400 L120 400 Z"
            fill="#915EFF"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
          />
          
          {/* Laptop Screen */}
          <motion.rect
            x="180"
            y="150"
            width="240"
            height="200"
            rx="8"
            fill="#1a1a2e"
            stroke="#915EFF"
            strokeWidth="4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          />
          
          {/* Screen Content - Code Lines */}
          <motion.line
            x1="200" y1="180" x2="320" y2="180"
            stroke="#915EFF"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
          <motion.line
            x1="200" y1="200" x2="380" y2="200"
            stroke="#915EFF"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
          <motion.line
            x1="200" y1="220" x2="300" y2="220"
            stroke="#915EFF"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          />
          <motion.line
            x1="200" y1="240" x2="360" y2="240"
            stroke="#915EFF"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          />
          
          {/* Floating Elements */}
          <motion.circle
            cx="500"
            cy="200"
            r="15"
            fill="none"
            stroke="#915EFF"
            strokeWidth="2"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
          <motion.circle
            cx="100"
            cy="250"
            r="12"
            fill="none"
            stroke="#915EFF"
            strokeWidth="2"
            animate={{
              y: [0, 15, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: "loop",
              delay: 0.5
            }}
          />
          <motion.rect
            x="480"
            y="300"
            width="20"
            height="20"
            fill="none"
            stroke="#915EFF"
            strokeWidth="2"
            animate={{
              rotate: [0, 180, 360],
              y: [0, -15, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </motion.svg>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
