import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '@/components/navigators/DrawerContent';
import { PATHS } from '@/constants/paths';

import TabsNavigator from '../TabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerMenu: FC = () => {
  const theme = useTheme();

  // Check is user not autorize
  // useEffect(() => {
  //   if (!auth) {
  //     navigation.dispatch(
  //       CommonActions.reset({
  //         index: 0,
  //         routes: [{ name: PATHS.PUBLIC }],
  //       }),
  //     );
  //   }
  // }, [auth]);

  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName={PATHS.APP_DRAWER}
      screenOptions={() => ({
        headerShown: true,
        headerShadowVisible: false, // draw a line
        headerStyle: {
          backgroundColor: theme.colors.white,
        },
        headerTitle: '',
        drawerActiveBackgroundColor: theme.colors.green,
        drawerActiveTintColor: theme.colors.white,
        drawerInactiveTintColor: theme.colors.black,
        drawerLabelStyle: {
          fontFamily: theme.fonts.base,
          fontSize: 16,
        },
      })}
    >
      <Drawer.Screen component={TabsNavigator} name={PATHS.TAB_NAVIGATOR} />
    </Drawer.Navigator>
  );
};

export default DrawerMenu;
