import React from 'react';
import { StyledHeader, StyledNav, StyledNavLink } from './styled';

export class Header extends React.Component {
  render() {
    return (
      <StyledHeader>
        <StyledNav>
          <StyledNavLink to="/form">Form</StyledNavLink>
          <StyledNavLink to="/final-form">Final Form</StyledNavLink>
        </StyledNav>
      </StyledHeader>
    );
  }
}
