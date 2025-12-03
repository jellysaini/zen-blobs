import { motion } from "framer-motion";
import { Ear } from "lucide-react";

interface ListeningBlobAltProps {
  size?: number;
}

const ListeningBlobAlt = ({ size = 256 }: ListeningBlobAltProps) => {
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
        {/* Outer shadow/glow */}
        <motion.div
          className="absolute rounded-full blur-lg"
          style={{
            width: glowSize,
            height: glowSize,
            background: "hsl(0 50% 55% / 0.18)",
          }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Ripple effect rings */}
        {[0, 1].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full"
            style={{
              width: layer3Size,
              height: layer3Size,
              border: "1px solid hsl(0 45% 58% / 0.2)",
            }}
            animate={{
              scale: [1, 1.15, 1.25],
              opacity: [0.4, 0.2, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 1,
            }}
          />
        ))}
        
        {/* Layer 3 - Outer ring (softer red gradient, dark top-left to light bottom-right) */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: layer3Size,
            height: layer3Size,
            background: "linear-gradient(135deg, hsl(0 50% 48%), hsl(10 40% 62%))",
            boxShadow: "inset 0 -4px 20px rgba(0,0,0,0.12), inset 0 4px 10px rgba(255,255,255,0.08)",
          }}
          animate={{
            scale: [1, 1.02, 0.99, 1],
          }}
          transition={{
            duration: 2.5,
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
            scale: [1, 1.015, 0.985, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
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
            scale: [1, 1.01, 0.99, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        
        {/* Ear icon */}
        <motion.div
          className="absolute flex items-center justify-center text-foreground/80"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Ear size={iconSize} strokeWidth={1.5} />
        </motion.div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Listening
      </span>
    </div>
  );
};

export default ListeningBlobAlt;
