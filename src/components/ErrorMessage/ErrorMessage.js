import React from 'react';
import PropTypes from 'prop-types';
import { StyledError } from './styled';

export class ErrorMessage extends React.Component {
  render() {
    const { children } = this.props;
    return <StyledError>{children}</StyledError>;
  }
}

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
