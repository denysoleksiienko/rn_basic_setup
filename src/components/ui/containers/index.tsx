import React, { FC } from 'react';
import type { PropsWithChildren } from 'react';

import { ImageBackgroundProps, View } from 'react-native';
import {
  Edge,
  SafeAreaView as DefaultSafeAreaView,
} from 'react-native-safe-area-context';

import {
  KeyboardAvoidingView,
  KeyboardAvoidingViewProps,
  AwareScrollView,
  AwareScrollViewProps,
} from '@/components/keyboard-controllers';
import theme, { ColorName } from '@/theme';
import { moderateScale } from '@/utils';

import * as styled from './styled';

type SafeAreaViewProps = {
  safeTop?: boolean;
  safeBottom?: boolean;
  backgroundColor?: ColorName;
};

type SafeAreaKeyboardAvoidingViewProps = SafeAreaViewProps &
  KeyboardAvoidingViewProps;

type SafeAreaAwareScrollViewProps = SafeAreaViewProps & AwareScrollViewProps;

type SafeAreaImageBackgroundViewProps = {
  imageBackgroundProps: ImageBackgroundProps;
} & SafeAreaKeyboardAvoidingViewProps;

const SafeAreaView: FC<PropsWithChildren<SafeAreaViewProps>> = ({
  safeTop,
  safeBottom = true,
  children,
}) => {
  const edges: Edge[] = [];

  if (safeBottom) {
    edges.push('bottom');
  }

  if (safeTop) {
    edges.push('top');
  }

  return (
    <DefaultSafeAreaView edges={edges} style={{ flex: 1 }}>
      {children}
    </DefaultSafeAreaView>
  );
};

export const SafeAreaViewContainer: FC<
  PropsWithChildren<SafeAreaKeyboardAvoidingViewProps>
> = ({
  children,
  safeTop,
  safeBottom = true,
  backgroundColor = 'white',
  style,
  ...props
}) => (
  <View
    style={[
      {
        flex: 1,
        backgroundColor: theme.colors[backgroundColor],
      },
      style,
    ]}
    {...props}
  >
    <SafeAreaView safeBottom={safeBottom} safeTop={safeTop}>
      {children}
    </SafeAreaView>
  </View>
);

export const KeyboardAvoidingViewContainer: FC<
  PropsWithChildren<SafeAreaKeyboardAvoidingViewProps>
> = ({
  children,
  safeTop,
  safeBottom = true,
  backgroundColor = 'white',
  style,
  ...props
}) => (
  <KeyboardAvoidingView
    style={[
      {
        flex: 1,
        backgroundColor: theme.colors[backgroundColor],
        paddingHorizontal: moderateScale(16),
      },
      style,
    ]}
    {...props}
  >
    <SafeAreaView safeBottom={safeBottom} safeTop={safeTop}>
      {children}
    </SafeAreaView>
  </KeyboardAvoidingView>
);

export const KeyboardAwareScrollViewContainer: FC<
  PropsWithChildren<SafeAreaAwareScrollViewProps>
> = ({
  children,
  safeTop,
  safeBottom,
  backgroundColor = 'white',
  contentContainerStyle,
  ...props
}) => (
  <AwareScrollView
    contentContainerStyle={[
      {
        flexGrow: 1,
        backgroundColor: theme.colors[backgroundColor],
        paddingHorizontal: moderateScale(16),
      },
      contentContainerStyle,
    ]}
    {...props}
  >
    <SafeAreaView safeBottom={safeBottom} safeTop={safeTop}>
      {children}
    </SafeAreaView>
  </AwareScrollView>
);

export const ImageBackgroundContainer: FC<
  PropsWithChildren<SafeAreaImageBackgroundViewProps>
> = ({ children, safeTop, safeBottom, imageBackgroundProps, ...props }) => (
  <styled.ContainerWithImageBackground {...imageBackgroundProps}>
    <KeyboardAvoidingView {...props}>
      <SafeAreaView safeBottom={safeBottom} safeTop={safeTop}>
        {children}
      </SafeAreaView>
    </KeyboardAvoidingView>
  </styled.ContainerWithImageBackground>
);
