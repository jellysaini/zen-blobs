import { motion } from "framer-motion";

const IdleBlob = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer glow */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-terracotta/20 to-rust/10 blur-xl"
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main blob */}
        <motion.div
          className="relative w-40 h-40"
          animate={{
            scale: [1, 1.04, 0.98, 1],
            rotate: [0, 2, -2, 0],
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
                  "M100,28 C148,32 172,58 172,100 C172,142 148,172 100,172 C52,172 28,142 28,100 C28,58 52,28 100,28",
                  "M100,24 C135,24 176,65 176,100 C176,135 135,176 100,176 C65,176 24,135 24,100 C24,65 65,24 100,24",
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                ],
              }}
              transition={{
                duration: 4,
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
            scale: [0.85, 1.05, 0.85],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 2.5,
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

export default IdleBlob;
