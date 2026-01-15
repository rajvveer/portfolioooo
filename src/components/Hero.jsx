import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      {/* Gradient Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 z-0" />
      
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 z-10`}
      >
        {/* Animated Timeline */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <motion.div 
            className='w-5 h-5 rounded-full bg-[#915EFF]'
            animate={{ 
              scale: [1, 1.2, 1],
              boxShadow: [
                "0 0 0 0 rgba(145, 94, 255, 0.7)",
                "0 0 0 10px rgba(145, 94, 255, 0)",
                "0 0 0 0 rgba(145, 94, 255, 0)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className='w-1 sm:h-80 h-40 violet-gradient'
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
        </div>

        {/* Content with Stagger Animation */}
        <div className="flex flex-col">
          <motion.h1 
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm{" "}
            <motion.span 
              className='text-[#915EFF] inline-block'
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05, textShadow: "0 0 20px rgba(145, 94, 255, 0.8)" }}
            >
              Rajveer
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I craft exceptional digital experiences through
            <br className='sm:block hidden' />
            <span className="text-[#915EFF] font-medium"> Web Development, UI/UX Design </span>
            and Mobile Applications
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.button
              className="bg-[#915EFF] text-white font-bold py-3 px-8 rounded-full shadow-lg"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 25px rgba(145, 94, 255, 0.6)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              className="border-2 border-[#915EFF] text-white font-bold py-3 px-8 rounded-full"
              whileHover={{ 
                scale: 1.05, 
                backgroundColor: "rgba(145, 94, 255, 0.1)" 
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Animated SVG Illustration */}
      <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-0'>
        <motion.svg
          width="600"
          height="600"
          viewBox="0 0 600 600"
          className='w-full h-full max-w-4xl opacity-10 sm:opacity-20'
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: [0.15, 0.25, 0.15], scale: 1, rotate: 0 }}
          transition={{ opacity: { duration: 4, repeat: Infinity }, scale: { duration: 1 }, rotate: { duration: 1 } }}
        >
          {/* Glow Effect Background */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#915EFF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#915EFF" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Laptop Base with Shadow */}
          <motion.path
            d="M150 350 L450 350 L480 400 L120 400 Z"
            fill="#915EFF"
            filter="url(#glow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          />
          
          {/* Laptop Screen with Gradient */}
          <motion.rect
            x="180"
            y="150"
            width="240"
            height="200"
            rx="8"
            fill="url(#screenGradient)"
            stroke="#915EFF"
            strokeWidth="4"
            filter="url(#glow)"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />
          
          {/* Screen Content - Animated Code Lines */}
          {[180, 200, 220, 240, 270, 290].map((y, index) => (
            <motion.line
              key={y}
              x1="200"
              y1={y}
              x2={280 + (index % 3) * 40}
              y2={y}
              stroke="#915EFF"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.4, 1, 0.4] }}
              transition={{ 
                pathLength: { duration: 0.8, delay: 0.5 + index * 0.1 },
                opacity: { duration: 2, delay: 1 + index * 0.2, repeat: Infinity }
              }}
            />
          ))}
          
          {/* Cursor Blink Effect */}
          <motion.rect
            x="210"
            y="310"
            width="3"
            height="15"
            fill="#915EFF"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          
          {/* Enhanced Floating Elements */}
          <motion.circle
            cx="500"
            cy="200"
            r="15"
            fill="none"
            stroke="#915EFF"
            strokeWidth="3"
            filter="url(#glow)"
            animate={{
              y: [0, -25, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.circle
            cx="100"
            cy="250"
            r="12"
            fill="none"
            stroke="#915EFF"
            strokeWidth="3"
            filter="url(#glow)"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.15, 1]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          
          <motion.polygon
            points="480,300 500,300 490,280"
            fill="none"
            stroke="#915EFF"
            strokeWidth="3"
            filter="url(#glow)"
            animate={{
              rotate: [0, 360],
              y: [0, -20, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              rotate: { duration: 4, repeat: Infinity, ease: "linear" },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
          />

          {/* Additional Geometric Shapes */}
          <motion.path
            d="M 520 320 L 540 340 L 520 360 L 500 340 Z"
            fill="none"
            stroke="#915EFF"
            strokeWidth="2"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.svg>
      </div>

      {/* Scroll Indicator with Smooth Animation */}
      <motion.div 
        className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <a href='#about' aria-label="Scroll to about section">
          <motion.div 
            className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'
            whileHover={{ scale: 1.1, borderColor: "#915EFF" }}
          >
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </motion.div>
        </a>
      </motion.div>

      {/* Particle Effect Grid (Optional) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(145, 94, 255, 0.15) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}
      />
    </section>
  );
};

export default Hero;
