import { motion } from "framer-motion";
import { Ear } from "lucide-react";

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
          className="absolute flex items-center justify-center text-foreground/80"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Ear size={36} strokeWidth={1.5} />
        </motion.div>
        
        {/* Incoming sound waves - left */}
        <div className="absolute -left-4 flex flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-8 h-0.5 rounded-full bg-gradient-to-r from-terracotta/60 to-transparent"
              animate={{
                x: [0, 20, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        
        {/* Incoming sound waves - right */}
        <div className="absolute -right-4 flex flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-8 h-0.5 rounded-full bg-gradient-to-l from-terracotta/60 to-transparent"
              animate={{
                x: [0, -20, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Listening
      </span>
    </div>
  );
};

export default ListeningBlobAlt;
