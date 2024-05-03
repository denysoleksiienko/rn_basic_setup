import styled from '@emotion/native';

export const FormContainer = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const TouchableButton = styled.TouchableOpacity<{ disabled: boolean }>`
  margin-top: 12px;
  height: 45px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: ${({ disabled, theme }) =>
    disabled ? theme.colors.darkGray : theme.colors.blue};
`;
