import styled from '@emotion/native';

import Typo from '@/components/ui/Typo';
import { moderateScale } from '@/utils';

type Variant = 'standard' | 'outlined' | 'outlined-with-button';

export const Inner = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const Label = styled(Typo)`
  font-size: ${moderateScale(14)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 0 0 6px 0;
`;

export const TextInput = styled.TextInput<{ variant: Variant }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.base};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.black};
  min-height: 46px;
  justify-content: center;

  /* border */
  ${({ variant, theme }) =>
    variant === 'standard' &&
    `
      border-bottom-width: ${moderateScale(1.7)}px;
      border-bottom-color: ${theme.colors.mediumGray};
  `}

  ${({ variant, theme }) =>
    variant === 'outlined' &&
    `
     border-radius: 10px;
     border-width: 1px;
     border-color: ${theme.colors.mediumGray};
     padding-left: ${moderateScale(6)}px;
     padding-right: ${moderateScale(6)}px;
  `}

${({ variant }) =>
    variant === 'outlined-with-button' &&
    `
     border-radius: 10px;
     padding-left: ${moderateScale(6)}px;
  `}
`;

export const PressableButton = styled.View`
  align-items: center;
  justify-content: center;
`;

export const ButtonLabel = styled(Typo)<{
  pressed: boolean;
  disabled: boolean;
}>`
  font-family: ${({ theme }) => theme.fonts.base};
  color: ${({ theme }) => theme.colors.lightGray};

  ${({ pressed, theme }) =>
    pressed &&
    `
    color: ${theme.colors.lightGray};
  `}
  ${({ disabled, theme }) =>
    disabled &&
    `
    color: ${theme.colors.blue};
  `}
`;
