import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styled';

export class Button extends React.Component {
  render() {
    const { type, onClick, disabled, children } = this.props;
    return (
      <StyledButton type={type} disabled={disabled} onClick={onClick}>
        {children}
      </StyledButton>
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
