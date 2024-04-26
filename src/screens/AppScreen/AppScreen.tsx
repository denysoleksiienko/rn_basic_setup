import { FC } from 'react';

import { ScrollView, StyleSheet, Text, View, ViewStyle } from 'react-native';
import {
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Section from '@/components/Section';
import { ChevronDownIcon } from '@/components/icons';
import theme from '@/theme';

const AppScreen: FC<{ style?: ViewStyle }> = ({ style }) => (
  <ScrollView contentInsetAdjustmentBehavior='automatic' style={style}>
    <Header />
    <View style={{ alignItems: 'center' }}>
      <ChevronDownIcon />
    </View>
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
  highlight: {
    fontFamily: theme.fonts.bold,
  },
});
