import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
  color: ${(props) => props.theme.black};

  &.active {
    color: ${(props) => props.theme.focus};
    border-bottom: 2px solid ${(props) => props.theme.focus};
  }
`;
