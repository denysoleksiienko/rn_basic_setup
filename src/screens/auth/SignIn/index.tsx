import { FC } from 'react';

import { StackScreenProps } from '@react-navigation/stack';
import { Button } from 'react-native';

import PageHeading from '@/components/ui/PageHeading';
import { KeyboardAvoidingViewContainer } from '@/components/ui/containers';
import { PATHS } from '@/constants/paths';
import { PublicStackParamList } from '@/navigation/navigationParams';

type Props = StackScreenProps<PublicStackParamList>;

const SignIn: FC<Props> = ({ navigation }) => (
  <KeyboardAvoidingViewContainer safeTop>
    <PageHeading textBold='Sign' textItalic='In' />
    <Button
      onPress={() => navigation.navigate(PATHS.SIGN_UP)}
      title='Register'
    />
  </KeyboardAvoidingViewContainer>
);

export default SignIn;
