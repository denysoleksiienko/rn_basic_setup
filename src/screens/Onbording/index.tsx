import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { Button, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useAuth } from '@/context/AuthProvider';

const Onbording: FC = () => {
  const { handleUserLogin } = useAuth();

  const theme = useTheme();

  return (
    <SafeAreaView style={{ backgroundColor: theme.colors.lightGreen, flex: 1 }}>
      <TextInput value='test_user@gmail.com' />
      <Button onPress={handleUserLogin} title='Login' />
    </SafeAreaView>
  );
};

export default Onbording;
