export const slideUp = {
  from: { translateY: 40, opacity: 0 },
  animate: { translateY: 0, opacity: 1 },
  transition: { type: "spring", damping: 15 },
};

export const slideRight = {
  from: { translateX: -40, opacity: 0 },
  animate: { translateX: 0, opacity: 1 },
  transition: { type: "spring", damping: 15 },
};
