import React from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ChevronDownIcon({
  size = 21,
  fill = '#000000',
  style,
}: {
  size?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const viewBoxHeight = 12;
  const viewBoxWidth = 21;

  const width = size;
  const height = (viewBoxHeight / viewBoxWidth) * size;

  const xml = `
    <svg width={width} height={height} viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 1.8169L19.1266 0L10.5 8.3662L1.87344 0L0 1.8169L10.5 12L21 1.8169Z" />
    </svg>
  `;
  return (
    <SvgXml fill={fill} height={height} style={style} width={width} xml={xml} />
  );
}
