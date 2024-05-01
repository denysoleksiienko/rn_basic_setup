import styled from '@emotion/native';

import theme from '@/theme';
import { moderateScale, verticalScale } from '@/utils';

import Typo from '../Typo';

export const Container = styled.View<{ marginBottom?: number }>`
  margin-bottom: ${({ marginBottom }) =>
    marginBottom ? verticalScale(marginBottom) : 0}px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const Text = styled(Typo)`
  color: ${theme.colors.black};
  font-size: ${String(moderateScale(35))}px;
  line-height: ${String(verticalScale(54))}px;
  letter-spacing: -${(5 * 16) / 100}px;
  padding-right: 6px;
`;

export const Bold = styled(Text)<{
  fontSize?: number;
  lineHeigh?: number;
}>`
  font-family: ${theme.fonts.bold};

  ${({ fontSize }) =>
    fontSize &&
    ` 
    font-size: ${moderateScale(fontSize)}px;
  `}
  ${({ lineHeigh }) =>
    lineHeigh &&
    `
      line-height: ${verticalScale(lineHeigh)}px;
  `}
`;

export const Italic = styled(Text)<{
  fontSize?: number;
  lineHeigh?: number;
}>`
  font-family: ${theme.fonts.semiBold};

  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${moderateScale(Number(fontSize))}px;
  `}
  ${({ lineHeigh }) =>
    lineHeigh &&
    `
    line-height: ${verticalScale(Number(lineHeigh))}px;
  `}
`;
