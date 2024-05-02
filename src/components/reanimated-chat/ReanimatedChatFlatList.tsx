import { FC } from 'react';

import { FlatList, View } from 'react-native';
import { useReanimatedKeyboardAnimation } from 'react-native-keyboard-controller';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

import { useKeyboard } from '@/hooks/useKeyboard';
import { moderateScale } from '@/utils';

import Input from '../ui/Input';

import ReanimatedChatItem from './ReanimatedChatItem';
import * as styled from './styled';

type MessageProps = {
  text: string;
  sender?: boolean;
};

const history = [
  { text: 'Hmmm🤔' },
  { text: 'It looks like it still will be choppy...' },
  { text: "But I don't know what should I try next" },
  { text: 'Reanimated?', sender: true },
  { text: 'A little bit disappointed 😔' },
  { text: '🤯' },
  { text: 'Try to check it. I hope it helps you...', sender: true },
  { text: 'It really pushes you to think twice on how to design it first' },
  {
    text: 'Looks promising!😎 I was always looking for a solution that would allow us to run animations on native thread and provide at least stable 60 FPS',
  },
  { text: 'You have to check it!!!', sender: true },
  { text: "Ha-ha! I'm definitely going to check it!" },
  { text: 'Hello! How are you?' },
  { text: "Hi! I'm good. How are you?", sender: true },
  {
    text: "I'm fine, thank you! Have you seen new keyboard animation library?",
  },
  { text: 'No! Let me check.', sender: true },
  {
    text: "Wow! I've been looking for it for a while. It's awesome!",
    sender: true,
  },
];

const ReanimatedChatFlatList: FC<{ messages?: MessageProps[] }> = ({
  messages = history,
}) => {
  const { height } = useReanimatedKeyboardAnimation();
  const { isVisible } = useKeyboard();

  const fakeView = useAnimatedStyle(
    () => ({
      height: isVisible
        ? Math.abs(height.value - 12)
        : Math.abs(height.value + 40),
    }),
    [isVisible]
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={[...messages].reverse() ?? []}
        initialNumToRender={15}
        inverted
        renderItem={ReanimatedChatItem}
      />
      <styled.Footer>
        <Input
          containerStyle={{
            paddingHorizontal: moderateScale(10),
          }}
          variant='outlined-with-button'
        />
        <Animated.View style={fakeView} />
      </styled.Footer>
    </View>
  );
};

export default ReanimatedChatFlatList;
