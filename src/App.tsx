import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';

import AppScreen from '@/screens/AppScreen';
import theme from '@/theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppScreen />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
