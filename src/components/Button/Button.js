import React from 'react';
import PropTypes from 'prop-types';
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
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};
