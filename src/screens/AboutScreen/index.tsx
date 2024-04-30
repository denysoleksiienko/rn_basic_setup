import { FC } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from 'react-native';

import Input from '@/components/ui/Input';
import { KeyboardAvoidingViewContainer } from '@/components/ui/containers';

const AboutScreen: FC = () => (
  <KeyboardAvoidingViewContainer backgroundColor='lightBlue'>
    <View style={styles.inner}>
      <Text style={styles.heading}>Header</Text>
      <View>
        <Input
          placeholder='Username'
          style={{ marginBottom: 16 }}
          variant='outlined'
        />
        <Input placeholder='Password' secureTextEntry variant='outlined' />
      </View>
      <TouchableOpacity onPress={Keyboard.dismiss} style={styles.button}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
    </View>
  </KeyboardAvoidingViewContainer>
);

export default AboutScreen;

const styles = StyleSheet.create({
  header: {
    color: 'black',
    marginRight: 12,
  },
  heading: {
    color: 'black',
    fontSize: 36,
    marginBottom: 48,
    fontWeight: '600',
  },
  inner: {
    padding: 24,
    flex: 1,
    justifyContent: 'space-between',
  },
  button: {
    marginTop: 12,
    height: 45,
    borderRadius: 10,
    backgroundColor: 'rgb(40, 64, 147)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
    color: 'white',
  },
});
