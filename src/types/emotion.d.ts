import '@emotion/react';

import { MyTheme } from '@/theme';

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}

declare module '@emotion/native' {
  export type Scale = keyof MyTheme['space'];
  export type Sizes = keyof MyTheme['fontSizes'] | keyof MyTheme['lineHeight'];
}
