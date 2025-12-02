import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AudioLines, Ear } from "lucide-react";

type BlobState = "idle" | "talking" | "listening";

const CombinedBlob = () => {
  const [state, setState] = useState<BlobState>("idle");

  const cycleState = () => {
    setState((prev) => {
      if (prev === "idle") return "talking";
      if (prev === "talking") return "listening";
      return "idle";
    });
  };

  // Color configs per state
  const stateColors = {
    idle: {
      glow: "bg-gradient-to-br from-terracotta/20 to-moss/15",
      layer3: "bg-gradient-to-br from-terracotta to-moss/80",
      layer2: "bg-gradient-to-br from-rust/85 to-olive/70",
      layer1: "bg-gradient-to-br from-clay/70 to-sage/55",
    },
    talking: {
      glow: "bg-forest/20",
      layer3: "bg-gradient-to-b from-forest to-forest/80",
      layer2: "bg-gradient-to-b from-moss/90 to-olive/80",
      layer1: "bg-gradient-to-b from-sage/70 to-moss/60",
    },
    listening: {
      glow: "bg-terracotta/20",
      layer3: "bg-gradient-to-b from-terracotta to-rust/90",
      layer2: "bg-gradient-to-b from-rust/85 to-clay/75",
      layer1: "bg-gradient-to-b from-clay/70 to-rust/50",
    },
  };

  // Animation configs per state
  const stateAnimations = {
    idle: {
      glowAnim: { scale: [1, 1.04, 1], opacity: [0.25, 0.4, 0.25] },
      glowDuration: 4,
      layer3Anim: { scale: [1, 1.015, 0.995, 1] },
      layer3Duration: 5,
      layer2Anim: { scale: [1, 1.012, 0.992, 1] },
      layer2Duration: 5,
      layer2Delay: 0.3,
      layer1Anim: { scale: [1, 1.008, 0.995, 1] },
      layer1Duration: 5,
      layer1Delay: 0.6,
    },
    talking: {
      glowAnim: { scale: [1, 1.06, 1], opacity: [0.3, 0.45, 0.3] },
      glowDuration: 1.8,
      layer3Anim: { scale: [1, 1.02, 0.99, 1] },
      layer3Duration: 1.5,
      layer2Anim: { scale: [1, 1.025, 0.985, 1] },
      layer2Duration: 1.5,
      layer2Delay: 0.1,
      layer1Anim: { scale: [1, 1.03, 0.98, 1] },
      layer1Duration: 1.5,
      layer1Delay: 0.2,
    },
    listening: {
      glowAnim: { scale: [1, 1.05, 1], opacity: [0.3, 0.45, 0.3] },
      glowDuration: 2.5,
      layer3Anim: { scale: [1, 1.02, 0.99, 1] },
      layer3Duration: 2.5,
      layer2Anim: { scale: [1, 1.015, 0.985, 1] },
      layer2Duration: 2.5,
      layer2Delay: 0.15,
      layer1Anim: { scale: [1, 1.01, 0.99, 1] },
      layer1Duration: 2.5,
      layer1Delay: 0.3,
    },
  };

  const colors = stateColors[state];
  const anim = stateAnimations[state];

  // Wipe transition variants
  const wipeVariants = {
    initial: { 
      clipPath: "circle(0% at 50% 50%)",
      opacity: 1,
    },
    animate: { 
      clipPath: "circle(100% at 50% 50%)",
      opacity: 1,
    },
    exit: { 
      clipPath: "circle(100% at 50% 50%)",
      opacity: 0,
    },
  };

  const wipeTransition = {
    clipPath: { duration: 0.6, ease: "easeInOut" as const },
    opacity: { duration: 0.3, delay: 0.3 },
  };

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative w-64 h-64 flex items-center justify-center cursor-pointer"
        onClick={cycleState}
      >
        {/* Outer shadow/glow with wipe */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${state}`}
            className={`absolute w-52 h-52 rounded-full blur-lg ${colors.glow}`}
            variants={wipeVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={wipeTransition}
          >
            <motion.div
              className="w-full h-full"
              animate={anim.glowAnim}
              transition={{
                duration: anim.glowDuration,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </AnimatePresence>

        {/* Ripple effects for listening */}
        <AnimatePresence>
          {state === "listening" &&
            [0, 1].map((index) => (
              <motion.div
                key={`ripple-${index}`}
                className="absolute w-48 h-48 rounded-full border border-terracotta/25"
                initial={{ scale: 1, opacity: 0 }}
                animate={{
                  scale: [1, 1.15, 1.25],
                  opacity: [0.4, 0.2, 0],
                }}
                exit={{ scale: 1.3, opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: index * 1,
                }}
              />
            ))}
        </AnimatePresence>

        {/* Layer 3 - Outer ring with wipe */}
        <div className="absolute w-48 h-48 rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`layer3-${state}`}
              className={`absolute inset-0 rounded-full ${colors.layer3}`}
              style={{
                boxShadow:
                  "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
              }}
              variants={wipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={wipeTransition}
            />
          </AnimatePresence>
          <motion.div
            className="absolute inset-0"
            animate={anim.layer3Anim}
            transition={{
              duration: anim.layer3Duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Layer 2 - Middle ring with wipe */}
        <div className="absolute w-40 h-40 rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`layer2-${state}`}
              className={`absolute inset-0 rounded-full ${colors.layer2}`}
              style={{
                boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
              }}
              variants={wipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                ...wipeTransition,
                clipPath: { duration: 0.6, ease: "easeInOut" as const, delay: 0.05 },
              }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute inset-0"
            animate={anim.layer2Anim}
            transition={{
              duration: anim.layer2Duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: anim.layer2Delay,
            }}
          />
        </div>

        {/* Layer 1 - Inner circle with wipe */}
        <div className="absolute w-32 h-32 rounded-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={`layer1-${state}`}
              className={`absolute inset-0 rounded-full ${colors.layer1}`}
              style={{
                boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
              }}
              variants={wipeVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{
                ...wipeTransition,
                clipPath: { duration: 0.6, ease: "easeInOut" as const, delay: 0.1 },
              }}
            />
          </AnimatePresence>
          <motion.div
            className="absolute inset-0"
            animate={anim.layer1Anim}
            transition={{
              duration: anim.layer1Duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: anim.layer1Delay,
            }}
          />
        </div>

        {/* Core for idle state */}
        <AnimatePresence>
          {state === "idle" && (
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-gradient-to-br from-muted/50 to-muted/30"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.05, 1],
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        {/* Icons with smooth transitions */}
        <AnimatePresence mode="wait">
          {state === "talking" && (
            <motion.div
              key="talking-icon"
              className="absolute flex items-center justify-center text-foreground/80"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <AudioLines size={36} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          )}
          {state === "listening" && (
            <motion.div
              key="listening-icon"
              className="absolute flex items-center justify-center text-foreground/80"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <motion.div
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
                <Ear size={36} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence mode="wait">
        <motion.span
          key={state}
          className="text-lg font-medium text-muted-foreground tracking-wide uppercase"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {state === "idle" ? "Idle" : state === "talking" ? "Talking" : "Listening"}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default CombinedBlob;
