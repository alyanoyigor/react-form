import React from 'react';
import { StyledErrorMessage } from '../styled';
import { StyledInput } from './styled';

export class Input extends React.Component {
  render() {
    const {
      customName,
      id,
      input,
      meta,
      customType,
      autoComplete,
      placeholder,
    } = this.props;
    const { touched, error } = meta;

    return (
      <>
        <StyledInput
          name={customName}
          error={error}
          touched={touched}
          id={id}
          placeholder={placeholder}
          type={customType}
          autoComplete={autoComplete}
          {...input}
        />
        {touched && error && <StyledErrorMessage>{error}</StyledErrorMessage>}
      </>
    );
  }
}
