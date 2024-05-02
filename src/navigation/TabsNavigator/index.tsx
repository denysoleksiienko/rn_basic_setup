import React, { FC } from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { PATHS } from '@/constants/paths';
import { ChatTabScreen, AppTabScreen, AboutTabScreen } from '@/screens';

import { TabsStackParamList } from '../navigationParams';

const Tabs = createBottomTabNavigator<TabsStackParamList>();

const TabsNavigator: FC = () => (
  <Tabs.Navigator initialRouteName={PATHS.DASHBOARD_TAB}>
    <Tabs.Screen component={AppTabScreen} name={PATHS.DASHBOARD_TAB} />
    <Tabs.Screen component={AboutTabScreen} name={PATHS.ABOUT_TAB} />
    <Tabs.Screen component={ChatTabScreen} name={PATHS.CHAT_TAB} />
  </Tabs.Navigator>
);

export default TabsNavigator;
