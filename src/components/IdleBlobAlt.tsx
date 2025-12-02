import { motion } from "framer-motion";

const IdleBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Rotating outer ring */}
        <motion.div
          className="absolute w-52 h-52 rounded-full"
          style={{
            background: "conic-gradient(from 0deg, hsl(var(--crimson) / 0.4), hsl(var(--forest) / 0.4), hsl(var(--crimson) / 0.4))",
            filter: "blur(8px)",
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Main blob with gradient */}
        <motion.div
          className="absolute w-44 h-44 rounded-full overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(var(--crimson)), hsl(var(--burgundy)) 30%, hsl(var(--sage)) 70%, hsl(var(--forest)))",
            boxShadow: "inset 0 -6px 30px rgba(0,0,0,0.2), inset 0 6px 20px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner gradient layer */}
        <motion.div
          className="absolute w-36 h-36 rounded-full"
          style={{
            background: "linear-gradient(135deg, hsl(var(--rose) / 0.7), hsl(var(--moss) / 0.7))",
            boxShadow: "inset 0 2px 20px rgba(255,255,255,0.15)",
          }}
          animate={{
            scale: [1, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        
        {/* Core with soft breathing */}
        <motion.div
          className="absolute w-28 h-28 rounded-full"
          style={{
            background: "radial-gradient(circle at 40% 40%, hsl(var(--burgundy) / 0.5), hsl(var(--sage) / 0.4))",
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [0.95, 1.05, 0.95],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 3,
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
