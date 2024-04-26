import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { PATHS } from '@/constants/paths';
import AboutScreen from '@/screens/AboutScreen';
import AppScreen from '@/screens/AppScreen/AppScreen';

import { useDefaultBackButtonOptions } from '../options';

const RootStack = createStackNavigator();

const MainRouter = () => {
  const defaultOptions = useDefaultBackButtonOptions();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName={PATHS.APP_ROOT}
        screenOptions={{ gestureEnabled: true }}>
        <RootStack.Screen
          component={AppScreen}
          name={PATHS.APP_ROOT}
          options={{ headerShown: false, title: 'AppScreen' }}
        />
        <RootStack.Screen
          component={AboutScreen}
          name={PATHS.ABOUT_SCREEN}
          options={{ ...defaultOptions, title: 'AboutScreen' }}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainRouter;
