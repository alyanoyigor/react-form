import React from 'react';
import scss from './ErrorMessage.module.scss';

export class ErrorMessage extends React.Component {
  render() {
    const { error, className } = this.props;
    return error ? (
      <span className={`${scss.error} ${className}`}>{error}</span>
    ) : null;
  }
}
