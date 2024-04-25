export type Sizes = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

const typography = {
  fonts: {
    /* Select font by platform */
    /* base: Platform.select({ ios: '', android: '', }) */

    base: 'Poppins-Regular',
    bold: 'Poppins-Bold',
    medium: 'Poppins-Medium',
    semiBold: 'Poppins-SemiBold',
  },
  fontSizes: {},
  lineHeight: {},
} as const;

export default typography;
