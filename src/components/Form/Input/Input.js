import React from 'react';
import { Field } from 'react-final-form';
import { ErrorMessage } from '../../ErrorMessage';
import scss from './Input.module.scss';

export class Input extends React.Component {
  render() {
    const { title, validator, type, placeholder, autoComplete, name } =
      this.props;

    return (
      <Field name={name} validate={validator} component="input">
        {({ input, meta }) => {
          const { touched, error } = meta;
          return (
            <div className={scss['input-container']}>
              <label className={scss.label} htmlFor={name}>
                {title}
              </label>
              <input
                className={`${scss.input} ${
                  touched && error ? scss['input-error'] : ''
                }`}
                type={type}
                name={name}
                id={name}
                placeholder={placeholder}
                autoComplete={autoComplete}
                {...input}
              />
              {touched && error && (
                <ErrorMessage className={scss.error}>{error}</ErrorMessage>
              )}
            </div>
          );
        }}
      </Field>
    );
  }
}
