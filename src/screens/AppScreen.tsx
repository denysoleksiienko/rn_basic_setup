import React, { FC, PropsWithChildren } from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ViewStyle,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import theme from '@/theme';

import * as styled from './styled';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <styled.SectionContainer>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </styled.SectionContainer>
  );
}

const AppScreen: FC<{ style?: ViewStyle }> = ({ style }) => (
  <ScrollView contentInsetAdjustmentBehavior='automatic' style={style}>
    <Header />
    <styled.CenteredContent>
      <ChevronDownIcon />
    </styled.CenteredContent>
    <View>
      <Section title='Step One'>
        Edit <Text style={styles.highlight}>App.tsx</Text> to change this screen
        and then come back to see your edits.
      </Section>
      <Section title='See Your Changes'>
        <ReloadInstructions />
      </Section>
      <Section title='Debug'>
        <DebugInstructions />
      </Section>
      <Section title='Learn More'>
        Read the docs to discover what to do next:
      </Section>
      <LearnMoreLinks />
    </View>
  </ScrollView>
);

export default AppScreen;

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 24,
    fontFamily: theme.fonts.bold,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontFamily: theme.fonts.base,
  },
  highlight: {
    fontFamily: theme.fonts.bold,
  },
});
