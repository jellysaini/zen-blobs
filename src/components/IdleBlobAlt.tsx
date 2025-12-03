import { motion } from "framer-motion";

const IdleBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute w-52 h-52 rounded-full blur-lg"
          style={{
            background: "linear-gradient(135deg, hsl(355 42% 52% / 0.2), hsl(150 38% 32% / 0.15))",
          }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring */}
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(355 42% 52%), hsl(150 38% 32%))",
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.015, 0.995, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Middle ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(5 38% 48% / 0.85), hsl(100 32% 38% / 0.7))",
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.012, 0.992, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        
        {/* Layer 1 - Inner circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(20 30% 52% / 0.7), hsl(120 28% 48% / 0.55))",
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
          }}
          animate={{
            scale: [1, 1.008, 0.995, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        
        {/* Core - subtle breathing glow */}
        <motion.div
          className="absolute w-20 h-20 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(50 25% 45% / 0.5), hsl(50 25% 45% / 0.3))",
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Idle
      </span>
    </div>
  );
};

export default IdleBlobAlt;
