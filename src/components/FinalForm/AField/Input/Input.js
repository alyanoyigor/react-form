import React from 'react';
import { ErrorMessage } from '../../../ErrorMessage';
import scss from '../AField.module.scss';

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
        <input
          className={`${scss.field} ${
            touched && error ? scss['field-error'] : ''
          }`}
          name={customName}
          id={id}
          placeholder={placeholder}
          type={customType}
          autoComplete={autoComplete}
          {...input}
        />
        {touched && error && (
          <ErrorMessage className={scss.error}>{error}</ErrorMessage>
        )}
      </>
    );
  }
}
