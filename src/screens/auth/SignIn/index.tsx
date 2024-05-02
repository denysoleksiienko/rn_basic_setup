import { FC } from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';

import PageHeading from '@/components/ui/PageHeading';
import { KeyboardAvoidingViewContainer } from '@/components/ui/containers';
import { PATHS } from '@/constants/paths';
import { useAuth } from '@/context/AuthProvider';
import { PublicStackParamList } from '@/navigation/navigationParams';

type Props = StackScreenProps<PublicStackParamList>;

const SignIn: FC<Props> = ({ navigation }) => {
  const { handleUserLogin } = useAuth();

  return (
    <KeyboardAvoidingViewContainer safeTop>
      <PageHeading textBold='Sign' textItalic='In' />
      <Button
        onPress={() => navigation.navigate(PATHS.SIGN_UP)}
        title='Register'
      />
      <Button onPress={handleUserLogin} title='Enter' />
    </KeyboardAvoidingViewContainer>
  );
};

export default SignIn;
