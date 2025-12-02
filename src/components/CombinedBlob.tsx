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

  const getStateConfig = () => {
    switch (state) {
      case "idle":
        return {
          outerGlow: "bg-gradient-to-br from-terracotta/20 to-moss/15",
          layer3: "bg-gradient-to-br from-terracotta to-moss/80",
          layer2: "bg-gradient-to-br from-rust/85 to-olive/70",
          layer1: "bg-gradient-to-br from-clay/70 to-sage/55",
          core: "bg-gradient-to-br from-muted/50 to-muted/30",
          glowAnimation: { scale: [1, 1.04, 1], opacity: [0.25, 0.4, 0.25] },
          glowDuration: 4,
          layer3Animation: { scale: [1, 1.015, 0.995, 1] },
          layer3Duration: 5,
          layer2Animation: { scale: [1, 1.012, 0.992, 1] },
          layer2Duration: 5,
          layer1Animation: { scale: [1, 1.008, 0.995, 1] },
          layer1Duration: 5,
          label: "Idle",
        };
      case "talking":
        return {
          outerGlow: "bg-forest/20",
          layer3: "bg-gradient-to-b from-forest to-forest/80",
          layer2: "bg-gradient-to-b from-moss/90 to-olive/80",
          layer1: "bg-gradient-to-b from-sage/70 to-moss/60",
          core: null,
          glowAnimation: { scale: [1, 1.06, 1], opacity: [0.3, 0.45, 0.3] },
          glowDuration: 1.8,
          layer3Animation: { scale: [1, 1.02, 0.99, 1] },
          layer3Duration: 1.5,
          layer2Animation: { scale: [1, 1.025, 0.985, 1] },
          layer2Duration: 1.5,
          layer1Animation: { scale: [1, 1.03, 0.98, 1] },
          layer1Duration: 1.5,
          label: "Talking",
        };
      case "listening":
        return {
          outerGlow: "bg-terracotta/20",
          layer3: "bg-gradient-to-b from-terracotta to-rust/90",
          layer2: "bg-gradient-to-b from-rust/85 to-clay/75",
          layer1: "bg-gradient-to-b from-clay/70 to-rust/50",
          core: null,
          glowAnimation: { scale: [1, 1.05, 1], opacity: [0.3, 0.45, 0.3] },
          glowDuration: 2.5,
          layer3Animation: { scale: [1, 1.02, 0.99, 1] },
          layer3Duration: 2.5,
          layer2Animation: { scale: [1, 1.015, 0.985, 1] },
          layer2Duration: 2.5,
          layer1Animation: { scale: [1, 1.01, 0.99, 1] },
          layer1Duration: 2.5,
          label: "Listening",
        };
    }
  };

  const config = getStateConfig();

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative w-64 h-64 flex items-center justify-center cursor-pointer"
        onClick={cycleState}
      >
        {/* Outer shadow/glow */}
        <motion.div
          className={`absolute w-52 h-52 rounded-full blur-lg ${config.outerGlow}`}
          animate={config.glowAnimation}
          transition={{
            duration: config.glowDuration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          key={`glow-${state}`}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        />

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
                exit={{ opacity: 0 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeOut",
                  delay: index * 1,
                }}
              />
            ))}
        </AnimatePresence>

        {/* Layer 3 - Outer ring */}
        <motion.div
          className={`absolute w-48 h-48 rounded-full ${config.layer3}`}
          style={{
            boxShadow:
              "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={config.layer3Animation}
          transition={{
            duration: config.layer3Duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          layout
        />

        {/* Layer 2 - Middle ring */}
        <motion.div
          className={`absolute w-40 h-40 rounded-full ${config.layer2}`}
          style={{
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
          }}
          animate={config.layer2Animation}
          transition={{
            duration: config.layer2Duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: state === "idle" ? 0.3 : 0.1,
          }}
          layout
        />

        {/* Layer 1 - Inner circle */}
        <motion.div
          className={`absolute w-32 h-32 rounded-full ${config.layer1}`}
          style={{
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
          }}
          animate={config.layer1Animation}
          transition={{
            duration: config.layer1Duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: state === "idle" ? 0.6 : 0.2,
          }}
          layout
        />

        {/* Core for idle state */}
        <AnimatePresence>
          {state === "idle" && config.core && (
            <motion.div
              className={`absolute w-20 h-20 rounded-full ${config.core}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: [0.4, 0.6, 0.4],
                scale: [1, 1.05, 1],
              }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}
        </AnimatePresence>

        {/* Icons for talking and listening */}
        <AnimatePresence mode="wait">
          {state === "talking" && (
            <motion.div
              key="talking-icon"
              className="absolute flex items-center justify-center text-foreground/80"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <AudioLines size={36} strokeWidth={1.5} />
            </motion.div>
          )}
          {state === "listening" && (
            <motion.div
              key="listening-icon"
              className="absolute flex items-center justify-center text-foreground/80"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.7, 1, 0.7],
              }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Ear size={36} strokeWidth={1.5} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.span
        className="text-lg font-medium text-muted-foreground tracking-wide uppercase"
        key={config.label}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {config.label}
      </motion.span>
    </div>
  );
};

export default CombinedBlob;
