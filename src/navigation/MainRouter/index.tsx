import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';
import { useAuth } from '@/context/AuthProvider';
import { Chat } from '@/screens';

import DrawerMenu from '../DrawerMenu';
import PublicNavigation from '../PublicNavigation';
import { MainStackParamList } from '../navigationParams';

const Stack = createStackNavigator<MainStackParamList>();

const MainRouter: FC = () => {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ gestureEnabled: true }}>
        {!isLogged ? (
          <Stack.Screen
            component={PublicNavigation}
            name={PATHS.PUBLICK_NAVIGATION}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              component={DrawerMenu}
              name={PATHS.APP_DRAWER}
              options={{ headerShown: false }}
            />
            <Stack.Screen component={Chat} name={PATHS.CHAT} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
