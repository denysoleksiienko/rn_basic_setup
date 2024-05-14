import { FC } from 'react';
import type { PropsWithChildren } from 'react';

import styled from '@emotion/native';
import { TextProps, TextStyle } from 'react-native';

type FontFace =
  | 'Poppins-Bold'
  | 'Poppins-Medium'
  | 'Poppins-Regular'
  | 'Poppins-SemiBold';

interface ITypo {
  fontFace?: FontFace;
  color?: string;
  fontSize?: TextStyle['fontSize'];
  letterSpacing?: TextStyle['letterSpacing'];
  textAlign?: TextStyle['textAlign'];
  textTransform?: TextStyle['textTransform'];
  fontWeight?: TextStyle['fontWeight'];
}

const Typo: FC<PropsWithChildren<TextProps & ITypo>> = ({
  children,
  color = '#000',
  fontSize = 15,
  letterSpacing = 0,
  textAlign = 'left',
  textTransform = 'none',
  fontFace = 'Poppins-Regular',
  fontWeight = 'normal',
  ...props
}) => (
  <StyledText
    color={color}
    fontFace={fontFace}
    fontSize={fontSize}
    fontWeight={fontWeight}
    letterSpacing={letterSpacing}
    textAlign={textAlign}
    textTransform={textTransform}
    {...props}
  >
    {children}
  </StyledText>
);

export default Typo;

const StyledText = styled.Text<ITypo>`
  font-size: ${({ fontSize }) => String(fontSize)}px;
  color: ${({ color, theme }) => color || theme.colors.black};
  text-align: ${({ textAlign }) => textAlign};

  font-weight: ${({ fontWeight }) => fontWeight};

  ${({ fontFace, theme }) => {
    switch (fontFace) {
      case 'Poppins-Regular':
        return `font-family: ${theme.fonts.base};`;
      case 'Poppins-SemiBold':
        return `font-family: ${theme.fonts.semiBold};`;
      case 'Poppins-Medium':
        return `font-family: ${theme.fonts.medium};`;
      case 'Poppins-Bold':
        return `font-family: ${theme.fonts.bold};`;
      default:
        return `font-family: ${theme.fonts.base};`;
    }
  }};
  ${({ textTransform }) =>
    textTransform &&
    `
      text-transform: ${textTransform}
    `};

  ${({ letterSpacing }) =>
    letterSpacing &&
    `
      letter-spacing: ${letterSpacing}px;
    `};
`;
