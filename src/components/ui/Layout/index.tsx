import styled from '@emotion/native';

const LayoutComponent = styled.View<{
  centered?: boolean;
  fill?: boolean;
  mb?: number;
  mt?: number;
}>`
  ${(p) => p.fill && 'flex: 1'}
  ${(p) =>
    p.centered &&
    `
    align-items: center;
    justify-content: center;
  `}
  margin-bottom: ${(p) => (p.mb ? `${p.mb}px` : '0px')};
  margin-top: ${(p) => (p.mt ? `${p.mt}px` : '0px')};
`;

export const Row = styled(LayoutComponent)`
  padding-left: 16px;
  padding-right: 16px;
`;

export const Column = styled(LayoutComponent)`
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const Content = styled(LayoutComponent)`
  padding: 16px;
  display: flex;
`;
