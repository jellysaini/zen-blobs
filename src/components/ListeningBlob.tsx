import { motion } from "framer-motion";

const ListeningBlob = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Ripple rings - receptive animation */}
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className="absolute rounded-full border border-moss/40"
            style={{
              width: 160 - index * 20,
              height: 160 - index * 20,
            }}
            animate={{
              scale: [1, 0.95, 1.02, 1],
              opacity: [0.4, 0.6, 0.5, 0.4],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          />
        ))}
        
        {/* Outer glow */}
        <motion.div
          className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-moss/20 to-forest/15 blur-xl"
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main blob */}
        <motion.div
          className="relative w-40 h-40"
          animate={{
            scale: [1, 0.98, 1.02, 1],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="listeningGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--moss))" />
                <stop offset="50%" stopColor="hsl(var(--forest))" />
                <stop offset="100%" stopColor="hsl(var(--olive))" />
              </linearGradient>
              <filter id="listeningGlow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              fill="url(#listeningGradient)"
              filter="url(#listeningGlow)"
              animate={{
                d: [
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                  "M100,25 C138,25 175,62 175,100 C175,138 138,175 100,175 C62,175 25,138 25,100 C25,62 62,25 100,25",
                  "M100,22 C140,22 178,60 178,100 C178,140 140,178 100,178 C60,178 22,140 22,100 C22,60 60,22 100,22",
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
        
        {/* Focus indicator - ear-like symbol */}
        <motion.div
          className="absolute w-24 h-24 flex items-center justify-center"
          animate={{
            opacity: [0.6, 0.9, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 24 24" className="w-8 h-8 text-foreground/70">
            <motion.path
              fill="currentColor"
              d="M12 1C7.03 1 3 5.03 3 10v4c0 1.1.9 2 2 2h1v-6c0-3.31 2.69-6 6-6s6 2.69 6 6v6h1c1.1 0 2-.9 2-2v-4c0-4.97-4.03-9-9-9z"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
        
        {/* Incoming sound waves */}
        <div className="absolute -left-4 flex flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-8 h-0.5 rounded-full bg-gradient-to-r from-moss/60 to-transparent"
              animate={{
                x: [0, 20, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
        
        <div className="absolute -right-4 flex flex-col gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-8 h-0.5 rounded-full bg-gradient-to-l from-moss/60 to-transparent"
              animate={{
                x: [0, -20, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
            />
          ))}
        </div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Listening
      </span>
    </div>
  );
};

export default ListeningBlob;
