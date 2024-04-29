import { FC } from 'react';
import type { PropsWithChildren } from 'react';

import styled from '@emotion/native';
import { TextProps, TextStyle } from 'react-native';

import theme from '@/theme';

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

const Typo: FC<PropsWithChildren<ITypo>> = ({
  children,
  color = '#000',
  fontSize = 15,
  letterSpacing = 0,
  textAlign = 'left',
  uppercase = false,
  fontFace = 'Poppins-Regular',
  ...props
}) => (
  <StyledText
    color={color}
    fontFace={fontFace}
    fontSize={fontSize}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    uppercase={uppercase}
    {...props}
  >
    {children}
  </StyledText>
);

export default Typo;

const StyledText = styled.Text<ITypo>`
  font-size: ${({ fontSize }) => String(fontSize)}px;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  ${({ fontFace }) =>
    fontFace === 'Poppins-Regular' &&
    `
      font-family: ${theme.fonts.base}
    `};
  ${({ fontFace }) =>
    fontFace === 'Poppins-SemiBold' &&
    `
      font-family: ${theme.fonts.semiBold}
    `};
  ${({ fontFace }) =>
    fontFace === 'Poppins-Medium' &&
    `
      font-family: ${theme.fonts.medium}
    `};
  ${({ fontFace }) =>
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
