import { FC, useEffect } from 'react';

import { FallbackProps } from 'react-error-boundary';
import { Button, SafeAreaView, View } from 'react-native';

import Typo from '../ui/Typo';

const ErrorBoundaryFallback: FC<FallbackProps> = ({
  error,
  resetErrorBoundary,
}) => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(error);
  }, []);

  return (
    <SafeAreaView style={{ flexGrow: 1 }}>
      <View style={{ paddingHorizontal: 16 }}>
        <Typo style={{ marginVertical: 16 }}>Something went wrong:</Typo>
        <Typo color='red' style={{ marginVertical: 16 }}>
          {error.message}
        </Typo>
        <Typo style={{ marginVertical: 16 }}>
          An error occured. Please restart your application
        </Typo>
        <Button onPress={resetErrorBoundary} title='Restart' />
      </View>
    </SafeAreaView>
  );
};

export default ErrorBoundaryFallback;
