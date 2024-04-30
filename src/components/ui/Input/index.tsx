import { FC, forwardRef } from 'react';

import styled from '@emotion/native';
import { useTheme } from '@emotion/react';
import { TextInputProps, View, ViewStyle } from 'react-native';

import Typo from '@/components/ui/Typo';
import { moderateScale } from '@/utils';

type Variant = 'standard' | 'outlined';

type InputProps = TextInputProps & {
  variant?: Variant;
  containerStyle?: ViewStyle;
  label?: string;
};

const Input: FC<InputProps> = forwardRef(
  ({ variant = 'standard', containerStyle, label, ...props }, ref: any) => {
    const theme = useTheme();

    return (
      <View style={containerStyle}>
        {label && <Label fontFace='Poppins-Medium'>{label}</Label>}
        <TextInput
          ref={ref}
          placeholderTextColor={theme.colors.darkGray}
          variant={variant}
          {...props}
        />
      </View>
    );
  }
);

export default Input;

export const Label = styled(Typo)`
  font-size: ${moderateScale(14)}px;
  color: ${({ theme }) => theme.colors.darkGray};
  padding: 0 0 6px 0;
`;

const TextInput = styled.TextInput<{ variant: Variant }>`
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
`;
