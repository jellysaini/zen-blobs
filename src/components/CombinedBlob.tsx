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

  // Animation configs per state
  const stateAnimations = {
    idle: {
      glow: { scale: [1, 1.04, 1], opacity: [0.25, 0.4, 0.25] },
      glowDuration: 4,
      layer3: { scale: [1, 1.015, 0.995, 1] },
      layer3Duration: 5,
      layer2: { scale: [1, 1.012, 0.992, 1] },
      layer2Duration: 5,
      layer2Delay: 0.3,
      layer1: { scale: [1, 1.008, 0.995, 1] },
      layer1Duration: 5,
      layer1Delay: 0.6,
    },
    talking: {
      glow: { scale: [1, 1.06, 1], opacity: [0.3, 0.45, 0.3] },
      glowDuration: 1.8,
      layer3: { scale: [1, 1.02, 0.99, 1] },
      layer3Duration: 1.5,
      layer2: { scale: [1, 1.025, 0.985, 1] },
      layer2Duration: 1.5,
      layer2Delay: 0.1,
      layer1: { scale: [1, 1.03, 0.98, 1] },
      layer1Duration: 1.5,
      layer1Delay: 0.2,
    },
    listening: {
      glow: { scale: [1, 1.05, 1], opacity: [0.3, 0.45, 0.3] },
      glowDuration: 2.5,
      layer3: { scale: [1, 1.02, 0.99, 1] },
      layer3Duration: 2.5,
      layer2: { scale: [1, 1.015, 0.985, 1] },
      layer2Duration: 2.5,
      layer2Delay: 0.15,
      layer1: { scale: [1, 1.01, 0.99, 1] },
      layer1Duration: 2.5,
      layer1Delay: 0.3,
    },
  };

  const anim = stateAnimations[state];

  return (
    <div className="flex flex-col items-center gap-6">
      <div
        className="relative w-64 h-64 flex items-center justify-center cursor-pointer"
        onClick={cycleState}
      >
        {/* Outer shadow/glow - with color transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`glow-${state}`}
            className="absolute w-52 h-52 rounded-full blur-lg"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              background:
                state === "idle"
                  ? "linear-gradient(to bottom right, hsl(var(--terracotta) / 0.2), hsl(var(--moss) / 0.15))"
                  : state === "talking"
                  ? "hsl(var(--forest) / 0.2)"
                  : "hsl(var(--terracotta) / 0.2)",
              ...anim.glow,
            }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.6, ease: "easeInOut" },
              background: { duration: 0.6, ease: "easeInOut" },
              scale: { duration: anim.glowDuration, repeat: Infinity, ease: "easeInOut" },
            }}
          />
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

        {/* Layer 3 - Outer ring */}
        <motion.div
          className="absolute w-48 h-48 rounded-full"
          style={{
            boxShadow:
              "inset 0 -4px 20px rgba(0,0,0,0.15), inset 0 4px 10px rgba(255,255,255,0.1)",
          }}
          animate={{
            background:
              state === "idle"
                ? "linear-gradient(to bottom right, hsl(var(--terracotta)), hsl(var(--moss) / 0.8))"
                : state === "talking"
                ? "linear-gradient(to bottom, hsl(var(--forest)), hsl(var(--forest) / 0.8))"
                : "linear-gradient(to bottom, hsl(var(--terracotta)), hsl(var(--rust) / 0.9))",
            ...anim.layer3,
          }}
          transition={{
            background: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: anim.layer3Duration, repeat: Infinity, ease: "easeInOut" },
          }}
        />

        {/* Layer 2 - Middle ring */}
        <motion.div
          className="absolute w-40 h-40 rounded-full"
          style={{
            boxShadow: "inset 0 2px 15px rgba(255,255,255,0.1)",
          }}
          animate={{
            background:
              state === "idle"
                ? "linear-gradient(to bottom right, hsl(var(--rust) / 0.85), hsl(var(--olive) / 0.7))"
                : state === "talking"
                ? "linear-gradient(to bottom, hsl(var(--moss) / 0.9), hsl(var(--olive) / 0.8))"
                : "linear-gradient(to bottom, hsl(var(--rust) / 0.85), hsl(var(--clay) / 0.75))",
            ...anim.layer2,
          }}
          transition={{
            background: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: anim.layer2Duration, repeat: Infinity, ease: "easeInOut", delay: anim.layer2Delay },
          }}
        />

        {/* Layer 1 - Inner circle */}
        <motion.div
          className="absolute w-32 h-32 rounded-full"
          style={{
            boxShadow: "inset 0 2px 10px rgba(255,255,255,0.15)",
          }}
          animate={{
            background:
              state === "idle"
                ? "linear-gradient(to bottom right, hsl(var(--clay) / 0.7), hsl(var(--sage) / 0.55))"
                : state === "talking"
                ? "linear-gradient(to bottom, hsl(var(--sage) / 0.7), hsl(var(--moss) / 0.6))"
                : "linear-gradient(to bottom, hsl(var(--clay) / 0.7), hsl(var(--rust) / 0.5))",
            ...anim.layer1,
          }}
          transition={{
            background: { duration: 0.6, ease: "easeInOut" },
            scale: { duration: anim.layer1Duration, repeat: Infinity, ease: "easeInOut", delay: anim.layer1Delay },
          }}
        />

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
              initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                rotate: 0,
              }}
              exit={{ opacity: 0, scale: 0.3, rotate: 10 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 1.2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.4 },
              }}
            >
              <AudioLines size={36} strokeWidth={1.5} />
            </motion.div>
          )}
          {state === "listening" && (
            <motion.div
              key="listening-icon"
              className="absolute flex items-center justify-center text-foreground/80"
              initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
              animate={{
                opacity: 1,
                scale: [1, 1.05, 1],
                rotate: 0,
              }}
              exit={{ opacity: 0, scale: 0.3, rotate: 10 }}
              transition={{
                opacity: { duration: 0.4 },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 0.4 },
              }}
            >
              <Ear size={36} strokeWidth={1.5} />
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
