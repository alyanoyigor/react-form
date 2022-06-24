import React from 'react';
import PropTypes from 'prop-types';
import scss from './ErrorMessage.module.scss';

export class ErrorMessage extends React.Component {
  render() {
    const { children, className } = this.props;
    return <span className={`${scss.error} ${className}`}>{children}</span>;
  }
}

ErrorMessage.defaultProps = {
  className: '',
};

ErrorMessage.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
