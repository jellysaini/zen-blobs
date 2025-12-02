import { motion } from "framer-motion";

const TalkingBlob = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="relative w-64 h-64 flex items-center justify-center">
        {/* Sound wave rings */}
        {[0, 1, 2].map((index) => (
          <motion.div
            key={index}
            className="absolute w-48 h-48 rounded-full border-2 border-sage/30"
            animate={{
              scale: [1, 1.5, 1.8],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: index * 0.4,
            }}
          />
        ))}
        
        {/* Outer glow */}
        <motion.div
          className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-sage/25 to-olive/15 blur-lg"
          animate={{
            scale: [1, 1.08, 0.97, 1],
            opacity: [0.5, 0.65, 0.5, 0.5],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Main blob */}
        <motion.div
          className="relative w-40 h-40"
          animate={{
            scale: [1, 1.05, 0.98, 1.03, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <defs>
              <linearGradient id="talkingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--sage))" />
                <stop offset="50%" stopColor="hsl(var(--olive))" />
                <stop offset="100%" stopColor="hsl(var(--moss))" />
              </linearGradient>
              <filter id="talkingGlow">
                <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              fill="url(#talkingGradient)"
              filter="url(#talkingGlow)"
              animate={{
                d: [
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                  "M100,30 C150,25 175,65 175,100 C175,135 150,175 100,170 C50,175 25,135 25,100 C25,65 50,25 100,30",
                  "M100,25 C145,35 170,55 170,100 C170,145 145,165 100,175 C55,165 30,145 30,100 C30,55 55,35 100,25",
                  "M100,35 C155,30 180,70 180,100 C180,130 155,170 100,165 C45,170 20,130 20,100 C20,70 45,30 100,35",
                  "M100,20 C140,20 180,60 180,100 C180,140 140,180 100,180 C60,180 20,140 20,100 C20,60 60,20 100,20",
                ],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
        
        {/* Voice indicator bars - centered */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex gap-1.5 items-center">
            {[0, 1, 2, 3, 4].map((index) => (
              <motion.div
                key={index}
                className="w-1.5 rounded-full bg-gradient-to-t from-sage to-olive"
                animate={{
                  height: [8, 20, 12, 24, 8],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.15,
                }}
              />
            ))}
          </div>
        </div>
      </div>
      
      <span className="text-lg font-medium text-muted-foreground tracking-wide uppercase">
        Talking
      </span>
    </div>
  );
};

export default TalkingBlob;
