import colors from './colors';
import opacity from './opacity';
import space from './space';
import typography from './typography';

type Colors = typeof colors;

const theme = {
  colors,
  opacity,
  space,
  ...typography,
};

export type MyTheme = typeof theme;
export type ColorName = keyof Colors;
export type ColorValue = Colors[ColorName];

export default theme;
