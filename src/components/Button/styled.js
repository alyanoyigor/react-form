import styled from 'styled-components';
import { COLORS } from '../../constants';

const { WHITE, BLACK, FOCUS } = COLORS;

export const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${WHITE};
  border: 2px solid ${BLACK};
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
    border-color: ${FOCUS};
    color: ${FOCUS};
  }
`;
