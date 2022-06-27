import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants';

const { BLACK, FOCUS } = COLORS;

export const StyledHeader = styled.header`
  padding: 16px;
  font-size: 18px;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${BLACK};

  &.active {
    color: ${FOCUS};
    border-bottom: 2px solid ${FOCUS};
  }
`;
