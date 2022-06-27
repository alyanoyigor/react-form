import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './styled';

export class Title extends React.Component {
  render() {
    const { children } = this.props;
    return <StyledTitle>{children}</StyledTitle>;
  }
}

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
