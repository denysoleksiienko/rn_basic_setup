import { FC } from 'react';

import { ViewStyle, ScrollView, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';

import Section from '@/components/Section';
import { ChevronDownIcon } from '@/components/icons';

const AboutScreen: FC<{ style?: ViewStyle }> = ({ style }) => (
  <ScrollView contentInsetAdjustmentBehavior='automatic' style={style}>
    <Header />
    <View style={{ alignItems: 'center' }}>
      <ChevronDownIcon />
    </View>
    <View>
      <Section title='About More'>About:</Section>
    </View>
  </ScrollView>
);

export default AboutScreen;
