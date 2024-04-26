import { FC } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';
import { useAuth } from '@/context/AuthProvider';
import Onbording from '@/screens/Onbording';

import DrawerMenu from '../DrawerMenu';

const Stack = createStackNavigator();

const MainRouter: FC = () => {
  const { isLogged } = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogged ? (
          <Stack.Screen
            component={Onbording}
            name={PATHS.ONBORDING}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            component={DrawerMenu}
            name={PATHS.APP_DRAWER}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
