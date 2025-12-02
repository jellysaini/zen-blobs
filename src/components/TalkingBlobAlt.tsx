import { motion } from "framer-motion";

const TalkingBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute w-52 h-52 rounded-full bg-forest/20 blur-lg"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-b from-forest to-forest/80"
          style={{
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Middle ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-b from-moss/90 to-olive/80"
          style={{
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.04, 0.97, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        
        {/* Layer 1 - Inner circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-b from-sage/70 to-moss/60"
          style={{
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
          }}
          animate={{
            scale: [1, 1.05, 0.96, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        
        {/* Speaking icon */}
        <motion.div
          className="absolute flex items-center justify-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 48 48" className="w-14 h-14 text-foreground/80">
            {/* Face profile */}
            <motion.path
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              d="M18 16 C14 18, 12 22, 12 26 C12 30, 14 34, 18 36 L18 38 C18 38, 14 38, 14 34"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Sound waves */}
            {[0, 1, 2].map((index) => (
              <motion.line
                key={index}
                x1={26 + index * 4}
                y1={22}
                x2={30 + index * 4}
                y2={18 + index * 2}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                animate={{
                  opacity: [0.3, 0.9, 0.3],
                  x1: [26 + index * 4, 27 + index * 4, 26 + index * 4],
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </svg>
        </motion.div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Talking
      </span>
    </div>
  );
};

export default TalkingBlobAlt;
