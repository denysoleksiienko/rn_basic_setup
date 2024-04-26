import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';

import DrawerMenu from '../DrawerMenu';

const Stack = createStackNavigator();

const MainRouter: FC = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        component={DrawerMenu}
        name={PATHS.APP_DRAWER}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainRouter;
