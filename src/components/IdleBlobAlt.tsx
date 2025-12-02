import { motion } from "framer-motion";

const IdleBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Floating particles */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute w-3 h-3 rounded-full bg-terracotta/40"
            style={{
              left: `${35 + index * 10}%`,
              top: `${30 + (index % 2) * 40}%`,
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
          className="absolute w-52 h-52 rounded-full border border-terracotta/20"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main blob body */}
        <motion.div
          className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-terracotta/60 to-rust/50"
          style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.15), inset 0 4px 20px rgba(255,255,255,0.1)",
          }}
          animate={{
            scale: [1, 1.03, 0.98, 1],
            borderRadius: ["50%", "48% 52% 50% 50%", "52% 48% 50% 50%", "50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Inner highlight */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-clay/50 to-transparent"
          style={{
            transform: "translate(-10%, -10%)",
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Core center */}
        <motion.div
          className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-rust/40 to-terracotta/30"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
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

export default IdleBlobAlt;
