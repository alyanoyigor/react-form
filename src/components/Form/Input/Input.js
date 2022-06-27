import React from 'react';
import { ErrorMessage } from '../../ErrorMessage';
import {
  errorStyles,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from './styled';

export class Input extends React.Component {
  render() {
    const {
      title,
      type,
      placeholder,
      autoComplete,
      name,
      value,
      handleChange,
      error,
    } = this.props;

    return (
      <StyledInputContainer>
        <StyledLabel htmlFor={name}>{title}</StyledLabel>
        <StyledInput
          type={type}
          error={error}
          name={name}
          id={name}
          value={value}
          onChange={(event) => handleChange(event.target.value, name)}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {error && <ErrorMessage styles={errorStyles}>{error}</ErrorMessage>}
      </StyledInputContainer>
    );
  }
}
