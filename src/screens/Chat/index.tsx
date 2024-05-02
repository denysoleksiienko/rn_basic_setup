import { FC } from 'react';

import ReanimatedChatFlatList from '@/components/reanimated-chat/ReanimatedChatFlatList';
import { SafeAreaViewContainer } from '@/components/ui/containers';

const Chat: FC = () => (
  <SafeAreaViewContainer safeBottom={false}>
    <ReanimatedChatFlatList />
  </SafeAreaViewContainer>
);

export default Chat;
