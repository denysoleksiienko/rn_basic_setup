import { useEffect, useRef } from 'react';

import { useIsFocused } from '@react-navigation/native';
import { Animated } from 'react-native';

export const useScroll = () => {
  const scroll = useRef(new Animated.Value(0)).current;
  const isFocused = useIsFocused();

  const onScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scroll } } }],
    {
      useNativeDriver: false,
    },
  );

  useEffect(() => {
    if (!isFocused) {
      scroll.setValue(0);
    }
  }, [isFocused]);

  return {
    scroll,
    onScroll,
  };
};
