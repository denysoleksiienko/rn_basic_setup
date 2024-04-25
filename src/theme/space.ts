const scale = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
} as const;

export default {
  ...scale,
  px: Object.keys(scale).reduce(
    (prev, next) => {
      // eslint-disable-next-line no-param-reassign
      prev[next as keyof typeof scale] =
        `${scale[next as keyof typeof scale]}px`;
      return prev;
    },
    {} as Record<keyof typeof scale, string>,
  ),
};
