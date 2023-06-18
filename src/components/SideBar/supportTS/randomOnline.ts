export const randomOnline = (): string | undefined => {
  const random = Math.floor(Math.random() * 10);
  if (random >= 6) {
    return "#00FF33";
  } else {
    return "#fffff";
  }
};
