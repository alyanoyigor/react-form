import React from 'react';
import PropTypes from 'prop-types';
import { Field, useField } from 'react-final-form';
import { ErrorMessage } from '../../ErrorMessage';
import { composeValidators } from '../utils';
import scss from './AField.module.scss';

export const AField = (props) => {
  const {
    title,
    options,
    id,
    validators,
    type,
    placeholder,
    autoComplete,
    name,
  } = props;

  const { meta } = useField(name);
  const { touched, error } = meta;
  const component = options ? 'select' : 'input';

  return (
    <div className={scss['input-container']}>
      <label className={scss.label} htmlFor={id}>
        {title}
      </label>
      <Field
        name={name}
        className={`${scss.field} ${
          touched && error ? scss['field-error'] : ''
        }`}
        id={id}
        validate={composeValidators(...validators)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        type={type}
        component={component}
      >
        {options &&
          options.map(({ value, title }) => (
            <option key={value} value={value}>
              {title}
            </option>
          ))}
      </Field>
      {touched && error && (
        <ErrorMessage className={scss.error}>{error}</ErrorMessage>
      )}
    </div>
  );
};

AField.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
  validators: PropTypes.arrayOf(PropTypes.func),
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
};
