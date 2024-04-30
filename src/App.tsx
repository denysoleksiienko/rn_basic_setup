import React from 'react';

import { ThemeProvider } from '@emotion/react';
import { ErrorBoundary } from 'react-error-boundary';
import { StatusBar, useColorScheme } from 'react-native';
import { KeyboardProvider } from 'react-native-keyboard-controller';

import ErrorBoundaryFallback from '@/components/ErrorBoundaryFallback';
import { AuthProvider } from '@/context/AuthProvider';
import MainRouter from '@/navigation/MainRouter';
import theme from '@/theme';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ErrorBoundary FallbackComponent={ErrorBoundaryFallback}>
      <ThemeProvider theme={theme}>
        <KeyboardProvider statusBarTranslucent>
          <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          <AuthProvider>
            <MainRouter />
          </AuthProvider>
        </KeyboardProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
