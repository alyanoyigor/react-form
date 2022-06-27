import React from 'react';
import { StyledContainer } from './styled';

export class Container extends React.Component {
  render() {
    const { children } = this.props;

    return <StyledContainer>{children}</StyledContainer>;
  }
}
