import { FC, forwardRef } from 'react';

import { useTheme } from '@emotion/react';
import { Pressable, TextInputProps, View, ViewStyle } from 'react-native';

import * as styled from './styled';

type Variant = 'standard' | 'outlined' | 'outlined-with-button';

type InputProps = TextInputProps & {
  variant?: Variant;
  containerStyle?: ViewStyle;
  label?: string;
  buttonLabel?: string;
  buttonDisabled?: boolean;
  onButtonPress?: () => void;
};

const Input: FC<InputProps> = forwardRef(
  (
    {
      variant = 'standard',
      containerStyle,
      label,
      buttonLabel = 'SEND',
      buttonDisabled = false,
      onButtonPress,
      ...props
    },
    ref: any
  ) => {
    const theme = useTheme();

    if (variant === 'outlined-with-button') {
      return (
        <View style={containerStyle}>
          {label && (
            <styled.Label fontFace='Poppins-Medium'>{label}</styled.Label>
          )}
          <styled.Inner>
            <View style={{ flex: 4 }}>
              <styled.TextInput
                ref={ref}
                placeholderTextColor={theme.colors.darkGray}
                variant={variant}
                {...props}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Pressable disabled={!buttonDisabled} onPress={onButtonPress}>
                {({ pressed }) => (
                  <styled.PressableButton>
                    <styled.ButtonLabel
                      disabled={buttonDisabled}
                      pressed={pressed}
                    >
                      {buttonLabel}
                    </styled.ButtonLabel>
                  </styled.PressableButton>
                )}
              </Pressable>
            </View>
          </styled.Inner>
        </View>
      );
    }

    return (
      <View style={containerStyle}>
        {label && (
          <styled.Label fontFace='Poppins-Medium'>{label}</styled.Label>
        )}
        <styled.TextInput
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
