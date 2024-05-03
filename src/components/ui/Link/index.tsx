import { FC, PropsWithChildren } from 'react';

import { TextStyle, TouchableOpacity } from 'react-native';

import * as styled from './styled';

interface ITextLink {
  onPress: () => void;
  color?: string;
  style?: TextStyle;
  underline?: boolean;
}

const TextLink: FC<PropsWithChildren<ITextLink>> = ({
  onPress,
  children,
  style,
  color,
  underline = true,
}) => (
  <TouchableOpacity onPress={onPress}>
    <styled.Text color={color} style={style} underline={underline}>
      {children}
    </styled.Text>
  </TouchableOpacity>
);

export default TextLink;
