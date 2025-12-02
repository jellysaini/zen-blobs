import { motion } from "framer-motion";

const IdleBlobAlt = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Outer layer - subtle shadow */}
        <motion.div
          className="absolute w-52 h-52 rounded-full bg-gradient-to-br from-terracotta/40 to-moss/30 blur-md"
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 3 - Outer ring */}
        <motion.div
          className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-terracotta/70 to-moss/60"
          style={{
            boxShadow: "inset 0 4px 20px rgba(0,0,0,0.1)",
          }}
          animate={{
            scale: [1, 1.02, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Layer 2 - Middle ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-rust/60 to-olive/50"
          style={{
            boxShadow: "inset 0 2px 15px rgba(0,0,0,0.08)",
          }}
          animate={{
            scale: [1, 1.015, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.3,
          }}
        />
        
        {/* Layer 1 - Inner circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-clay/50 to-sage/40"
          style={{
            boxShadow: "inset 0 2px 10px rgba(0,0,0,0.05)",
          }}
          animate={{
            scale: [1, 1.01, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.6,
          }}
        />
        
        {/* Core - Soft glow center */}
        <motion.div
          className="absolute w-24 h-24 rounded-full bg-gradient-to-br from-muted/60 to-muted/40"
          animate={{
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 4,
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
