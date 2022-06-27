import styled from 'styled-components';
import { COLORS } from '../../constants';

const { ERROR } = COLORS;

export const StyledError = styled.span`
  color: ${ERROR};
  font-size: 14px;
  ${({ styles }) => styles}
`;
