import styled from '@emotion/native';

import Typo from '../Typo';

export const Text = styled(Typo)<{ color?: string; underline?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.base};
  color: ${({ color, theme }) => color || `${theme.colors.darkGray}`};
  text-decoration: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-decoration-color: ${({ color, theme }) =>
    color || `${theme.colors.darkGray}`};
`;
