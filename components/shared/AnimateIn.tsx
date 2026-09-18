"use client";

import { m } from "framer-motion";
import { createContext, useContext, type ReactNode } from "react";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;
const DEFAULT_Y = 16;
const DEFAULT_DURATION = 0.5;
const DEFAULT_STAGGER = 0.08;

const itemVariants = {
  hidden: { opacity: 0, y: DEFAULT_Y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: DEFAULT_DURATION, ease: EASE_OUT },
  },
};

const StaggerContext = createContext(false);

type AnimateInTag = "div" | "section";

type AnimateInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  stagger?: boolean | number;
  as?: AnimateInTag;
  once?: boolean;
  amount?: number;
  id?: string;
};

function AnimateIn({
  children,
  className,
  delay = 0,
  y = DEFAULT_Y,
  duration = DEFAULT_DURATION,
  stagger = false,
  as = "div",
  once = true,
  amount = 0.15,
  id,
}: AnimateInProps) {
  const isStagger = stagger !== false;
  const staggerDelay = typeof stagger === "number" ? stagger : DEFAULT_STAGGER;
  const MotionTag = as === "section" ? m.section : m.div;

  return (
    <StaggerContext.Provider value={isStagger}>
      <MotionTag
        id={id}
        className={className}
        variants={
          isStagger
            ? {
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: staggerDelay,
                    delayChildren: delay,
                  },
                },
              }
            : {
                hidden: { opacity: 0, y },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration, ease: EASE_OUT, delay },
                },
              }
        }
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount, margin: "0px 0px -40px 0px" }}
      >
        {children}
      </MotionTag>
    </StaggerContext.Provider>
  );
}

type AnimateInItemProps = {
  children: ReactNode;
  className?: string;
};

export function AnimateInItem({ children, className }: AnimateInItemProps) {
  const inStagger = useContext(StaggerContext);

  return (
    <m.div
      className={className}
      variants={itemVariants}
      {...(!inStagger
        ? {
            initial: "hidden" as const,
            whileInView: "show" as const,
            viewport: { once: true, amount: 0.15, margin: "0px 0px -40px 0px" },
          }
        : {})}
    >
      {children}
    </m.div>
  );
}

export default AnimateIn;
