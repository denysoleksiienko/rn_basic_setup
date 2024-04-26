import { StyleProp, ViewStyle } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function ArrowLeftIcon({
  size = 24,
  fill = '#000000',
  style = {},
}: {
  size?: number;
  fill?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const viewBoxHeight = 16;
  const viewBoxWidth = 24;

  const width = size;
  const height = (viewBoxHeight / viewBoxWidth) * size;

  const xml = `
    <svg width=${width} height=${height} viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.96667 16L0 8L7.96667 0L9.4 1.43933L3.86667 6.99582H24V9.00418H3.86667L9.4 14.5607L7.96667 16Z" fill=${fill}/>
    </svg>
  `;
  return (
    <SvgXml fill={fill} height={height} style={style} width={width} xml={xml} />
  );
}
