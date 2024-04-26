import { FC } from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';

import { PATHS } from '@/constants/paths';
import { useAuth } from '@/context/AuthProvider';

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  const { handleUserLogin } = useAuth();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <DrawerItem
          label='Second screen'
          labelStyle={{
            fontSize: 16,
            fontWeight: '600',
          }}
          onPress={() => navigation.navigate(PATHS.ABOUT_TAB)}
        />
        <DrawerItem
          label='Logout'
          labelStyle={{
            fontSize: 16,
            fontWeight: '600',
          }}
          onPress={handleUserLogin}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
