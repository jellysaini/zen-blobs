import { motion } from "framer-motion";

const IdleBlob = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer glow */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-terracotta/20 to-rust/10 blur-xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main blob */}
        <motion.div
          className="relative w-40 h-40"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="idleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--terracotta))" />
                <stop offset="50%" stopColor="hsl(var(--rust))" />
                <stop offset="100%" stopColor="hsl(var(--clay))" />
              </linearGradient>
              <filter id="idleGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              fill="url(#idleGradient)"
              filter="url(#idleGlow)"
              animate={{
                d: [
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                  "M100,25 C145,30 175,55 175,100 C175,145 145,175 100,175 C55,175 25,145 25,100 C25,55 55,25 100,25",
                  "M100,22 C142,28 178,58 178,100 C178,142 142,178 100,178 C58,178 22,142 22,100 C22,58 58,22 100,22",
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                ],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
        
        {/* Inner pulse */}
        <motion.div
          className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-terracotta/60 to-rust/40"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Idle
      </span>
    </div>
  );
};

export default IdleBlob;
