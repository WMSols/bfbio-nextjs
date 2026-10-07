"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type StatCounterProps = {
  value: string;
  className?: string;
  durationMs?: number;
};

function parseStatValue(value: string) {
  const match = value.trim().match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { target: 0, suffix: value, decimals: 0 };
  }

  const numeric = match[1];
  const suffix = match[2] ?? "";
  const decimals = numeric.includes(".") ? numeric.split(".")[1].length : 0;

  return {
    target: Number(numeric),
    suffix,
    decimals,
  };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

export default function StatCounter({
  value,
  className,
  durationMs = 1600,
}: StatCounterProps) {
  const { target, suffix, decimals } = parseStatValue(value);
  const [display, setDisplay] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setHasStarted(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const next = target * easeOutCubic(progress);
      setDisplay(next);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [durationMs, hasStarted, target]);

  const formatted =
    decimals > 0 ? display.toFixed(decimals) : Math.round(display).toString();

  return (
    <span ref={ref} className={cn(className)}>
      {formatted}
      {suffix}
    </span>
  );
}
