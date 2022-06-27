import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import { composeValidators } from '../utils';
import { Select } from './Select';
import { Input } from './Input';
import scss from './AField.module.scss';

export class AField extends React.Component {
  render() {
    const {
      title,
      options,
      id,
      validators,
      type,
      placeholder,
      autoComplete,
      name,
    } = this.props;

    return (
      <div className={scss['input-container']}>
        <label className={scss.label} htmlFor={id}>
          {title}
        </label>
        <Field
          customName={name}
          name={name}
          id={id}
          validate={composeValidators(...validators)}
          placeholder={placeholder}
          options={options}
          autoComplete={autoComplete}
          customType={type}
          component={options ? Select : Input}
        />
      </div>
    );
  }
}

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
