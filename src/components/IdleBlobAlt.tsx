import { motion } from "framer-motion";

interface IdleBlobAltProps {
  size?: number;
}

const IdleBlobAlt = ({ size = 256 }: IdleBlobAltProps) => {
  const glowSize = size * 0.8125;
  const layer3Size = size * 0.75;
  const layer2Size = size * 0.625;
  const layer1Size = size * 0.5;
  const coreSize = size * 0.3125;

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute rounded-full blur-lg"
          style={{
            width: glowSize,
            height: glowSize,
            background: "linear-gradient(135deg, hsl(0 68% 46% / 0.2), hsl(150 38% 32% / 0.15))",
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
        
        {/* Layer 3 - Outer ring (red to green diagonal) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: layer3Size,
            height: layer3Size,
            background: "linear-gradient(135deg, hsl(0 68% 46%), hsl(150 38% 32%))",
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
        
        {/* Layer 2 - Middle ring (subtle white gradient) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: layer2Size,
            height: layer2Size,
            background: "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
            boxShadow: "inset 0 1px 8px rgba(255,255,255,0.06)",
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
        
        {/* Layer 1 - Inner circle (subtle white gradient) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: layer1Size,
            height: layer1Size,
            background: "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))",
            boxShadow: "inset 0 1px 6px rgba(255,255,255,0.04)",
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
        
        {/* Core - very subtle white */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: coreSize,
            height: coreSize,
            background: "linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
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
