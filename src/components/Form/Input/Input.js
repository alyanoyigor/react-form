import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { ErrorMessage } from '../../ErrorMessage';
import scss from './Input.module.scss';

export class Input extends React.Component {
  render() {
    const { title, validator, type, placeholder, autoComplete, name } =
      this.props;

    return (
      <Field name={name} validate={validator}>
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

Input.defaultProps = {
  type: 'text',
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  validator: PropTypes.func,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};
