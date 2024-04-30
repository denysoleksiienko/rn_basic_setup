import React, { FC, useId } from 'react';

import { Button, View } from 'react-native';

import Input from '@/components/ui/Input';
import { KeyboardAwareScrollViewContainer } from '@/components/ui/containers';

const AppScreen: FC = () => {
  const uid = useId();

  return (
    <KeyboardAwareScrollViewContainer>
      <View>
        {new Array(10).fill(0).map((_, i) => (
          <Input
            // eslint-disable-next-line react/no-array-index-key
            key={`${uid}-${i}`}
            keyboardType={i % 2 === 0 ? 'numeric' : 'default'}
            label='App'
            placeholder={`TextInput#${i}`}
            variant='outlined'
          />
        ))}
      </View>
      <Button title='33' />
    </KeyboardAwareScrollViewContainer>
  );
};

export default AppScreen;
