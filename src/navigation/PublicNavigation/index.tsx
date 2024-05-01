import { FC } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';
import SignIn from '@/screens/auth/SignIn';
import SignUp from '@/screens/auth/SignUp';

import { PublicStackParamList } from '../navigationParams';

const Stack = createStackNavigator<PublicStackParamList>();

const PublicNavigation: FC = () => (
  <Stack.Navigator initialRouteName={PATHS.SIGN_IN}>
    <Stack.Screen
      component={SignUp}
      name={PATHS.SIGN_UP}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      component={SignIn}
      name={PATHS.SIGN_IN}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default PublicNavigation;
