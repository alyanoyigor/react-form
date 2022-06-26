import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { ErrorMessage } from '../../ErrorMessage';
import { composeValidators } from '../utils';
import scss from './Input.module.scss';

export class Input extends React.Component {
  render() {
    const { title, validators, type, placeholder, autoComplete, name } =
      this.props;

    return (
      <Field
        name={name}
        inputName={name}
        title={title}
        inputType={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        validate={composeValidators(...validators)}
      >
        {({
          input,
          meta,
          title,
          inputType,
          placeholder,
          inputName,
          autoComplete,
        }) => {
          const { touched, error } = meta;
          const { onChange, value, onBlur, onFocus } = input;

          return (
            <div className={scss['input-container']}>
              <label className={scss.label} htmlFor={name}>
                {title}
              </label>
              <input
                className={`${scss.input} ${
                  touched && error ? scss['input-error'] : ''
                }`}
                type={inputType}
                name={inputName}
                id={inputName}
                placeholder={placeholder}
                autoComplete={autoComplete}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                onFocus={onFocus}
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
  validators: PropTypes.arrayOf(PropTypes.func),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};
