import { ArrowLeft } from '@/components/icons';

export const useDefaultBackButtonOptions = () => ({
  headerBackTitle: ' ',
  headerBackImage: () => <ArrowLeft style={{ marginLeft: 16 }} />,
  headerTitleStyle: {},
  headerRightContainerStyle: { marginRight: 16 },
  headerShadowVisible: false,
  headerBackTitleVisible: false,
});
