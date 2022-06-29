import styled from 'styled-components';

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${(props) => props.theme.white};
  border: 2px solid ${(props) => props.theme.black};
  width: 100%;
  max-width: 100px;
  height: 45px;
  transition: all 0.2s ease;

  &:disabled {
    $disabled: rgba(0, 0, 0, 0.5);
    color: $disabled;
    border-color: $disabled;
  }

  &:hover:not(:disabled) {
    border-color: ${(props) => props.theme.focus};
    color: ${(props) => props.theme.focus};
  }
`;
