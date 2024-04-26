import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PATHS } from '@/constants/paths';
import AboutScreen from '@/screens/AboutScreen';
import AppScreen from '@/screens/AppScreen/AppScreen';

const Tabs = createBottomTabNavigator();

const TabsNavigator: FC = () => (
  <Tabs.Navigator initialRouteName={PATHS.DASHBOARD_TAB}>
    <Tabs.Screen component={AppScreen} name={PATHS.DASHBOARD_TAB} />
    <Tabs.Screen component={AboutScreen} name={PATHS.ABOUT_TAB} />
  </Tabs.Navigator>
);

export default TabsNavigator;
