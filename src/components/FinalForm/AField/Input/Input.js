import React from 'react';
import { ErrorMessage } from '../../../ErrorMessage';
import { inputErrorStyles, StyledInput } from './styled';

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
        {touched && error && (
          <ErrorMessage styles={inputErrorStyles}>{error}</ErrorMessage>
        )}
      </>
    );
  }
}
