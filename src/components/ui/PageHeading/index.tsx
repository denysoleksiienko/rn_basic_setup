import { FC } from 'react';

import { ViewStyle, TextStyle } from 'react-native';

import * as styled from './styled';

interface IPageHeading {
  textBold: string;
  textItalic: string;
  fontSize?: number;
  lineHeigh?: number;
  marginBottom?: number;
  boldStyle?: TextStyle;
  italicStyle?: TextStyle;
  containerStyle?: ViewStyle;
}

const PageHeading: FC<IPageHeading> = ({
  textBold,
  textItalic,
  fontSize,
  lineHeigh,
  marginBottom,
  boldStyle,
  italicStyle,
  containerStyle,
}) => (
  <styled.Container marginBottom={marginBottom} style={containerStyle}>
    <styled.TextContainer>
      <styled.Bold fontSize={fontSize} lineHeigh={lineHeigh} style={boldStyle}>
        {textBold}
      </styled.Bold>
      <styled.Italic
        fontSize={fontSize}
        lineHeigh={lineHeigh}
        style={italicStyle}
      >
        {textItalic}
      </styled.Italic>
    </styled.TextContainer>
  </styled.Container>
);

export default PageHeading;
