import { motion } from "framer-motion";
import { AudioLines } from "lucide-react";

const TalkingBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute w-52 h-52 rounded-full blur-lg"
          style={{
            background: "hsl(150 38% 32% / 0.2)",
          }}
          animate={{
            scale: [1, 1.06, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring (green gradient) */}
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "linear-gradient(180deg, hsl(150 38% 32%), hsl(150 38% 26%))",
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.02, 0.99, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Middle ring (subtle white gradient) */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            boxShadow: "inset 0 1px 8px rgba(255,255,255,0.06)",
          }}
          animate={{
            scale: [1, 1.025, 0.985, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.1,
          }}
        />
        
        {/* Layer 1 - Inner circle (subtle white gradient) */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
            boxShadow: "inset 0 1px 6px rgba(255,255,255,0.04)",
          }}
          animate={{
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
        
        {/* Speaking icon */}
        <motion.div
          className="absolute flex items-center justify-center text-foreground/80"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <AudioLines size={36} strokeWidth={1.5} />
        </motion.div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Talking
      </span>
    </div>
  );
};

export default TalkingBlobAlt;
