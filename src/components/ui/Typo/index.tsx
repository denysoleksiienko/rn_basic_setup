import { FC } from 'react';
import type { PropsWithChildren } from 'react';

import styled from '@emotion/native';
import { TextProps, TextStyle } from 'react-native';

import theme from '@/theme';

// type FontWeight = 'regular' | 'light' | 'medium' | 'bold';

type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

type FontStyle =
  | 'Poppins-Bold'
  | 'Poppins-Medium'
  | 'Poppins-Regular'
  | 'Poppins-SemiBold';

interface ITypo extends TextProps {
  color?: string;
  fontSize?: number | string;
  fontStyle?: FontStyle;
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
  fontStyle = 'Poppins-Regular',
  ...props
}) => (
  <StyledText
    {...props}
    color={color}
    fontSize={fontSize}
    fontStyle={fontStyle}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    uppercase={uppercase}
  >
    {children}
  </StyledText>
);

export default Typo;

const StyledText = styled.Text<ITypo>`
  ${({ fontStyle }) =>
    fontStyle === 'Poppins-Regular' &&
    `
      font-family: ${theme.fonts.base}
    `};

  ${({ fontStyle }) =>
    fontStyle === 'Poppins-SemiBold' &&
    `
      font-family: ${theme.fonts.semiBold}
    `};

  ${({ fontStyle }) =>
    fontStyle === 'Poppins-Medium' &&
    `
      font-family: ${theme.fonts.medium}
    `};

  ${({ fontStyle }) =>
    fontStyle === 'Poppins-Bold' &&
    `
      font-family: ${theme.fonts.bold}
    `};
  font-size: ${({ fontSize }) => String(fontSize)}px;
  font-style: ${({ fontStyle }) => fontStyle};
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};

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
