import React, { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';

import { SafeAreaViewContainer } from '@/components/ui/containers';
import { PATHS } from '@/constants/paths';
import {
  MainStackParamList,
  TabsStackParamList,
} from '@/navigation/navigationParams';

type Props = StackScreenProps<TabsStackParamList>;
type MainStackParamProp = StackNavigationProp<MainStackParamList>;

const ChatTabScreen: FC<Props> = () => {
  const { navigate } = useNavigation<MainStackParamProp>();

  return (
    <SafeAreaViewContainer safeBottom={false}>
      <Button onPress={() => navigate(PATHS.CHAT)} title='Got to chat' />
    </SafeAreaViewContainer>
  );
};

export default ChatTabScreen;
