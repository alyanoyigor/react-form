import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants';

const { ERROR, WHITE, BLACK, FOCUS } = COLORS;

export const fieldStyles = css`
  width: 100%;
  border-radius: 14px;
  background-color: ${WHITE};
  font-size: 16px;
  padding: 16px;
  border: 2px solid
    ${({ touched, error }) => (touched && error ? ERROR : BLACK)};
  text-align: center;

  &:focus-visible {
    outline: none;
    border-color: ${FOCUS};
  }
`;

export const errorStyles = css`
  position: absolute;
  bottom: 0;
  left: 8px;
`;

export const StyledInputContainer = styled.div`
  padding: 8px 0 20px 0;
  position: relative;
  margin-bottom: 8px;
`;

export const StyledLabel = styled.label`
  position: absolute;
  top: 0px;
  left: 8px;
  font-size: 14px;
  padding: 2px;
  background-color: gray;
  color: ${WHITE};
`;
