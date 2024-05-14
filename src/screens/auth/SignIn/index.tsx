import { FC } from 'react';

import { useTheme } from '@emotion/react';
import { StackScreenProps } from '@react-navigation/stack';
import { useForm, Controller } from 'react-hook-form';
import { View } from 'react-native';
import Config from 'react-native-config';

import Input from '@/components/ui/Input';
import { Column } from '@/components/ui/Layout';
import TextLink from '@/components/ui/Link';
import PageHeading from '@/components/ui/PageHeading';
import Typo from '@/components/ui/Typo';
import { KeyboardAvoidingViewContainer } from '@/components/ui/containers';
import { PATHS } from '@/constants/paths';
import { useAuth } from '@/context/AuthProvider';
import { PublicStackParamList } from '@/navigation/navigationParams';

import * as styled from '../styled';

type Props = StackScreenProps<PublicStackParamList>;

type UserSignInForm = {
  email: string;
  password: string;
};

const SignIn: FC<Props> = ({ navigation }) => {
  const { handleUserLogin } = useAuth();
  const theme = useTheme();

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<UserSignInForm>();

  const onSubmit = handleSubmit(({ email, password }) => {
    if (email && password) {
      handleUserLogin();
    }
  });

  return (
    <KeyboardAvoidingViewContainer safeTop>
      <PageHeading
        containerStyle={{ marginBottom: 16 }}
        textBold='Sign'
        textItalic='In'
      />
      <styled.FormContainer>
        <View>
          <Controller
            control={control}
            name='email'
            render={({ field: { onChange, value } }) => (
              <Input
                keyboardType='email-address'
                onChangeText={onChange}
                placeholder='Username'
                style={{ marginBottom: 16 }}
                value={value}
                variant='outlined'
              />
            )}
            rules={{ required: 'Email is required' }}
          />
          <Controller
            control={control}
            name='password'
            render={({ field: { onChange, value } }) => (
              <Input
                onChangeText={onChange}
                placeholder='Password'
                secureTextEntry
                style={{ marginBottom: 16 }}
                value={value}
                variant='outlined'
              />
            )}
            rules={{ required: 'Password is required' }}
          />
          <TextLink onPress={() => navigation.navigate(PATHS.SIGN_UP)}>
            REGISTER
          </TextLink>

          <Typo color={theme.colors.purple} textAlign='center'>
            {Config.ENV}
          </Typo>
        </View>
        <Column>
          <styled.TouchableButton disabled={!isValid} onPress={onSubmit}>
            <Typo color={theme.colors.white}>
              Submit
            </Typo>
          </styled.TouchableButton>
        </Column>
      </styled.FormContainer>
    </KeyboardAvoidingViewContainer>
  );
};

export default SignIn;
