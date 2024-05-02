import { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';
import { SignUpScreen, SignInScreen } from '@/screens';

import { PublicStackParamList } from '../navigationParams';

const Stack = createStackNavigator<PublicStackParamList>();

const PublicNavigation: FC = () => (
  <Stack.Navigator initialRouteName={PATHS.SIGN_IN}>
    <Stack.Screen
      component={SignUpScreen}
      name={PATHS.SIGN_UP}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={SignInScreen}
      name={PATHS.SIGN_IN}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default PublicNavigation;
