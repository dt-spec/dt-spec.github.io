import { motion } from 'framer-motion';

const RocketAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rocket */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2"
        initial={{ y: 100, opacity: 0 }}
        animate={{ 
          y: -1000, // Increased distance to go all the way up
          opacity: [0, 1, 1, 0] // Fade out at the top
        }}
        transition={{
          duration: 4, // Increased duration for longer travel
          ease: [0.4, 0, 0.2, 1], // Custom easing for more natural movement
          repeat: Infinity,
          repeatDelay: 2 // Longer delay before next launch
        }}
      >
        {/* Rocket body */}
        <div className="relative">
          {/* Main body */}
          <motion.div
            className="w-8 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-lg"
            animate={{
              y: [0, -2, 0],
              rotate: [0, 1, 0, -1, 0], // Added slight rotation
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Rocket tip */}
          <motion.div
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-b-[16px] border-transparent border-b-red-500"
            animate={{
              y: [0, -1, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Fins */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-6 bg-gray-700"
                style={{
                  transform: `rotate(${i * 45 - 45}deg)`,
                  transformOrigin: 'bottom center'
                }}
                animate={{
                  y: [0, 1, 0],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>

          {/* Windows */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex gap-2">
            {[...Array(2)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-blue-400"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
              />
            ))}
          </div>
        </div>

        {/* Exhaust flames */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center">
            {/* Main flame */}
            <motion.div
              className="w-6 h-12 bg-gradient-to-t from-orange-500 via-red-500 to-transparent rounded-b-full"
              animate={{
                height: ["48px", "56px", "48px"],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            {/* Side flames */}
            <div className="flex gap-4 -mt-2">
              {[...Array(2)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-3 h-6 bg-gradient-to-t from-orange-400 via-red-400 to-transparent rounded-b-full"
                  animate={{
                    height: ["24px", "32px", "24px"],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Enhanced smoke particles */}
      {[...Array(30)].map((_, index) => (
        <motion.div
          key={`smoke-${index}`}
          className="absolute left-1/2 top-1/2 w-2 h-2 rounded-full bg-gray-400/30"
          initial={{
            x: -4 + Math.random() * 8,
            y: 0,
            opacity: 0,
            scale: 0
          }}
          animate={{
            x: -40 + Math.random() * 80, // Wider spread
            y: 100 + Math.random() * 100, // Higher spread
            opacity: [0, 0.5, 0],
            scale: [0, 2, 0] // Larger particles
          }}
          transition={{
            duration: 3 + Math.random() * 2, // Longer duration
            repeat: Infinity,
            delay: Math.random() * 3, // More varied delays
            ease: "easeOut"
          }}
        />
      ))}

      {/* Star particles */}
      {[...Array(50)].map((_, index) => (
        <motion.div
          key={`star-${index}`}
          className="absolute w-1 h-1 bg-white rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: 0,
            scale: 0
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 1 + Math.random(),
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default RocketAnimation; 