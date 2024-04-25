import colors from './colors';
import opacity from './opacity';
import space from './space';
import typography from './typography';

const theme = {
  colors,
  opacity,
  space,
  ...typography,
};

export type MyTheme = typeof theme;

export default theme;
