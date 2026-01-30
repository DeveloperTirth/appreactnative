export const scaleIn = {
  from: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { type: "spring" as const, stiffness: 150 },
};

export const scaleOut = {
  from: { scale: 1, opacity: 1 },
  animate: { scale: 0.8, opacity: 0 },
  transition: { type: "timing", duration: 200 },
};
