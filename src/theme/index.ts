import colors from './colors';
import opacity from './opacity';
import space from './space';
import typography from './typography';

type Colors = typeof colors;
export type MyTheme = typeof theme;
export type ColorName = keyof Colors;
export type ColorValue = Colors[ColorName];

const theme = {
  colors,
  opacity,
  space,
  ...typography,
};

export default theme;
