import styled, { css } from 'styled-components';
import { COLORS } from '../../../constants';

const { ERROR, BLACK, WHITE, FOCUS } = COLORS;

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

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 14px;
  font-size: 16px;
  padding: 8px;
  line-height: 36px;
  border: 2px solid ${({ error }) => (error ? ERROR : BLACK)};
  text-align: center;

  &:focus-visible {
    outline: none;
    border-color: ${FOCUS};
  }
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
