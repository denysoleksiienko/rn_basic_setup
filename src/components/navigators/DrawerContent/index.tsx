import { FC } from 'react';

import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native';

import { PATHS } from '@/constants/paths';

const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const { navigation } = props;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ paddingTop: 0 }}
      >
        <DrawerItem
          label='Root'
          labelStyle={{
            fontSize: 16,
            fontWeight: '600',
          }}
          onPress={() => navigation.navigate(PATHS.ABOUT_TAB)}
        />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
