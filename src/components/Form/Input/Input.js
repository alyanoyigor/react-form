import React from 'react';
import { ErrorMessage } from '../../ErrorMessage';
import scss from './Input.module.scss';

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
      validateInput,
      error,
    } = this.props;

    return (
      <div className={scss['input-container']}>
        <label className={scss.label} htmlFor={name}>
          {title}
        </label>
        <input
          className={`${scss.input} ${error ? scss.input_error : ''}`}
          type={type}
          name={name}
          id={name}
          value={value}
          onChange={(event) => {
            const value = event.target.value;
            handleChange(value, name);
            validateInput(value, name);
          }}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        <ErrorMessage className={scss.error} error={error} />
      </div>
    );
  }
}
