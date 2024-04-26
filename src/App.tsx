import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { StatusBar, useColorScheme } from 'react-native';

import MainRouter from '@/navigation/MainRouter';
import theme from '@/theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <MainRouter />
    </ThemeProvider>
  );
}

export default App;
