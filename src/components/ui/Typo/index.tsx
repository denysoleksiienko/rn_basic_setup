import { FC } from 'react';

import styled from '@emotion/native';
import { TextProps, TextStyle } from 'react-native';

type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

type FontFace =
  | 'Poppins-Bold'
  | 'Poppins-Medium'
  | 'Poppins-Regular'
  | 'Poppins-SemiBold';

interface ITypo extends TextProps {
  color?: string;
  fontSize?: number | string;
  fontFace?: FontFace;
  letterSpacing?: number;
  textAlign?: TextAlign;
  uppercase?: boolean;
  style?: TextStyle;
}

const Typo: FC<ITypo> = styled.Text`
  font-size: ${({ fontSize }) => String(fontSize)}px;
  color: ${({ color, theme }) => color || theme.colors.black};
  text-align: ${({ textAlign }) => textAlign};
  ${({ fontFace, theme }) =>
    fontFace === 'Poppins-Regular' &&
    `
      font-family: ${theme.fonts.base}
    `};
  ${({ fontFace, theme }) =>
    fontFace === 'Poppins-SemiBold' &&
    `
      font-family: ${theme.fonts.semiBold}
    `};
  ${({ fontFace, theme }) =>
    fontFace === 'Poppins-Medium' &&
    `
      font-family: ${theme.fonts.medium}
    `};
  ${({ fontFace, theme }) =>
    fontFace === 'Poppins-Bold' &&
    `
      font-family: ${theme.fonts.bold}
    `};
  ${({ uppercase }) =>
    uppercase &&
    `
      text-transform: uppercase
    `};

  ${({ letterSpacing }) =>
    letterSpacing &&
    `
      letter-spacing: ${Number(letterSpacing)}px;
    `};
`;

Typo.defaultProps = {
  fontSize: 16,
  fontFace: 'Poppins-Regular',
  textAlign: 'left',
};

export default Typo;
