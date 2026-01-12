import { motion } from "framer-motion";
import { Brain } from "lucide-react";

interface ThinkingBlobAltProps {
  size?: number;
}

const ThinkingBlobAlt = ({ size = 256 }: ThinkingBlobAltProps) => {
  const glowSize = size * 0.8125;
  const layer3Size = size * 0.75;
  const layer2Size = size * 0.625;
  const layer1Size = size * 0.5;
  const iconSize = size * 0.14;

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        {/* Outer shadow/glow - transitional olive/sage tone */}
        <motion.div
          className="absolute rounded-full blur-lg"
          style={{
            width: glowSize,
            height: glowSize,
            background: "hsl(50 25% 45% / 0.25)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring (olive to sage gradient - transitional colors) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: layer3Size,
            height: layer3Size,
            background: "linear-gradient(135deg, hsl(50 25% 45%), hsl(100 32% 38%))",
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
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
            rotate: [0, -360],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
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
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Thinking icon with pulsing animation */}
        <motion.div
          className="absolute flex items-center justify-center text-foreground/80"
          animate={{
            opacity: [0.6, 1, 0.6],
            scale: [0.95, 1.05, 0.95],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Brain size={iconSize} strokeWidth={1.5} />
        </motion.div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Thinking
      </span>
    </div>
  );
};

export default ThinkingBlobAlt;
