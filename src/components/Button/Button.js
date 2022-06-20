import React from 'react';
import scss from './Button.module.scss';

export class Button extends React.Component {
  render() {
    const { type, onClick, disabled, children } = this.props;
    return (
      <button
        type={type}
        disabled={disabled}
        className={scss.button}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

Button.defaultProps = {
  type: 'button',
};
