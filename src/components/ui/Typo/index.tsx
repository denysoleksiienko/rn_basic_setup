import { FC } from 'react';
import type { PropsWithChildren } from 'react';

import styled from '@emotion/native';
import { TextProps, TextStyle } from 'react-native';

import theme from '@/theme';

type FontWeight = 'regular' | 'light' | 'medium' | 'bold';

type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

type FontStyle = 'normal' | 'italic';

interface ITypo extends TextProps {
  color?: string;
  fontSize?: number | string;
  fontStyle?: FontStyle;
  fontWeight?: FontWeight;
  letterSpacing?: number;
  textAlign?: TextAlign;
  uppercase?: boolean;
  style?: TextStyle;
}

const Typo: FC<PropsWithChildren<ITypo>> = ({
  children,
  color = '#000',
  fontSize = 15,
  fontWeight = 'regular',
  letterSpacing = 0,
  textAlign = 'left',
  uppercase = false,
  fontStyle = 'normal',
  ...props
}) => (
  <StyledText
    {...props}
    color={color}
    fontSize={fontSize}
    fontStyle={fontStyle}
    fontWeight={fontWeight}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    uppercase={uppercase}
  >
    {children}
  </StyledText>
);

export default Typo;

const StyledText = styled.Text<ITypo>`
  ${({ fontWeight }) =>
    fontWeight === 'regular' &&
    `
      font-family: ${theme.fonts.base}
    `};

  ${({ fontWeight }) =>
    fontWeight === 'light' &&
    `
      font-family: ${theme.fonts.semiBold}
    `};

  ${({ fontWeight }) =>
    fontWeight === 'medium' &&
    `
      font-family: ${theme.fonts.medium}
    `};

  ${({ fontWeight }) =>
    fontWeight === 'bold' &&
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
