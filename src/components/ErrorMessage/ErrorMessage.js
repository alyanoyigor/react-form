import React from 'react';
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
