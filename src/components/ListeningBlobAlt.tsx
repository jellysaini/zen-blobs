import { motion } from "framer-motion";

const ListeningBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute w-52 h-52 rounded-full bg-terracotta/20 blur-lg"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-b from-terracotta to-rust/90"
          style={{
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.08)",
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Middle ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-b from-rust/85 to-clay/75"
          style={{
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.08)",
          }}
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        
        {/* Layer 1 - Inner circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-b from-clay/70 to-rust/50"
          style={{
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
        />
        
        {/* Ear icon */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 48 48" className="w-14 h-14 text-foreground/80">
            {/* Ear shape */}
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M28 14 C36 16, 38 26, 34 34 C32 38, 28 40, 24 40 C22 40, 20 39, 20 37 C20 35, 22 34, 24 33 C26 32, 28 30, 28 26 C28 22, 24 20, 22 22 C20 24, 20 28, 22 30"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Sound waves coming in */}
            {[0, 1, 2].map((index) => (
              <motion.line
                key={index}
                x1={38 + index * 3}
                y1={20 + index * 2}
                x2={42 + index * 3}
                y2={24 + index * 2}
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                animate={{
                  opacity: [0, 0.8, 0],
                  x1: [38 + index * 3, 36 + index * 3, 38 + index * 3],
                  x2: [42 + index * 3, 40 + index * 3, 42 + index * 3],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.3,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Listening
      </span>
    </div>
  );
};

export default ListeningBlobAlt;
