import { PATHS } from '@/constants/paths';

export type PublicStackParamList = {
  [PATHS.SIGN_IN]: undefined;
  [PATHS.SIGN_UP]: undefined;
};

export type TabsStackParamList = {
  [PATHS.DASHBOARD_TAB]: undefined;
  [PATHS.ABOUT_TAB]: undefined;
  [PATHS.CHAT_TAB]: undefined;
};

export type MainStackParamList = {
  [PATHS.PUBLICK_NAVIGATION]: PublicStackParamList;
  [PATHS.APP_DRAWER]: TabsStackParamList;
  [PATHS.CHAT]: undefined;
};
