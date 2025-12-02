import { motion } from "framer-motion";

const IdleBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Floating particles */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-terracotta/40"
            style={{
              left: `${35 + index * 15}%`,
              top: `${30 + index * 10}%`,
            }}
            animate={{
              y: [0, -15, 0],
              x: [0, index % 2 === 0 ? 8 : -8, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.4,
            }}
          />
        ))}
        
        {/* Outer glow ring */}
        <motion.div
          className="absolute w-52 h-52 rounded-full"
          style={{
            background: "radial-gradient(circle, transparent 50%, hsl(var(--terracotta) / 0.15) 70%, transparent 100%)",
          }}
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Main blob */}
        <motion.div
          className="absolute w-44 h-44 rounded-full bg-gradient-to-b from-terracotta to-rust"
          style={{
            boxShadow: "inset 0 -6px 25px rgba(0,0,0,0.2), inset 0 6px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.03, 0.98, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Middle layer */}
        <motion.div
          className="absolute w-36 h-36 rounded-full bg-gradient-to-b from-rust/80 to-clay/70"
          style={{
            boxShadow: "inset 0 3px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.025, 0.985, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.15,
          }}
        />
        
        {/* Inner core */}
        <motion.div
          className="absolute w-28 h-28 rounded-full bg-gradient-to-b from-clay/60 to-terracotta/50"
          style={{
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
          }}
          animate={{
            scale: [1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
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
