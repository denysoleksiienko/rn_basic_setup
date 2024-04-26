import React, { FC, PropsWithChildren } from 'react';

import { useColorScheme, Text, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import theme from '@/theme';

import * as styled from './styled';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

const Section: FC<SectionProps> = ({ children, title }): React.JSX.Element => {
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
};

export default Section;

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
});
