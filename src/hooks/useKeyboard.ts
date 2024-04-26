import { useEffect, useState } from 'react';

import { Keyboard, Platform } from 'react-native';

export const useKeyboard = () => {
  const [height, setHeight] = useState(0);
  const [isVisible, setIsVisible] = useState(Keyboard.isVisible());

  useEffect(() => {
    const subscriptions = [
      Platform.OS === 'ios'
        ? Keyboard.addListener('keyboardWillShow', (e) => {
            setHeight(e.endCoordinates.height);
            setIsVisible(true);
          })
        : Keyboard.addListener('keyboardDidShow', (e) => {
            setHeight(e.endCoordinates.height);
            setIsVisible(true);
          }),
      Platform.OS === 'ios'
        ? Keyboard.addListener('keyboardWillHide', () => setIsVisible(false))
        : Keyboard.addListener('keyboardDidHide', () => setIsVisible(false)),
    ];
    return () => subscriptions.forEach((x) => x.remove());
  }, []);

  return { isVisible, height };
};
